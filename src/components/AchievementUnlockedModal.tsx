import React, { useEffect } from 'react';
import { Achievement, GameSettings } from '../types/game';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { getT } from '../i18n/translations';

interface AchievementUnlockedModalProps {
  achievement: Achievement;
  settings: GameSettings;
  onClose: () => void;
}

export const AchievementUnlockedModal: React.FC<AchievementUnlockedModalProps> = ({
  achievement,
  settings,
  onClose,
}) => {
  const t = getT(settings.language);

  // Play joyful sound on unlock
  useEffect(() => {
    soundManager.playLevelComplete();
    triggerHaptic('heavy', settings.vibrationEnabled);

    // Allow Enter / Space to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [settings.vibrationEnabled, onClose]);

  const item = t.achievements.items[achievement.id];
  const title = item?.title || achievement.id;
  const desc = item?.desc || '';

  const tierName =
    achievement.tier === 'bronze'
      ? t.achievements.tierBronze
      : achievement.tier === 'silver'
      ? t.achievements.tierSilver
      : achievement.tier === 'gold'
      ? t.achievements.tierGold
      : t.achievements.tierLegendary;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Radiant particle card */}
      <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500/70 p-6 flex flex-col items-center text-center shadow-2xl overflow-hidden animate-scaleUp">
        {/* Pulsing neon backlight glow */}
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse"
          style={{ backgroundColor: achievement.glowColor }}
        />

        {/* Top Header Badge */}
        <div className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-[11px] font-black tracking-widest text-amber-300 uppercase mb-3 flex items-center gap-1.5 shadow-inner">
          <span className="animate-spin text-xs">✨</span>
          <span>{t.achievements.unlockedBadgeModalTitle}</span>
          <span className="animate-spin text-xs">✨</span>
        </div>

        {/* Big Radiant Badge Icon */}
        <div className="relative w-28 h-28 my-3 flex items-center justify-center">
          {/* Animated Halo Rings */}
          <div
            className="absolute inset-0 rounded-3xl border-2 border-dashed border-amber-400/60 animate-spin"
            style={{ animationDuration: '10s' }}
          />
          <div
            className="absolute -inset-2 rounded-3xl blur-md opacity-70"
            style={{ backgroundColor: achievement.glowColor }}
          />

          {/* Badge Shell */}
          <div
            className={`relative w-24 h-24 rounded-2xl bg-gradient-to-tr ${achievement.badgeColor} border-2 shadow-2xl flex flex-col items-center justify-center p-2 transform hover:scale-105 transition-transform`}
          >
            <span className="text-4xl drop-shadow-md">{achievement.icon}</span>
            <span className="text-[10px] font-black text-white/90 uppercase tracking-wider mt-1 px-2 py-0.5 rounded-md bg-black/40 border border-white/20">
              {tierName}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 mt-2 mb-1">
          {title}
        </h3>
        <p className="text-xs text-slate-300 max-w-xs leading-relaxed mb-6 font-medium">
          {desc}
        </p>

        {/* Continue Action Button */}
        <button
          onClick={() => {
            soundManager.playButton();
            triggerHaptic('medium', settings.vibrationEnabled);
            onClose();
          }}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/30 active:scale-[0.98] transition-transform cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{t.achievements.unlockedBadgeTapContinue}</span>
          <span className="px-2 py-0.5 text-[10px] bg-slate-950/25 text-slate-950 rounded-md border border-slate-950/20 font-black tracking-wider">
            SPACE
          </span>
        </button>
      </div>
    </div>
  );
};
