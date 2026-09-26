import React, { useRef, useState, useEffect } from 'react';
import {
  LevelData,
  Creature,
  Portal,
  Direction,
  CosmeticSkin,
  SpecialTile,
  EnergyObject,
} from '../types/game';
import { BoardTile } from './BoardTile';
import { PortalRenderer } from './PortalRenderer';
import { CrawlerRenderer } from './CrawlerRenderer';
import { DIRECTION_VECTORS } from '../logic/puzzleSolver';
import { BoardTheme, DEFAULT_CLASSIC_THEME } from '../data/themes';

interface GameBoardProps {
  level: LevelData;
  creatures: Creature[];
  portals: Portal[];
  specialTiles?: SpecialTile[];
  energyObjects?: EnergyObject[];
  selectedCreatureId: string;
  onSelectCreature: (id: string) => void;
  onMove: (dir: Direction) => void;
  activeSkin: CosmeticSkin;
  swipeEnabled: boolean;
  hint?: { creatureId: string; direction: Direction } | null;
  shakeTrigger: number;
  theme?: BoardTheme;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  level,
  creatures,
  portals,
  specialTiles,
  energyObjects,
  selectedCreatureId,
  onSelectCreature,
  onMove,
  activeSkin,
  swipeEnabled,
  hint,
  shakeTrigger,
  theme = DEFAULT_CLASSIC_THEME,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cellSize, setCellSize] = useState<number>(36);

  // Touch swipe handling
  const touchStartPos = useRef<{ x: number; y: number } | null>(null);

  // Responsive 8x12 board calculation to utilize full screen space
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.parentElement?.clientWidth || window.innerWidth;
      const parentHeight = containerRef.current.parentElement?.clientHeight || window.innerHeight;

      // Generously use the screen space without bottom controls
      const maxAvailableWidth = Math.min(parentWidth - 24, 460);
      const maxAvailableHeight = Math.max(260, parentHeight - 110);

      const cols = level.width || 8;
      const rows = level.height || 12;

      const sizeByWidth = Math.floor(maxAvailableWidth / cols);
      const sizeByHeight = Math.floor(maxAvailableHeight / rows);
      const calculatedCell = Math.max(22, Math.min(sizeByWidth, sizeByHeight, 52));

      setCellSize(calculatedCell);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [level.width, level.height]);

  const cols = level.width;
  const rows = level.height;
  const actualBoardWidth = cellSize * cols;
  const actualBoardHeight = cellSize * rows;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!swipeEnabled || e.touches.length !== 1) return;
    touchStartPos.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!swipeEnabled || !touchStartPos.current) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const dx = endX - touchStartPos.current.x;
    const dy = endY - touchStartPos.current.y;
    touchStartPos.current = null;

    const minSwipeDist = 20;
    if (Math.abs(dx) < minSwipeDist && Math.abs(dy) < minSwipeDist) {
      return; // Tap, not swipe
    }

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) onMove('RIGHT');
      else onMove('LEFT');
    } else {
      if (dy > 0) onMove('DOWN');
      else onMove('UP');
    }
  };

  // Keyboard navigation for desktop accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          onMove('UP');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          onMove('DOWN');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          onMove('LEFT');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          onMove('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onMove]);

  // Check if a tile has obstacles, special tiles, or energy objects
  const getObstacleAt = (x: number, y: number) =>
    level.obstacles?.find((o) => o.x === x && o.y === y);

  const getSpecialTileAt = (x: number, y: number) => {
    const list = specialTiles || level.specialTiles;
    return list?.find((t) => t.x === x && t.y === y);
  };

  const getEnergyObjectAt = (x: number, y: number) => {
    const list = energyObjects || level.energyObjects;
    return list?.find((e) => e.x === x && e.y === y);
  };

  // Hint Arrow position
  let hintArrowStyle: React.CSSProperties | null = null;
  let hintArrowAngle = 0;
  if (hint) {
    const hintCreature = creatures.find((c) => c.id === hint.creatureId);
    if (hintCreature && !hintCreature.isExited && hintCreature.body.length > 0) {
      const head = hintCreature.body[0];
      const delta = DIRECTION_VECTORS[hint.direction];
      const targetX = head.x + delta.x;
      const targetY = head.y + delta.y;
      hintArrowStyle = {
        left: `${targetX * cellSize + cellSize / 2}px`,
        top: `${targetY * cellSize + cellSize / 2}px`,
      };
      if (hint.direction === 'UP') hintArrowAngle = 0;
      if (hint.direction === 'RIGHT') hintArrowAngle = 90;
      if (hint.direction === 'DOWN') hintArrowAngle = 180;
      if (hint.direction === 'LEFT') hintArrowAngle = 270;
    }
  }

  return (
    <div
      ref={containerRef}
      className="w-full flex-1 flex flex-col items-center justify-center select-none py-1 overflow-hidden"
    >
      {/* Outer Tactical Arena Frame with Dynamic Theme */}
      <div
        className={`relative p-2 rounded-3xl bg-gradient-to-b ${theme.frameGradient} border-2 shadow-2xl transition-all duration-300 ${
          shakeTrigger > 0 ? 'animate-[wiggle_0.2s_ease-in-out_2]' : ''
        }`}
        style={{
          borderColor: theme.frameBorder,
          boxShadow: `0 10px 30px ${theme.shadowColor}`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle decorative corner bolts */}
        <div
          className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full shadow-inner opacity-80"
          style={{ backgroundColor: theme.accentHue }}
        />
        <div
          className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full shadow-inner opacity-80"
          style={{ backgroundColor: theme.accentHue }}
        />
        <div
          className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full shadow-inner opacity-80"
          style={{ backgroundColor: theme.accentHue }}
        />
        <div
          className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full shadow-inner opacity-80"
          style={{ backgroundColor: theme.accentHue }}
        />

        {/* Inner Grid Arena */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-inner transition-colors duration-300"
          style={{
            width: `${actualBoardWidth}px`,
            height: `${actualBoardHeight}px`,
            backgroundColor: theme.arenaBg,
          }}
        >
          {/* Base Grid Floor Tiles */}
          {Array.from({ length: rows }).map((_, y) => (
            <div key={`row-${y}`} className="flex">
              {Array.from({ length: cols }).map((_, x) => (
                <div key={`cell-${x}-${y}`}>
                  <BoardTile
                    x={x}
                    y={y}
                    cellSize={cellSize}
                    obstacle={getObstacleAt(x, y)}
                    specialTile={getSpecialTileAt(x, y)}
                    energyObject={getEnergyObjectAt(x, y)}
                    theme={theme}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* Portals Layer */}
          {portals.map((portal) => {
            const currentOrbs = energyObjects || level.energyObjects || [];
            const uncollectedCount = currentOrbs.filter(
              (e) => !e.collected && e.color === portal.color
            ).length;
            return (
              <PortalRenderer
                key={portal.id}
                portal={portal}
                cellSize={cellSize}
                isSatisfied={portal.isSatisfied}
                uncollectedOrbsCount={uncollectedCount}
              />
            );
          })}

          {/* Crawlers Layer */}
          {creatures.map((creature) => (
            <CrawlerRenderer
              key={creature.id}
              creature={creature}
              cellSize={cellSize}
              isSelected={creature.id === selectedCreatureId}
              activeSkin={activeSkin}
              isHinted={hint?.creatureId === creature.id}
            />
          ))}

          {/* Hint Direction Indicator Arrow */}
          {hintArrowStyle && (
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40 animate-bounce"
              style={hintArrowStyle}
            >
              <div
                className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/50"
                style={{ transform: `rotate(${hintArrowAngle}deg)` }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 4l-6 6h4v8h4v-8h4z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
