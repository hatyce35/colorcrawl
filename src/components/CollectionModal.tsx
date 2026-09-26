import React, { useState } from 'react';
import { UserProgress, GameSettings, CrawlerColor, CosmeticSkin } from '../types/game';
import { CRAWLER_SPECIES, COSMETIC_SKINS } from '../data/species';
import { CrawlerRenderer } from './CrawlerRenderer';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { getT } from '../i18n/translations';

interface CollectionModalProps {
  userProgress: UserProgress;
  settings: GameSettings;
  onUpdateProgress: (progress: UserProgress) => void;
  onBack: () => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  userProgress,
  settings,
  onUpdateProgress,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<'creatures' | 'skins'>('creatures');
  const [selectedColor, setSelectedColor] = useState<CrawlerColor>('blue');
  const t = getT(settings.language);

  const totalStars = Object.values(userProgress.completedLevels).reduce(
    (acc, l) => acc + l.stars,
    0
  );

  const colors: CrawlerColor[] = [
    'red',
    'blue',
    'yellow',
    'green',
    'purple',
    'orange',
    'pink',
    'cyan',
  ];

  const species = CRAWLER_SPECIES[selectedColor];
  const speciesTr = t.species[selectedColor];

  // Dummy creature for interactive live preview
  const previewCreature = {
    id: 'preview',
    color: selectedColor,
    body: [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 2, y: 3 },
    ],
    direction: 'RIGHT' as const,
  };

  const handleEquipSkin = (skin: CosmeticSkin) => {
    soundManager.playButton();
    triggerHaptic('light', settings.vibrationEnabled);
    onUpdateProgress({
      ...userProgress,
      activeSkin: skin,
    });
  };

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

        <h2 className="text-base font-extrabold text-white">{t.collection.collectionTitle}</h2>

        <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="tabular-nums">{totalStars}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 gap-2 my-3">
        <button
          onClick={() => {
            soundManager.playButton();
            triggerHaptic('light', settings.vibrationEnabled);
            setActiveTab('creatures');
          }}
          className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'creatures'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-slate-900 text-slate-400 border border-slate-800'
          }`}
        >
          {t.collection.tabSpecies(colors.length)}
        </button>
        <button
          onClick={() => {
            soundManager.playButton();
            triggerHaptic('light', settings.vibrationEnabled);
            setActiveTab('skins');
          }}
          className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'skins'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-slate-900 text-slate-400 border border-slate-800'
          }`}
        >
          {t.collection.tabSkins(COSMETIC_SKINS.length)}
        </button>
      </div>

      {/* Interactive Preview Canvas */}
      <div className="relative w-full h-44 rounded-3xl bg-gradient-to-b from-slate-900 to-[#0e1322] border-2 border-slate-800 p-4 mb-4 flex items-center justify-center overflow-hidden shadow-inner">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Glow halo */}
        <div
          className="absolute w-32 h-32 rounded-full blur-2xl opacity-40 pointer-events-none"
          style={{ backgroundColor: species.themeHue }}
        />

        {/* Live Crawler Model */}
        <div className="relative" style={{ width: '160px', height: '160px' }}>
          <CrawlerRenderer
            creature={previewCreature}
            cellSize={40}
            isSelected={true}
            activeSkin={userProgress.activeSkin}
          />
        </div>

        <div className="absolute bottom-2 left-4 text-left">
          <span className="text-xs font-extrabold text-white">{speciesTr.name}</span>
          <span className="text-[10px] text-slate-400 block">{speciesTr.title}</span>
        </div>

        <div className="absolute bottom-2 right-4">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {t.collection.skinLabel(userProgress.activeSkin)}
          </span>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto pr-1">
        {activeTab === 'creatures' ? (
          <div className="grid grid-cols-4 gap-2">
            {colors.map((color) => {
              const sp = CRAWLER_SPECIES[color];
              const spTr = t.species[color];
              const isSelected = color === selectedColor;

              return (
                <button
                  key={color}
                  onClick={() => {
                    soundManager.playButton();
                    triggerHaptic('light', settings.vibrationEnabled);
                    setSelectedColor(color);
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-white/60 shadow-lg scale-105 ring-2 ring-indigo-400/50'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white/80 shadow-md mb-1.5 flex items-center justify-center"
                    style={{ backgroundColor: sp.themeHue }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200 truncate w-full text-center">
                    {spTr.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            {COSMETIC_SKINS.map((skin) => {
              const skinTr = t.skins[skin.id] || { name: skin.name, description: skin.description };
              const isUnlocked = totalStars >= skin.unlockStars;
              const isEquipped = userProgress.activeSkin === skin.id;

              return (
                <div
                  key={skin.id}
                  className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                    isEquipped
                      ? 'bg-indigo-950/40 border-indigo-500/60 shadow-md'
                      : 'bg-slate-900/90 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${skin.gradient} border border-white/30 shadow-md flex items-center justify-center`}
                    >
                      {!isUnlocked && (
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current">
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{skinTr.name}</span>
                      <span className="text-[10px] text-slate-400 leading-tight">
                        {skinTr.description}
                      </span>
                    </div>
                  </div>

                  <div>
                    {isEquipped ? (
                      <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 font-extrabold text-[11px] border border-emerald-500/30">
                        {t.collection.skinEquipped}
                      </span>
                    ) : isUnlocked ? (
                      <button
                        onClick={() => handleEquipSkin(skin.id)}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 active:scale-95 cursor-pointer"
                      >
                        {t.collection.skinEquipBtn}
                      </button>
                    ) : (
                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span>{t.collection.skinUnlockStars(skin.unlockStars)}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
