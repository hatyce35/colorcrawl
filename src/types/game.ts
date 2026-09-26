export type CrawlerColor =
  | 'red'
  | 'blue'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'orange'
  | 'pink'
  | 'cyan';

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export interface Coordinate {
  x: number;
  y: number;
}

export interface Creature {
  id: string;
  color: CrawlerColor;
  body: Coordinate[]; // body[0] is head
  direction?: Direction; // facing direction
  isExited?: boolean; // creature has successfully gone into portal
  isEntering?: boolean; // creature is currently entering a portal/hole and strictly locked
  enteringProgress?: number; // 0 to 1 when entering portal
  isDead?: boolean; // creature died from eating wrong ball or losing all segments
}

export type ObstacleType = 'wall' | 'rock' | 'log' | 'crystal';

export interface Obstacle {
  x: number;
  y: number;
  type: ObstacleType;
}

export type SpecialTileType = 'ice' | 'teleport' | 'speed' | 'growth' | 'gate';

export interface SpecialTile {
  x: number;
  y: number;
  type: SpecialTileType;
  teleportTarget?: Coordinate;
  isOpen?: boolean;
  requiredColor?: CrawlerColor; // e.g. for gate opened by that creature entering
}

export interface Portal {
  id: string;
  x: number;
  y: number;
  color: CrawlerColor;
  isSatisfied?: boolean;
}

export interface EnergyObject {
  id: string;
  x: number;
  y: number;
  color?: CrawlerColor;
  collected?: boolean;
}

export interface LevelData {
  id: number;
  name: string;
  chapter?: number;
  width: number;
  height: number;
  creatures: {
    id: string;
    color: CrawlerColor;
    body: Coordinate[];
  }[];
  portals: {
    id: string;
    x: number;
    y: number;
    color: CrawlerColor;
  }[];
  obstacles?: Obstacle[];
  specialTiles?: SpecialTile[];
  energyObjects?: EnergyObject[];
  parMoves: number;
  tutorialTip?: string;
}

export type CosmeticSkin = 'classic' | 'rainbow' | 'galaxy' | 'candy' | 'jungle' | 'lava' | 'ice';

export interface SpeciesInfo {
  color: CrawlerColor;
  name: string;
  title: string;
  description: string;
  themeHue: string;
  accentColor: string;
  glowColor: string;
  darkRingColor?: string;
  bgRgba: string;
}

export type Language = 'tr' | 'en';

export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  vibrationEnabled: boolean;
  controlsMode: 'swipe' | 'buttons' | 'both';
  language: Language;
}

export interface LevelProgress {
  stars: number;
  bestMoves: number;
  completedAt: number;
}

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  completed: boolean;
  claimed: boolean;
  rewardType: 'stars' | 'hints' | 'coins';
  rewardAmount: number;
  icon: string;
}

export interface AdventureProgress {
  selectedColor: CrawlerColor;
  highestStage: number;
  currentStage: number;
  totalScore: number;
}

export interface Achievement {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  tier: 'bronze' | 'silver' | 'gold' | 'legendary';
  badgeColor: string;
  glowColor: string;
  check: (progress: UserProgress, levelStats?: { moves: number; parMoves: number; timeLeft: number; maxTime: number; level: LevelData; gameMode: 'classic' | 'adventure'; stage?: number }) => boolean;
}

export interface UserProgress {
  completedLevels: Record<number, LevelProgress>;
  currentLevelId: number;
  unlockedSkins: CosmeticSkin[];
  activeSkin: CosmeticSkin;
  hintsRemaining: number;
  coins?: number;
  dailyQuestsDate?: string;
  dailyQuests?: DailyQuest[];
  adventure?: AdventureProgress;
  unlockedAchievements?: string[];
}

export type ViewScreen =
  | 'menu'
  | 'level-select'
  | 'game'
  | 'adventure-game'
  | 'collection'
  | 'settings'
  | 'quests'
  | 'achievements'
  | 'adventure-select';
