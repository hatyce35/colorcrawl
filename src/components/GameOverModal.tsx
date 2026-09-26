import React, { useEffect } from 'react';
import { LevelData, Language } from '../types/game';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { getT } from '../i18n/translations';

interface GameOverModalProps {
  level: LevelData;
  gameMode: 'classic' | 'adventure';
  adventureStage?: number;
  reason?: string;
  language?: Language;
  onReplay: () => void;
  onLevelSelect: () => void;
  vibrationEnabled: boolean;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  level,
  gameMode,
  adventureStage,
  reason,
  language = 'tr',
  onReplay,
  onLevelSelect,
  vibrationEnabled,
}) => {
  const t = getT(language);
  const displayReason = reason || t.gameOver.timeoutReason;

  // Keyboard shortcut: Space (or Enter) to trigger Replay / Try Again
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ' || e.code === 'Enter' || e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        soundManager.playButton();
        triggerHaptic('medium', vibrationEnabled);
        onReplay();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [onReplay, vibrationEnabled]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none animate-fade-in">
      <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 to-[#0c0f18] border-2 border-rose-600/70 p-6 shadow-2xl text-center">
        {/* Defeat Red Aura Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-rose-500/20 blur-2xl pointer-events-none" />

        {/* Skull / Defeated Icon */}
        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-rose-950/60 border border-rose-500/40 flex items-center justify-center shadow-lg shadow-rose-950/50">
          <svg viewBox="0 0 50 50" className="w-10 h-10">
            {/* Dead snake head preview */}
            <circle cx="25" cy="25" r="20" fill="#475569" />
            <ellipse cx="25" cy="14" rx="9" ry="4" fill="#94a3b8" opacity="0.8" />
            {/* Left X */}
            <line x1="15" y1="19" x2="21" y2="25" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="21" y1="19" x2="15" y2="25" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" />
            {/* Right X */}
            <line x1="29" y1="19" x2="35" y2="25" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="35" y1="19" x2="29" y2="25" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-black text-rose-400 tracking-wide">
          {t.gameOver.title}
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          {gameMode === 'adventure'
            ? t.gameOver.adventureStageSub(adventureStage || 1)
            : `${level.name} · ${t.common.level} ${level.id}`}
        </p>

        {/* Reason Box */}
        <div className="bg-rose-950/30 rounded-2xl p-3 border border-rose-900/40 my-4 text-xs text-rose-200 leading-relaxed font-medium">
          {displayReason}
        </div>

        {/* Tip Box */}
        <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-800 text-[11px] text-slate-400 mb-5">
          <span className="text-amber-400 font-bold">{t.gameOver.tipHeader}</span> {t.gameOver.defaultTip}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('medium', vibrationEnabled);
              onReplay();
            }}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-rose-500/25 active:scale-[0.98] transition-transform cursor-pointer flex items-center justify-center gap-2"
          >
            <span>🔄</span>
            <span>{t.gameOver.tryAgain}</span>
            <span className="px-2 py-0.5 text-[10px] bg-slate-950/25 text-slate-950 rounded-md border border-slate-950/20 font-black tracking-wider">
              SPACE
            </span>
          </button>

          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', vibrationEnabled);
              onLevelSelect();
            }}
            className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-bold text-xs active:scale-[0.98] transition-transform cursor-pointer"
          >
            {gameMode === 'adventure' ? t.gameOver.returnToMenu : t.gameOver.levelSelectBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
