import React from 'react';
import { UserProgress, GameSettings, DailyQuest } from '../types/game';
import { soundManager } from '../audio/soundManager';
import { triggerHaptic } from '../utils/haptics';
import { claimDailyQuestReward } from '../utils/dailyQuests';
import { getT } from '../i18n/translations';

interface DailyQuestsModalProps {
  userProgress: UserProgress;
  settings: GameSettings;
  onUpdateProgress: (progress: UserProgress) => void;
  onClose: () => void;
}

export const DailyQuestsModal: React.FC<DailyQuestsModalProps> = ({
  userProgress,
  settings,
  onUpdateProgress,
  onClose,
}) => {
  const quests: DailyQuest[] = userProgress.dailyQuests || [];
  const completedCount = quests.filter((q) => q.completed).length;
  const t = getT(settings.language);

  const handleClaim = (questId: string) => {
    soundManager.playCollectEnergy();
    triggerHaptic('success', settings.vibrationEnabled);
    const { progress } = claimDailyQuestReward(userProgress, questId);
    onUpdateProgress(progress);
  };

  const getQuestText = (quest: DailyQuest) => {
    const qKey = quest.id as keyof typeof t.dailyQuests.quests;
    if (t.dailyQuests.quests[qKey]) {
      return t.dailyQuests.quests[qKey];
    }
    return { title: quest.title, desc: quest.description };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#0f1422] border-2 border-slate-700 shadow-2xl p-5 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎁</span>
            <div>
              <h2 className="text-base font-extrabold text-white">{t.dailyQuests.title}</h2>
              <p className="text-[11px] text-slate-400">{t.dailyQuests.subtitle}</p>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playButton();
              onClose();
            }}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Quest List */}
        <div className="flex-1 overflow-y-auto py-3 space-y-2.5">
          {quests.map((quest) => {
            const pct = Math.min(100, Math.round((quest.current / quest.target) * 100));
            const questText = getQuestText(quest);

            return (
              <div
                key={quest.id}
                className={`p-3 rounded-2xl border transition-all ${
                  quest.claimed
                    ? 'bg-slate-900/40 border-slate-800/60 opacity-60'
                    : quest.completed
                    ? 'bg-emerald-950/40 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/80 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{quest.icon}</span>
                    <div>
                      <div className="text-xs font-extrabold text-white">{questText.title}</div>
                      <div className="text-[11px] text-slate-400">{questText.desc}</div>
                    </div>
                  </div>

                  {/* Reward / Action */}
                  <div>
                    {quest.claimed ? (
                      <span className="text-[11px] font-bold text-slate-500">{t.dailyQuests.claimed}</span>
                    ) : quest.completed ? (
                      <button
                        onClick={() => handleClaim(quest.id)}
                        className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs shadow-md shadow-emerald-500/30 active:scale-95 cursor-pointer animate-pulse"
                      >
                        {t.dailyQuests.claimBtn}
                      </button>
                    ) : (
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-amber-400 font-bold">
                          +{quest.rewardAmount} {quest.rewardType === 'hints' ? t.common.hints : quest.rewardType === 'stars' ? t.common.stars : t.common.coins}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {quest.current}/{quest.target}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                {!quest.claimed && (
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2.5">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Status */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            {t.dailyQuests.progress} <span className="text-emerald-400 font-bold">{completedCount}/{quests.length}</span>
          </div>

          <button
            onClick={() => {
              soundManager.playButton();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-extrabold cursor-pointer"
          >
            {t.dailyQuests.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
