'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import ViewModeTabs from '../components/ViewModeTabs';
import RouteTabs from '../components/RouteTabs';
import CharDetailTable from '../components/CharDetailTable';
import FameMatrixTable from '../components/FameMatrixTable';
import SupportMatrixTable from '../components/SupportMatrixTable';
import CharacterSkillTable from '../components/CharacterSkillTable';
import ClassTable from '../components/ClassTable';
import EditModal from '../components/EditModal';
import SkillEditModal from '../components/SkillEditModal';
import { DEFAULT_CHARACTERS } from '../data/characters';
import { INITIAL_SKILL_DATA } from '../data/skills';

const STORAGE_KEY_CHARS = 'fe_next_chars_v1';
const STORAGE_KEY_JOINED = 'fe_next_joined_v1';
const STORAGE_KEY_SKILLS = 'fe_skills_data_v3';

export default function Home() {
  // SSR時のハイドレーション不整合を防ぐフラグ
  const [isMounted, setIsMounted] = useState(false);

  // 1. キャラクターデータ
  const [characters, setCharacters] = useState(DEFAULT_CHARACTERS);

  // 2. 加入トグル状態
  const [routeJoinedStatus, setRouteJoinedStatus] = useState({});

  // 3. スキルデータ
  const [skillData, setSkillData] = useState(INITIAL_SKILL_DATA);

  // 4. UI表示状態
  const [viewMode, setViewMode] = useState('char'); // 'char' | 'fame' | 'support' | 'skills'
  const [currentRoute, setCurrentRoute] = useState('all'); // 'all' | 'kai' | 'dietrich' | 'theodora' | 'leda'
  const [searchQuery, setSearchQuery] = useState('');
  const [unjoinedOnly, setUnjoinedOnly] = useState(false);

  // 5. ソート状態
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState(null); // 'asc' | 'desc' | null

  // 6. モーダル状態
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingChar, setEditingChar] = useState(null);

  // 7. スキル編集モーダル状態
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [editingSkillChar, setEditingSkillChar] = useState(null);

  // マウント後にlocalStorageから復元
  useEffect(() => {
    setIsMounted(true);
    try {
      const savedChars = localStorage.getItem(STORAGE_KEY_CHARS) 
                      || localStorage.getItem('fe_react_chars_v1') 
                      || localStorage.getItem('fe_chars_data_v7');
      if (savedChars) {
        const parsed = JSON.parse(savedChars);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // 主人公・救世主（kai, dietrich, theodora, leda, savior）が未登録なら自動補完
          const existingIds = new Set(parsed.map(c => c.id));
          const missingHeroes = DEFAULT_CHARACTERS.filter(c => ['kai', 'dietrich', 'theodora', 'leda', 'savior'].includes(c.id) && !existingIds.has(c.id));
          if (missingHeroes.length > 0) {
            setCharacters([...missingHeroes, ...parsed]);
          } else {
            setCharacters(parsed);
          }
        }
      }

      const savedJoined = localStorage.getItem(STORAGE_KEY_JOINED)
                       || localStorage.getItem('fe_react_joined_v1')
                       || localStorage.getItem('fe_route_joined_status_v7');
      if (savedJoined) {
        setRouteJoinedStatus(JSON.parse(savedJoined));
      }

      const savedSkills = localStorage.getItem(STORAGE_KEY_SKILLS);
      if (savedSkills) {
        const parsedSkills = JSON.parse(savedSkills);
        setSkillData({ ...INITIAL_SKILL_DATA, ...parsedSkills });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // 保存同期
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(STORAGE_KEY_CHARS, JSON.stringify(characters));
    }
  }, [characters, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(STORAGE_KEY_JOINED, JSON.stringify(routeJoinedStatus));
    }
  }, [routeJoinedStatus, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(STORAGE_KEY_SKILLS, JSON.stringify(skillData));
    }
  }, [skillData, isMounted]);

  // 加入トグル
  const handleToggleJoined = (charId, routeKey, event) => {
    if (event) event.stopPropagation();
    const key = `${charId}_${routeKey}`;
    setRouteJoinedStatus((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // ソートハンドラ
  const handleSort = (key) => {
    if (sortKey === key) {
      if (sortOrder === 'asc') setSortOrder('desc');
      else if (sortOrder === 'desc') setSortOrder(null);
      else setSortOrder('asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  // ソート用ヘルパー
  const parseSortValue = (char, key) => {
    if (key === 'name') return char.name || '';
    const [route, prop] = key.split('.');
    const d = char[route] || {};
    const val = (d[prop] || '').trim();

    if (prop === 'support') {
      if (val === '初期') return 0;
      const m = val.match(/(\d+)/);
      if (m) return parseInt(m[1], 10);
      return 999;
    }
    if (prop === 'fame') {
      const m = val.match(/(\d+)/);
      if (m) return parseInt(m[1], 10);
      return 999;
    }
    if (prop === 'limit') {
      if (val === '自動') return 0;
      const m = val.match(/(\d+)章/);
      if (m) return parseInt(m[1], 10);
      if (val.includes('3部')) return 300;
      return 999;
    }
    return val;
  };

  // フィルタリング ＆ ソート済みキャラクターリスト
  const filteredCharacters = useMemo(() => {
    let list = [...characters];

    // 1. 未加入フィルター
    if (unjoinedOnly) {
      list = list.filter((char) => {
        if (currentRoute === 'all') {
          const allJoined = ['kai', 'dietrich', 'theodora', 'leda'].every(
            (r) => !!routeJoinedStatus[`${char.id}_${r}`]
          );
          return !allJoined;
        } else {
          return !routeJoinedStatus[`${char.id}_${currentRoute}`];
        }
      });
    }

    // 2. 検索フィルター
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter((char) => {
        const text = [
          char.name,
          char.kai?.cond,
          char.dietrich?.cond,
          char.theodora?.cond,
          char.leda?.cond
        ]
          .join(' ')
          .toLowerCase();
        return text.includes(q);
      });
    }

    // 3. ソート適用
    if (sortKey && sortOrder) {
      list.sort((a, b) => {
        const valA = parseSortValue(a, sortKey);
        const valB = parseSortValue(b, sortKey);
        let cmp = 0;
        if (typeof valA === 'number' && typeof valB === 'number') {
          cmp = valA - valB;
        } else {
          cmp = String(valA).localeCompare(String(valB), 'ja');
        }
        return sortOrder === 'asc' ? cmp : -cmp;
      });
    }

    return list;
  }, [characters, unjoinedOnly, searchQuery, currentRoute, routeJoinedStatus, sortKey, sortOrder]);

  // 初期データリセット
  const handleReset = () => {
    if (confirm('最新のキャラクターマスターデータ（全58名）および初期スキルデータに初期化しますか？\n※加入チェック状態は保持されます。')) {
      setCharacters([...DEFAULT_CHARACTERS]);
      setSkillData(INITIAL_SKILL_DATA);
    }
  };

  // バックアップ出力
  const handleExport = () => {
    const data = {
      characters,
      routeJoinedStatus,
      skillData,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fe_koryaku_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // バックアップ復元
  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported.characters && Array.isArray(imported.characters)) {
            setCharacters(imported.characters);
          }
          if (imported.routeJoinedStatus) {
            setRouteJoinedStatus(imported.routeJoinedStatus);
          }
          if (imported.skillData) {
            setSkillData(imported.skillData);
          }
          alert('バックアップから正常に復元しました！');
        } catch (err) {
          alert('復元に失敗しました。正しいJSONファイルを選択してください。');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // キャラ保存（編集/新規）
  const handleSaveCharacter = (char) => {
    setCharacters((prev) => {
      const index = prev.findIndex((c) => c.id === char.id);
      if (index >= 0) {
        const next = [...prev];
        next[index] = char;
        return next;
      } else {
        return [char, ...prev];
      }
    });
  };

  // キャラ削除
  const handleDeleteCharacter = (charId) => {
    setCharacters((prev) => prev.filter((c) => c.id !== charId));
  };

  // 編集モーダルを開く
  const handleOpenEditModal = (charId) => {
    const target = characters.find((c) => c.id === charId);
    if (target) {
      setEditingChar(target);
      setIsModalOpen(true);
    }
  };

  // 新規追加モーダルを開く
  const handleOpenAddModal = () => {
    setEditingChar(null);
    setIsModalOpen(true);
  };

  // スキル編集モーダルを開く
  const handleOpenSkillEditModal = (charId) => {
    const target = characters.find((c) => c.id === charId);
    if (target) {
      setEditingSkillChar(target);
      setIsSkillModalOpen(true);
    }
  };

  // スキルデータ保存
  const handleSaveSkills = (charId, newSkills) => {
    setSkillData((prev) => ({
      ...prev,
      [charId]: newSkills
    }));
  };

  return (
    <main className="p-3 sm:p-6 md:p-8 max-w-[1440px] mx-auto font-sans antialiased">
      {/* ヘッダー＆コントロール */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        unjoinedOnly={unjoinedOnly}
        setUnjoinedOnly={setUnjoinedOnly}
        hitCount={filteredCharacters.length}
        totalCount={characters.length}
        onReset={handleReset}
        onExport={handleExport}
        onImport={handleImport}
        onOpenAddModal={handleOpenAddModal}
      />

      {/* 表示モード切替（キャラ別詳細 / 名声別早見 / 支援別早見 / 兵種・スキル一覧） */}
      <ViewModeTabs currentViewMode={viewMode} setViewMode={setViewMode} />

      {/* 主人公絞り込みタブ（加入表モードのとき、または特定ルートのキャラ絞り込みとして利用可能） */}
      <RouteTabs currentRoute={currentRoute} setRoute={setCurrentRoute} />

      {/* メインビュー表示 */}
      {viewMode === 'char' && (
        <CharDetailTable
          characters={filteredCharacters}
          currentRoute={currentRoute}
          routeJoinedStatus={routeJoinedStatus}
          onToggleJoined={handleToggleJoined}
          onOpenEditModal={handleOpenEditModal}
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSort={handleSort}
          onReset={handleReset}
        />
      )}

      {viewMode === 'fame' && (
        <FameMatrixTable
          characters={filteredCharacters}
          currentRoute={currentRoute}
          routeJoinedStatus={routeJoinedStatus}
          onToggleJoined={handleToggleJoined}
        />
      )}

      {viewMode === 'support' && (
        <SupportMatrixTable
          characters={filteredCharacters}
          currentRoute={currentRoute}
          routeJoinedStatus={routeJoinedStatus}
          onToggleJoined={handleToggleJoined}
        />
      )}

      {viewMode === 'skills' && (
        <CharacterSkillTable
          characters={filteredCharacters}
          skillData={skillData}
          onOpenSkillEditModal={handleOpenSkillEditModal}
        />
      )}

      {viewMode === 'classes' && (
        <ClassTable />
      )}

      {/* キャラクター追加・編集モーダル */}
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        charData={editingChar}
        onSave={handleSaveCharacter}
        onDelete={handleDeleteCharacter}
      />

      {/* スキル・特性編集モーダル */}
      <SkillEditModal
        isOpen={isSkillModalOpen}
        onClose={() => setIsSkillModalOpen(false)}
        char={editingSkillChar}
        initialSkillData={editingSkillChar ? (skillData[editingSkillChar.id] || {}) : {}}
        onSave={handleSaveSkills}
      />
    </main>
  );
}
