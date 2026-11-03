import React from 'react';
import { RotateCcw, Download, Upload, Plus, Search, ShieldCheck } from 'lucide-react';

export default function Header({
  searchQuery,
  setSearchQuery,
  unjoinedOnly,
  setUnjoinedOnly,
  hitCount,
  totalCount,
  onReset,
  onExport,
  onImport,
  onOpenAddModal
}) {
  return (
    <header className="mb-6 space-y-4">
      {/* タイトル行 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 rounded-xl p-4 shadow-lg backdrop-blur-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚔️</span>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
              FE 万紫千紅 - スカウト・加入条件まとめ
            </h1>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            カイ / ディートリヒ / セオドラ / レダ の4主人公比較マトリクス
          </p>
        </div>

        {/* アクションボタン群 */}
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-slate-800 text-amber-400 border border-amber-500/20">
            {hitCount} / {totalCount} 件
          </span>
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
            title="最新の初期データにリセット"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            リセット
          </button>
          <button
            onClick={onExport}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
            title="バックアップをダウンロード"
          >
            <Download className="w-3.5 h-3.5" />
            保存
          </button>
          <button
            onClick={onImport}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
            title="バックアップから復元"
          >
            <Upload className="w-3.5 h-3.5" />
            復元
          </button>
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white rounded-lg shadow-sm transition"
          >
            <Plus className="w-4 h-4" />
            キャラ追加
          </button>
        </div>
      </div>

      {/* コントロール行（検索 ＆ 未加入フィルター） */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 border border-slate-800/80 rounded-lg p-3">
        {/* 検索入力 */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="キャラ名や加入条件で検索..."
            className="w-full pl-9 pr-3 py-1.5 text-sm bg-slate-950/70 border border-slate-700/80 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/30 transition"
          />
        </div>

        {/* フィルターチェックボックス */}
        <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-300 select-none px-2 py-1 bg-slate-800/50 rounded border border-slate-700/50 hover:bg-slate-800 transition">
          <input
            type="checkbox"
            checked={unjoinedOnly}
            onChange={(e) => setUnjoinedOnly(e.target.checked)}
            className="rounded border-slate-700 text-amber-500 focus:ring-0 cursor-pointer"
          />
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>未加入のみ表示</span>
        </label>
      </div>
    </header>
  );
}

