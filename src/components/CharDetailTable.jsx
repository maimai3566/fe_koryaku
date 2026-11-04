import React from 'react';
import { ArrowUpDown, Check, Edit2 } from 'lucide-react';
import { HERO_CONFIGS } from '../data/characters';

export default function CharDetailTable({
  characters,
  currentRoute,
  routeJoinedStatus,
  onToggleJoined,
  onOpenEditModal,
  sortKey,
  sortOrder,
  onSort,
  onReset
}) {
  const isSingle = currentRoute !== 'all';
  const routes = isSingle
    ? [HERO_CONFIGS[currentRoute]]
    : [HERO_CONFIGS.kai, HERO_CONFIGS.dietrich, HERO_CONFIGS.theodora, HERO_CONFIGS.leda];

  const renderSortIcon = (key) => {
    const isActive = sortKey === key;
    return (
      <span className={`inline-block ml-1 text-[10px] transition-colors ${isActive ? 'text-amber-400 font-bold' : 'text-slate-500'}`}>
        {isActive ? (sortOrder === 'asc' ? '▲' : '▼') : '⇅'}
      </span>
    );
  };

  if (characters.length === 0) {
    return (
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 text-center text-slate-400">
        <p className="text-base font-semibold mb-2">表示できるキャラクターがいません</p>
        <p className="text-xs mb-4 text-slate-500">検索条件に一致しないか、データが初期化されている可能性があります。</p>
        <button
          onClick={onReset}
          className="px-4 py-2 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white rounded-lg shadow transition"
        >
          🔄 全58名の最新データを読み込む
        </button>
      </div>
    );
  }

  // --- 単一ルート表示モード（固定幅 620px・左寄せ） ---
  if (isSingle) {
    const hero = HERO_CONFIGS[currentRoute];
    return (
      <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-xl bg-slate-900/50">
        <table className="w-[620px] table-fixed border-collapse text-left text-xs">
          {/* カラム幅固定 */}
          <colgroup>
            <col style={{ width: '120px' }} />
            <col style={{ width: '65px' }} />
            <col style={{ width: '65px' }} />
            <col style={{ width: '290px' }} />
            <col style={{ width: '80px' }} />
          </colgroup>

          {/* ヘッダー */}
          <thead className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-sm">
            <tr className={`border-t-2 ${hero.headerBorder}`}>
              <th
                onClick={() => onSort('name')}
                className="sticky left-0 z-30 p-2.5 bg-slate-900 font-bold text-slate-200 cursor-pointer hover:bg-slate-800 border-r border-slate-800 select-none shadow-[2px_0_5px_rgba(0,0,0,0.3)]"
              >
                キャラクター {renderSortIcon('name')}
              </th>
              <th
                onClick={() => onSort(`${currentRoute}.support`)}
                className="p-2 text-center font-bold text-slate-300 cursor-pointer hover:bg-slate-800 border-r border-slate-800 select-none"
              >
                支援 {renderSortIcon(`${currentRoute}.support`)}
              </th>
              <th
                onClick={() => onSort(`${currentRoute}.fame`)}
                className="p-2 text-center font-bold text-slate-300 cursor-pointer hover:bg-slate-800 border-r border-slate-800 select-none"
              >
                名声 {renderSortIcon(`${currentRoute}.fame`)}
              </th>
              <th className="p-2 font-bold text-slate-300 border-r border-slate-800">
                加入条件（{hero.title}）
              </th>
              <th
                onClick={() => onSort(`${currentRoute}.limit`)}
                className="p-2 text-center font-bold text-slate-300 cursor-pointer hover:bg-slate-800 select-none"
              >
                期限 {renderSortIcon(`${currentRoute}.limit`)}
              </th>
            </tr>
          </thead>

          {/* データ行 */}
          <tbody className="divide-y divide-slate-800/80">
            {characters.map((char) => {
              const d = char[currentRoute] || { support: '-', fame: '-', cond: '-', limit: '-' };
              const isJoined = !!routeJoinedStatus[`${char.id}_${currentRoute}`];

              return (
                <tr
                  key={char.id}
                  className={`group transition-colors ${
                    isJoined ? 'bg-slate-950/40 opacity-40' : `${hero.tintBg} hover:bg-slate-800/60`
                  }`}
                >
                  {/* キャラクター名（Sticky） */}
                  <td
                    onClick={() => onOpenEditModal(char.id)}
                    className="sticky left-0 z-10 p-2.5 font-bold text-slate-200 bg-slate-900 group-hover:bg-slate-850 border-r border-slate-800 truncate cursor-pointer shadow-[2px_0_5px_rgba(0,0,0,0.3)] group-hover:text-amber-400 transition"
                    title="クリックして条件を編集"
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">{char.name}</span>
                      <Edit2 className="w-3 h-3 text-slate-600 group-hover:text-amber-400 shrink-0 opacity-0 group-hover:opacity-100 transition" />
                    </div>
                  </td>

                  {/* 支援 */}
                  <td
                    onClick={(e) => onToggleJoined(char.id, currentRoute, e)}
                    className="p-2 text-center border-r border-slate-800/80 cursor-pointer select-none"
                    title={`タップで${hero.title}の加入状態を切替`}
                  >
                    {d.support === '主人公' || d.support === '救世主' ? (
                      <span className="inline-block px-1.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        👑 {d.support}
                      </span>
                    ) : d.support === '初期' ? (
                      <span className="inline-block px-1.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        初期
                      </span>
                    ) : d.support !== '-' ? (
                      <span className="inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/25">
                        💖 {d.support}
                      </span>
                    ) : (
                      <span className="text-slate-600">-</span>
                    )}
                  </td>

                  {/* 名声 */}
                  <td
                    onClick={(e) => onToggleJoined(char.id, currentRoute, e)}
                    className="p-2 text-center border-r border-slate-800/80 cursor-pointer select-none"
                    title={`タップで${hero.title}の加入状態を切替`}
                  >
                    {d.fame && d.fame !== '-' ? (
                      <span className="inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/25">
                        👑 {d.fame}
                      </span>
                    ) : (
                      <span className="text-slate-600">-</span>
                    )}
                  </td>

                  {/* 加入条件 */}
                  <td
                    onClick={(e) => onToggleJoined(char.id, currentRoute, e)}
                    className="p-2.5 border-r border-slate-800/80 break-words cursor-pointer select-none"
                    title={`タップで${hero.title}の加入状態を切替`}
                  >
                    <div className="flex items-start gap-1.5">
                      {isJoined && (
                        <span className="inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shrink-0">
                          <Check className="w-2.5 h-2.5" /> 加入済
                        </span>
                      )}
                      <span className={`text-[12px] leading-relaxed ${isJoined ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                        {d.cond || '-'}
                      </span>
                    </div>
                  </td>

                  {/* 期限 */}
                  <td
                    onClick={(e) => onToggleJoined(char.id, currentRoute, e)}
                    className="p-2 text-center cursor-pointer select-none"
                    title={`タップで${hero.title}の加入状態を切替`}
                  >
                    {d.limit && d.limit.includes('3部') ? (
                      <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {d.limit}
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400">{d.limit || '-'}</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  // --- 全主人公 比較モード（17列テーブル・主人公ごとのティント背景 ＆ 境界線強調） ---
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-xl bg-slate-900/50 max-h-[calc(100vh-220px)]">
      <table className="w-full min-w-[1240px] border-collapse text-left text-xs">
        {/* 1行目ヘッダー: 主人公大項目 */}
        <thead className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md shadow-sm">
          <tr>
            <th
              rowSpan={2}
              onClick={() => onSort('name')}
              className="sticky left-0 z-30 p-2.5 bg-slate-900 font-bold text-slate-200 cursor-pointer hover:bg-slate-800 border-b border-r-2 border-slate-700/80 w-[120px] min-w-[120px] select-none shadow-[2px_0_5px_rgba(0,0,0,0.3)]"
            >
              キャラクター {renderSortIcon('name')}
            </th>
            {routes.map((h, i) => (
              <th
                key={h.key}
                colSpan={4}
                className={`p-2 text-center font-bold text-sm border-t-4 ${h.headerBorder} ${h.headerBg} border-b border-slate-800 select-none ${
                  i > 0 ? 'border-l-2 border-slate-700/60' : ''
                }`}
                style={{ color: h.color }}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span>{h.icon}</span>
                  <span>{h.name}</span>
                </div>
              </th>
            ))}
          </tr>

          {/* 2行目ヘッダー: 各項目 */}
          <tr className="border-b border-slate-800 text-[11px] text-slate-400 bg-slate-900">
            {routes.map((h, i) => (
              <React.Fragment key={h.key}>
                <th
                  onClick={() => onSort(`${h.key}.support`)}
                  className={`p-2 text-center font-semibold cursor-pointer hover:bg-slate-800 border-r border-slate-800/80 w-[60px] select-none ${
                    i > 0 ? 'border-l-2 border-slate-700/60' : ''
                  }`}
                >
                  支援 {renderSortIcon(`${h.key}.support`)}
                </th>
                <th
                  onClick={() => onSort(`${h.key}.fame`)}
                  className="p-2 text-center font-semibold cursor-pointer hover:bg-slate-800 border-r border-slate-800/80 w-[60px] select-none"
                >
                  名声 {renderSortIcon(`${h.key}.fame`)}
                </th>
                <th className="p-2 font-semibold border-r border-slate-800/80 min-w-[120px]">
                  加入条件
                </th>
                <th
                  onClick={() => onSort(`${h.key}.limit`)}
                  className="p-2 text-center font-semibold cursor-pointer hover:bg-slate-800 border-r border-slate-800/80 w-[70px] select-none"
                >
                  期限 {renderSortIcon(`${h.key}.limit`)}
                </th>
              </React.Fragment>
            ))}
          </tr>
        </thead>

        {/* データ行 */}
        <tbody className="divide-y divide-slate-800/80">
          {characters.map((char) => {
            return (
              <tr key={char.id} className="group hover:bg-slate-800/40 transition-colors">
                {/* キャラ名（Sticky固定） */}
                <td
                  onClick={() => onOpenEditModal(char.id)}
                  className="sticky left-0 z-10 p-2.5 font-bold text-slate-200 bg-slate-900 group-hover:bg-slate-850 border-r-2 border-slate-700/80 truncate cursor-pointer shadow-[2px_0_5px_rgba(0,0,0,0.3)] group-hover:text-amber-400 transition"
                  title="クリックして条件を編集"
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{char.name}</span>
                    <Edit2 className="w-3 h-3 text-slate-600 group-hover:text-amber-400 shrink-0 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </td>

                {/* 各主人公の4セル */}
                {routes.map((h, i) => {
                  const d = char[h.key] || { support: '-', fame: '-', cond: '-', limit: '-' };
                  const isJoined = !!routeJoinedStatus[`${char.id}_${h.key}`];
                  const borderLClass = i > 0 ? 'border-l-2 border-slate-700/60' : '';

                  return (
                    <React.Fragment key={h.key}>
                      {/* 支援 */}
                      <td
                        onClick={(e) => onToggleJoined(char.id, h.key, e)}
                        className={`p-2 text-center border-r border-slate-800/80 cursor-pointer select-none transition ${h.tintBg} ${borderLClass} ${
                          isJoined ? 'opacity-35 line-through' : ''
                        }`}
                        title={`タップで${h.name}の加入状態を切替`}
                      >
                        {d.support === '主人公' || d.support === '救世主' ? (
                          <span className="inline-block px-1 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            👑{d.support}
                          </span>
                        ) : d.support === '初期' ? (
                          <span className="inline-block px-1 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            初期
                          </span>
                        ) : d.support !== '-' ? (
                          <span className="text-[11px] font-semibold text-rose-300">
                            💖{d.support}
                          </span>
                        ) : (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>

                      {/* 名声 */}
                      <td
                        onClick={(e) => onToggleJoined(char.id, h.key, e)}
                        className={`p-2 text-center border-r border-slate-800/80 cursor-pointer select-none transition ${h.tintBg} ${
                          isJoined ? 'opacity-35 line-through' : ''
                        }`}
                        title={`タップで${h.name}の加入状態を切替`}
                      >
                        {d.fame && d.fame !== '-' ? (
                          <span className="text-[11px] font-semibold text-amber-300">
                            👑{d.fame}
                          </span>
                        ) : (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>

                      {/* 加入条件 */}
                      <td
                        onClick={(e) => onToggleJoined(char.id, h.key, e)}
                        className={`p-2 border-r border-slate-800/80 cursor-pointer select-none transition ${h.tintBg} ${
                          isJoined ? 'opacity-35' : ''
                        }`}
                        title={`タップで${h.name}の加入状態を切替`}
                      >
                        <div className="flex items-start gap-1">
                          {isJoined && <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />}
                          <span className={`text-[11px] leading-snug ${isJoined ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                            {d.cond || '-'}
                          </span>
                        </div>
                      </td>

                      {/* 期限 */}
                      <td
                        onClick={(e) => onToggleJoined(char.id, h.key, e)}
                        className={`p-2 text-center border-r border-slate-800/80 cursor-pointer select-none transition ${h.tintBg} ${
                          isJoined ? 'opacity-35 line-through' : ''
                        }`}
                        title={`タップで${h.name}の加入状態を切替`}
                      >
                        <span className="text-[10px] text-slate-400">{d.limit || '-'}</span>
                      </td>
                    </React.Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

