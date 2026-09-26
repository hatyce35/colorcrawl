import { DailyQuest, UserProgress, CrawlerColor } from '../types/game';

export const getTodayKey = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
    now.getDate()
  ).padStart(2, '0')}`;
};

export const INITIAL_DAILY_QUESTS: Omit<DailyQuest, 'current' | 'completed' | 'claimed'>[] = [
  {
    id: 'quest_stars',
    title: 'Yıldız Avcısı',
    description: 'Bölümlerde kafan ile 5 yıldız topla',
    target: 5,
    rewardType: 'coins',
    rewardAmount: 150,
    icon: '⭐',
  },
  {
    id: 'quest_levels',
    title: 'Bölüm Ustası',
    description: '3 farklı bölümü başarıyla tamamla',
    target: 3,
    rewardType: 'hints',
    rewardAmount: 2,
    icon: '🏆',
  },
  {
    id: 'quest_adventure',
    title: 'Macera Kaşifi',
    description: "Adventure Mode'da 2 aşama geç",
    target: 2,
    rewardType: 'coins',
    rewardAmount: 200,
    icon: '🗺️',
  },
  {
    id: 'quest_ocean',
    title: 'Okyanus Dalışı',
    description: 'Ocean yılanını kendi mavi deliğine ulaştır',
    target: 1,
    rewardType: 'stars',
    rewardAmount: 3,
    icon: '🌊',
  },
];

export const ensureDailyQuests = (progress: UserProgress): UserProgress => {
  const today = getTodayKey();
  if (progress.dailyQuestsDate === today && progress.dailyQuests && progress.dailyQuests.length > 0) {
    return progress;
  }

  // Generate 3 fresh quests for today
  const quests: DailyQuest[] = INITIAL_DAILY_QUESTS.slice(0, 3).map((q) => ({
    ...q,
    current: 0,
    completed: false,
    claimed: false,
  }));

  return {
    ...progress,
    dailyQuestsDate: today,
    dailyQuests: quests,
    coins: progress.coins || 0,
  };
};

export const updateDailyQuestProgress = (
  progress: UserProgress,
  questType: 'stars' | 'levels' | 'adventure' | 'ocean' | 'leaf',
  amount: number = 1
): UserProgress => {
  const updated = ensureDailyQuests(progress);
  if (!updated.dailyQuests) return updated;

  let hasChanged = false;
  const newQuests = updated.dailyQuests.map((q) => {
    let matches = false;
    if (questType === 'stars' && q.id === 'quest_stars') matches = true;
    if (questType === 'levels' && q.id === 'quest_levels') matches = true;
    if (questType === 'adventure' && q.id === 'quest_adventure') matches = true;
    if (questType === 'ocean' && q.id === 'quest_ocean') matches = true;

    if (matches && !q.completed) {
      const nextVal = Math.min(q.target, q.current + amount);
      const isDone = nextVal >= q.target;
      hasChanged = true;
      return {
        ...q,
        current: nextVal,
        completed: isDone,
      };
    }
    return q;
  });

  if (!hasChanged) return updated;

  return {
    ...updated,
    dailyQuests: newQuests,
  };
};

export const claimDailyQuestReward = (
  progress: UserProgress,
  questId: string
): { progress: UserProgress; rewardText: string } => {
  if (!progress.dailyQuests) {
    return { progress, rewardText: '' };
  }

  const quest = progress.dailyQuests.find((q) => q.id === questId);
  if (!quest || !quest.completed || quest.claimed) {
    return { progress, rewardText: '' };
  }

  let rewardText = '';
  let updatedHints = progress.hintsRemaining;
  let updatedCoins = progress.coins || 0;

  if (quest.rewardType === 'hints') {
    updatedHints += quest.rewardAmount;
    rewardText = `+${quest.rewardAmount} İpucu Kazandın!`;
  } else if (quest.rewardType === 'coins') {
    updatedCoins += quest.rewardAmount;
    rewardText = `+${quest.rewardAmount} Altın Kazandın!`;
  } else if (quest.rewardType === 'stars') {
    updatedCoins += quest.rewardAmount * 50;
    rewardText = `+${quest.rewardAmount} Yıldız Bonusu!`;
  }

  const newQuests = progress.dailyQuests.map((q) =>
    q.id === questId ? { ...q, claimed: true } : q
  );

  return {
    progress: {
      ...progress,
      hintsRemaining: updatedHints,
      coins: updatedCoins,
      dailyQuests: newQuests,
    },
    rewardText,
  };
};
