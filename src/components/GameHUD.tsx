import React from 'react';
import { Portal, LevelData, CrawlerColor, Language } from '../types/game';
import { CRAWLER_SPECIES } from '../data/species';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { getT } from '../i18n/translations';

interface GameHUDProps {
  level: LevelData;
  moves: number;
  timeLeft: number;
  maxTime: number;
  remainingPortals: Portal[];
  hintsRemaining: number;
  collectedStars?: number;
  gameMode?: 'classic' | 'adventure';
  adventureStage?: number;
  activeCreatureColor?: CrawlerColor;
  language?: Language;
  onRestart: () => void;
  onHint: () => void;
  onUndo?: () => void;
  onPause: () => void;
  vibrationEnabled: boolean;
  isHintActive: boolean;
  canUndo?: boolean;
  isStuckPromptActive?: boolean;
}

export const GameHUD: React.FC<GameHUDProps> = ({
  level,
  moves,
  timeLeft,
  maxTime,
  remainingPortals,
  hintsRemaining,
  collectedStars = 0,
  gameMode = 'classic',
  adventureStage = 1,
  activeCreatureColor,
  language = 'tr',
  onRestart,
  onHint,
  onUndo,
  onPause,
  vibrationEnabled,
  isHintActive,
  canUndo = false,
  isStuckPromptActive = false,
}) => {
  const t = getT(language);
  const isCriticalTime = timeLeft <= 5;
  const isWarningTime = timeLeft > 5 && timeLeft <= 10;
  const speciesTranslation = activeCreatureColor ? t.species[activeCreatureColor] : null;
  const activeSpecies = activeCreatureColor ? CRAWLER_SPECIES[activeCreatureColor] : null;

  // Format mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins > 0 ? `${mins}:` : ''}${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <header className="w-full max-w-md mx-auto pt-safe px-4 select-none">
      {/* Top Bar Zone: Level/Stage, Timer, Targets, Actions */}
      <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
        {/* Left: Level / Stage & Moves & Active Snake Turn */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            {gameMode === 'adventure' ? (
              <span className="text-xs uppercase tracking-wider font-extrabold text-amber-400 flex items-center gap-1">
                <span>🧭</span>
                <span>{t.gameHUD.stage} {adventureStage}</span>
              </span>
            ) : (
              <span className="text-xs uppercase tracking-wider font-extrabold text-indigo-400">
                {t.gameHUD.level} {level.id}
              </span>
            )}
            <span className="text-slate-600">·</span>
            <span className="text-[11px] text-slate-400 font-medium truncate max-w-[100px]">
              {level.name}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-0.5">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-slate-500 font-medium">{t.gameHUD.moves}:</span>
              <span className="text-xs font-extrabold text-amber-400 tabular-nums">
                {moves}
              </span>
            </div>

            {/* Active Snake Turn Indicator */}
            {activeSpecies && speciesTranslation && (
              <div className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-700">
                <span
                  className="w-2 h-2 rounded-full inline-block animate-pulse"
                  style={{ backgroundColor: activeSpecies.themeHue }}
                />
                <span className="text-slate-400">{t.gameHUD.turn}:</span>
                <span style={{ color: activeSpecies.themeHue }}>{speciesTranslation.name}</span>
              </div>
            )}

            {collectedStars > 0 && (
              <div className="flex items-center gap-0.5 text-[11px] text-amber-300 font-bold bg-amber-950/40 px-1.5 py-0.2 rounded-md border border-amber-500/30">
                <span>⭐</span>
                <span>{collectedStars}</span>
              </div>
            )}
          </div>
        </div>

        {/* Center: REAL-TIME COUNTDOWN TIMER with Live Star Rating Status */}
        <div className="flex flex-col items-center">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 ${
              isCriticalTime
                ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse shadow-lg shadow-rose-500/30 ring-2 ring-rose-500/50 scale-105'
                : isWarningTime
                ? 'bg-amber-950/70 border-amber-500 text-amber-300 shadow-md'
                : 'bg-slate-900/90 border-slate-700 text-cyan-300 shadow-sm'
            }`}
          >
            <span className="text-xs">{isCriticalTime ? '⏳' : '⏱️'}</span>
            <span className="text-sm font-black tabular-nums tracking-wide">
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="flex items-center gap-0.5 mt-0.5 text-[10px]">
            {[1, 2, 3].map((starIdx) => {
              const currentTier = timeLeft / maxTime >= 0.5 ? 3 : timeLeft / maxTime >= 0.2 ? 2 : 1;
              const isEarned = starIdx <= currentTier;
              return (
                <span
                  key={starIdx}
                  className={`transition-all ${isEarned ? 'text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]' : 'text-slate-700 opacity-40'}`}
                >
                  ⭐
                </span>
              );
            })}
          </div>
        </div>

        {/* Targets & Actions */}
        <div className="flex items-center gap-1.5">
          {/* Target Portals Preview */}
          <div className="flex items-center gap-1 px-2 py-1 bg-slate-900/90 rounded-full border border-slate-800 shadow-sm mr-1">
            {remainingPortals.map((p) => {
              const sp = CRAWLER_SPECIES[p.color] || CRAWLER_SPECIES.green;
              const spTr = t.species[p.color] || t.species.green;
              return (
                <div
                  key={p.id}
                  className="w-3 h-3 rounded-full border border-white/60 animate-pulse shadow-sm"
                  style={{ backgroundColor: sp.themeHue }}
                  title={`${t.gameHUD.targetPortals}: ${spTr.name}`}
                />
              );
            })}
          </div>

          {/* Undo Button */}
          {canUndo && onUndo && (
            <button
              onClick={() => {
                soundManager.playButton();
                triggerHaptic('medium', vibrationEnabled);
                onUndo();
              }}
              className={`flex items-center gap-1 px-2 py-1 rounded-xl border text-xs font-bold active:scale-95 transition-all cursor-pointer ${
                isStuckPromptActive
                  ? 'bg-rose-500 text-white border-rose-300 animate-bounce shadow-lg shadow-rose-500/50'
                  : 'bg-cyan-950/40 hover:bg-cyan-900/50 border-cyan-500/40 text-cyan-300'
              }`}
              title={t.gameHUD.undoBtn}
            >
              <span className="text-xs">↩️</span>
              <span className="text-[10px] uppercase tracking-wider">{t.gameHUD.undoBtn}</span>
            </button>
          )}

          {/* Hint Button */}
          <button
            onClick={() => {
              if (isHintActive) return;
              soundManager.playButton();
              triggerHaptic('medium', vibrationEnabled);
              onHint();
            }}
            disabled={isHintActive}
            className={`flex items-center gap-1 px-2 py-1 rounded-xl border text-xs font-semibold active:scale-95 transition-all cursor-pointer ${
              isHintActive
                ? 'bg-amber-500/20 border-amber-400/50 text-amber-300 animate-pulse'
                : 'bg-amber-950/30 hover:bg-amber-900/40 border-amber-600/40 text-amber-300'
            }`}
            title={t.gameHUD.hintBtn}
          >
            <span className="text-xs">💡</span>
            <span className="text-[10px] font-bold">{hintsRemaining}</span>
          </button>

          {/* Restart */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', vibrationEnabled);
              onRestart();
            }}
            aria-label={t.pauseModal.restartLevel}
            className="w-7 h-7 rounded-xl bg-slate-800/90 border border-slate-700 active:scale-95 flex items-center justify-center text-slate-300 hover:text-white transition-transform cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>

          {/* Pause */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', vibrationEnabled);
              onPause();
            }}
            aria-label={t.pauseModal.gamePaused}
            className="w-7 h-7 rounded-xl bg-slate-800/90 border border-slate-700 active:scale-95 flex items-center justify-center text-slate-300 hover:text-white transition-transform cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Deadlock / Stuck Alert Banner (Appears 1s after getting stuck or hitting dead-end) */}
      {isStuckPromptActive && canUndo && onUndo && (
        <div className="mt-1.5 py-1.5 px-3 rounded-xl bg-gradient-to-r from-rose-900/90 via-amber-900/90 to-rose-900/90 border-2 border-amber-400 text-white text-xs font-bold flex items-center justify-between shadow-xl animate-bounce">
          <div className="flex items-center gap-1.5">
            <span className="text-base">⚠️</span>
            <span className="text-[11px] font-extrabold">{t.gameHUD.undoTip}</span>
          </div>
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('medium', vibrationEnabled);
              onUndo();
            }}
            className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-md hover:bg-amber-300 active:scale-95 transition-all cursor-pointer flex items-center gap-1"
          >
            <span>↩️</span>
            <span>{t.gameHUD.undoBtn}</span>
          </button>
        </div>
      )}

      {/* Tutorial tip banner (if present on level) */}
      {level.tutorialTip && (
        <div className="mt-1.5 py-1 px-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-indigo-200 text-[11px] flex items-center gap-1.5">
          <span className="text-indigo-400">💡</span>
          <span className="leading-snug">{level.tutorialTip}</span>
        </div>
      )}
    </header>
  );
};
