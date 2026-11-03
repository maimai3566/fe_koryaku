import React from 'react';
import { HERO_CONFIGS } from '../data/characters';

export default function RouteTabs({ currentRoute, setRoute }) {
  const routes = [
    { key: 'all', label: '全主人公 比較', icon: '🌐', color: 'text-slate-300', activeBg: 'bg-slate-700 text-white border-slate-500' },
    { key: 'kai', label: HERO_CONFIGS.kai.title, icon: HERO_CONFIGS.kai.icon, color: 'text-sky-400', activeBg: 'bg-sky-500/20 text-sky-300 border-sky-400 shadow-sky-950/50' },
    { key: 'dietrich', label: HERO_CONFIGS.dietrich.title, icon: HERO_CONFIGS.dietrich.icon, color: 'text-orange-400', activeBg: 'bg-orange-500/20 text-orange-300 border-orange-400 shadow-orange-950/50' },
    { key: 'theodora', label: HERO_CONFIGS.theodora.title, icon: HERO_CONFIGS.theodora.icon, color: 'text-purple-400', activeBg: 'bg-purple-500/20 text-purple-300 border-purple-400 shadow-purple-950/50' },
    { key: 'leda', label: HERO_CONFIGS.leda.title, icon: HERO_CONFIGS.leda.icon, color: 'text-rose-400', activeBg: 'bg-rose-500/20 text-rose-300 border-rose-400 shadow-rose-950/50' }
  ];

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mb-4 scrollbar-none">
      {routes.map((r) => {
        const isActive = currentRoute === r.key;
        return (
          <button
            key={r.key}
            onClick={() => setRoute(r.key)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border transition-all whitespace-nowrap ${
              isActive
                ? `${r.activeBg} border shadow-md font-bold`
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
            }`}
          >
            <span>{r.icon}</span>
            <span className={isActive ? '' : r.color}>{r.label}</span>
          </button>
        );
      })}
    </div>
  );
}

