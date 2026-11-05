import React, { useState, useMemo } from 'react';
import { Search, Shield, Sparkles, Award } from 'lucide-react';
import { CLASS_TIERS, CLASS_LIST, CLASS_SKILLS_DATA } from '../data/skills';

export default function ClassTable() {
  const [selectedTier, setSelectedTier] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const displayedClasses = useMemo(() => {
    let list = CLASS_LIST;
    if (selectedTier !== 'all') {
      list = list.filter((c) => c.tier === selectedTier);
    }
    if (!searchQuery.trim()) return list;

    const q = searchQuery.trim().toLowerCase();
    return list.filter((cls) => {
      const info = CLASS_SKILLS_DATA[cls.id] || {};
      const target = [cls.name, info.masterSkill || '', info.classSkills || ''].join(' ').toLowerCase();
      return target.includes(q);
    });
  }, [selectedTier, searchQuery]);

  return (
    <div className="space-y-4 animate-fade-in">
      {/* ランクフィルター ＆ 検索バー */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 rounded-xl p-3 shadow-md">
        {/* ランクタブ */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {Object.values(CLASS_TIERS).map((t) => {
            const isActive = selectedTier === t.key;
            const count =
              t.key === 'all'
                ? CLASS_LIST.length
                : CLASS_LIST.filter((c) => c.tier === t.key).length;

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
            placeholder="兵種名やスキルで検索..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950/70 border border-slate-700 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* 兵種一覧テーブル */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-xl bg-slate-900/50 max-h-[calc(100vh-230px)]">
        <table className="w-full border-collapse text-left text-xs">
          <thead className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md shadow-sm">
            <tr className="border-b border-slate-800 text-slate-300">
              <th className="p-3 font-bold w-[160px] min-w-[140px]">兵種名</th>
              <th className="p-3 font-bold w-[100px]">ランク</th>
              <th className="p-3 font-bold min-w-[260px] text-amber-300">★ マスタースキル</th>
              <th className="p-3 font-bold min-w-[280px] text-sky-300">🛡️ 兵種効果・所持スキル</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {displayedClasses.map((cls) => {
              const info = CLASS_SKILLS_DATA[cls.id] || {};
              const tierInfo = CLASS_TIERS[cls.tier] || { label: cls.tier, icon: '' };

              const tierBadgeColors = {
                beginner: 'bg-emerald-950/40 text-emerald-300 border-emerald-600/50',
                intermediate: 'bg-sky-950/40 text-sky-300 border-sky-600/50',
                advanced: 'bg-amber-950/40 text-amber-300 border-amber-600/50',
                master: 'bg-purple-950/40 text-purple-300 border-purple-600/50',
                special: 'bg-rose-950/40 text-rose-300 border-rose-600/50'
              };
              const badgeStyle = tierBadgeColors[cls.tier] || 'bg-slate-800 text-slate-300 border-slate-700';

              return (
                <tr key={cls.id} className="hover:bg-slate-850/50 transition-colors">
                  {/* 兵種名 */}
                  <td className="p-3 font-bold text-slate-100 flex items-center gap-2">
                    <span className="text-base">{cls.icon}</span>
                    <span className="text-sm">{cls.name}</span>
                  </td>

                  {/* ランク */}
                  <td className="p-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold border ${badgeStyle}`}>
                      <span>{tierInfo.icon}</span>
                      <span>{tierInfo.label}</span>
                    </span>
                  </td>

                  {/* マスタースキル */}
                  <td className="p-3">
                    {info.masterSkill ? (
                      <div className="p-2 rounded-lg bg-amber-950/20 border border-amber-600/30">
                        <div className="font-bold text-amber-300 text-xs flex items-center gap-1.5 mb-0.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>{info.masterSkill}</span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-slate-600 italic">なし</span>
                    )}
                  </td>

                  {/* 兵種効果 */}
                  <td className="p-3">
                    {info.classSkills ? (
                      <div className="p-2 rounded-lg bg-sky-950/20 border border-sky-600/30">
                        <div className="text-xs text-sky-200/90 leading-relaxed font-medium">
                          {info.classSkills}
                        </div>
                      </div>
                    ) : (
                      <span className="text-slate-600 italic">特記事項なし</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

