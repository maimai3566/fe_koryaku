import React from 'react';
import { Table, Crown, Heart } from 'lucide-react';

export default function ViewModeTabs({ currentViewMode, setViewMode }) {
  const modes = [
    { key: 'char', label: 'キャラ別 詳細表', icon: Table },
    { key: 'fame', label: '名声別 早見一覧', icon: Crown },
    { key: 'support', label: '支援別 早見一覧', icon: Heart }
  ];

  return (
    <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl mb-3 shadow-inner">
      {modes.map((m) => {
        const Icon = m.icon;
        const isActive = currentViewMode === m.key;
        return (
          <button
            key={m.key}
            onClick={() => setViewMode(m.key)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              isActive
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-amber-100' : 'text-slate-400'}`} />
            <span>{m.label}</span>
          </button>
        );
      })}
    </div>
  );
}
