import React from 'react';
import { Portal } from '../types/game';
import { CRAWLER_SPECIES } from '../data/species';

interface PortalRendererProps {
  portal: Portal;
  cellSize: number;
  isSatisfied?: boolean;
  uncollectedOrbsCount?: number;
}

export const PortalRenderer: React.FC<PortalRendererProps> = ({
  portal,
  cellSize,
  isSatisfied,
  uncollectedOrbsCount = 0,
}) => {
  const species = CRAWLER_SPECIES[portal.color] || CRAWLER_SPECIES.green;
  const size = cellSize * 0.88;
  const left = portal.x * cellSize + (cellSize - size) / 2;
  const top = portal.y * cellSize + (cellSize - size) / 2;
  const isReady = uncollectedOrbsCount === 0 && !isSatisfied;

  return (
    <div
      className="absolute pointer-events-none transition-all duration-300 select-none"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 10,
      }}
    >
      {/* Ready Radiant Aura when all balls are collected */}
      {isReady && (
        <div
          className="absolute -inset-1 rounded-full blur-sm opacity-60 animate-ping"
          style={{ backgroundColor: species.themeHue }}
        />
      )}

      <svg viewBox="0 0 50 50" className="w-full h-full overflow-visible">
        <defs>
          {/* Deep dark pit gradient - recessed into board */}
          <radialGradient id={`hole-depth-${portal.id}`} cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#04060a" />
            <stop offset="65%" stopColor="#080c14" />
            <stop offset="90%" stopColor="#0f1624" />
            <stop offset="100%" stopColor="#1a2336" />
          </radialGradient>
        </defs>

        {/* Outer Hole Bevel / Ground Cutout Rim */}
        <circle
          cx="25"
          cy="25"
          r="23"
          fill="#0c111c"
          stroke="#1e293b"
          strokeWidth="1.5"
        />

        {/* Clear Colored Identifier Ring (shows which color snake fits into this hole) */}
        <circle
          cx="25"
          cy="25"
          r="20.5"
          fill="none"
          stroke={species.themeHue}
          strokeWidth={isReady ? 3 : 2.2}
          opacity={isSatisfied ? 0.3 : 1}
        />

        {/* Deep Dark Hole Pit (recessed into the board) */}
        <circle
          cx="25"
          cy="25"
          r="18"
          fill={`url(#hole-depth-${portal.id})`}
        />

        {/* Inner Dark Rim Shadow */}
        <circle
          cx="25"
          cy="24"
          r="17"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Center state details */}
        {isSatisfied ? (
          <circle cx="25" cy="25" r="8" fill="#04060a" stroke="#334155" strokeWidth="1" />
        ) : isReady ? (
          <g className="animate-pulse">
            <circle
              cx="25"
              cy="25"
              r="8"
              fill={species.themeHue}
              opacity="0.35"
            />
            {/* Ready glow ring */}
            <circle
              cx="25"
              cy="25"
              r="13"
              fill="none"
              stroke={species.accentColor}
              strokeWidth="1.5"
              strokeDasharray="4 3"
              className="animate-spin origin-center"
            />
          </g>
        ) : (
          /* When still waiting for colored orbs */
          <g>
            <circle
              cx="25"
              cy="25"
              r="12"
              fill="none"
              stroke={species.themeHue}
              strokeWidth="1"
              opacity="0.3"
            />
          </g>
        )}
      </svg>

      {/* Floating Remaining Orb Counter Badge if orbs needed */}
      {!isSatisfied && uncollectedOrbsCount > 0 && (
        <div
          className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full text-[9px] font-black tracking-tight flex items-center gap-0.5 shadow-md border border-white/40"
          style={{
            backgroundColor: species.themeHue,
            color: '#ffffff',
          }}
        >
          <span>●</span>
          <span>{uncollectedOrbsCount}</span>
        </div>
      )}
    </div>
  );
};
