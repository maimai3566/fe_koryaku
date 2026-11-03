import React from 'react';
import { Check } from 'lucide-react';
import { HERO_CONFIGS } from '../data/characters';

export default function FameMatrixTable({
  characters,
  currentRoute,
  routeJoinedStatus,
  onToggleJoined
}) {
  const isSingle = currentRoute !== 'all';
  const routes = isSingle
    ? [HERO_CONFIGS[currentRoute]]
    : [HERO_CONFIGS.kai, HERO_CONFIGS.dietrich, HERO_CONFIGS.theodora, HERO_CONFIGS.leda];

  const FAME_ROWS = [
    { label: "条件なし / 初期", key: "none" },
    { label: "名声 Lv.2", key: "2" },
    { label: "名声 Lv.3", key: "3" },
    { label: "名声 Lv.4", key: "4" },
    { label: "名声 Lv.5", key: "5" },
    { label: "名声 Lv.6", key: "6" },
    { label: "名声 Lv.7", key: "7" },
    { label: "名声 Lv.8", key: "8" },
    { label: "名声 Lv.9", key: "9" },
    { label: "第3部加入（救世編）", key: "3rd" }
  ];

  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-800 shadow-xl bg-slate-900/50 ${isSingle ? 'max-w-[500px]' : ''}`}>
      <table className={`border-collapse text-left text-xs ${isSingle ? 'w-full table-fixed' : 'min-w-[620px] w-full'}`}>
        {/* ヘッダー */}
        <thead className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-sm">
          <tr>
            <th className="sticky left-0 z-30 p-2.5 bg-slate-900 font-bold text-slate-200 border-r border-slate-800 w-[100px] min-w-[100px] text-center select-none shadow-[2px_0_5px_rgba(0,0,0,0.3)]">
              名声レベル
            </th>
            {routes.map((h, i) => (
              <th
                key={h.key}
                className={`p-2.5 text-center font-bold text-sm border-t-4 ${h.headerBorder} ${h.headerBg} select-none ${
                  !isSingle && i > 0 ? 'border-l-2 border-slate-700/60' : ''
                }`}
                style={{ color: h.color }}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span>{h.icon}</span>
                  <span>{isSingle ? h.title : h.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* データ行 */}
        <tbody className="divide-y divide-slate-800/80">
          {FAME_ROWS.map((rowDef) => (
            <tr key={rowDef.key} className="hover:bg-slate-850/40 transition-colors">
              {/* 名声レベル（Sticky） */}
              <td className="sticky left-0 z-10 p-2.5 font-bold text-amber-400 bg-slate-900 border-r border-slate-800 text-center shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-[11px] sm:text-xs">
                {rowDef.label}
              </td>

              {/* 各主人公のセル */}
              {routes.map((h, i) => {
                const borderLClass = !isSingle && i > 0 ? 'border-l-2 border-slate-700/60' : '';
                const matched = characters.filter((char) => {
                  const d = char[h.key] || {};
                  const fame = (d.fame || '').trim();
                  const cond = d.cond || '';

                  if (rowDef.key === 'none') {
                    return (
                      (fame === '-' || fame === '') &&
                      !cond.includes('3部') &&
                      (d.support === '初期' || cond.includes('自動') || cond.includes('初期'))
                    );
                  }
                  if (rowDef.key === '3rd') {
                    return cond.includes('3部');
                  }
                  const m = fame.match(/(\d+)/);
                  return m ? m[1] === rowDef.key : false;
                });

                return (
                  <td
                    key={h.key}
                    className={`p-2.5 align-top border-r border-slate-800/60 ${h.tintBg} ${borderLClass}`}
                  >
                    {matched.length === 0 ? (
                      <span className="text-slate-600 italic text-[11px]">-</span>
                    ) : (
                      <div className={`flex gap-1.5 ${isSingle ? 'flex-wrap' : 'flex-col'}`}>
                        {matched.map((char) => {
                          const isJoined = !!routeJoinedStatus[`${char.id}_${h.key}`];
                          const suppVal = (char[h.key]?.support || '').trim();
                          const suppLabel = suppVal && suppVal !== '-' ? `💖${suppVal}` : '';

                          return (
                            <button
                              key={char.id}
                              onClick={(e) => onToggleJoined(char.id, h.key, e)}
                              className={`flex items-center justify-between gap-1.5 px-2 py-1 rounded-md text-[11px] font-semibold border transition text-left select-none ${
                                isJoined
                                  ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-500 line-through opacity-45'
                                  : 'bg-slate-900/90 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-500 shadow-xs'
                              }`}
                              title={`タップで${h.name}篇の加入状態を切替`}
                            >
                              <div className="flex items-center gap-1 truncate">
                                {isJoined && <Check className="w-2.5 h-2.5 text-emerald-400 shrink-0" />}
                                <span className="truncate">{char.name}</span>
                              </div>
                              {suppLabel && (
                                <span className="text-[10px] text-rose-300 font-normal shrink-0">
                                  {suppLabel}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
