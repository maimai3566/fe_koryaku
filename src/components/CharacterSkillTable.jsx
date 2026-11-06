import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Edit3, HelpCircle, Filter } from 'lucide-react';
import { SKILL_COLUMNS, SKILL_CATEGORIES } from '../data/skills';

export default function CharacterSkillTable({
  characters,
  skillData,
  onOpenSkillEditModal
}) {
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'trait' | 'weapon' | 'magic' | 'movement'
  const [searchQuery, setSearchQuery] = useState('');

  // 選択されたカテゴリに応じて表示するカラムを絞り込み
  const displayedColumns = useMemo(() => {
    if (selectedCategory === 'all') return SKILL_COLUMNS;
    return SKILL_COLUMNS.filter((col) => col.category === selectedCategory);
  }, [selectedCategory]);

  // 検索フィルター（キャラ名、各スキルの名前や効果で検索可能）
  const filteredChars = useMemo(() => {
    if (!searchQuery.trim()) return characters;
    const q = searchQuery.trim().toLowerCase();

    return characters.filter((char) => {
      const data = skillData[char.id] || {};
      const texts = [char.name];

      // 単一項目（personal, bloodSign）
      ['personal', 'bloodSign'].forEach((k) => {
        if (data[k]) {
          texts.push(data[k].name || '', data[k].desc || '');
        }
      });

      // 配列項目（exclusive, sword, lance, etc.）
      SKILL_COLUMNS.forEach((col) => {
        if (Array.isArray(data[col.id])) {
          data[col.id].forEach((item) => {
            texts.push(item.name || '', item.desc || '');
          });
        }
      });

      const fullText = texts.join(' ').toLowerCase();
      return fullText.includes(q);
    });
  }, [characters, skillData, searchQuery]);

  return (
    <div className="space-y-4 animate-fade-in">
      {/* フィルター＆検索バー */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 rounded-xl p-3 shadow-md">
        {/* カテゴリ切り替えタブ */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {Object.values(SKILL_CATEGORIES).map((cat) => {
            const isActive = selectedCategory === cat.key;
            const count =
              cat.key === 'all'
                ? SKILL_COLUMNS.length
                : SKILL_COLUMNS.filter((c) => c.category === cat.key).length;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-600 text-white border-amber-500 shadow-md'
                    : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/40 text-slate-400">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 検索入力 */}
        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="スキル名や効果で検索..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950/70 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* スキル一覧テーブル */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-xl bg-slate-900/50 max-h-[calc(100vh-230px)]">
        <table className="border-collapse text-left text-xs min-w-max">
          {/* テーブルヘッダー */}
          <thead className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md shadow-sm">
            <tr className="border-b border-slate-800">
              {/* キャラ名（Sticky固定） */}
              <th className="sticky left-0 z-30 p-2.5 bg-slate-900 font-bold text-slate-200 border-r-2 border-slate-700 w-[120px] min-w-[120px] shadow-[2px_0_5px_rgba(0,0,0,0.3)]">
                キャラクター
              </th>

              {/* スキル列 */}
              {displayedColumns.map((col) => {
                const borderColors = {
                  trait: 'border-t-amber-500 text-amber-300',
                  weapon: 'border-t-emerald-500 text-emerald-300',
                  magic: 'border-t-violet-500 text-violet-300',
                  movement: 'border-t-cyan-500 text-cyan-300'
                };
                const colorClass = borderColors[col.category] || 'border-t-slate-500 text-slate-300';

                return (
                  <th
                    key={col.id}
                    className={`p-2.5 text-center font-bold border-r border-slate-800/80 w-[180px] min-w-[180px] border-t-2 ${colorClass} bg-slate-900/90`}
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span>{col.icon}</span>
                      <span>{col.name}</span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* データ行 */}
          <tbody className="divide-y divide-slate-800/80">
            {filteredChars.map((char) => {
              const charData = skillData[char.id] || {};

              return (
                <tr key={char.id} className="group hover:bg-slate-850/50 transition-colors">
                  {/* キャラ名（Sticky固定） */}
                  <td
                    onClick={() => onOpenSkillEditModal(char.id)}
                    className="sticky left-0 z-10 p-2.5 font-bold text-slate-200 bg-slate-900 group-hover:bg-slate-850 border-r-2 border-slate-700 truncate cursor-pointer shadow-[2px_0_5px_rgba(0,0,0,0.3)] group-hover:text-amber-400 transition"
                    title="クリックしてスキル情報を編集"
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">{char.name}</span>
                      <Edit3 className="w-3 h-3 text-slate-600 group-hover:text-amber-400 shrink-0 opacity-0 group-hover:opacity-100 transition" />
                    </div>
                  </td>

                  {/* 各カラムのスキル表示 */}
                  {displayedColumns.map((col) => {
                    const cellVal = charData[col.id];

                    // 単一アイテム（personal, bloodSign）
                    if (['personal', 'bloodSign'].includes(col.id)) {
                      const item = cellVal;
                      return (
                        <td
                          key={col.id}
                          onClick={() => onOpenSkillEditModal(char.id)}
                          className="p-2 border-r border-slate-800/80 align-top cursor-pointer hover:bg-slate-800/60 transition"
                        >
                          {item && item.name && item.name !== '-' ? (
                            <div className="p-1.5 rounded bg-slate-850/80 border border-slate-700/60 space-y-0.5">
                              <div className="font-bold text-slate-200 text-[11px] flex items-center gap-1">
                                <span>{col.icon}</span>
                                <span className="truncate">{item.name}</span>
                              </div>
                              {item.desc && (
                                <div className="text-[10px] text-slate-400 leading-snug">{item.desc}</div>
                              )}
                            </div>
                          ) : (
                            <span className="text-slate-700 text-[11px] block text-center">-</span>
                          )}
                        </td>
                      );
                    }

                    // 配列アイテム（exclusive, sword, lance, etc.）
                    const list = Array.isArray(cellVal) ? cellVal : [];
                    return (
                      <td
                        key={col.id}
                        onClick={() => onOpenSkillEditModal(char.id)}
                        className="p-2 border-r border-slate-800/80 align-top cursor-pointer hover:bg-slate-800/60 transition"
                      >
                        {list.length > 0 ? (
                          <div className="space-y-1.5">
                            {list.map((skillItem, idx) => (
                              <div
                                key={idx}
                                className="p-1.5 rounded bg-slate-850/80 border border-slate-700/60 space-y-0.5"
                              >
                                <div className="font-semibold text-slate-200 text-[11px] flex items-center gap-1">
                                  <Sparkles className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                                  <span className="truncate">{skillItem.name}</span>
                                </div>
                                {skillItem.desc && (
                                  <div className="text-[10px] text-slate-400 leading-snug">
                                    {skillItem.desc}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-700 text-[11px] block text-center">-</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

