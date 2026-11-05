import React from 'react';
import { Table, Crown, Heart, Sparkles, Shield } from 'lucide-react';

export default function ViewModeTabs({ currentViewMode, setViewMode }) {
  const modes = [
    { key: 'char', label: 'キャラ別 詳細表', icon: Table },
    { key: 'fame', label: '名声別 早見一覧', icon: Crown },
    { key: 'support', label: '支援別 早見一覧', icon: Heart },
    { key: 'skills', label: 'スキル一覧', icon: Sparkles },
    { key: 'classes', label: '兵種一覧', icon: Shield }
  ];

  return (
    <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl mb-3 shadow-inner overflow-x-auto scrollbar-none">
      {modes.map((m) => {
        const Icon = m.icon;
        const isActive = currentViewMode === m.key;
        return (
          <button
            key={m.key}
            onClick={() => setViewMode(m.key)}
            className={`flex-1 min-w-[120px] flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2.5 sm:px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              isActive
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-amber-100' : 'text-slate-400'}`} />
            <span>{m.label}</span>
          </button>
        );
      })}
    </div>
  );
}
