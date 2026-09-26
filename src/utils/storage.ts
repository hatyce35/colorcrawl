import { UserProgress, GameSettings, CosmeticSkin } from '../types/game';

const PROGRESS_KEY = 'color_crawl_progress_v1';
const SETTINGS_KEY = 'color_crawl_settings_v1';

export const DEFAULT_SETTINGS: GameSettings = {
  soundEnabled: true,
  musicEnabled: true,
  vibrationEnabled: true,
  controlsMode: 'both', // Both swipe + on-screen buttons available by default, user can toggle to 'swipe' or 'buttons'
  language: 'tr',
};

export const DEFAULT_PROGRESS: UserProgress = {
  completedLevels: {},
  currentLevelId: 1,
  unlockedSkins: ['classic'],
  activeSkin: 'classic',
  hintsRemaining: 5,
};

export const loadGameSettings = (): GameSettings => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    }
  } catch (err) {
    console.error('Failed to load settings', err);
  }
  return DEFAULT_SETTINGS;
};

export const saveGameSettings = (settings: GameSettings): void => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (err) {
    console.error('Failed to save settings', err);
  }
};

export const loadUserProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_PROGRESS,
        ...parsed,
        completedLevels: parsed.completedLevels || {},
        unlockedSkins: parsed.unlockedSkins || ['classic'],
      };
    }
  } catch (err) {
    console.error('Failed to load progress', err);
  }
  return DEFAULT_PROGRESS;
};

export const saveUserProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress', err);
  }
};

export const resetAllProgress = (): { progress: UserProgress; settings: GameSettings } => {
  try {
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem(SETTINGS_KEY);
  } catch (err) {
    console.error('Failed to reset progress', err);
  }
  return { progress: DEFAULT_PROGRESS, settings: DEFAULT_SETTINGS };
};
