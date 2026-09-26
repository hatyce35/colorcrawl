import React, { useState } from 'react';
import { UserProgress, GameSettings } from '../types/game';
import { GAME_ACHIEVEMENTS } from '../data/achievements';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { getT } from '../i18n/translations';

interface AchievementsModalProps {
  userProgress: UserProgress;
  settings: GameSettings;
  onBack: () => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  userProgress,
  settings,
  onBack,
}) => {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  const t = getT(settings.language);

  const unlockedSet = new Set(userProgress.unlockedAchievements || []);
  const totalCount = GAME_ACHIEVEMENTS.length;
  const unlockedCount = unlockedSet.size;

  const filteredAchievements = GAME_ACHIEVEMENTS.filter((ach) => {
    const isUnlocked = unlockedSet.has(ach.id);
    if (filter === 'unlocked') return isUnlocked;
    if (filter === 'locked') return !isUnlocked;
    return true;
  });

  return (
    <div className="relative w-full h-full flex flex-col justify-between py-6 px-4 overflow-hidden select-none max-w-md mx-auto">
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-slate-800/80 z-10 pt-safe">
        <button
          onClick={() => {
            soundManager.playButton();
            triggerHaptic('light', settings.vibrationEnabled);
            onBack();
          }}
          className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>{t.common.back}</span>
        </button>

        <div className="flex flex-col items-center">
          <h2 className="text-base font-extrabold text-white flex items-center gap-1.5">
            <span>🏆</span>
            <span>{t.achievements.modalTitle}</span>
          </h2>
          <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
            {t.achievements.unlockedCount(unlockedCount, totalCount)}
          </span>
        </div>

        <div className="w-12" />
      </div>

      {/* Filter Tabs */}
      <div className="w-full flex items-center justify-center gap-2 my-2 z-10">
        <button
          onClick={() => {
            soundManager.playButton();
            setFilter('all');
          }}
          className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Tümü ({totalCount})
        </button>
        <button
          onClick={() => {
            soundManager.playButton();
            setFilter('unlocked');
          }}
          className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
            filter === 'unlocked'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Kazanılan ({unlockedCount})
        </button>
        <button
          onClick={() => {
            soundManager.playButton();
            setFilter('locked');
          }}
          className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
            filter === 'locked'
              ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Kilitli ({totalCount - unlockedCount})
        </button>
      </div>

      {/* Badges List Container */}
      <div className="w-full flex-1 overflow-y-auto pr-1 my-1 space-y-2.5 z-10 custom-scrollbar">
        {filteredAchievements.map((ach) => {
          const isUnlocked = unlockedSet.has(ach.id);
          const item = t.achievements.items[ach.id];
          const title = item?.title || ach.id;
          const desc = item?.desc || '';

          const tierName =
            ach.tier === 'bronze'
              ? t.achievements.tierBronze
              : ach.tier === 'silver'
              ? t.achievements.tierSilver
              : ach.tier === 'gold'
              ? t.achievements.tierGold
              : t.achievements.tierLegendary;

          return (
            <div
              key={ach.id}
              className={`relative p-3.5 rounded-2xl border transition-all duration-200 flex items-center gap-3.5 ${
                isUnlocked
                  ? 'bg-slate-900/90 border-slate-700/80 shadow-lg'
                  : 'bg-slate-950/60 border-slate-900 opacity-60'
              }`}
            >
              {/* Badge Icon */}
              <div
                className={`relative w-14 h-14 rounded-2xl flex-shrink-0 flex flex-col items-center justify-center p-1 border shadow-md ${
                  isUnlocked
                    ? `bg-gradient-to-tr ${ach.badgeColor}`
                    : 'bg-slate-900 border-slate-800 grayscale'
                }`}
                style={isUnlocked ? { boxShadow: `0 4px 15px ${ach.glowColor}` } : {}}
              >
                <span className="text-2xl">{isUnlocked ? ach.icon : '🔒'}</span>
                <span className="text-[8px] font-black text-white/90 uppercase tracking-tighter mt-0.5 px-1 rounded bg-black/40">
                  {tierName}
                </span>
              </div>

              {/* Information */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <h4
                    className={`text-sm font-extrabold truncate ${
                      isUnlocked ? 'text-slate-100' : 'text-slate-400'
                    }`}
                  >
                    {title}
                  </h4>
                  {isUnlocked && (
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex-shrink-0">
                      ✓ Açıldı
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 leading-snug line-clamp-2">
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Progress Status */}
      <div className="w-full pt-3 border-t border-slate-800/80 z-10 pb-safe">
        <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-1.5">
          <span>Toplam Rozet İlerlemesi</span>
          <span className="text-amber-400 font-extrabold">
            {Math.round((unlockedCount / totalCount) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
