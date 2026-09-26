import { CrawlerColor, LevelData, Coordinate, Obstacle, SpecialTile, EnergyObject } from '../types/game';
import { getThemeForStage } from '../data/themes';

interface GeneratorOptions {
  stage: number;
  color: CrawlerColor;
}

const ALL_COLORS: CrawlerColor[] = ['green', 'blue', 'red', 'yellow', 'purple', 'orange', 'pink', 'cyan'];

// Breadth-first search connectivity checker
function checkConnectivity(
  start: Coordinate,
  targets: Coordinate[],
  width: number,
  height: number,
  obstacles: Obstacle[],
  extraBlocked: Coordinate[] = []
): boolean {
  const obstacleSet = new Set(obstacles.map((o) => `${o.x},${o.y}`));
  extraBlocked.forEach((b) => obstacleSet.add(`${b.x},${b.y}`));

  const visited = new Set<string>();
  const queue: Coordinate[] = [start];
  visited.add(`${start.x},${start.y}`);

  while (queue.length > 0) {
    const current = queue.shift()!;
    const neighbors = [
      { x: current.x + 1, y: current.y },
      { x: current.x - 1, y: current.y },
      { x: current.x, y: current.y + 1 },
      { x: current.x, y: current.y - 1 },
    ];
    for (const n of neighbors) {
      if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
        const key = `${n.x},${n.y}`;
        if (!visited.has(key) && !obstacleSet.has(key)) {
          visited.add(key);
          queue.push(n);
        }
      }
    }
  }

  return targets.every((t) => visited.has(`${t.x},${t.y}`));
}

export const generateAdventureStage = (options: GeneratorOptions): LevelData => {
  const { stage, color } = options;
  const width = 8;
  const height = 12;
  const theme = getThemeForStage(stage);

  // Progressive Snake Length
  let snakeLength = 2;
  if (stage >= 3) snakeLength = 3;
  if (stage >= 6) snakeLength = 4;
  if (stage >= 9) snakeLength = 4 + (stage % 2);

  // Alternate starting positions: top vs bottom
  const startAtBottom = stage % 2 === 1;

  let snakeHead: Coordinate;
  let snakeBody: Coordinate[] = [];
  let portalPos: Coordinate;

  if (startAtBottom) {
    snakeHead = { x: 1 + ((stage * 2 + 1) % 5), y: 9 + (stage > 4 ? 1 : 0) };
    snakeBody = [];
    for (let i = 0; i < snakeLength; i++) {
      snakeBody.push({ x: snakeHead.x, y: Math.min(11, snakeHead.y + i) });
    }
    portalPos = { x: (snakeHead.x + 3 + (stage % 3)) % width, y: 1 + (stage % 2) };
  } else {
    snakeHead = { x: 1 + ((stage * 3 + 2) % 5), y: 2 };
    snakeBody = [];
    for (let i = 0; i < snakeLength; i++) {
      snakeBody.push({ x: snakeHead.x, y: Math.max(0, snakeHead.y - i) });
    }
    portalPos = { x: (snakeHead.x + 4 + (stage % 2)) % width, y: 10 - (stage % 2) };
  }

  // Generate maze obstacles: walls, rocks, crystals, logs
  let obstacles: Obstacle[] = [];
  const blockedSet = new Set<string>();

  // Mark snake cells and portal as strictly unblockable
  snakeBody.forEach((b) => blockedSet.add(`${b.x},${b.y}`));
  blockedSet.add(`${portalPos.x},${portalPos.y}`);

  // Reserve clear neighborhood around head and portal
  [
    { x: snakeHead.x, y: snakeHead.y - 1 },
    { x: snakeHead.x, y: snakeHead.y + 1 },
    { x: snakeHead.x - 1, y: snakeHead.y },
    { x: snakeHead.x + 1, y: snakeHead.y },
    { x: portalPos.x, y: portalPos.y - 1 },
    { x: portalPos.x, y: portalPos.y + 1 },
    { x: portalPos.x - 1, y: portalPos.y },
    { x: portalPos.x + 1, y: portalPos.y },
  ].forEach((p) => {
    if (p.x >= 0 && p.x < width && p.y >= 0 && p.y < height) {
      blockedSet.add(`${p.x},${p.y}`);
    }
  });

  // Calculate guaranteed open vertical corridors across middle rows
  const midY1 = 4 + (stage % 2);
  const midY2 = 7 + (stage % 2);

  // Wide 2-cell corridor gaps
  const gapX1 = (stage + 2) % (width - 3) + 1; // gap at gapX1 and gapX1 + 1
  const gapX2 = (stage * 3 + 1) % (width - 3) + 1; // gap at gapX2 and gapX2 + 1

  // Mark corridor gaps as unblockable
  for (let dy = -1; dy <= 1; dy++) {
    blockedSet.add(`${gapX1},${midY1 + dy}`);
    blockedSet.add(`${gapX1 + 1},${midY1 + dy}`);
    blockedSet.add(`${gapX2},${midY2 + dy}`);
    blockedSet.add(`${gapX2 + 1},${midY2 + dy}`);
  }

  const wallPatterns: { x: number; y: number; type: 'wall' | 'rock' | 'crystal' | 'log' }[] = [];

  for (let x = 0; x < width; x++) {
    // Row 1 barrier with 2-tile gap
    if (x !== gapX1 && x !== gapX1 + 1 && (stage >= 2 || x % 2 === 0)) {
      wallPatterns.push({
        x,
        y: midY1,
        type: x % 3 === 0 ? 'crystal' : x % 2 === 0 ? 'rock' : 'wall',
      });
    }
    // Row 2 barrier with 2-tile gap
    if (x !== gapX2 && x !== gapX2 + 1 && stage >= 3) {
      wallPatterns.push({
        x,
        y: midY2,
        type: x % 2 === 0 ? 'wall' : 'log',
      });
    }
  }

  // Side pillars
  if (stage >= 4) {
    wallPatterns.push({ x: 0, y: 5, type: 'rock' });
    wallPatterns.push({ x: width - 1, y: 5, type: 'rock' });
  }

  if (stage >= 6) {
    wallPatterns.push({ x: 2, y: 3, type: 'crystal' });
    wallPatterns.push({ x: 3, y: 1, type: 'rock' });
    wallPatterns.push({ x: 4, y: 10, type: 'rock' });
  }

  if (stage >= 8) {
    wallPatterns.push({ x: 2, y: 9, type: 'log' });
    wallPatterns.push({ x: 5, y: 2, type: 'log' });
  }

  wallPatterns.forEach((w) => {
    const key = `${w.x},${w.y}`;
    if (!blockedSet.has(key)) {
      obstacles.push({ x: w.x, y: w.y, type: w.type });
      blockedSet.add(key);
    }
  });

  // PROGRESSIVE MATCHING ORBS (Positive Growth - Player MUST collect these):
  const energyObjects: EnergyObject[] = [];
  const otherColors = ALL_COLORS.filter((c) => c !== color);

  // 1-3 Matching Orbs
  const matchingOrbCount = Math.min(3, 1 + (stage % 3));
  let matchingPlaced = 0;
  for (let attempt = 0; attempt < 40 && matchingPlaced < matchingOrbCount; attempt++) {
    const sx = (attempt * 3 + stage * 2 + 1) % width;
    const sy = (attempt * 4 + stage * 3 + 2) % height;
    const key = `${sx},${sy}`;
    if (!blockedSet.has(key)) {
      energyObjects.push({
        id: `orb_match_${matchingPlaced + 1}`,
        x: sx,
        y: sy,
        color: color,
        collected: false,
      });
      blockedSet.add(key);
      matchingPlaced++;
    }
  }

  const matchingCoords = energyObjects.map((e) => ({ x: e.x, y: e.y }));

  // Ensure head can reach all matching orbs and portal with current obstacles
  const targetCoords = [...matchingCoords, portalPos];
  while (!checkConnectivity(snakeHead, targetCoords, width, height, obstacles) && obstacles.length > 0) {
    const midIndex = obstacles.findIndex((o) => o.y >= 4 && o.y <= 8);
    if (midIndex !== -1) {
      obstacles.splice(midIndex, 1);
    } else {
      obstacles.pop();
    }
  }

  // DECOY ORBS (Different Color Orbs - Trap Obstacles that Player Must Avoid):
  // For Stage 19: No blocking decoy orbs!
  // For all stages: A decoy orb is ONLY placed if the player can reach all matching orbs
  // and the portal WITHOUT touching ANY decoy orb!
  if (stage >= 2 && stage !== 19) {
    const decoyCount = Math.min(2, Math.floor(stage / 3));
    let decoysPlaced = 0;
    const currentDecoyCoords: Coordinate[] = [];

    for (let attempt = 0; attempt < 40 && decoysPlaced < decoyCount; attempt++) {
      const sx = (attempt * 5 + stage * 3 + 3) % width;
      const sy = (attempt * 3 + stage * 2 + 5) % height;
      const key = `${sx},${sy}`;

      // Do not place adjacent to matching orbs, head, or portal
      const tooCloseToImportant = [
        snakeHead,
        portalPos,
        ...matchingCoords,
      ].some((pt) => Math.abs(pt.x - sx) + Math.abs(pt.y - sy) <= 1);

      if (!blockedSet.has(key) && !tooCloseToImportant) {
        // Test if adding this decoy keeps full path to all matching orbs and portal open
        const testDecoys = [...currentDecoyCoords, { x: sx, y: sy }];
        const pathStillValid = checkConnectivity(
          snakeHead,
          targetCoords,
          width,
          height,
          obstacles,
          testDecoys
        );

        if (pathStillValid) {
          const decoyColor = otherColors[(attempt + stage) % otherColors.length];
          energyObjects.push({
            id: `orb_decoy_${decoysPlaced + 1}`,
            x: sx,
            y: sy,
            color: decoyColor,
            collected: false,
          });
          currentDecoyCoords.push({ x: sx, y: sy });
          blockedSet.add(key);
          decoysPlaced++;
        }
      }
    }
  }

  // Special tiles (Ice slides) on higher stages
  const specialTiles: SpecialTile[] = [];

  // Ice Slide zones on Stage 4+
  if (stage >= 4) {
    const iceY = 6;
    for (let ix = 2; ix <= 5; ix++) {
      const isObstacleHere = obstacles.some((o) => o.x === ix && o.y === iceY);
      if (!isObstacleHere && !blockedSet.has(`${ix},${iceY}`)) {
        specialTiles.push({ x: ix, y: iceY, type: 'ice' });
      }
    }
  }

  return {
    id: 1000 + stage,
    name: `${theme.name} · Aşama ${stage}`,
    width,
    height,
    parMoves: 10 + stage * 2,
    tutorialTip:
      stage === 1
        ? 'Kendi rengindeki topları ye (+1 uzatır). Farklı renk toplardan kaçın!'
        : stage === 4
        ? 'Buzlu zeminler yılanı kaydırır. Manevra yaparak ilerle!'
        : undefined,
    creatures: [
      {
        id: `adv_snake_${color}`,
        color: color,
        body: snakeBody,
      },
    ],
    portals: [
      {
        id: `adv_portal_${color}`,
        x: portalPos.x,
        y: portalPos.y,
        color: color,
      },
    ],
    obstacles,
    specialTiles: specialTiles.length > 0 ? specialTiles : undefined,
    energyObjects: energyObjects.length > 0 ? energyObjects : undefined,
  };
};
