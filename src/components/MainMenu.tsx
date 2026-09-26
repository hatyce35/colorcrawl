import React, { useEffect, useState, useRef } from 'react';
import { UserProgress, GameSettings, ViewScreen } from '../types/game';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { DailyQuestsModal } from './DailyQuestsModal';
import { ensureDailyQuests } from '../utils/dailyQuests';
import { getT } from '../i18n/translations';

interface MainMenuProps {
  userProgress: UserProgress;
  settings: GameSettings;
  onNavigate: (screen: ViewScreen) => void;
  onStartLevel: (levelId: number) => void;
  onUpdateProgress: (progress: UserProgress) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  userProgress,
  settings,
  onNavigate,
  onStartLevel,
  onUpdateProgress,
}) => {
  const [showQuestsModal, setShowQuestsModal] = useState(false);
  const t = getT(settings.language);
  const mascotRef = useRef<HTMLDivElement>(null);

  // Pupil tracking coordinates (offset in SVG units)
  const [pupilOffset, setPupilOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const lastMouseTimeRef = useRef<number>(Date.now());

  // Ensure daily quests are initialized
  useEffect(() => {
    const updated = ensureDailyQuests(userProgress);
    if (updated !== userProgress) {
      onUpdateProgress(updated);
    }
  }, [userProgress, onUpdateProgress]);

  // Compute total earned stars
  const totalStars = Object.values(userProgress.completedLevels).reduce(
    (acc, lvl) => acc + lvl.stars,
    0
  );

  // Unlocked badges count
  const unlockedBadgesCount = userProgress.unlockedAchievements?.length || 0;

  // Daily quest pending claims / active tasks
  const pendingQuests =
    userProgress.dailyQuests?.filter((q) => q.completed && !q.claimed).length || 0;

  // Background wandering ambient crawlers
  const [ambientTicks, setAmbientTicks] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setAmbientTicks((t) => (t + 1) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // 1. Mouse tracking for mascot eye pupils
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMouseTimeRef.current = Date.now();
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - mascotCenterX;
      const dy = e.clientY - mascotCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0) {
        // Max pupil travel radius is 2.5 units
        const maxRadius = 2.4;
        const scale = Math.min(maxRadius, distance / 40);
        setPupilOffset({
          x: (dx / distance) * scale,
          y: (dy / distance) * scale,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 2. Idle wandering gaze when no mouse movement
  useEffect(() => {
    const idleGazeInterval = setInterval(() => {
      // If no mouse movement for 1.8 seconds, look around randomly
      if (Date.now() - lastMouseTimeRef.current > 1800) {
        const gazeAngles = [0, 45, 90, 135, 180, 225, 270, 315, 0, 0];
        const randomAngle = gazeAngles[Math.floor(Math.random() * gazeAngles.length)] * (Math.PI / 180);
        const randomDist = 1.2 + Math.random() * 1.1;
        setPupilOffset({
          x: Math.cos(randomAngle) * randomDist,
          y: Math.sin(randomAngle) * randomDist,
        });
      }
    }, 2000);

    return () => clearInterval(idleGazeInterval);
  }, []);

  // 3. Smooth Eye Blinking every 3 seconds
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 180);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handlePlay = () => {
    soundManager.playButton();
    triggerHaptic('medium', settings.vibrationEnabled);
    const targetLevel = userProgress.currentLevelId || 1;
    onStartLevel(targetLevel);
  };

  const handleAdventure = () => {
    soundManager.playButton();
    triggerHaptic('medium', settings.vibrationEnabled);
    onNavigate('adventure-select');
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center py-4 sm:py-6 px-4 overflow-hidden select-none max-w-md mx-auto">
      {/* Animated Ambient Background Snakes */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        {/* Snake 1: Red */}
        <svg
          className="absolute w-64 h-32 transition-transform duration-100"
          style={{
            left: `${10 + Math.sin(ambientTicks * 0.02) * 25}%`,
            top: `${10 + Math.cos(ambientTicks * 0.02) * 8}%`,
            transform: `rotate(${Math.cos(ambientTicks * 0.02) * 15}deg)`,
          }}
          viewBox="0 0 200 80"
        >
          <path d="M 180 40 Q 140 20 100 40 T 20 40" fill="none" stroke="#dc2626" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 180 40 Q 140 20 100 40 T 20 40" fill="none" stroke="#fca5a5" strokeWidth="11" strokeLinecap="round" opacity="0.95" />
          <path d="M 180 40 Q 140 20 100 40 T 20 40" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
          <circle cx="180" cy="40" r="14" fill="#dc2626" />
          <ellipse cx="180" cy="35" rx="7" ry="3" fill="#fca5a5" opacity="0.9" />
          <circle cx="184" cy="36" r="3" fill="#ffffff" />
          <circle cx="185" cy="36" r="1.5" fill="#0f172a" />
          <circle cx="184" cy="44" r="3" fill="#ffffff" />
          <circle cx="185" cy="44" r="1.5" fill="#0f172a" />
        </svg>

        {/* Snake 2: Blue */}
        <svg
          className="absolute w-72 h-36 transition-transform duration-100"
          style={{
            right: `${5 + Math.cos(ambientTicks * 0.015) * 25}%`,
            top: `${42 + Math.sin(ambientTicks * 0.015) * 12}%`,
            transform: `rotate(${-20 + Math.sin(ambientTicks * 0.02) * 18}deg)`,
          }}
          viewBox="0 0 220 80"
        >
          <path d="M 200 40 Q 150 65 100 40 T 20 40" fill="none" stroke="#2563eb" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 200 40 Q 150 65 100 40 T 20 40" fill="none" stroke="#93c5fd" strokeWidth="10" strokeLinecap="round" opacity="0.95" />
          <path d="M 200 40 Q 150 65 100 40 T 20 40" fill="none" stroke="#eff6ff" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
          <circle cx="200" cy="40" r="13" fill="#2563eb" />
          <ellipse cx="200" cy="35" rx="6" ry="2.5" fill="#93c5fd" opacity="0.9" />
          <circle cx="204" cy="36" r="2.5" fill="#ffffff" />
          <circle cx="204" cy="44" r="2.5" fill="#ffffff" />
        </svg>

        {/* Snake 3: Green */}
        <svg
          className="absolute w-56 h-28 transition-transform duration-100"
          style={{
            right: `${12 + Math.sin(ambientTicks * 0.025) * 20}%`,
            bottom: `${12 + Math.sin(ambientTicks * 0.02) * 10}%`,
            transform: `rotate(${-15 + Math.cos(ambientTicks * 0.02) * 10}deg)`,
          }}
          viewBox="0 0 180 60"
        >
          <path d="M 160 30 Q 120 50 80 30 T 20 30" fill="none" stroke="#059669" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 160 30 Q 120 50 80 30 T 20 30" fill="none" stroke="#6ee7b7" strokeWidth="9" strokeLinecap="round" opacity="0.95" />
          <path d="M 160 30 Q 120 50 80 30 T 20 30" fill="none" stroke="#ecfdf5" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <circle cx="160" cy="30" r="12" fill="#059669" />
          <ellipse cx="160" cy="26" rx="5" ry="2" fill="#6ee7b7" opacity="0.9" />
          <circle cx="163" cy="27" r="2.5" fill="#ffffff" />
          <circle cx="163" cy="33" r="2.5" fill="#ffffff" />
        </svg>
      </div>

      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between z-10 pt-safe">
        <div className="flex items-center gap-2">
          {/* Stars Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-400 fill-current">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-xs font-bold text-slate-200 tabular-nums">{totalStars}</span>
          </div>

          {/* Coins Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm">
            <span className="text-xs">🪙</span>
            <span className="text-xs font-bold text-amber-300 tabular-nums">
              {userProgress.coins || 0}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Daily Quests Button */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', settings.vibrationEnabled);
              setShowQuestsModal(true);
            }}
            className="relative px-3 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/40 text-amber-300 hover:text-white font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
          >
            <span>🎁</span>
            <span>{t.mainMenu.questsBtn}</span>
            {pendingQuests > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center animate-bounce">
                {pendingQuests}
              </span>
            )}
          </button>

          {/* Settings Button */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', settings.vibrationEnabled);
              onNavigate('settings');
            }}
            className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label={t.mainMenu.settingsAria}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Hero & Title Section */}
      <div className="flex flex-col items-center text-center my-auto z-10 w-full">
        {/* Animated Mascot Hero Badge with Moving & Blinking Eyes */}
        <div ref={mascotRef} className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 group cursor-pointer">
          {/* Yellow Neon Pulsing Aura behind Mascot */}
          <div
            className="absolute -inset-3 rounded-full blur-2xl opacity-75 animate-pulse pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #facc15 0%, #eab308 50%, transparent 75%)',
            }}
          />

          {/* Mascot Container */}
          <div className="relative w-full h-full rounded-3xl bg-slate-900/90 border-2 border-amber-400/60 shadow-2xl flex items-center justify-center p-3 backdrop-blur-sm transform transition-transform group-hover:scale-105">
            <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow-xl overflow-visible">
              {/* Cute Blue Mascot Body */}
              <circle cx="30" cy="30" r="22" fill="#2563eb" />
              <circle cx="30" cy="30" r="21" fill="url(#blueHeadGrad)" />

              <defs>
                <linearGradient id="blueHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="60%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>

              {/* Head Highlights */}
              <ellipse cx="25" cy="18" rx="8" ry="4" fill="#93c5fd" opacity="0.85" />
              <ellipse cx="25" cy="16" rx="4" ry="2" fill="#ffffff" opacity="0.9" />

              {/* Eyes Container */}
              {isBlinking ? (
                // Blinking State: cute horizontal curved lines
                <g stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" fill="none">
                  <path d="M 19 28 Q 23 31 27 28" />
                  <path d="M 33 28 Q 37 31 41 28" />
                </g>
              ) : (
                // Open Eyes State with Dynamic Pupil Tracking & Highlights
                <g>
                  {/* Left Eye Sclera */}
                  <circle cx="23" cy="28" r="5.2" fill="#ffffff" stroke="#1e3a8a" strokeWidth="0.8" />
                  {/* Left Pupil (Tracked) */}
                  <circle
                    cx={23 + pupilOffset.x}
                    cy={28 + pupilOffset.y}
                    r="2.8"
                    fill="#090d16"
                  />
                  {/* Left Eye Sparkle */}
                  <circle
                    cx={23 + pupilOffset.x * 0.7 - 0.8}
                    cy={28 + pupilOffset.y * 0.7 - 0.8}
                    r="1.2"
                    fill="#ffffff"
                  />

                  {/* Right Eye Sclera */}
                  <circle cx="37" cy="28" r="5.2" fill="#ffffff" stroke="#1e3a8a" strokeWidth="0.8" />
                  {/* Right Pupil (Tracked) */}
                  <circle
                    cx={37 + pupilOffset.x}
                    cy={28 + pupilOffset.y}
                    r="2.8"
                    fill="#090d16"
                  />
                  {/* Right Eye Sparkle */}
                  <circle
                    cx={37 + pupilOffset.x * 0.7 - 0.8}
                    cy={28 + pupilOffset.y * 0.7 - 0.8}
                    r="1.2"
                    fill="#ffffff"
                  />
                </g>
              )}

              {/* Cheeks */}
              <circle cx="16" cy="35" r="3.2" fill="#f43f5e" opacity="0.5" />
              <circle cx="44" cy="35" r="3.2" fill="#f43f5e" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Connected Circle Segments Title (Each letter inside adjacent blue/orange circles) */}
        <div className="relative flex flex-col items-center mt-1 mb-2">
          <div
            className="flex items-center justify-center flex-wrap gap-y-2 select-none transform-gpu hover:scale-105 transition-transform"
            style={{
              fontFamily: "'Lilita One', 'Luckiest Guy', 'Fredoka', cursive, sans-serif",
            }}
          >
            {(() => {
              const words = t.mainMenu.gameTitle.split(' ');
              let globalLetterIndex = 0;

              return words.map((word, wordIdx) => (
                <div key={wordIdx} className="flex items-center -space-x-1.5 sm:-space-x-2 mx-1 sm:mx-1.5">
                  {word.split('').map((char, charIdx) => {
                    const isBlue = globalLetterIndex % 2 === 0;
                    const isC = char.toUpperCase() === 'C';
                    globalLetterIndex++;

                    return (
                      <div
                        key={charIdx}
                        className={`relative rounded-full flex items-center justify-center border-2 border-slate-900/80 shadow-lg transition-transform ${
                          isC ? 'w-12 h-12 sm:w-14 sm:h-14 z-20 scale-105' : 'w-8 h-8 sm:w-10 sm:h-10 z-10'
                        } ${
                          isBlue
                            ? 'bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 text-white'
                            : 'bg-gradient-to-br from-amber-300 via-orange-500 to-rose-600 text-white'
                        }`}
                      >
                        {/* Glossy Top Arc */}
                        <div className="absolute inset-x-1 top-0.5 h-1/2 rounded-t-full bg-gradient-to-b from-white/35 to-transparent pointer-events-none" />
                        <span
                          className={`relative font-black drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.7)] ${
                            isC ? 'text-[28px] sm:text-[32px]' : 'text-base sm:text-xl'
                          }`}
                        >
                          {char}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ));
            })()}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-2 max-w-xs leading-relaxed drop-shadow-md">
            {t.mainMenu.gameTagline}
          </p>
        </div>
      </div>

      {/* Primary Actions Grid */}
      <div className="w-full flex flex-col gap-2.5 z-10 pb-safe">
        {/* 1. Play Button (Classic Levels - Blue Gradient) */}
        <button
          onClick={handlePlay}
          className="w-full px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-black text-base uppercase tracking-wider shadow-xl shadow-blue-500/30 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-start gap-3.5"
        >
          <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span>{t.mainMenu.playClassic}</span>
            <span className="text-[10px] font-bold text-sky-100/90 normal-case">
              {t.mainMenu.classicDesc}
            </span>
          </div>
        </button>

        {/* 2. Adventure Mode Button */}
        <button
          onClick={handleAdventure}
          className="w-full px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-black text-base uppercase tracking-wider shadow-xl shadow-orange-500/30 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-start gap-3.5"
        >
          <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
            <span className="text-xl leading-none">🧭</span>
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span>{t.mainMenu.adventureMode}</span>
            <span className="text-[10px] font-bold text-slate-900/80 normal-case">
              {t.mainMenu.adventureDesc}
            </span>
          </div>
        </button>

        {/* 3. 3-Button Row: [ Bölümler ] [ Koleksiyon ] [ Rozetler ] */}
        <div className="grid grid-cols-3 gap-2 mt-0.5">
          {/* Levels Button */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', settings.vibrationEnabled);
              onNavigate('level-select');
            }}
            className="py-3 px-1 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-md active:scale-[0.98] transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.2">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
            <span>{t.mainMenu.levelsBtn}</span>
          </button>

          {/* Collection Button */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', settings.vibrationEnabled);
              onNavigate('collection');
            }}
            className="py-3 px-1 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 text-slate-200 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider active:scale-[0.98] transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1"
          >
            <span className="text-sm">🐛</span>
            <span>{t.mainMenu.collectionBtn}</span>
          </button>

          {/* Badges / Rozetler Button */}
          <button
            onClick={() => {
              soundManager.playButton();
              triggerHaptic('light', settings.vibrationEnabled);
              onNavigate('achievements');
            }}
            className="py-3 px-1 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-amber-500/50 text-amber-300 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider active:scale-[0.98] transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 shadow-md shadow-amber-500/10"
          >
            <span className="text-sm">🏆</span>
            <span>{t.mainMenu.badgesBtn}</span>
            {unlockedBadgesCount > 0 && (
              <span className="hidden sm:inline-block text-[10px] text-amber-400/90 font-black">
                ({unlockedBadgesCount})
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Daily Quests Modal */}
      {showQuestsModal && (
        <DailyQuestsModal
          userProgress={userProgress}
          settings={settings}
          onUpdateProgress={onUpdateProgress}
          onClose={() => setShowQuestsModal(false)}
        />
      )}
    </div>
  );
};
