import { Achievement, UserProgress, LevelData } from '../types/game';

export const GAME_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_step',
    titleKey: 'first_step_title',
    descKey: 'first_step_desc',
    icon: '🎯',
    tier: 'bronze',
    badgeColor: 'from-amber-600 to-amber-800 border-amber-500',
    glowColor: 'rgba(217, 119, 6, 0.4)',
    check: (progress) => Object.keys(progress.completedLevels || {}).length >= 1,
  },
  {
    id: 'speed_runner',
    titleKey: 'speed_runner_title',
    descKey: 'speed_runner_desc',
    icon: '⚡',
    tier: 'silver',
    badgeColor: 'from-cyan-500 to-blue-600 border-cyan-400',
    glowColor: 'rgba(6, 182, 212, 0.5)',
    check: (_progress, stats) => {
      if (!stats) return false;
      return stats.timeLeft / stats.maxTime >= 0.6; // Finished with >= 60% time left
    },
  },
  {
    id: 'star_collector_15',
    titleKey: 'star_collector_15_title',
    descKey: 'star_collector_15_desc',
    icon: '⭐',
    tier: 'bronze',
    badgeColor: 'from-yellow-500 to-amber-600 border-yellow-400',
    glowColor: 'rgba(234, 179, 8, 0.5)',
    check: (progress) => {
      const totalStars = Object.values(progress.completedLevels || {}).reduce((acc, l) => acc + l.stars, 0);
      return totalStars >= 15;
    },
  },
  {
    id: 'star_collector_50',
    titleKey: 'star_collector_50_title',
    descKey: 'star_collector_50_desc',
    icon: '🌟',
    tier: 'silver',
    badgeColor: 'from-slate-300 to-slate-500 border-slate-200',
    glowColor: 'rgba(226, 232, 240, 0.5)',
    check: (progress) => {
      const totalStars = Object.values(progress.completedLevels || {}).reduce((acc, l) => acc + l.stars, 0);
      return totalStars >= 50;
    },
  },
  {
    id: 'star_collector_100',
    titleKey: 'star_collector_100_title',
    descKey: 'star_collector_100_desc',
    icon: '✨',
    tier: 'gold',
    badgeColor: 'from-amber-400 to-yellow-600 border-amber-300',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    check: (progress) => {
      const totalStars = Object.values(progress.completedLevels || {}).reduce((acc, l) => acc + l.stars, 0);
      return totalStars >= 100;
    },
  },
  {
    id: 'adventure_initiate',
    titleKey: 'adventure_initiate_title',
    descKey: 'adventure_initiate_desc',
    icon: '🧭',
    tier: 'bronze',
    badgeColor: 'from-emerald-600 to-teal-800 border-emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    check: (progress) => (progress.adventure?.highestStage || 0) >= 3,
  },
  {
    id: 'adventure_explorer',
    titleKey: 'adventure_explorer_title',
    descKey: 'adventure_explorer_desc',
    icon: '🗺️',
    tier: 'silver',
    badgeColor: 'from-blue-500 to-indigo-700 border-blue-400',
    glowColor: 'rgba(59, 130, 246, 0.5)',
    check: (progress) => (progress.adventure?.highestStage || 0) >= 10,
  },
  {
    id: 'adventure_champion',
    titleKey: 'adventure_champion_title',
    descKey: 'adventure_champion_desc',
    icon: '🏆',
    tier: 'gold',
    badgeColor: 'from-purple-500 to-violet-700 border-purple-400',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    check: (progress) => (progress.adventure?.highestStage || 0) >= 25,
  },
  {
    id: 'adventure_grandmaster',
    titleKey: 'adventure_grandmaster_title',
    descKey: 'adventure_grandmaster_desc',
    icon: '👑',
    tier: 'legendary',
    badgeColor: 'from-rose-500 via-amber-500 to-emerald-500 border-yellow-300',
    glowColor: 'rgba(244, 63, 94, 0.7)',
    check: (progress) => (progress.adventure?.highestStage || 0) >= 100,
  },
  {
    id: 'ice_skater',
    titleKey: 'ice_skater_title',
    descKey: 'ice_skater_desc',
    icon: '🧊',
    tier: 'bronze',
    badgeColor: 'from-cyan-400 to-sky-600 border-cyan-300',
    glowColor: 'rgba(34, 211, 238, 0.5)',
    check: (_progress, stats) => {
      if (!stats?.level) return false;
      return !!stats.level.specialTiles?.some((t) => t.type === 'ice');
    },
  },
  {
    id: 'fashion_enthusiast',
    titleKey: 'fashion_enthusiast_title',
    descKey: 'fashion_enthusiast_desc',
    icon: '🎨',
    tier: 'bronze',
    badgeColor: 'from-fuchsia-500 to-pink-600 border-pink-400',
    glowColor: 'rgba(236, 72, 153, 0.5)',
    check: (progress) => (progress.unlockedSkins?.length || 0) >= 2,
  },
  {
    id: 'fashion_legend',
    titleKey: 'fashion_legend_title',
    descKey: 'fashion_legend_desc',
    icon: '💎',
    tier: 'gold',
    badgeColor: 'from-emerald-400 via-teal-500 to-cyan-600 border-emerald-300',
    glowColor: 'rgba(52, 211, 153, 0.6)',
    check: (progress) => (progress.unlockedSkins?.length || 0) >= 5,
  },
  {
    id: 'perfectionist',
    titleKey: 'perfectionist_title',
    descKey: 'perfectionist_desc',
    icon: '🎯',
    tier: 'silver',
    badgeColor: 'from-indigo-500 to-slate-700 border-indigo-400',
    glowColor: 'rgba(99, 102, 241, 0.5)',
    check: (_progress, stats) => {
      if (!stats) return false;
      return stats.moves <= stats.parMoves;
    },
  },
  {
    id: 'classic_master_10',
    titleKey: 'classic_master_10_title',
    descKey: 'classic_master_10_desc',
    icon: '🧩',
    tier: 'bronze',
    badgeColor: 'from-teal-600 to-emerald-800 border-teal-500',
    glowColor: 'rgba(20, 184, 166, 0.4)',
    check: (progress) => Object.keys(progress.completedLevels || {}).length >= 10,
  },
  {
    id: 'classic_master_50',
    titleKey: 'classic_master_50_title',
    descKey: 'classic_master_50_desc',
    icon: '🎖️',
    tier: 'gold',
    badgeColor: 'from-amber-500 to-orange-700 border-amber-400',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    check: (progress) => Object.keys(progress.completedLevels || {}).length >= 50,
  },
  {
    id: 'classic_grandmaster_100',
    titleKey: 'classic_grandmaster_100_title',
    descKey: 'classic_grandmaster_100_desc',
    icon: '🏆',
    tier: 'legendary',
    badgeColor: 'from-yellow-400 via-rose-500 to-purple-600 border-yellow-200',
    glowColor: 'rgba(234, 179, 8, 0.8)',
    check: (progress) => Object.keys(progress.completedLevels || {}).length >= 100,
  },
];

export function checkNewAchievements(
  progress: UserProgress,
  levelStats?: {
    moves: number;
    parMoves: number;
    timeLeft: number;
    maxTime: number;
    level: LevelData;
    gameMode: 'classic' | 'adventure';
    stage?: number;
  }
): Achievement[] {
  const currentUnlocked = new Set(progress.unlockedAchievements || []);
  const newlyUnlocked: Achievement[] = [];

  for (const ach of GAME_ACHIEVEMENTS) {
    if (!currentUnlocked.has(ach.id)) {
      if (ach.check(progress, levelStats)) {
        newlyUnlocked.push(ach);
      }
    }
  }

  return newlyUnlocked;
}
