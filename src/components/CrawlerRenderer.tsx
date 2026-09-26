import React from 'react';
import { Creature, Direction, CosmeticSkin, CrawlerColor } from '../types/game';
import { CRAWLER_SPECIES } from '../data/species';

interface CrawlerRendererProps {
  creature: Creature;
  cellSize: number;
  isSelected: boolean;
  activeSkin: CosmeticSkin;
  isHinted?: boolean;
}

export const CrawlerRenderer: React.FC<CrawlerRendererProps> = ({
  creature,
  cellSize,
  isSelected,
  activeSkin,
  isHinted,
}) => {
  if (creature.isExited || creature.body.length === 0) return null;

  const species = CRAWLER_SPECIES[creature.color] || CRAWLER_SPECIES.green;
  const head = creature.body[0];
  const direction: Direction = creature.direction || 'UP';

  // Eye pupil offset based on direction
  let pupilDx = 0;
  let pupilDy = 0;
  if (direction === 'UP') pupilDy = -2.2;
  if (direction === 'DOWN') pupilDy = 2.2;
  if (direction === 'LEFT') pupilDx = -2.2;
  if (direction === 'RIGHT') pupilDx = 2.2;

  // Dedicated vivid color palette for each species
  const getSnakeColorPalette = () => {
    const speciesPalettes: Record<
      CrawlerColor,
      { main: string; highlight: string; upperLayer: string; upperSpine: string; shadow: string }
    > = {
      blue: {
        // Ocean Snake
        main: '#1d4ed8',
        highlight: '#3b82f6',
        upperLayer: '#93c5fd',
        upperSpine: '#eff6ff',
        shadow: '#172554',
      },
      green: {
        // Leaf Snake
        main: '#047857',
        highlight: '#10b981',
        upperLayer: '#6ee7b7',
        upperSpine: '#ecfdf5',
        shadow: '#064e3b',
      },
      red: {
        // Ruby / Ember Snake
        main: '#b91c1c',
        highlight: '#ef4444',
        upperLayer: '#fca5a5',
        upperSpine: '#fff1f2',
        shadow: '#450a0a',
      },
      yellow: {
        // Sun Snake
        main: '#a16207',
        highlight: '#eab308',
        upperLayer: '#fef08a',
        upperSpine: '#ffffff',
        shadow: '#422006',
      },
      purple: {
        // Violet Snake
        main: '#7e22ce',
        highlight: '#a855f7',
        upperLayer: '#d8b4fe',
        upperSpine: '#faf5ff',
        shadow: '#3b0764',
      },
      orange: {
        // Amber Snake
        main: '#c2410c',
        highlight: '#f97316',
        upperLayer: '#fed7aa',
        upperSpine: '#fff7ed',
        shadow: '#431407',
      },
      pink: {
        // Rose Snake
        main: '#be185d',
        highlight: '#ec4899',
        upperLayer: '#fbcfe8',
        upperSpine: '#fff1f2',
        shadow: '#500724',
      },
      cyan: {
        // Sky / Glow Snake
        main: '#0e7490',
        highlight: '#06b6d4',
        upperLayer: '#a5f3fc',
        upperSpine: '#f0fdfa',
        shadow: '#083344',
      },
    };

    return speciesPalettes[creature.color] || speciesPalettes.green;
  };

  const colors = getSnakeColorPalette();
  const enteringProgress = creature.enteringProgress || 0;
  // Keep head 100% visible (scale 1.0) while tail slithers or enteringProgress === 0.
  // ONLY when tail has slithered in and sinking starts (enteringProgress > 0) does head smoothly scale down.
  const headScale =
    creature.isEntering && enteringProgress > 0
      ? Math.max(0.05, 1 - enteringProgress)
      : 1.0;
  const headOpacity =
    creature.isEntering && enteringProgress > 0
      ? Math.max(0, 1 - enteringProgress)
      : 1.0;

  // Construct continuous snake path from tail to head
  const pathPoints = creature.body.map((seg) => ({
    x: seg.x * cellSize + cellSize / 2,
    y: seg.y * cellSize + cellSize / 2,
  }));

  // Build SVG Path: start at head and draw lines towards tail
  const pathD = pathPoints
    .map((p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(' ');

  const bodyStrokeWidth = cellSize * 0.74;
  const upperLayerWidth = cellSize * 0.40;
  const spineStrokeWidth = cellSize * 0.14;

  const headCenterX = head.x * cellSize + cellSize / 2;
  const headCenterY = head.y * cellSize + cellSize / 2;
  const headSize = cellSize * 0.86;

  const isDead = creature.isDead;

  return (
    <div
      className={`absolute inset-0 pointer-events-none transition-all duration-200 ${
        creature.isEntering ? 'opacity-100 z-50' : !isSelected ? 'opacity-90' : 'opacity-100 z-30'
      }`}
    >
      {/* 1. SEAMLESS CONTINUOUS BODY PATH */}
      <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
        <defs>
          <linearGradient id={`snake-grad-${creature.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.highlight} />
            <stop offset="100%" stopColor={colors.main} />
          </linearGradient>

          <filter id={`snake-shadow-${creature.id}`}>
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.45)" />
          </filter>
        </defs>

        {/* Outer Shadow */}
        {creature.body.length > 1 && (
          <path
            d={pathD}
            fill="none"
            stroke="rgba(0, 0, 0, 0.35)"
            strokeWidth={bodyStrokeWidth + 4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Fully visible rounded body capsule */}
        {creature.body.length > 1 && (
          <path
            d={pathD}
            fill="none"
            stroke={`url(#snake-grad-${creature.id})`}
            strokeWidth={bodyStrokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#snake-shadow-${creature.id})`}
          />
        )}

        {/* PROMINENT UPPER LAYER */}
        {creature.body.length > 1 && (
          <>
            <path
              d={pathD}
              fill="none"
              stroke={colors.upperLayer}
              strokeWidth={upperLayerWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.96"
            />

            <path
              d={pathD}
              fill="none"
              stroke={colors.main}
              strokeWidth={upperLayerWidth * 0.35}
              strokeDasharray="4 8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.4"
            />

            <path
              d={pathD}
              fill="none"
              stroke={colors.upperSpine}
              strokeWidth={spineStrokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </>
        )}
      </svg>

      {/* 2. SNAKE HEAD */}
      <div
        className={`absolute pointer-events-none ${
          isHinted ? 'animate-bounce ring-4 ring-yellow-400 rounded-full' : ''
        }`}
        style={{
          left: `${headCenterX - headSize / 2}px`,
          top: `${headCenterY - headSize / 2}px`,
          width: `${headSize}px`,
          height: `${headSize}px`,
          transform: `scale(${headScale})`,
          opacity: headOpacity,
          transition: creature.isEntering
            ? 'transform 450ms cubic-bezier(0.4, 0, 0.2, 1), opacity 450ms ease-out'
            : 'transform 120ms ease-out, opacity 120ms ease-out',
          zIndex: creature.isEntering ? 80 : 50,
        }}
      >
        {/* MANDATORY ACTIVE TURN GLOW & HALO (Sıradaki Aktif Yılan Göstergesi) */}
        {isSelected && !isDead && enteringProgress === 0 && !creature.isEntering && (
          <>
            {/* Outer expanding energy pulse */}
            <div
              className="absolute -inset-2.5 rounded-full border-2 border-white animate-ping opacity-60 pointer-events-none"
              style={{ borderColor: colors.highlight }}
            />
            {/* Bright rotating radiant beacon ring */}
            <div
              className="absolute -inset-1.5 rounded-full border-2 border-dashed animate-[spin_4s_linear_infinite] opacity-90 pointer-events-none shadow-lg shadow-white/30"
              style={{ borderColor: colors.upperSpine }}
            />
          </>
        )}

        <svg viewBox="0 0 50 50" className="w-full h-full drop-shadow-lg overflow-visible">
          <defs>
            <radialGradient id={`head-grad-${creature.id}`} cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor={colors.highlight} />
              <stop offset="70%" stopColor={colors.main} />
              <stop offset="100%" stopColor={colors.shadow} />
            </radialGradient>
          </defs>

          {/* Smooth Snake Head Base (Always vibrant!) */}
          <circle cx="25" cy="25" r="20" fill={`url(#head-grad-${creature.id})`} />

          {/* Upper Crest on Head */}
          <ellipse cx="25" cy="14" rx="9" ry="4" fill={colors.upperLayer} opacity="0.95" />
          <ellipse cx="25" cy="13" rx="5" ry="2" fill={colors.upperSpine} opacity="0.9" />

          {/* Soft Cheeks */}
          <circle cx="14" cy="30" r="3" fill="#f43f5e" opacity="0.4" />
          <circle cx="36" cy="30" r="3" fill="#f43f5e" opacity="0.4" />

          {/* Eyes (Dead 'X X' or Alive cute eyes with bright white backgrounds) */}
          {isDead ? (
            <g className="font-bold">
              {/* Left Eye: White circular background with distinct red/dark 'X' */}
              <circle cx="18" cy="22" r="5.5" fill="#ffffff" />
              <line x1="15" y1="19" x2="21" y2="25" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" />
              <line x1="21" y1="19" x2="15" y2="25" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" />

              {/* Right Eye: White circular background with distinct red/dark 'X' */}
              <circle cx="32" cy="22" r="5.5" fill="#ffffff" />
              <line x1="29" y1="19" x2="35" y2="25" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" />
              <line x1="35" y1="19" x2="29" y2="25" stroke="#ef4444" strokeWidth="2.8" strokeLinecap="round" />
            </g>
          ) : (
            <g className="animate-eye-blink origin-center">
              {/* Left Eye */}
              <circle cx="18" cy="22" r="5" fill="#ffffff" />
              <circle cx={18 + pupilDx} cy={22 + pupilDy} r="2.8" fill="#0f172a" />
              <circle cx={17 + pupilDx * 0.5} cy={20.5 + pupilDy * 0.5} r="1.2" fill="#ffffff" />

              {/* Right Eye */}
              <circle cx="32" cy="22" r="5" fill="#ffffff" />
              <circle cx={32 + pupilDx} cy={22 + pupilDy} r="2.8" fill="#0f172a" />
              <circle cx={31 + pupilDx * 0.5} cy={20.5 + pupilDy * 0.5} r="1.2" fill="#ffffff" />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
