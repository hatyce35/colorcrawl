import React from 'react';
import { Obstacle, SpecialTile, EnergyObject } from '../types/game';
import { CRAWLER_SPECIES } from '../data/species';
import { BoardTheme, DEFAULT_CLASSIC_THEME } from '../data/themes';

interface BoardTileProps {
  x: number;
  y: number;
  cellSize: number;
  obstacle?: Obstacle;
  specialTile?: SpecialTile;
  energyObject?: EnergyObject;
  isHintTarget?: boolean;
  theme?: BoardTheme;
}

export const BoardTile: React.FC<BoardTileProps> = ({
  x,
  y,
  cellSize,
  obstacle,
  specialTile,
  energyObject,
  isHintTarget,
  theme = DEFAULT_CLASSIC_THEME,
}) => {
  const isEven = (x + y) % 2 === 0;

  return (
    <div
      className={`relative rounded-xl transition-colors duration-300 select-none overflow-hidden ${
        isHintTarget ? 'ring-2 ring-yellow-400/80 ring-inset' : ''
      }`}
      style={{
        width: `${cellSize}px`,
        height: `${cellSize}px`,
        // Dynamic theme-based checkerboard arena floor with soft depth
        backgroundColor: isEven ? theme.tileEven : theme.tileOdd,
        boxShadow: theme.isLight
          ? 'inset 0 1px 2px rgba(255, 255, 255, 0.9), inset 0 -1px 3px rgba(0, 0, 0, 0.08)'
          : 'inset 0 1px 1px rgba(255, 255, 255, 0.05), inset 0 -2px 4px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Subtle floor grid tile border */}
      <div
        className="absolute inset-0 rounded-xl border pointer-events-none"
        style={{
          borderColor: theme.tileBorder,
          opacity: theme.isLight ? 0.85 : 0.4,
        }}
      />

      {/* Special Tiles */}
      {specialTile && (
        <div className="absolute inset-0.5 rounded-lg flex items-center justify-center">
          {specialTile.type === 'ice' && (
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-teal-300/30 border border-cyan-300/40 shadow-inner">
              <svg viewBox="0 0 40 40" className="w-full h-full opacity-60">
                <path d="M5 10 L35 30 M15 5 L25 35 M8 28 L32 12" stroke="#e0f2fe" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="12" cy="18" r="1.5" fill="#ffffff" />
                <circle cx="28" cy="24" r="1" fill="#ffffff" />
              </svg>
            </div>
          )}

          {specialTile.type === 'speed' && (
            <div className="flex flex-col items-center justify-center gap-0.5 opacity-70">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-300 animate-pulse">
                <path fill="currentColor" d="M12 4l-7 8h5v8h4v-8h5z" />
              </svg>
            </div>
          )}

          {specialTile.type === 'gate' && (
            <div
              className={`absolute inset-0 rounded-lg flex items-center justify-center border-2 transition-all duration-300 ${
                specialTile.isOpen
                  ? 'bg-emerald-950/40 border-emerald-500/30 opacity-40'
                  : 'bg-amber-950/70 border-amber-500/80 shadow-md'
              }`}
            >
              {specialTile.isOpen ? (
                <span className="text-xs text-emerald-400 font-bold">AÇIK</span>
              ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400">
                  <path
                    fill="currentColor"
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                  />
                </svg>
              )}
            </div>
          )}
        </div>
      )}

      {/* Obstacles */}
      {obstacle && (
        <div className="absolute inset-1 flex items-center justify-center pointer-events-none">
          {obstacle.type === 'rock' && (
            <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-md">
              <defs>
                <radialGradient id={`rock-${x}-${y}`} cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="60%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </radialGradient>
              </defs>
              <path
                d="M8 20 Q 10 8 22 7 Q 34 8 36 20 Q 35 33 22 34 Q 8 33 8 20 Z"
                fill={`url(#rock-${x}-${y})`}
              />
              {/* Moss speckle */}
              <circle cx="16" cy="18" r="2.5" fill="#10b981" opacity="0.6" />
              <circle cx="26" cy="22" r="2" fill="#059669" opacity="0.5" />
            </svg>
          )}

          {obstacle.type === 'wall' && (
            <div className="w-full h-full rounded-lg bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 border-t border-slate-500 shadow-md flex items-center justify-center p-1">
              <div className="w-full h-full border border-slate-500/40 rounded flex flex-col justify-around py-1">
                <div className="h-0.5 bg-slate-800/80 w-full" />
                <div className="h-0.5 bg-slate-800/80 w-full" />
              </div>
            </div>
          )}

          {obstacle.type === 'log' && (
            <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-md">
              <defs>
                <radialGradient id={`log-${x}-${y}`} cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#b45309" />
                  <stop offset="70%" stopColor="#78350f" />
                  <stop offset="100%" stopColor="#451a03" />
                </radialGradient>
              </defs>
              <ellipse cx="20" cy="20" rx="16" ry="14" fill={`url(#log-${x}-${y})`} />
              <ellipse cx="20" cy="20" rx="10" ry="8" fill="none" stroke="#d97706" strokeWidth="1.2" opacity="0.6" />
              <ellipse cx="20" cy="20" rx="5" ry="4" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
              <circle cx="20" cy="20" r="1.5" fill="#451a03" />
            </svg>
          )}

          {obstacle.type === 'crystal' && (
            <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-lg">
              <defs>
                <linearGradient id={`cryst-${x}-${y}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#312e81" />
                </linearGradient>
              </defs>
              <polygon points="20,4 28,14 26,34 14,34 12,14" fill={`url(#cryst-${x}-${y})`} />
              <polygon points="20,4 28,14 20,34" fill="#c084fc" opacity="0.4" />
              <circle cx="20" cy="12" r="1.5" fill="#ffffff" opacity="0.8" />
            </svg>
          )}
        </div>
      )}

      {/* Round 3D Colored Orb (Yuvarlak Renkli Top) */}
      {energyObject && !energyObject.collected && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {(() => {
            const color = energyObject.color || 'yellow';
            const species = CRAWLER_SPECIES[color] || CRAWLER_SPECIES.green;
            const ballRadius = Math.max(7, Math.floor(cellSize * 0.30));

            return (
              <div className="relative flex items-center justify-center animate-energy-pulse">
                {/* Soft glowing aura */}
                <div
                  className="absolute rounded-full blur-md opacity-70 animate-pulse pointer-events-none"
                  style={{
                    width: `${ballRadius * 2.4}px`,
                    height: `${ballRadius * 2.4}px`,
                    backgroundColor: species.themeHue,
                  }}
                />

                {/* 3D Glossy Sphere SVG */}
                <svg
                  viewBox="0 0 40 40"
                  style={{
                    width: `${ballRadius * 2.2}px`,
                    height: `${ballRadius * 2.2}px`,
                  }}
                  className="drop-shadow-lg overflow-visible relative z-10"
                >
                  <defs>
                    <radialGradient id={`orb-grad-${x}-${y}`} cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="25%" stopColor={species.accentColor} />
                      <stop offset="70%" stopColor={species.themeHue} />
                      <stop offset="100%" stopColor="#090d16" />
                    </radialGradient>
                  </defs>

                  {/* Outer delicate energy orbit ring */}
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke={species.accentColor}
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.6"
                    className="animate-spin origin-center"
                  />

                  {/* Main 3D Spherical Orb Body */}
                  <circle
                    cx="20"
                    cy="20"
                    r="14"
                    fill={`url(#orb-grad-${x}-${y})`}
                  />

                  {/* Glass Specular Highlight (Curved light reflection) */}
                  <ellipse
                    cx="16"
                    cy="14"
                    rx="5"
                    ry="2.5"
                    transform="rotate(-25 16 14)"
                    fill="#ffffff"
                    opacity="0.85"
                  />

                  {/* Small extra pinpoint light sparkle */}
                  <circle
                    cx="14"
                    cy="12"
                    r="1.2"
                    fill="#ffffff"
                    opacity="0.95"
                  />
                </svg>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
