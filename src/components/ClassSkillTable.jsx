import React, { useState, useMemo } from 'react';
import { Filter, Search, Sparkles, Shield, Award, Edit3, HelpCircle, CheckCircle2 } from 'lucide-react';
import { CLASS_TIERS, CLASS_LIST, CLASS_SKILLS_DATA } from '../data/skills';
import { HERO_CONFIGS } from '../data/characters';

export default function ClassSkillTable({
  characters,
  skillData,
  onOpenSkillEditModal
}) {
  const [selectedTier, setSelectedTier] = useState('all'); // 'all' | 'beginner' | 'intermediate' | 'advanced' | 'master' | 'special'
  const [skillSearchQuery, setSkillSearchQuery] = useState('');

  // 選択されたランクに応じて表示する兵種を絞り込み
  const displayedClasses = useMemo(() => {
    if (selectedTier === 'all') return CLASS_LIST;
    return CLASS_LIST.filter((c) => c.tier === selectedTier);
  }, [selectedTier]);

  // 検索フィルター（キャラ名、個人スキル名、血印名、ルーツ名、兵種スキル名で検索可能）
  const filteredChars = useMemo(() => {
    if (!skillSearchQuery.trim()) return characters;
    const q = skillSearchQuery.trim().toLowerCase();

    return characters.filter((char) => {
      const charSkills = skillData[char.id] || {};
      const personalName = charSkills.personal?.name || '';
      const personalDesc = charSkills.personal?.desc || '';
      const bloodName = charSkills.bloodSign?.name || '';
      const rootsName = charSkills.roots?.name || '';

      // 兵種スキルの検索
      const classSkillsText = Object.values(charSkills.classes || {})
        .map((s) => `${s.name} ${s.desc}`)
        .join(' ');

      const searchTarget = [char.name, personalName, personalDesc, bloodName, rootsName, classSkillsText]
        .join(' ')
        .toLowerCase();

      return searchTarget.includes(q);
    });
  }, [characters, skillData, skillSearchQuery]);

  return (
    <div className="space-y-4 animate-fade-in">
      {/* 兵種ランク切り替えフィルター ＆ 検索バー */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 rounded-xl p-3 shadow-md">
        {/* ランクフィルタータブ */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {Object.values(CLASS_TIERS).map((t) => {
            const isActive = selectedTier === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setSelectedTier(t.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-600 text-white border-amber-500 shadow-md'
                    : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
                {t.key !== 'all' && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/40 text-slate-400">
                    {CLASS_LIST.filter((c) => c.tier === t.key).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 検索入力 */}
        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={skillSearchQuery}
            onChange={(e) => setSkillSearchQuery(e.target.value)}
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
              {/* キャラ名（Sticky） */}
              <th className="sticky left-0 z-30 p-2.5 bg-slate-900 font-bold text-slate-200 border-r-2 border-slate-700 w-[120px] min-w-[120px] shadow-[2px_0_5px_rgba(0,0,0,0.3)]">
                キャラクター
              </th>

              {/* 固有特性 3列 */}
              <th className="p-2.5 font-bold text-amber-300 bg-amber-950/20 border-r border-slate-800/80 w-[170px] min-w-[170px] text-center border-t-2 border-t-amber-500">
                🌟 個人スキル
              </th>
              <th className="p-2.5 font-bold text-rose-300 bg-rose-950/20 border-r border-slate-800/80 w-[170px] min-w-[170px] text-center border-t-2 border-t-rose-500">
                🩸 血印
              </th>
              <th className="p-2.5 font-bold text-sky-300 bg-sky-950/20 border-r-2 border-slate-700 w-[170px] min-w-[170px] text-center border-t-2 border-t-sky-500">
                📜 ルーツ
              </th>

              {/* 兵種列（フィルターに応じて可変） */}
              {displayedClasses.map((cls) => {
                const tierColor =
                  cls.tier === 'beginner'
                    ? 'border-t-emerald-500 text-emerald-400'
                    : cls.tier === 'intermediate'
                    ? 'border-t-sky-500 text-sky-400'
                    : cls.tier === 'advanced'
                    ? 'border-t-amber-500 text-amber-400'
                    : cls.tier === 'master'
                    ? 'border-t-purple-500 text-purple-400'
                    : 'border-t-rose-500 text-rose-400';

                return (
                  <th
                    key={cls.id}
                    className={`p-2.5 text-center font-bold border-r border-slate-800/80 w-[160px] min-w-[160px] border-t-2 ${tierColor} bg-slate-900/90`}
                  >
                    <div className="flex items-center justify-center gap-1">
                      <span>{cls.icon}</span>
                      <span className="truncate">{cls.name}</span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* データ行 */}
          <tbody className="divide-y divide-slate-800/80">
            {filteredChars.map((char) => {
              const charSkills = skillData[char.id] || {};
              const personal = charSkills.personal;
              const blood = charSkills.bloodSign;
              const roots = charSkills.roots;
              const classesObj = charSkills.classes || {};

              return (
                <tr key={char.id} className="group hover:bg-slate-850/50 transition-colors">
                  {/* キャラ名（Sticky） */}
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

                  {/* 個人スキル */}
                  <td
                    onClick={() => onOpenSkillEditModal(char.id)}
                    className="p-2 border-r border-slate-800/80 align-top bg-amber-950/10 cursor-pointer hover:bg-amber-950/20 transition"
                  >
                    {personal ? (
                      <div>
                        <div className="font-bold text-amber-300 text-[11px] mb-0.5">{personal.name}</div>
                        <div className="text-[10px] text-slate-400 leading-snug">{personal.desc}</div>
                      </div>
                    ) : (
                      <span className="text-slate-600 text-[11px] italic">-</span>
                    )}
                  </td>

                  {/* 血印 */}
                  <td
                    onClick={() => onOpenSkillEditModal(char.id)}
                    className="p-2 border-r border-slate-800/80 align-top bg-rose-950/10 cursor-pointer hover:bg-rose-950/20 transition"
                  >
                    {blood ? (
                      <div>
                        <div className="font-bold text-rose-300 text-[11px] mb-0.5">{blood.name}</div>
                        <div className="text-[10px] text-slate-400 leading-snug">{blood.desc}</div>
                      </div>
                    ) : (
                      <span className="text-slate-600 text-[11px] italic">-</span>
                    )}
                  </td>

                  {/* ルーツ */}
                  <td
                    onClick={() => onOpenSkillEditModal(char.id)}
                    className="p-2 border-r-2 border-slate-700 align-top bg-sky-950/10 cursor-pointer hover:bg-sky-950/20 transition"
                  >
                    {roots ? (
                      <div>
                        <div className="font-bold text-sky-300 text-[11px] mb-0.5">{roots.name}</div>
                        <div className="text-[10px] text-slate-400 leading-snug">{roots.desc}</div>
                      </div>
                    ) : (
                      <span className="text-slate-600 text-[11px] italic">-</span>
                    )}
                  </td>

                  {/* 各兵種スキル */}
                  {displayedClasses.map((cls) => {
                    const customSkill = classesObj[cls.id];
                    const clsInfo = CLASS_SKILLS_DATA[cls.id] || {};

                    return (
                      <td
                        key={cls.id}
                        onClick={() => onOpenSkillEditModal(char.id)}
                        className="p-2 border-r border-slate-800/80 align-top cursor-pointer hover:bg-slate-800/60 transition"
                      >
                        {customSkill ? (
                          <div className="p-1.5 rounded bg-amber-950/40 border border-amber-600/60 shadow-sm">
                            <div className="font-semibold text-amber-300 text-[11px] mb-0.5 flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                              <span className="truncate">{customSkill.name}</span>
                            </div>
                            <div className="text-[10px] text-amber-200/80 leading-snug">{customSkill.desc}</div>
                          </div>
                        ) : clsInfo.masterSkill || clsInfo.classSkills ? (
                          <div className="space-y-1">
                            {clsInfo.masterSkill && (
                              <div className="p-1 rounded bg-slate-850/80 border border-slate-700/60">
                                <div className="text-[9px] text-amber-400 font-bold tracking-tight">★マスター</div>
                                <div className="text-[10px] text-slate-200 font-medium leading-snug">{clsInfo.masterSkill}</div>
                              </div>
                            )}
                            {clsInfo.classSkills && (
                              <div className="p-1 rounded bg-slate-900/60 border border-slate-800/80">
                                <div className="text-[9px] text-sky-400 font-bold tracking-tight">🛡️兵種効果</div>
                                <div className="text-[10px] text-slate-400 leading-snug line-clamp-2" title={clsInfo.classSkills}>
                                  {clsInfo.classSkills}
                                </div>
                              </div>
                            )}
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

