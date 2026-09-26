import React from 'react';
import { UserProgress, GameSettings } from '../types/game';
import { GAME_LEVELS } from '../data/levels';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { getT } from '../i18n/translations';

interface LevelSelectProps {
  userProgress: UserProgress;
  settings: GameSettings;
  onSelectLevel: (levelId: number) => void;
  onBack: () => void;
}

export const LevelSelect: React.FC<LevelSelectProps> = ({
  userProgress,
  settings,
  onSelectLevel,
  onBack,
}) => {
  const t = getT(settings.language);

  // Highest unlocked level: max(completed level id + 1, currentLevelId, 1)
  const completedIds = Object.keys(userProgress.completedLevels).map(Number);
  const highestCompleted = completedIds.length > 0 ? Math.max(...completedIds) : 0;
  const maxUnlockedLevel = Math.max(highestCompleted + 1, userProgress.currentLevelId || 1, 1);

  const totalEarnedStars = Object.values(userProgress.completedLevels).reduce(
    (acc, l) => acc + l.stars,
    0
  );

  return (
    <div className="w-full h-full flex flex-col pt-safe pb-safe px-4 select-none max-w-md mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between py-3 border-b border-slate-800">
        <button
          onClick={() => {
            soundManager.playButton();
            triggerHaptic('light', settings.vibrationEnabled);
            onBack();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
        >
          <span>←</span>
          <span>{t.common.menu}</span>
        </button>

        <h2 className="text-base font-extrabold text-white flex items-center gap-1.5">
          <span>🎮</span>
          <span>{t.levelSelect.header(GAME_LEVELS.length)}</span>
        </h2>

        <div className="w-16 flex justify-end">
          <div className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="tabular-nums">{totalEarnedStars}</span>
          </div>
        </div>
      </div>

      {/* Sub-header Banner */}
      <div className="py-2 px-1 flex items-center justify-between text-xs text-slate-400">
        <span>{t.levelSelect.selectPrompt}</span>
        <span className="text-emerald-400 font-bold">
          {t.levelSelect.completedCount(completedIds.length, GAME_LEVELS.length)}
        </span>
      </div>

      {/* Grid of Levels */}
      <div className="flex-1 overflow-y-auto pr-1 pb-4">
        <div className="grid grid-cols-5 gap-2.5">
          {GAME_LEVELS.map((lvl) => {
            const isCompleted = !!userProgress.completedLevels[lvl.id];
            const isUnlocked = lvl.id <= maxUnlockedLevel;
            const levelStats = userProgress.completedLevels[lvl.id];
            const stars = levelStats ? levelStats.stars : 0;

            return (
              <button
                key={lvl.id}
                disabled={!isUnlocked}
                onClick={() => {
                  soundManager.playButton();
                  triggerHaptic('medium', settings.vibrationEnabled);
                  onSelectLevel(lvl.id);
                }}
                className={`relative flex flex-col items-center justify-center p-2 rounded-2xl border aspect-square transition-all cursor-pointer ${
                  !isUnlocked
                    ? 'bg-slate-900/40 border-slate-800/40 text-slate-700 cursor-not-allowed opacity-50'
                    : isCompleted
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700 text-slate-100 hover:border-emerald-500 shadow-md active:scale-95'
                    : 'bg-gradient-to-b from-indigo-950/70 to-slate-900 border-indigo-500/60 text-indigo-200 shadow-lg shadow-indigo-500/20 animate-pulse active:scale-95'
                }`}
              >
                {!isUnlocked ? (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current opacity-40">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                ) : (
                  <>
                    <span className="text-sm font-black tabular-nums">{lvl.id}</span>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[1, 2, 3].map((s) => (
                        <svg
                          key={s}
                          viewBox="0 0 24 24"
                          className={`w-2.5 h-2.5 ${
                            s <= stars ? 'fill-amber-400 text-amber-400' : 'fill-slate-700 text-slate-700'
                          }`}
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
