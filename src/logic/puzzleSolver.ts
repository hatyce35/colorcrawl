import {
  Coordinate,
  Direction,
  CrawlerColor,
  LevelData,
  Obstacle,
  SpecialTile,
  EnergyObject,
} from '../types/game';

export interface SolverCreature {
  id: string;
  color: CrawlerColor;
  body: Coordinate[];
  isExited?: boolean;
}

export interface SolverState {
  creatures: SolverCreature[];
  energyObjects: { id: string; x: number; y: number; collected: boolean }[];
  openGates: string[];
}

export const DIRECTION_VECTORS: Record<Direction, Coordinate> = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

export const ALL_DIRECTIONS: Direction[] = ['UP', 'RIGHT', 'DOWN', 'LEFT'];

/**
 * Check if a move is valid and compute the next state.
 * Returns null if invalid.
 */
export function simulateMove(
  level: LevelData,
  currentState: SolverState,
  creatureId: string,
  direction: Direction
): { nextState: SolverState; enteredPortal: boolean } | null {
  const creatureIndex = currentState.creatures.findIndex((c) => c.id === creatureId);
  if (creatureIndex === -1) return null;

  const creature = currentState.creatures[creatureIndex];
  if (creature.isExited || creature.body.length === 0) return null;

  const head = creature.body[0];
  const delta = DIRECTION_VECTORS[direction];
  let nextX = head.x + delta.x;
  let nextY = head.y + delta.y;

  // Prevent 180-degree reversal into own neck
  if (creature.body.length > 1) {
    const neck = creature.body[1];
    if (nextX === neck.x && nextY === neck.y) {
      return null;
    }
  }

  // Board boundaries
  if (nextX < 0 || nextX >= level.width || nextY < 0 || nextY >= level.height) {
    return null;
  }

  // Check obstacles
  if (level.obstacles) {
    const isObstacle = level.obstacles.some((o) => o.x === nextX && o.y === nextY);
    if (isObstacle) return null;
  }

  // Check special tiles (gates)
  if (level.specialTiles) {
    const gate = level.specialTiles.find((t) => t.type === 'gate' && t.x === nextX && t.y === nextY);
    if (gate) {
      const gateKey = `${gate.x},${gate.y}`;
      if (!currentState.openGates.includes(gateKey)) {
        return null; // Gate is closed
      }
    }
  }

  // Check portals
  const portalAtTarget = level.portals.find((p) => p.x === nextX && p.y === nextY);
  let enteringPortal = false;

  if (portalAtTarget) {
    if (portalAtTarget.color !== creature.color) {
      // WRONG COLOR: Cannot enter!
      return null;
    }
    // All orbs of this snake's color must be collected before entering hole!
    const uncollectedSameColor = currentState.energyObjects.some((e) => {
      if (e.collected) return false;
      const levelOrb = level.energyObjects?.find((orig) => orig.id === e.id);
      const orbColor = levelOrb?.color || 'yellow';
      return orbColor === creature.color;
    });
    if (uncollectedSameColor) {
      // Cannot complete portal before collecting all same-color orbs
      return null;
    }
    enteringPortal = true;
  }

  // Check energy object collection
  const energyIndex = currentState.energyObjects.findIndex(
    (e) => !e.collected && e.x === nextX && e.y === nextY
  );
  const willGrow = energyIndex !== -1;

  // Check collision with other creatures
  for (let i = 0; i < currentState.creatures.length; i++) {
    const other = currentState.creatures[i];
    if (other.isExited) continue;

    if (other.id !== creature.id) {
      const collides = other.body.some((seg) => seg.x === nextX && seg.y === nextY);
      if (collides) return null;
    } else {
      // Colliding with own body (excluding tail if tail moves)
      const segmentsToCheck = willGrow
        ? other.body
        : other.body.slice(0, other.body.length - 1);
      const collidesWithSelf = segmentsToCheck.some((seg) => seg.x === nextX && seg.y === nextY);
      if (collidesWithSelf) return null;
    }
  }

  // Handle Ice slide if applicable and not entering portal
  if (!enteringPortal && level.specialTiles) {
    const isIce = level.specialTiles.some((t) => t.type === 'ice' && t.x === nextX && t.y === nextY);
    if (isIce) {
      // Slide in same direction until hitting edge or non-ice
      let slideX = nextX;
      let slideY = nextY;
      while (true) {
        const testX = slideX + delta.x;
        const testY = slideY + delta.y;
        if (testX < 0 || testX >= level.width || testY < 0 || testY >= level.height) break;
        if (level.obstacles?.some((o) => o.x === testX && o.y === testY)) break;
        // Check creature collision
        const hitsCreature = currentState.creatures.some(
          (c) => !c.isExited && c.body.some((seg) => seg.x === testX && seg.y === testY)
        );
        if (hitsCreature) break;

        slideX = testX;
        slideY = testY;
        const tile = level.specialTiles.find((t) => t.x === slideX && t.y === slideY);
        if (!tile || tile.type !== 'ice') break;
      }
      nextX = slideX;
      nextY = slideY;
    }
  }

  // Build new body
  let newBody: Coordinate[];
  if (enteringPortal) {
    // When entering matching portal, creature is completed
    newBody = [];
  } else {
    newBody = [{ x: nextX, y: nextY }, ...creature.body];
    if (!willGrow) {
      newBody.pop(); // Remove tail
    }
  }

  const nextCreatures = currentState.creatures.map((c) => {
    if (c.id !== creature.id) return c;
    return {
      ...c,
      body: newBody,
      isExited: enteringPortal,
    };
  });

  const nextEnergy = currentState.energyObjects.map((e, idx) => {
    if (idx === energyIndex) return { ...e, collected: true };
    return e;
  });

  // Check if entering portal opened any gates
  const nextOpenGates = [...currentState.openGates];
  if (enteringPortal && level.specialTiles) {
    level.specialTiles
      .filter((t) => t.type === 'gate' && t.requiredColor === creature.color)
      .forEach((g) => {
        const key = `${g.x},${g.y}`;
        if (!nextOpenGates.includes(key)) {
          nextOpenGates.push(key);
        }
      });
  }

  return {
    nextState: {
      creatures: nextCreatures,
      energyObjects: nextEnergy,
      openGates: nextOpenGates,
    },
    enteredPortal: enteringPortal,
  };
}

/**
 * Serialize state to string for visited set in BFS
 */
function serializeState(state: SolverState): string {
  const cStr = state.creatures
    .map((c) => `${c.id}:${c.isExited ? 'X' : c.body.map((b) => `${b.x},${b.y}`).join('>')}`)
    .sort()
    .join('|');
  const eStr = state.energyObjects.map((e) => (e.collected ? '1' : '0')).join('');
  const gStr = state.openGates.sort().join(',');
  return `${cStr};${eStr};${gStr}`;
}

/**
 * Check if state is a winning state
 */
export function isWinningState(state: SolverState, level: LevelData): boolean {
  // All creatures in the level must have entered their matching holes
  const allExited = state.creatures.every((c) => c.isExited);
  const allEnergyCollected = state.energyObjects.every((e) => e.collected);
  return allExited && (state.energyObjects.length === 0 || allEnergyCollected);
}

export interface HintResult {
  creatureId: string;
  direction: Direction;
  stepsToSolve: number;
}

/**
 * BFS Solver: Finds the optimal path to solution.
 * Used to verify levels during development and provide accurate in-game hints.
 */
export function findBestMove(level: LevelData, initialState: SolverState, maxDepth = 40): HintResult | null {
  if (isWinningState(initialState, level)) return null;

  interface QueueNode {
    state: SolverState;
    firstMove?: { creatureId: string; direction: Direction };
    depth: number;
  }

  const queue: QueueNode[] = [{ state: initialState, depth: 0 }];
  const visited = new Set<string>();
  visited.add(serializeState(initialState));

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current.depth >= maxDepth) continue;

    for (const creature of current.state.creatures) {
      if (creature.isExited) continue;

      for (const dir of ALL_DIRECTIONS) {
        const result = simulateMove(level, current.state, creature.id, dir);
        if (!result) continue;

        const nextNode: QueueNode = {
          state: result.nextState,
          firstMove: current.firstMove || { creatureId: creature.id, direction: dir },
          depth: current.depth + 1,
        };

        if (isWinningState(result.nextState, level)) {
          return {
            creatureId: nextNode.firstMove!.creatureId,
            direction: nextNode.firstMove!.direction,
            stepsToSolve: nextNode.depth,
          };
        }

        const key = serializeState(result.nextState);
        if (!visited.has(key)) {
          visited.add(key);
          queue.push(nextNode);
        }
      }
    }
  }

  return null;
}
