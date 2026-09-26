import React, { useState } from 'react';
import { UserProgress, GameSettings, CrawlerColor } from '../types/game';
import { CRAWLER_SPECIES } from '../data/species';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { getT } from '../i18n/translations';

interface AdventureSelectProps {
  userProgress: UserProgress;
  settings: GameSettings;
  onStartAdventure: (color: CrawlerColor, stage?: number) => void;
  onBack: () => void;
}

const AVAILABLE_COLORS: CrawlerColor[] = [
  'green',
  'blue',
  'red',
  'yellow',
  'purple',
  'orange',
  'pink',
  'cyan',
];

export const AdventureSelect: React.FC<AdventureSelectProps> = ({
  userProgress,
  settings,
  onStartAdventure,
  onBack,
}) => {
  const [selectedColor, setSelectedColor] = useState<CrawlerColor>(
    userProgress.adventure?.selectedColor || 'green'
  );

  const highestStage = Math.min(100, Math.max(1, userProgress.adventure?.highestStage || 1));
  const resumeStage = Math.min(
    100,
    Math.max(1, userProgress.adventure?.currentStage || highestStage)
  );
  const [selectedStage, setSelectedStage] = useState<number>(resumeStage);

  const t = getT(settings.language);

  const currentSpecies = CRAWLER_SPECIES[selectedColor];
  const currentSpeciesTr = t.species[selectedColor];

  const handleStageChange = (newStage: number) => {
    const clamped = Math.max(1, Math.min(highestStage, newStage));
    setSelectedStage(clamped);
    soundManager.playTick();
    triggerHaptic('light', settings.vibrationEnabled);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between py-safe px-4 select-none max-w-md mx-auto">
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

        <div className="flex flex-col items-center">
          <h2 className="text-base font-extrabold text-white flex items-center gap-1.5">
            <span>🧭</span>
            <span>{t.adventureSelect.header}</span>
          </h2>
          <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
            {t.adventureSelect.subheader}
          </span>
        </div>

        <div className="flex justify-end">
          <div className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-bold text-slate-300">
            {t.adventureSelect.highest} <span className="text-amber-400 font-extrabold">{highestStage}/100</span>
          </div>
        </div>
      </div>

      {/* Hero Showcase Card */}
      <div className="my-auto flex flex-col items-center">
        <div
          className="relative w-full p-4 rounded-3xl border-2 transition-all duration-300 overflow-hidden flex flex-col items-center shadow-2xl"
          style={{
            backgroundColor: '#0f1422',
            borderColor: currentSpecies.accentColor,
            boxShadow: `0 10px 30px ${currentSpecies.glowColor}`,
          }}
        >
          {/* Subtle glow aura */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{ backgroundColor: currentSpecies.themeHue }}
          />

          {/* Snake Avatar */}
          <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full blur-md opacity-60 animate-pulse"
              style={{ backgroundColor: currentSpecies.themeHue }}
            />
            <svg viewBox="0 0 50 50" className="w-full h-full drop-shadow-xl relative z-10">
              <defs>
                <radialGradient id="adv-head-grad" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor={currentSpecies.accentColor} />
                  <stop offset="70%" stopColor={currentSpecies.themeHue} />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
              </defs>
              {/* Snake Head */}
              <circle cx="25" cy="25" r="20" fill="url(#adv-head-grad)" />
              {/* Upper Crest */}
              <ellipse cx="25" cy="14" rx="9" ry="4" fill={currentSpecies.accentColor} opacity="0.95" />
              <ellipse cx="25" cy="13" rx="5" ry="2" fill="#ffffff" opacity="0.9" />
              {/* Cheeks */}
              <circle cx="14" cy="30" r="3" fill="#f43f5e" opacity="0.35" />
              <circle cx="36" cy="30" r="3" fill="#f43f5e" opacity="0.35" />
              {/* Eyes */}
              <circle cx="18" cy="22" r="5" fill="#ffffff" />
              <circle cx="18" cy="22" r="2.8" fill="#0f172a" />
              <circle cx="17" cy="20.5" r="1.2" fill="#ffffff" />
              <circle cx="32" cy="22" r="5" fill="#ffffff" />
              <circle cx="32" cy="22" r="2.8" fill="#0f172a" />
              <circle cx="31" cy="20.5" r="1.2" fill="#ffffff" />
            </svg>
          </div>

          <h3 className="text-lg font-black text-white">{currentSpeciesTr.name}</h3>
          <span
            className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mt-0.5"
            style={{
              backgroundColor: currentSpecies.bgRgba,
              color: currentSpecies.accentColor,
            }}
          >
            {currentSpeciesTr.title}
          </span>

          {/* Interactive Stage Stepper / Selector */}
          <div className="w-full mt-3 pt-3 border-t border-slate-800 flex items-center justify-between px-2">
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {t.adventureSelect.currentStage}
              </span>
              <span className="text-base font-black text-amber-400">
                {t.adventureSelect.stageNum(selectedStage)}
              </span>
            </div>

            {/* Stage Selector Stepper */}
            {highestStage > 1 ? (
              <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-700/80">
                <button
                  onClick={() => handleStageChange(selectedStage - 1)}
                  disabled={selectedStage <= 1}
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white font-black text-xs flex items-center justify-center transition-all cursor-pointer"
                  title="Önceki Aşama"
                >
                  -
                </button>
                <div className="px-2 text-xs font-bold text-white tabular-nums min-w-[2.5rem] text-center">
                  {selectedStage} <span className="text-[10px] text-slate-400">/ {highestStage}</span>
                </div>
                <button
                  onClick={() => handleStageChange(selectedStage + 1)}
                  disabled={selectedStage >= highestStage}
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white font-black text-xs flex items-center justify-center transition-all cursor-pointer"
                  title="Sonraki Aşama"
                >
                  +
                </button>
              </div>
            ) : (
              <div
                className="text-xs font-bold uppercase px-2.5 py-1 rounded-lg"
                style={{
                  backgroundColor: currentSpecies.bgRgba,
                  color: currentSpecies.accentColor,
                }}
              >
                {currentSpeciesTr.name}
              </div>
            )}
          </div>
        </div>

        {/* Snake Species Selector Grid */}
        <div className="w-full mt-3.5">
          <div className="text-xs font-bold text-slate-400 mb-1.5 px-1">
            {t.adventureSelect.chooseSnake}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {AVAILABLE_COLORS.map((col) => {
              const spec = CRAWLER_SPECIES[col];
              const specTr = t.species[col];
              const isSelected = col === selectedColor;
              return (
                <button
                  key={col}
                  onClick={() => {
                    soundManager.playButton();
                    triggerHaptic('light', settings.vibrationEnabled);
                    setSelectedColor(col);
                  }}
                  className={`p-2 rounded-2xl flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-white bg-slate-800 shadow-lg scale-105 ring-2'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 opacity-75 hover:opacity-100'
                  }`}
                  style={{
                    borderColor: isSelected ? spec.accentColor : undefined,
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full shadow-inner flex items-center justify-center"
                    style={{ backgroundColor: spec.themeHue }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-200 truncate w-full text-center">
                    {specTr.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full pt-2 pb-safe flex flex-col gap-2">
        <button
          onClick={() => {
            soundManager.playButton();
            triggerHaptic('medium', settings.vibrationEnabled);
            onStartAdventure(selectedColor, selectedStage);
          }}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-black text-base uppercase tracking-wider shadow-xl shadow-orange-500/30 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>🚀</span>
          <span>
            {selectedStage > 1
              ? t.adventureSelect.continueBtn(selectedStage)
              : t.adventureSelect.startBtn}
          </span>
        </button>

        {/* Quick Restart from Stage 1 or Jump to Latest Stage toggle */}
        {highestStage > 1 && (
          <div className="flex items-center justify-center gap-3">
            {selectedStage > 1 ? (
              <button
                onClick={() => handleStageChange(1)}
                className="text-[11px] font-bold text-slate-400 hover:text-slate-200 underline transition-colors cursor-pointer py-0.5"
              >
                {t.adventureSelect.restartStage1}
              </button>
            ) : (
              <button
                onClick={() => handleStageChange(highestStage)}
                className="text-[11px] font-bold text-amber-400 hover:text-amber-300 underline transition-colors cursor-pointer py-0.5"
              >
                {t.adventureSelect.continueBtn(highestStage)}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
