import React from 'react';
import { GameSettings } from '../types/game';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { getT } from '../i18n/translations';

interface PauseModalProps {
  onResume: () => void;
  onRestart: () => void;
  onLevelSelect: () => void;
  onReturnToMainMenu: () => void;
  settings: GameSettings;
  onUpdateSettings: (settings: GameSettings) => void;
}

export const PauseModal: React.FC<PauseModalProps> = ({
  onResume,
  onRestart,
  onLevelSelect,
  onReturnToMainMenu,
  settings,
  onUpdateSettings,
}) => {
  const t = getT(settings.language);

  const toggleSound = () => {
    const updated = !settings.soundEnabled;
    soundManager.setSoundEnabled(updated);
    if (updated) soundManager.playButton();
    onUpdateSettings({ ...settings, soundEnabled: updated });
  };

  const toggleMusic = () => {
    const updated = !settings.musicEnabled;
    soundManager.setMusicEnabled(updated);
    onUpdateSettings({ ...settings, musicEnabled: updated });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm select-none">
      <div className="relative w-full max-w-xs rounded-3xl bg-slate-900 border border-slate-700/80 p-6 shadow-2xl text-center">
        <h3 className="text-xl font-extrabold text-white mb-6">
          {t.pauseModal.gamePaused}
        </h3>

        {/* Quick Toggles */}
        <div className="flex items-center justify-around bg-slate-950/60 p-3 rounded-2xl border border-slate-800 mb-6">
          <button
            onClick={() => {
              triggerHaptic('light', settings.vibrationEnabled);
              toggleSound();
            }}
            className={`p-3 rounded-xl flex flex-col items-center gap-1 transition-all cursor-pointer ${
              settings.soundEnabled ? 'text-amber-400 bg-amber-950/30' : 'text-slate-600 bg-slate-900'
            }`}
          >
            <span className="text-lg">{settings.soundEnabled ? '🔊' : '🔇'}</span>
            <span className="text-[10px] font-bold">{t.pauseModal.sound}</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('light', settings.vibrationEnabled);
              toggleMusic();
            }}
            className={`p-3 rounded-xl flex flex-col items-center gap-1 transition-all cursor-pointer ${
              settings.musicEnabled ? 'text-indigo-400 bg-indigo-950/30' : 'text-slate-600 bg-slate-900'
            }`}
          >
            <span className="text-lg">{settings.musicEnabled ? '🎵' : '🎶'}</span>
            <span className="text-[10px] font-bold">{t.pauseModal.music}</span>
          </button>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col gap-2.5">
          {/* Resume */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', settings.vibrationEnabled);
              onResume();
            }}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm active:scale-[0.98] transition-transform cursor-pointer shadow-md"
          >
            {t.pauseModal.resume}
          </button>

          {/* Restart Level */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', settings.vibrationEnabled);
              onRestart();
            }}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs active:scale-[0.98] transition-transform cursor-pointer"
          >
            {t.pauseModal.restartLevel}
          </button>

          {/* Return to Main Menu (Requested by User) */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', settings.vibrationEnabled);
              onReturnToMainMenu();
            }}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs active:scale-[0.98] transition-transform cursor-pointer"
          >
            {t.pauseModal.returnToMainMenu}
          </button>

          {/* Exit to Level Select */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', settings.vibrationEnabled);
              onLevelSelect();
            }}
            className="w-full py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 font-medium text-xs active:scale-[0.98] transition-transform cursor-pointer"
          >
            {t.pauseModal.exitToLevelSelect}
          </button>
        </div>
      </div>
    </div>
  );
};
