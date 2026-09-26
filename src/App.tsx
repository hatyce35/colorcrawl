import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ViewScreen,
  UserProgress,
  GameSettings,
  LevelData,
  Creature,
  Portal,
  Direction,
  SpecialTile,
  EnergyObject,
  CrawlerColor,
  Achievement,
} from './types/game';
import { GAME_LEVELS } from './data/levels';
import {
  loadGameSettings,
  saveGameSettings,
  loadUserProgress,
  saveUserProgress,
} from './utils/storage';
import { soundManager } from './audio/soundManager';
import { triggerHaptic } from './utils/haptics';
import {
  DIRECTION_VECTORS,
  SolverState,
  findBestMove,
} from './logic/puzzleSolver';
import { generateAdventureStage } from './logic/adventureGenerator';
import { updateDailyQuestProgress, ensureDailyQuests } from './utils/dailyQuests';
import { getThemeForStage, DEFAULT_CLASSIC_THEME } from './data/themes';
import { CRAWLER_SPECIES } from './data/species';
import { GAME_ACHIEVEMENTS, checkNewAchievements } from './data/achievements';
import { MainMenu } from './components/MainMenu';
import { LevelSelect } from './components/LevelSelect';
import { AdventureSelect } from './components/AdventureSelect';
import { CollectionModal } from './components/CollectionModal';
import { AchievementsModal } from './components/AchievementsModal';
import { AchievementUnlockedModal } from './components/AchievementUnlockedModal';
import { SettingsModal } from './components/SettingsModal';
import { GameHUD } from './components/GameHUD';
import { GameBoard } from './components/GameBoard';
import { PauseModal } from './components/PauseModal';
import { LevelCompleteModal } from './components/LevelCompleteModal';
import { GameOverModal } from './components/GameOverModal';
import { getT } from './i18n/translations';

// Calculate stars purely based on remaining time (kalan saniyeye göre)
export const calculateStarsFromTime = (remainingSeconds: number, totalSeconds: number): number => {
  if (totalSeconds <= 0) return 3;
  const ratio = remainingSeconds / totalSeconds;
  if (ratio >= 0.50) {
    // Kısa sürede bitirildi (kalan süre >= %50) -> 3 Yıldız
    return 3;
  }
  if (ratio >= 0.20) {
    // Orta sürede bitirildi (kalan süre %20 - %50 arası) -> 2 Yıldız
    return 2;
  }
  // Çok az süre kala bitirildi (kalan süre < %20) -> 1 Yıldız
  return 1;
};

// Calculate appropriate countdown timer duration (seconds)
const calculateLevelDuration = (mode: 'classic' | 'adventure', idOrStage: number) => {
  if (mode === 'classic') {
    if (idOrStage <= 5) return 30;
    if (idOrStage <= 15) return 35;
    if (idOrStage <= 25) return 45;
    return 55;
  } else {
    // Adventure stage
    if (idOrStage <= 2) return 30;
    if (idOrStage <= 5) return 35;
    if (idOrStage <= 8) return 40;
    if (idOrStage <= 12) return 45;
    return 50;
  }
};

interface GameStateSnapshot {
  creatures: Creature[];
  portals: Portal[];
  specialTiles: SpecialTile[];
  energyObjects: EnergyObject[];
  moves: number;
  selectedCreatureId: string;
}

export default function App() {
  const [screen, setScreen] = useState<ViewScreen>('menu');
  const [settings, setSettings] = useState<GameSettings>(loadGameSettings);
  const [userProgress, setUserProgress] = useState<UserProgress>(() =>
    ensureDailyQuests(loadUserProgress())
  );

  // Active level gameplay state
  const [gameMode, setGameMode] = useState<'classic' | 'adventure'>('classic');
  const [adventureStage, setAdventureStage] = useState<number>(1);
  const [adventureSnakeColor, setAdventureSnakeColor] = useState<CrawlerColor>('green');

  const [currentLevelId, setCurrentLevelId] = useState<number>(1);
  const [levelData, setLevelData] = useState<LevelData>(GAME_LEVELS[0]);
  const [creatures, setCreatures] = useState<Creature[]>([]);
  const [portals, setPortals] = useState<Portal[]>([]);
  const [specialTiles, setSpecialTiles] = useState<SpecialTile[]>([]);
  const [energyObjects, setEnergyObjects] = useState<EnergyObject[]>([]);
  const [selectedCreatureId, setSelectedCreatureId] = useState<string>('');
  const [moves, setMoves] = useState<number>(0);
  const [levelStarsCollected, setLevelStarsCollected] = useState<number>(0);


  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [maxTime, setMaxTime] = useState<number>(30);

  // Status Modals & Hints
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [gameOverReason, setGameOverReason] = useState<string>('');
  const [shakeTrigger, setShakeTrigger] = useState<number>(0);
  const [hint, setHint] = useState<{ creatureId: string; direction: Direction } | null>(null);
  const [unlockedAchievementQueue, setUnlockedAchievementQueue] = useState<Achievement[]>([]);

  // History & Undo State (Son 3-10 hamleyi geri alma ve tıkanma algılama)
  const [historyStack, setHistoryStack] = useState<GameStateSnapshot[]>([]);
  const [isStuckPromptActive, setIsStuckPromptActive] = useState<boolean>(false);
  const stuckTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Save settings when changed
  useEffect(() => {
    saveGameSettings(settings);
    soundManager.setSoundEnabled(settings.soundEnabled);
    soundManager.setMusicEnabled(settings.musicEnabled);
    document.documentElement.lang = settings.language;
  }, [settings]);

  // Save progress when changed
  useEffect(() => {
    saveUserProgress(userProgress);
  }, [userProgress]);

  // Setup level state from LevelData
  const setupLevelState = useCallback((found: LevelData, mode: 'classic' | 'adventure', idOrStage: number) => {
    setLevelData(found);

    // Deep clone creatures
    const clonedCreatures: Creature[] = found.creatures.map((c) => ({
      id: c.id,
      color: c.color,
      body: c.body.map((b) => ({ ...b })),
      direction: 'UP',
      isExited: false,
      enteringProgress: 0,
      isDead: false,
    }));
    setCreatures(clonedCreatures);

    // Default select first creature
    setSelectedCreatureId(clonedCreatures[0]?.id || '');

    // Deep clone portals
    setPortals(
      found.portals.map((p) => ({
        ...p,
        isSatisfied: false,
      }))
    );

    // Special tiles & energy objects
    setSpecialTiles(found.specialTiles?.map((t) => ({ ...t })) || []);
    setEnergyObjects(found.energyObjects?.map((e) => ({ ...e, collected: false })) || []);

    // Timer calculation
    const duration = calculateLevelDuration(mode, idOrStage);
    setMaxTime(duration);
    setTimeLeft(duration);

    setMoves(0);
    setLevelStarsCollected(0);
    setIsPaused(false);
    setIsCompleted(false);
    setIsGameOver(false);
    setGameOverReason('');
    setHint(null);
    setHistoryStack([]);
    if (stuckTimerRef.current) {
      clearTimeout(stuckTimerRef.current);
      stuckTimerRef.current = null;
    }
    setIsStuckPromptActive(false);
  }, []);

  // Initialize Classic level
  const initClassicLevel = useCallback(
    (lvlId: number) => {
      setGameMode('classic');
      const found = GAME_LEVELS.find((l) => l.id === lvlId) || GAME_LEVELS[0];
      setCurrentLevelId(found.id);
      setupLevelState(found, 'classic', found.id);
    },
    [setupLevelState]
  );

  // Initialize Adventure stage
  const initAdventureStage = useCallback(
    (stage: number, color: CrawlerColor) => {
      setGameMode('adventure');
      setAdventureStage(stage);
      setAdventureSnakeColor(color);
      const advLevel = generateAdventureStage({ stage, color });
      setupLevelState(advLevel, 'adventure', stage);
    },
    [setupLevelState]
  );

  const startLevel = (lvlId: number) => {
    initClassicLevel(lvlId);
    setScreen('game');
  };

  const startAdventure = (color: CrawlerColor, stage?: number) => {
    const resumeStage =
      stage ||
      userProgress.adventure?.currentStage ||
      userProgress.adventure?.highestStage ||
      1;
    initAdventureStage(resumeStage, color);
    setScreen('game');
  };

  // Time Out Handler
  const handleTimeOut = useCallback(() => {
    soundManager.playSnakeDeath();
    triggerHaptic('warning', settings.vibrationEnabled);

    // Mark current active creature as dead (X X eyes)
    setCreatures((prev) =>
      prev.map((c) =>
        c.id === selectedCreatureId ? { ...c, isDead: true } : c
      )
    );

    setTimeout(() => {
      const t = getT(settings.language);
      setGameOverReason(t.gameOver.timeoutReason);
      setIsGameOver(true);
    }, 1000);
  }, [selectedCreatureId, settings.vibrationEnabled, settings.language]);

  // Real-time Countdown Timer Interval
  useEffect(() => {
    if (screen !== 'game' || isPaused || isCompleted || isGameOver) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeOut();
          return 0;
        }
        if (prev <= 6 && prev > 1) {
          soundManager.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [screen, isPaused, isCompleted, isGameOver, handleTimeOut]);

  // Switch to next available creature automatically in fixed sequence
  useEffect(() => {
    if (!selectedCreatureId) {
      const first = creatures.find(
        (c) =>
          !c.isExited &&
          !c.isDead &&
          !c.isEntering &&
          !portals.some((p) => p.x === c.body[0]?.x && p.y === c.body[0]?.y)
      );
      if (first) setSelectedCreatureId(first.id);
      return;
    }
    const current = creatures.find((c) => c.id === selectedCreatureId);
    const isCurrentUnavailable =
      !current ||
      current.isExited ||
      current.isDead ||
      current.isEntering ||
      (current.enteringProgress || 0) > 0 ||
      portals.some((p) => p.x === current.body[0]?.x && p.y === current.body[0]?.y);

    if (isCurrentUnavailable) {
      const nextAvailable = creatures.find(
        (c) =>
          !c.isExited &&
          !c.isDead &&
          !c.isEntering &&
          (c.enteringProgress || 0) === 0 &&
          !portals.some((p) => p.x === c.body[0]?.x && p.y === c.body[0]?.y)
      );
      if (nextAvailable) {
        setSelectedCreatureId(nextAvailable.id);
      }
    }
  }, [creatures, portals, selectedCreatureId]);

  // Undo Move Handler (Son 3 hamleyi geri alma)
  const handleUndo = useCallback(() => {
    if (historyStack.length === 0 || isCompleted || isGameOver) return;

    soundManager.playButton();
    triggerHaptic('medium', settings.vibrationEnabled);

    const lastSnapshot = historyStack[historyStack.length - 1];
    setHistoryStack((prev) => prev.slice(0, prev.length - 1));

    setCreatures(lastSnapshot.creatures);
    setPortals(lastSnapshot.portals);
    setSpecialTiles(lastSnapshot.specialTiles);
    setEnergyObjects(lastSnapshot.energyObjects);
    setMoves(lastSnapshot.moves);
    setSelectedCreatureId(lastSnapshot.selectedCreatureId);

    if (stuckTimerRef.current) {
      clearTimeout(stuckTimerRef.current);
      stuckTimerRef.current = null;
    }
    setIsStuckPromptActive(false);
    setHint(null);
  }, [historyStack, isCompleted, isGameOver, settings.vibrationEnabled]);

  // Trigger invalid move bump / bounce & deadlock detection after 1 sec
  const triggerBlockedMove = () => {
    soundManager.playBlocked();
    triggerHaptic('warning', settings.vibrationEnabled);
    setShakeTrigger((prev) => prev + 1);

    // Schedule 1-second stuck prompt when player hits a blocked move
    if (historyStack.length > 0) {
      if (stuckTimerRef.current) clearTimeout(stuckTimerRef.current);
      stuckTimerRef.current = setTimeout(() => {
        setIsStuckPromptActive(true);
      }, 1000);
    }
  };

  // Movement Engine
  const isMovingRef = useRef(false);
  const handleMove = useCallback(
    (dir: Direction) => {
      if (isCompleted || isPaused || isGameOver || isMovingRef.current) return;

      const activeCreature = creatures.find((c) => c.id === selectedCreatureId);
      if (
        !activeCreature ||
        activeCreature.isExited ||
        activeCreature.isDead ||
        activeCreature.isEntering ||
        (activeCreature.enteringProgress || 0) > 0 ||
        activeCreature.body.length === 0 ||
        portals.some((p) => p.x === activeCreature.body[0]?.x && p.y === activeCreature.body[0]?.y)
      ) {
        return;
      }

      // Save snapshot for Undo BEFORE updating state
      const snapshot: GameStateSnapshot = {
        creatures: JSON.parse(JSON.stringify(creatures)),
        portals: JSON.parse(JSON.stringify(portals)),
        specialTiles: JSON.parse(JSON.stringify(specialTiles)),
        energyObjects: JSON.parse(JSON.stringify(energyObjects)),
        moves,
        selectedCreatureId,
      };
      setHistoryStack((prev) => [...prev.slice(-10), snapshot]);

      if (stuckTimerRef.current) {
        clearTimeout(stuckTimerRef.current);
        stuckTimerRef.current = null;
      }
      setIsStuckPromptActive(false);

      isMovingRef.current = true;
      setTimeout(() => {
        isMovingRef.current = false;
      }, 130);

      // Clear active hint on move
      if (hint) {
        setHint(null);
      }

      const head = activeCreature.body[0];
      const delta = DIRECTION_VECTORS[dir];
      let nextX = head.x + delta.x;
      let nextY = head.y + delta.y;

      // 0. Strict 180-degree reversal check: Prevent moving directly into immediate neck/body segment
      if (activeCreature.body.length >= 2) {
        const neck = activeCreature.body[1];
        if (nextX === neck.x && nextY === neck.y) {
          // Cannot do 180-degree reversal! Must maneuver around corners!
          triggerBlockedMove();
          return;
        }
      }

      // 1. Board bounds check
      if (nextX < 0 || nextX >= levelData.width || nextY < 0 || nextY >= levelData.height) {
        triggerBlockedMove();
        return;
      }

      // 2. Obstacle check
      if (levelData.obstacles?.some((o) => o.x === nextX && o.y === nextY)) {
        triggerBlockedMove();
        return;
      }

      // 3. Locked Gate check
      const gate = specialTiles.find((t) => t.type === 'gate' && t.x === nextX && t.y === nextY);
      if (gate && !gate.isOpen) {
        triggerBlockedMove();
        return;
      }

      // 4. Portal interaction check
      const targetPortal = portals.find((p) => p.x === nextX && p.y === nextY);
      const enteringPortal = !!targetPortal;

      // 5. Energy object / Colored Orb collection check
      const energyIndex = energyObjects.findIndex(
        (e) => !e.collected && e.x === nextX && e.y === nextY
      );
      const hitOrb = energyIndex !== -1 ? energyObjects[energyIndex] : null;

      // 6. Collision with other creatures
      for (const other of creatures) {
        if (other.isExited || other.isDead) continue;
        if (other.id !== activeCreature.id) {
          if (other.body.some((seg) => seg.x === nextX && seg.y === nextY)) {
            triggerBlockedMove();
            return;
          }
        } else {
          // Own body collision
          let segmentsToCheck = other.body;
          if (hitOrb && hitOrb.color === activeCreature.color) {
            segmentsToCheck = other.body;
          } else {
            segmentsToCheck = other.body.slice(0, Math.max(0, other.body.length - 1));
          }

          if (segmentsToCheck.some((seg) => seg.x === nextX && seg.y === nextY)) {
            triggerBlockedMove();
            return;
          }
        }
      }

      // 7. Special Tile: Ice Slide
      if (!enteringPortal) {
        const isIce = specialTiles.some((t) => t.type === 'ice' && t.x === nextX && t.y === nextY);
        if (isIce) {
          soundManager.playIceSlide();
          let slideX = nextX;
          let slideY = nextY;
          while (true) {
            const testX = slideX + delta.x;
            const testY = slideY + delta.y;
            if (testX < 0 || testX >= levelData.width || testY < 0 || testY >= levelData.height) break;
            if (levelData.obstacles?.some((o) => o.x === testX && o.y === testY)) break;
            const hitsCreature = creatures.some(
              (c) => !c.isExited && !c.isDead && c.body.some((seg) => seg.x === testX && seg.y === testY)
            );
            if (hitsCreature) break;

            slideX = testX;
            slideY = testY;
            const tile = specialTiles.find((t) => t.x === slideX && t.y === slideY);
            if (!tile || tile.type !== 'ice') break;
          }
          nextX = slideX;
          nextY = slideY;
        }
      }

      // 9. Execute movement!
      setMoves((m) => m + 1);

      // Portal entry vs forward step
      if (enteringPortal && targetPortal) {
        const isWrongPortal = targetPortal.color !== activeCreature.color;
        const uncollectedSameColorOrbs = energyObjects.filter(
          (e) => !e.collected && e.color === activeCreature.color
        );
        const isMissingOrbs = uncollectedSameColorOrbs.length > 0;
        const isDefeatEntry = isWrongPortal || isMissingOrbs;

        if (isDefeatEntry) {
          soundManager.playSnakeDeath();
          triggerHaptic('warning', settings.vibrationEnabled);
        } else {
          soundManager.playPortalEntry();
          triggerHaptic('success', settings.vibrationEnabled);

          // Check if ocean snake entered
          if (activeCreature.color === 'blue') {
            setUserProgress((prev) => updateDailyQuestProgress(prev, 'ocean', 1));
          }
        }

        // 1. First: Head moves onto the portal hole tile (nextX, nextY) and tail advances by 1 step
        const steppedBody = [
          { x: nextX, y: nextY },
          ...activeCreature.body.slice(0, activeCreature.body.length - 1),
        ];

        // Head is now situated at the hole tile, strictly locked in place, fully visible and colorful
        setCreatures((prev) =>
          prev.map((c) => {
            if (c.id !== activeCreature.id) return c;
            return {
              ...c,
              direction: dir,
              body: steppedBody,
              isDead: false,
              isEntering: true,
              enteringProgress: 0,
            };
          })
        );

        // 2. Head stays locked at the hole tile (nextX, nextY).
        // Progressively pull the tail segments into the hole one-by-one while head remains 100% visible on top!
        let currentSegments = [...steppedBody];

        const slitherInterval = setInterval(() => {
          if (currentSegments.length > 1) {
            // Remove 1 tail segment as it slithers into the hole; head remains 100% fixed & visible at (nextX, nextY)
            currentSegments = currentSegments.slice(0, currentSegments.length - 1);
            setCreatures((prev) =>
              prev.map((c) => {
                if (c.id !== activeCreature.id) return c;
                return {
                  ...c,
                  body: currentSegments,
                  isDead: false,
                  isEntering: true,
                  enteringProgress: 0,
                };
              })
            );
          } else {
            // All tail segments have fully slithered into the hole!
            clearInterval(slitherInterval);

            // Hold head at 100% full size on top of the hole for 300ms so player clearly sees tail is gone and head rests at hole
            setTimeout(() => {
              // Smoothly animate head sinking into hole depth
              setCreatures((prev) =>
                prev.map((c) => {
                  if (c.id !== activeCreature.id) return c;
                  return {
                    ...c,
                    isEntering: true,
                    enteringProgress: 1.0,
                  };
                })
              );

              setTimeout(() => {
                // Head completely sinks out of view
                setCreatures((prev) => {
                  const next = prev.map((c) => {
                    if (c.id !== activeCreature.id) return c;
                    return {
                      ...c,
                      isEntering: false,
                      enteringProgress: 1,
                      isExited: true,
                      isDead: isDefeatEntry,
                      body: [],
                    };
                  });

                  if (isDefeatEntry) {
                    setTimeout(() => {
                      const t = getT(settings.language);
                      if (isWrongPortal) {
                        const targetSpecies = t.species[targetPortal.color] || { name: targetPortal.color };
                        const ownSpecies = t.species[activeCreature.color] || { name: activeCreature.color };
                        setGameOverReason(
                          t.gameOver.wrongPortalReason(ownSpecies.name, targetSpecies.name)
                        );
                      } else {
                        setGameOverReason(
                          t.gameOver.missingOrbsReason(uncollectedSameColorOrbs.length)
                        );
                      }
                      setIsGameOver(true);
                    }, 300);
                    return next;
                  }

                  // If successful entry, mark portal satisfied
                  setPortals((prevPortals) =>
                    prevPortals.map((p) =>
                      p.id === targetPortal!.id ? { ...p, isSatisfied: true } : p
                    )
                  );

                  // Open gates keyed to this creature's color
                  setSpecialTiles((prevTiles) =>
                    prevTiles.map((t) => {
                      if (t.type === 'gate' && t.requiredColor === activeCreature.color) {
                        return { ...t, isOpen: true };
                      }
                      return t;
                    })
                  );

                  // Check if all remaining snakes in the level have exited
                  const allExited = next.every((c) => c.isExited);

                  if (allExited) {
                    setTimeout(() => {
                      soundManager.playLevelComplete();
                      triggerHaptic('success', settings.vibrationEnabled);

                      const finalMoves = moves;
                      const finalTimeLeft = timeLeft;
                      const earnedStars = calculateStarsFromTime(timeLeft, maxTime);

                      setUserProgress((prevProgress) => {
                        let nextProgress: UserProgress;

                        if (gameMode === 'classic') {
                          const withQuest = updateDailyQuestProgress(prevProgress, 'levels', 1);
                          const currentSaved = withQuest.completedLevels[levelData.id];
                          const bestMoves = currentSaved
                            ? Math.min(currentSaved.bestMoves, finalMoves)
                            : finalMoves;
                          const maxStars = currentSaved
                            ? Math.max(currentSaved.stars, earnedStars)
                            : earnedStars;

                          nextProgress = {
                            ...withQuest,
                            coins: (withQuest.coins || 0) + earnedStars * 25,
                            currentLevelId: Math.min(100, Math.max(withQuest.currentLevelId, levelData.id + 1)),
                            completedLevels: {
                              ...withQuest.completedLevels,
                              [levelData.id]: {
                                stars: maxStars,
                                bestMoves,
                                completedAt: Date.now(),
                              },
                            },
                          };
                        } else {
                          const withQuest = updateDailyQuestProgress(prevProgress, 'adventure', 1);
                          const currentHighest = prevProgress.adventure?.highestStage || 1;
                          const currentTotalScore = prevProgress.adventure?.totalScore || 0;
                          const earnedScore = Math.max(50, 200 - finalMoves * 5);

                          nextProgress = {
                            ...withQuest,
                            coins: (withQuest.coins || 0) + 50,
                            adventure: {
                              selectedColor: adventureSnakeColor,
                              highestStage: Math.min(100, Math.max(currentHighest, adventureStage + 1)),
                              currentStage: Math.min(100, adventureStage + 1),
                              totalScore: currentTotalScore + earnedScore,
                            },
                          };
                        }

                        // Check for newly unlocked badges
                        const newlyUnlocked = checkNewAchievements(nextProgress, {
                          moves: finalMoves,
                          parMoves: levelData.parMoves,
                          timeLeft: finalTimeLeft,
                          maxTime,
                          level: levelData,
                          gameMode,
                          stage: adventureStage,
                        });

                        if (newlyUnlocked.length > 0) {
                          const updatedUnlocked = Array.from(
                            new Set([
                              ...(nextProgress.unlockedAchievements || []),
                              ...newlyUnlocked.map((a) => a.id),
                            ])
                          );
                          nextProgress = {
                            ...nextProgress,
                            unlockedAchievements: updatedUnlocked,
                          };
                          setUnlockedAchievementQueue(newlyUnlocked);
                        }

                        return nextProgress;
                      });

                      setIsCompleted(true);
                    }, 200);
                  } else {
                    const nextRemaining = next.find((c) => !c.isExited && !c.isDead);
                    if (nextRemaining) {
                      setSelectedCreatureId(nextRemaining.id);
                    }
                  }

                  return next;
                });
              }, 450);
            }, 300);
          }
        }, 120);

        return;
      } else {
        // Standard forward step or Orb interaction!
        if (hitOrb) {
          // Remove orb from board immediately!
          setEnergyObjects((prev) =>
            prev.map((e, idx) => (idx === energyIndex ? { ...e, collected: true } : e))
          );

          if (hitOrb.color === activeCreature.color) {
            // MATCHING COLOR: +1 LENGTH (GROWTH)
            soundManager.playGrowth();
            soundManager.playCollectEnergy();
            triggerHaptic('medium', settings.vibrationEnabled);
            setLevelStarsCollected((s) => s + 1);

            setUserProgress((prev) => {
              const withQuest = updateDailyQuestProgress(prev, 'stars', 1);
              return {
                ...withQuest,
                coins: (withQuest.coins || 0) + 10,
              };
            });

            // New body has new head prepended, tail remains intact -> length + 1
            const newBody = [{ x: nextX, y: nextY }, ...activeCreature.body];

            setCreatures((prev) =>
              prev.map((c) => {
                if (c.id !== activeCreature.id) return c;
                return {
                  ...c,
                  direction: dir,
                  body: newBody,
                };
              })
            );
          } else {
            // DIFFERENT COLOR: DIRECT DEFEAT (Yılan kendi rengi haricindeki bir topu alırsa direk kaybedilir)
            soundManager.playSnakeDeath();
            triggerHaptic('warning', settings.vibrationEnabled);

            const targetColor = hitOrb.color || 'green';
            const t = getT(settings.language);
            const targetSpecies = t.species[targetColor] || { name: targetColor };
            const ownSpecies = t.species[activeCreature.color] || { name: activeCreature.color };

            const steppedBody = [
              { x: nextX, y: nextY },
              ...activeCreature.body.slice(0, activeCreature.body.length - 1),
            ];

            setCreatures((prev) =>
              prev.map((c) => {
                if (c.id !== activeCreature.id) return c;
                return {
                  ...c,
                  direction: dir,
                  body: steppedBody,
                  isDead: true,
                };
              })
            );

            setTimeout(() => {
              setGameOverReason(
                t.gameOver.wrongOrbReason(ownSpecies.name, targetSpecies.name)
              );
              setIsGameOver(true);
            }, 1000);
          }
        } else {
          // Standard Move without orb
          soundManager.playMove();
          triggerHaptic('light', settings.vibrationEnabled);

          const newBody = [{ x: nextX, y: nextY }, ...activeCreature.body.slice(0, activeCreature.body.length - 1)];

          setCreatures((prev) =>
            prev.map((c) => {
              if (c.id !== activeCreature.id) return c;
              return {
                ...c,
                direction: dir,
                body: newBody,
              };
            })
          );
        }
      }
    },
    [
      isCompleted,
      isPaused,
      isGameOver,
      creatures,
      selectedCreatureId,
      hint,
      levelData,
      specialTiles,
      portals,
      energyObjects,
      moves,
      gameMode,
      adventureStage,
      adventureSnakeColor,
      settings.vibrationEnabled,
    ]
  );

  // In-Game Hint Provider
  const handleRequestHint = () => {
    if (hint || userProgress.hintsRemaining <= 0) return;

    const openGates = specialTiles
      .filter((t) => t.type === 'gate' && t.isOpen)
      .map((g) => `${g.x},${g.y}`);

    const solverState: SolverState = {
      creatures: creatures.map((c) => ({
        id: c.id,
        color: c.color,
        body: c.body.map((b) => ({ ...b })),
        isExited: c.isExited,
      })),
      energyObjects: energyObjects.map((e) => ({
        id: e.id,
        x: e.x,
        y: e.y,
        collected: !!e.collected,
      })),
      openGates,
    };

    const best = findBestMove(levelData, solverState, 25);
    if (best) {
      setSelectedCreatureId(best.creatureId);
      setHint({
        creatureId: best.creatureId,
        direction: best.direction,
      });

      setUserProgress((prev) => ({
        ...prev,
        hintsRemaining: Math.max(0, prev.hintsRemaining - 1),
      }));

      setTimeout(() => {
        setHint(null);
      }, 5000);
    }
  };

  const remainingPortals = portals.filter((p: Portal) => !p.isSatisfied);
  const currentBoardTheme =
    gameMode === 'adventure'
      ? getThemeForStage(adventureStage)
      : DEFAULT_CLASSIC_THEME;

  // Render view screens
  if (screen === 'menu') {
    return (
      <main className="w-full h-screen bg-[#0d111a] flex flex-col items-center justify-center">
        <MainMenu
          userProgress={userProgress}
          settings={settings}
          onNavigate={(target) => setScreen(target)}
          onStartLevel={startLevel}
          onUpdateProgress={(p: UserProgress) => setUserProgress(p)}
        />
      </main>
    );
  }

  if (screen === 'adventure-select') {
    return (
      <main className="w-full h-screen bg-[#0d111a] flex flex-col items-center justify-center">
        <AdventureSelect
          userProgress={userProgress}
          settings={settings}
          onStartAdventure={startAdventure}
          onBack={() => setScreen('menu')}
        />
      </main>
    );
  }

  if (screen === 'level-select') {
    return (
      <main className="w-full h-screen bg-[#0d111a] flex flex-col items-center justify-center">
        <LevelSelect
          userProgress={userProgress}
          settings={settings}
          onSelectLevel={startLevel}
          onBack={() => setScreen('menu')}
        />
      </main>
    );
  }

  if (screen === 'collection') {
    return (
      <main className="w-full h-screen bg-[#0d111a] flex flex-col items-center justify-center">
        <CollectionModal
          userProgress={userProgress}
          settings={settings}
          onUpdateProgress={(p) => setUserProgress(p)}
          onBack={() => setScreen('menu')}
        />
      </main>
    );
  }

  if (screen === 'achievements') {
    return (
      <main className="w-full h-screen bg-[#0d111a] flex flex-col items-center justify-center">
        <AchievementsModal
          userProgress={userProgress}
          settings={settings}
          onBack={() => setScreen('menu')}
        />
      </main>
    );
  }

  if (screen === 'settings') {
    return (
      <main className="w-full h-screen bg-[#0d111a] flex flex-col items-center justify-center">
        <SettingsModal
          settings={settings}
          userProgress={userProgress}
          onUpdateSettings={(s) => setSettings(s)}
          onUpdateProgress={(p) => setUserProgress(p)}
          onBack={() => setScreen('menu')}
        />
      </main>
    );
  }

  // Active Gameplay Screen (8x12 Board)
  return (
    <main className="w-full h-screen bg-[#0d111a] flex flex-col justify-between items-center overflow-hidden">
      {/* HUD Bar with Countdown Timer */}
      <GameHUD
        level={levelData}
        moves={moves}
        timeLeft={timeLeft}
        maxTime={maxTime}
        remainingPortals={remainingPortals}
        hintsRemaining={userProgress.hintsRemaining}
        collectedStars={levelStarsCollected}
        gameMode={gameMode}
        adventureStage={adventureStage}
        activeCreatureColor={creatures.find((c: Creature) => c.id === selectedCreatureId)?.color}
        language={settings.language}
        onRestart={() => {
          if (gameMode === 'classic') initClassicLevel(currentLevelId);
          else initAdventureStage(adventureStage, adventureSnakeColor);
        }}
        onHint={handleRequestHint}
        onUndo={handleUndo}
        onPause={() => setIsPaused(true)}
        vibrationEnabled={settings.vibrationEnabled}
        isHintActive={!!hint}
        canUndo={historyStack.length > 0}
        isStuckPromptActive={isStuckPromptActive}
      />

      {/* Expanded 8x12 Arena Game Board with Dynamic Stage Theme */}
      <GameBoard
        level={levelData}
        creatures={creatures}
        portals={portals}
        specialTiles={specialTiles}
        energyObjects={energyObjects}
        selectedCreatureId={selectedCreatureId}
        onSelectCreature={() => {}}
        onMove={handleMove}
        activeSkin={userProgress.activeSkin}
        swipeEnabled={true}
        hint={hint}
        shakeTrigger={shakeTrigger}
        theme={currentBoardTheme}
      />

      {/* Pause Modal */}
      {isPaused && (
        <PauseModal
          onResume={() => setIsPaused(false)}
          onRestart={() => {
            if (gameMode === 'classic') initClassicLevel(currentLevelId);
            else initAdventureStage(adventureStage, adventureSnakeColor);
          }}
          onLevelSelect={() => setScreen(gameMode === 'adventure' ? 'adventure-select' : 'level-select')}
          onReturnToMainMenu={() => {
            setIsPaused(false);
            setScreen('menu');
          }}
          settings={settings}
          onUpdateSettings={(s) => setSettings(s)}
        />
      )}

      {/* Defeat / Game Over Modal */}
      {isGameOver && (
        <GameOverModal
          level={levelData}
          gameMode={gameMode}
          adventureStage={adventureStage}
          reason={gameOverReason}
          language={settings.language}
          onReplay={() => {
            if (gameMode === 'classic') initClassicLevel(currentLevelId);
            else initAdventureStage(adventureStage, adventureSnakeColor);
          }}
          onLevelSelect={() => setScreen(gameMode === 'adventure' ? 'adventure-select' : 'level-select')}
          vibrationEnabled={settings.vibrationEnabled}
        />
      )}

      {/* Unlocked Badge Modal (Appears BEFORE Level Complete Modal) */}
      {unlockedAchievementQueue.length > 0 && (
        <AchievementUnlockedModal
          achievement={unlockedAchievementQueue[0]}
          settings={settings}
          onClose={() => {
            setUnlockedAchievementQueue((prev: Achievement[]) => prev.slice(1));
          }}
        />
      )}

      {/* Level / Stage Complete Victory Modal */}
      {isCompleted && unlockedAchievementQueue.length === 0 && (
        <LevelCompleteModal
          level={levelData}
          moves={moves}
          stars={calculateStarsFromTime(timeLeft, maxTime)}
          timeLeft={timeLeft}
          maxTime={maxTime}
          collectedStars={levelStarsCollected}
          gameMode={gameMode}
          adventureStage={adventureStage}
          userProgress={userProgress}
          language={settings.language}
          hasNextLevel={
            gameMode === 'adventure'
              ? adventureStage < 100
              : currentLevelId < GAME_LEVELS.length
          }
          onNextLevel={() => {
            if (gameMode === 'adventure') {
              if (adventureStage < 100) {
                initAdventureStage(adventureStage + 1, adventureSnakeColor);
              }
            } else if (currentLevelId < GAME_LEVELS.length) {
              startLevel(currentLevelId + 1);
            }
          }}
          onReplay={() => {
            if (gameMode === 'classic') initClassicLevel(currentLevelId);
            else initAdventureStage(adventureStage, adventureSnakeColor);
          }}
          onLevelSelect={() => setScreen(gameMode === 'adventure' ? 'adventure-select' : 'level-select')}
          vibrationEnabled={settings.vibrationEnabled}
        />
      )}
    </main>
  );
}
