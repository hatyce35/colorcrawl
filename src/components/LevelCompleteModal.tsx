import React, { useEffect } from 'react';
import { LevelData, UserProgress, Language } from '../types/game';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { getT } from '../i18n/translations';

interface LevelCompleteModalProps {
  level: LevelData;
  moves: number;
  stars: number;
  timeLeft: number;
  maxTime: number;
  collectedStars?: number;
  gameMode?: 'classic' | 'adventure';
  adventureStage?: number;
  userProgress: UserProgress;
  language?: Language;
  hasNextLevel: boolean;
  onNextLevel: () => void;
  onReplay: () => void;
  onLevelSelect: () => void;
  vibrationEnabled: boolean;
}

export const LevelCompleteModal: React.FC<LevelCompleteModalProps> = ({
  level,
  moves,
  stars,
  timeLeft,
  maxTime,
  collectedStars = 0,
  gameMode = 'classic',
  adventureStage = 1,
  language = 'tr',
  hasNextLevel,
  onNextLevel,
  onReplay,
  onLevelSelect,
  vibrationEnabled,
}) => {
  const t = getT(language);
  const isFinalVictory =
    (gameMode === 'classic' && level.id >= 100) ||
    (gameMode === 'adventure' && adventureStage >= 100);

  const timeUsed = Math.max(0, maxTime - timeLeft);
  const remainingPercent = maxTime > 0 ? Math.round((timeLeft / maxTime) * 100) : 0;

  const getStarRatingLabel = () => {
    if (stars === 3) return t.levelComplete.starRatingSuper;
    if (stars === 2) return t.levelComplete.starRatingGood;
    return t.levelComplete.starRatingClose;
  };

  // Keyboard shortcut: Space (or Enter) to trigger Next Level / Next Stage
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ' || e.code === 'Enter' || e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        soundManager.playButton();
        triggerHaptic('medium', vibrationEnabled);
        if (hasNextLevel && !isFinalVictory) {
          onNextLevel();
        } else {
          onLevelSelect();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasNextLevel, isFinalVictory, onNextLevel, onLevelSelect, vibrationEnabled]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none animate-in fade-in duration-300">
      <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-slate-700/80 p-6 shadow-2xl text-center overflow-hidden">
        {/* Glow halo */}
        <div
          className={`absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl pointer-events-none ${
            isFinalVictory ? 'bg-amber-400/35 animate-pulse' : 'bg-amber-400/20'
          }`}
        />

        {/* Confetti sparkle particles for final victory */}
        {isFinalVictory && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-75">
            <div className="absolute top-2 left-4 text-xl animate-bounce">🎉</div>
            <div className="absolute top-4 right-4 text-xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</div>
            <div className="absolute top-14 left-8 text-lg animate-pulse" style={{ animationDelay: '0.4s' }}>🌟</div>
            <div className="absolute top-12 right-8 text-lg animate-pulse" style={{ animationDelay: '0.6s' }}>🎊</div>
          </div>
        )}

        {/* Celebration Header */}
        {isFinalVictory ? (
          <div className="mb-2">
            <div className="text-4xl mb-1 animate-bounce">🏆</div>
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 tracking-tight">
              {t.levelComplete.gameWonTitle}
            </h2>
            <p className="text-xs font-bold text-amber-200 mt-1">
              {t.levelComplete.gameWonSub}
            </p>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              {gameMode === 'adventure'
                ? t.levelComplete.gameWonAdventureDesc
                : t.levelComplete.gameWonClassicDesc}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-wide">
              {gameMode === 'adventure' ? t.levelComplete.stageFinished(adventureStage) : t.levelComplete.levelFinished}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {gameMode === 'adventure' ? t.levelComplete.adventureProgressSub : `${level.name} · ${t.common.level} ${level.id}`}
            </p>
          </div>
        )}

        {/* Animated Stars */}
        <div className="flex items-center justify-center gap-3 my-4">
          {[1, 2, 3].map((starIdx) => {
            const isEarned = starIdx <= stars;
            return (
              <div
                key={starIdx}
                className={`transition-all duration-500 transform ${
                  isEarned
                    ? 'scale-110 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]'
                    : 'scale-90 text-slate-700 opacity-40'
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            );
          })}
        </div>

        {/* Performance Stats Breakdown (Time-Based Star Criteria) */}
        <div className="bg-slate-950/60 rounded-2xl p-3.5 border border-slate-800/80 mb-5 text-left">
          {/* Star Criteria Badge */}
          <div className="flex items-center justify-between text-xs font-bold mb-2 pb-2 border-b border-slate-800 text-amber-300">
            <span>{t.levelComplete.starAchievement}</span>
            <span>{getStarRatingLabel()}</span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span>{t.levelComplete.remainingTime}</span>
            <span className="text-sm font-extrabold text-emerald-400 tabular-nums">
              {timeLeft} {t.common.time.toLowerCase()} <span className="text-[10px] text-slate-400 font-normal">({remainingPercent}%)</span>
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span>{t.levelComplete.elapsedTime}</span>
            <span className="font-semibold text-slate-300 tabular-nums">
              {timeUsed} {t.common.time.toLowerCase()} <span className="text-[10px] text-slate-500">/ {maxTime} {t.common.time.toLowerCase()}</span>
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>{t.levelComplete.movesMade}</span>
            <span className="font-semibold text-slate-300 tabular-nums">{moves}</span>
          </div>

          {collectedStars > 0 && (
            <div className="flex items-center justify-between text-xs text-amber-400 mt-1.5 pt-1.5 border-t border-slate-800/60">
              <span>{t.levelComplete.extraStars}</span>
              <span className="font-bold tabular-nums">+{collectedStars} ⭐</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          {hasNextLevel && !isFinalVictory ? (
            <button
              onClick={() => {
                soundManager.playButton();
                triggerHaptic('medium', vibrationEnabled);
                onNextLevel();
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-transform cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{gameMode === 'adventure' ? t.levelComplete.nextStage : t.levelComplete.nextLevel}</span>
              <span className="px-2 py-0.5 text-[10px] bg-slate-950/25 text-slate-950 rounded-md border border-slate-950/20 font-black tracking-wider">
                SPACE
              </span>
            </button>
          ) : (
            <button
              onClick={() => {
                soundManager.playButton();
                triggerHaptic('medium', vibrationEnabled);
                onLevelSelect();
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/30 active:scale-[0.98] transition-transform cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{t.levelComplete.returnMenuChampion}</span>
              <span className="px-2 py-0.5 text-[10px] bg-slate-950/25 text-slate-950 rounded-md border border-slate-950/20 font-black tracking-wider">
                SPACE
              </span>
            </button>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                soundManager.playButton();
                triggerHaptic('light', vibrationEnabled);
                onReplay();
              }}
              className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs active:scale-[0.98] transition-transform cursor-pointer"
            >
              {t.levelComplete.replay}
            </button>
            <button
              onClick={() => {
                soundManager.playButton();
                triggerHaptic('light', vibrationEnabled);
                onLevelSelect();
              }}
              className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs active:scale-[0.98] transition-transform cursor-pointer"
            >
              {gameMode === 'adventure' ? t.levelComplete.menuBtn : t.levelComplete.levelsBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
