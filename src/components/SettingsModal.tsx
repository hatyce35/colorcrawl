import React, { useState } from 'react';
import { GameSettings, UserProgress, Language } from '../types/game';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { resetAllProgress } from '../utils/storage';
import { getT } from '../i18n/translations';

interface SettingsModalProps {
  settings: GameSettings;
  userProgress: UserProgress;
  onUpdateSettings: (settings: GameSettings) => void;
  onUpdateProgress: (progress: UserProgress) => void;
  onBack: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  settings,
  userProgress,
  onUpdateSettings,
  onUpdateProgress,
  onBack,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const t = getT(settings.language);

  const setLanguage = (lang: Language) => {
    soundManager.playButton();
    triggerHaptic('light', settings.vibrationEnabled);
    onUpdateSettings({ ...settings, language: lang });
  };

  const toggleSound = () => {
    const val = !settings.soundEnabled;
    soundManager.setSoundEnabled(val);
    if (val) soundManager.playButton();
    onUpdateSettings({ ...settings, soundEnabled: val });
  };

  const toggleMusic = () => {
    const val = !settings.musicEnabled;
    soundManager.setMusicEnabled(val);
    onUpdateSettings({ ...settings, musicEnabled: val });
  };

  const toggleVibration = () => {
    const val = !settings.vibrationEnabled;
    if (val) triggerHaptic('medium', true);
    onUpdateSettings({ ...settings, vibrationEnabled: val });
  };

  const setControls = (mode: 'swipe' | 'buttons' | 'both') => {
    soundManager.playButton();
    triggerHaptic('light', settings.vibrationEnabled);
    onUpdateSettings({ ...settings, controlsMode: mode });
  };

  const handleReset = () => {
    soundManager.playButton();
    const { progress: freshProgress, settings: freshSettings } = resetAllProgress();
    onUpdateProgress(freshProgress);
    onUpdateSettings(freshSettings);
    setShowConfirmReset(false);
  };

  return (
    <div className="w-full h-full flex flex-col pt-safe pb-safe px-4 select-none max-w-md mx-auto">
      {/* Header */}
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

        <h2 className="text-base font-extrabold text-white">{t.settings.settingsTitle}</h2>
        <div className="w-16" />
      </div>

      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {/* Language Selection Section */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            {t.settings.languageTitle}
          </span>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => setLanguage('tr')}
              className={`py-3 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                settings.language === 'tr'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 border-rose-400 text-white shadow-lg shadow-rose-900/40 ring-2 ring-rose-400/40'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <span>🇹🇷</span>
              <span>Türkçe</span>
            </button>

            <button
              onClick={() => setLanguage('en')}
              className={`py-3 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                settings.language === 'en'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-400 text-white shadow-lg shadow-blue-900/40 ring-2 ring-blue-400/40'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <span>🇬🇧</span>
              <span>English</span>
            </button>
          </div>
        </div>

        {/* Audio & Haptic Section */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            {t.settings.audioSection}
          </span>

          {/* Sound FX */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold text-slate-200 block">{t.settings.soundFx}</span>
              <span className="text-[11px] text-slate-500">{t.settings.soundFxDesc}</span>
            </div>
            <button
              onClick={toggleSound}
              className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                settings.soundEnabled ? 'bg-emerald-500' : 'bg-slate-700'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  settings.soundEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Music */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <div>
              <span className="text-sm font-semibold text-slate-200 block">{t.settings.ambientMusic}</span>
              <span className="text-[11px] text-slate-500">{t.settings.ambientMusicDesc}</span>
            </div>
            <button
              onClick={toggleMusic}
              className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                settings.musicEnabled ? 'bg-emerald-500' : 'bg-slate-700'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  settings.musicEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Vibration */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <div>
              <span className="text-sm font-semibold text-slate-200 block">{t.settings.vibration}</span>
              <span className="text-[11px] text-slate-500">{t.settings.vibrationDesc}</span>
            </div>
            <button
              onClick={toggleVibration}
              className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                settings.vibrationEnabled ? 'bg-emerald-500' : 'bg-slate-700'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  settings.vibrationEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Controls Option */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            {t.settings.controlsSection}
          </span>

          <div className="grid grid-cols-3 gap-2">
            {(['swipe', 'buttons', 'both'] as const).map((mode) => {
              const isSelected = settings.controlsMode === mode;
              const label =
                mode === 'swipe'
                  ? t.settings.swipe
                  : mode === 'buttons'
                  ? t.settings.buttons
                  : t.settings.both;

              return (
                <button
                  key={mode}
                  onClick={() => setControls(mode)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Data & Progress Management */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            {t.settings.progressSection}
          </span>

          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>{t.settings.completedLevels}</span>
            <span className="font-bold tabular-nums">
              {Object.keys(userProgress.completedLevels).length} / 100
            </span>
          </div>

          {!showConfirmReset ? (
            <button
              onClick={() => setShowConfirmReset(true)}
              className="w-full py-2.5 rounded-xl bg-red-950/40 hover:bg-red-900/50 border border-red-800/50 text-red-400 font-bold text-xs transition-colors cursor-pointer"
            >
              {t.settings.resetProgressBtn}
            </button>
          ) : (
            <div className="bg-red-950/60 p-3 rounded-xl border border-red-700/60 text-center space-y-2">
              <span className="text-xs text-red-200 font-bold block">
                {t.settings.confirmResetTitle}
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleReset}
                  className="py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs cursor-pointer"
                >
                  {t.settings.yesReset}
                </button>
                <button
                  onClick={() => setShowConfirmReset(false)}
                  className="py-1.5 rounded-lg bg-slate-800 text-slate-300 font-bold text-xs cursor-pointer"
                >
                  {t.common.cancel}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
