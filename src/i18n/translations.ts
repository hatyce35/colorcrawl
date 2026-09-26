import { CrawlerColor, CosmeticSkin, Language } from '../types/game';

export interface SpeciesTranslation {
  name: string;
  title: string;
  description: string;
}

export interface SkinTranslation {
  name: string;
  description: string;
}

export interface Translations {
  common: {
    menu: string;
    back: string;
    close: string;
    cancel: string;
    yes: string;
    no: string;
    level: string;
    stage: string;
    moves: string;
    time: string;
    stars: string;
    coins: string;
    hints: string;
  };
  mainMenu: {
    gameTitle: string;
    gameTagline: string;
    playClassic: string;
    classicDesc: string;
    adventureMode: string;
    adventureDesc: string;
    levelsBtn: string;
    collectionBtn: string;
    badgesBtn: string;
    questsBtn: string;
    settingsAria: string;
  };
  pauseModal: {
    gamePaused: string;
    sound: string;
    music: string;
    resume: string;
    restartLevel: string;
    returnToMainMenu: string;
    exitToLevelSelect: string;
  };
  gameHUD: {
    turn: string;
    hintBtn: string;
    undoBtn: string;
    undoTip: string;
    moves: string;
    targetPortals: string;
    stage: string;
    level: string;
  };
  levelComplete: {
    levelFinished: string;
    stageFinished: (stage: number) => string;
    adventureProgressSub: string;
    gameWonTitle: string;
    gameWonSub: string;
    gameWonClassicDesc: string;
    gameWonAdventureDesc: string;
    starRatingSuper: string;
    starRatingGood: string;
    starRatingClose: string;
    starAchievement: string;
    remainingTime: string;
    elapsedTime: string;
    movesMade: string;
    extraStars: string;
    nextLevel: string;
    nextStage: string;
    replay: string;
    returnMenuChampion: string;
    levelsBtn: string;
    menuBtn: string;
  };
  gameOver: {
    title: string;
    adventureStageSub: (stage: number) => string;
    tryAgain: string;
    returnToMenu: string;
    levelSelectBtn: string;
    tipHeader: string;
    defaultTip: string;
    wrongPortalReason: (ownColor: string, targetPortalColor: string) => string;
    missingOrbsReason: (remainingCount: number) => string;
    wrongOrbReason: (ownColor: string, targetOrbColor: string) => string;
    timeoutReason: string;
  };
  settings: {
    settingsTitle: string;
    languageTitle: string;
    turkish: string;
    english: string;
    audioSection: string;
    soundFx: string;
    soundFxDesc: string;
    ambientMusic: string;
    ambientMusicDesc: string;
    vibration: string;
    vibrationDesc: string;
    controlsSection: string;
    swipe: string;
    buttons: string;
    both: string;
    progressSection: string;
    completedLevels: string;
    resetProgressBtn: string;
    confirmResetTitle: string;
    yesReset: string;
  };
  collection: {
    collectionTitle: string;
    tabSpecies: (count: number) => string;
    tabSkins: (count: number) => string;
    skinEquipped: string;
    skinEquipBtn: string;
    skinUnlockStars: (stars: number) => string;
    skinLabel: (skin: string) => string;
  };
  dailyQuests: {
    title: string;
    subtitle: string;
    claimed: string;
    claimBtn: string;
    progress: string;
    closeBtn: string;
    quests: {
      daily_login: { title: string; desc: string };
      complete_levels: { title: string; desc: string };
      collect_stars: { title: string; desc: string };
      play_adventure: { title: string; desc: string };
      use_ocean_snake: { title: string; desc: string };
    };
  };
  achievements: {
    modalTitle: string;
    modalSubtitle: string;
    unlockedBadgeModalTitle: string;
    unlockedBadgeSubtitle: string;
    unlockedBadgeTapContinue: string;
    unlockedCount: (unlocked: number, total: number) => string;
    tierBronze: string;
    tierSilver: string;
    tierGold: string;
    tierLegendary: string;
    items: Record<string, { title: string; desc: string }>;
  };
  adventureSelect: {
    header: string;
    subheader: string;
    highest: string;
    currentStage: string;
    stageNum: (stage: number) => string;
    targetHole: string;
    chooseSnake: string;
    startBtn: string;
    continueBtn: (stage: number) => string;
    restartStage1: string;
    selectStagePrompt: string;
  };
  levelSelect: {
    header: (total: number) => string;
    selectPrompt: string;
    completedCount: (completed: number, total: number) => string;
  };
  species: Record<CrawlerColor, SpeciesTranslation>;
  skins: Record<CosmeticSkin, SkinTranslation>;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  tr: {
    common: {
      menu: 'Menü',
      back: 'Geri',
      close: 'Kapat',
      cancel: 'İptal',
      yes: 'Evet',
      no: 'Hayır',
      level: 'Bölüm',
      stage: 'Aşama',
      moves: 'Hamle',
      time: 'Süre',
      stars: 'Yıldız',
      coins: 'Altın',
      hints: 'İpucu',
    },
    mainMenu: {
      gameTitle: 'COLOR CRAWL',
      gameTagline: 'Renkli yılanları kendi deliklerine ulaştır, yıldızları topla!',
      playClassic: 'Klasik Mod',
      classicDesc: '100 eğlenceli zeka bulmacasını çöz',
      adventureMode: 'Macera Modu',
      adventureDesc: 'Seçtiğin tek yılanla zorlaşan 100 aşamayı geç',
      levelsBtn: 'Bölümler',
      collectionBtn: 'Koleksiyon',
      badgesBtn: 'Rozetler',
      questsBtn: 'Görevler',
      settingsAria: 'Ayarlar',
    },
    pauseModal: {
      gamePaused: 'Oyun Duraklatıldı',
      sound: 'Ses',
      music: 'Müzik',
      resume: 'Devam Et',
      restartLevel: 'Yeniden Başlat',
      returnToMainMenu: 'Ana Menüye Dön',
      exitToLevelSelect: 'Bölüm Seçimine Dön',
    },
    gameHUD: {
      turn: 'Sıra',
      hintBtn: 'İpucu Al',
      undoBtn: 'Geri Al',
      undoTip: 'Geri dönülemez noktadasın! Son 3 hamleni geri alabilirsin:',
      moves: 'Hamle',
      targetPortals: 'Hedefler',
      stage: 'AŞAMA',
      level: 'Bölüm',
    },
    levelComplete: {
      levelFinished: 'Tebrikler! Bölüm Bitti',
      stageFinished: (stage) => `Aşama ${stage} Geçildi!`,
      adventureProgressSub: 'Harika bir macera ilerlemesi!',
      gameWonTitle: 'OYUNU BİTİRDİNİZ!',
      gameWonSub: '🎉 TEBRİKLER! TÜM 100 BÖLÜMÜ TAMAMLADINIZ! 🎉',
      gameWonClassicDesc: 'Klasik moddaki 100 bulmacanın tamamını çözerek Color Crawl Grandmaster unvanına ulaştınız!',
      gameWonAdventureDesc: 'Adventure modundaki 100 zorlu aşamanın hepsini fethederek gerçek bir Usta Yılan Rehberi oldunuz!',
      starRatingSuper: '⚡ Harika Hız! (%50+ Süre Kaldı)',
      starRatingGood: '⏱️ İyi Süre! (%20 - %50 Süre Kaldı)',
      starRatingClose: '⏳ Son Anda Bitiriş! (<%20 Süre Kaldı)',
      starAchievement: 'Yıldız Başarısı:',
      remainingTime: '⏱️ Kalan Süre:',
      elapsedTime: '⏳ Geçen Süre:',
      movesMade: '🐾 Yapılan Hamle:',
      extraStars: 'Toplanan Ekstra Yıldızlar:',
      nextLevel: 'Sonraki Bölüm →',
      nextStage: 'Sonraki Aşama →',
      replay: 'Tekrar Oyna',
      returnMenuChampion: '🏠 Menüye Dön (Şampiyon)',
      levelsBtn: 'Bölümler',
      menuBtn: 'Menü',
    },
    gameOver: {
      title: 'KAYBETTİN!',
      adventureStageSub: (stage) => `Macera Aşaması ${stage}`,
      tryAgain: 'Tekrar Dene',
      returnToMenu: 'Ana Menüye Dön',
      levelSelectBtn: 'Bölüm Seçimi',
      tipHeader: 'İpucu:',
      defaultTip: 'Sadece yılanınla aynı renkteki topları ye (+1 uzatır). Farklı renk toplardan kaçın ve doğru deliğe gir!',
      wrongPortalReason: (own, target) =>
        `Yanlış renkli deliğe girdin! ${own} yılanı ${target} deliğine giremez, sadece kendi rengindeki (${own}) deliğe girmelidir.`,
      missingOrbsReason: (count) =>
        `Kendi rengindeki tüm topları toplamadan deliğe girdin! (${count} top toplanmadı). Bölümü tamamlamak için önce kendi rengindeki bütün topları toplamalısın.`,
      wrongOrbReason: (own, target) =>
        `Yanlış renkteki topu yedin! ${own} yılanı ${target} topunu yiyemez, sadece kendi rengindeki (${own}) topları yemelidir.`,
      timeoutReason: 'Süre doldu! Bölümü tamamlamak için daha hızlı hareket etmelisin.',
    },
    settings: {
      settingsTitle: 'Ayarlar',
      languageTitle: 'Dil Seçeneği / Language',
      turkish: 'Türkçe 🇹🇷',
      english: 'English 🇬🇧',
      audioSection: 'Ses & Geri Bildirim',
      soundFx: 'Ses Efektleri',
      soundFxDesc: 'Top sesleri, delik girişleri ve efektler',
      ambientMusic: 'Müzik & Melodi',
      ambientMusicDesc: 'Huzurlu ve sakin arka plan müziği',
      vibration: 'Titreşim (Haptik)',
      vibrationDesc: 'Dönüşlerde ve adımlarda dokunsal titreşim',
      controlsSection: 'Hareket Kontrolleri',
      swipe: 'Kaydırma',
      buttons: 'Ok Tuşları',
      both: 'Hibrit (İkisi de)',
      progressSection: 'Oyun İlerlemesi',
      completedLevels: 'Tamamlanan Bölümler:',
      resetProgressBtn: 'Tüm İlerlemeyi Sıfırla',
      confirmResetTitle: 'Emin misiniz? Tüm yıldızlar ve açılan bölümler silinecektir!',
      yesReset: 'Evet, Sıfırla',
    },
    collection: {
      collectionTitle: 'Yılan Barınağı',
      tabSpecies: (count) => `Türler (${count})`,
      tabSkins: (count) => `Kostüm Desenleri (${count})`,
      skinEquipped: 'Kuşanıldı',
      skinEquipBtn: 'Kuşan',
      skinUnlockStars: (stars) => `${stars} Yıldız`,
      skinLabel: (skin) => `Desen: ${skin.toLocaleUpperCase('tr-TR')}`,
    },
    dailyQuests: {
      title: 'Günlük Görevler',
      subtitle: 'Tamamla ve bonus ödüllerini topla!',
      claimed: 'Alındı ✓',
      claimBtn: 'Ödülü Al!',
      progress: 'İlerleme:',
      closeBtn: 'Kapat',
      quests: {
        daily_login: {
          title: 'Günlük Ziyaret',
          desc: 'Oyuna her gün giriş yaparak ödülünü kazan',
        },
        complete_levels: {
          title: 'Bölüm Tamamlayıcı',
          desc: 'Herhangi 3 bulmaca bölümü bitir',
        },
        collect_stars: {
          title: 'Yıldız Avcısı',
          desc: 'Bölümlerde toplam 6 yıldız topla',
        },
        play_adventure: {
          title: 'Macera Kâşifi',
          desc: 'Macera modunda 2 aşama geç',
        },
        use_ocean_snake: {
          title: 'Okyanus Dalgıcı',
          desc: 'Mavi Okyanus Yılanı ile 1 bölüm bitir',
        },
      },
    },
    achievements: {
      modalTitle: 'Başarı Rozetleri',
      modalSubtitle: 'Özel hedeflere ulaş, efsanevi rozetleri koleksiyonuna kat!',
      unlockedBadgeModalTitle: 'YENİ ROZET KAZANILDI!',
      unlockedBadgeSubtitle: 'Tebrikler! Yeni bir başarı kilidi açtın!',
      unlockedBadgeTapContinue: 'Devam Et',
      unlockedCount: (unlocked, total) => `${unlocked} / ${total} Rozet Açıldı`,
      tierBronze: 'Bronz',
      tierSilver: 'Gümüş',
      tierGold: 'Altın',
      tierLegendary: 'Efsanevi',
      items: {
        first_step: { title: 'İlk Adım', desc: 'Color Crawl evrenindeki ilk bölümünü tamamla.' },
        speed_runner: { title: 'Yıldırım Yılan', desc: 'Bir bölümü sürenin en az %60’ı kalarak yıldırım hızında bitir.' },
        star_collector_15: { title: 'Yıldız Toplayıcı', desc: 'Toplam 15 yıldız toplayarak gökyüzünü aydınlat.' },
        star_collector_50: { title: 'Yıldız Ustası', desc: 'Toplam 50 yıldıza ulaşarak ustalığını kanıtla.' },
        star_collector_100: { title: 'Yıldız Efsanesi', desc: 'Toplam 100 yıldız toplayarak zirveye yerleş.' },
        adventure_initiate: { title: 'Macera Yolcusu', desc: 'Macera Modunda 3. aşamaya başarıyla ulaş.' },
        adventure_explorer: { title: 'Macera Kâşifi', desc: 'Macera Modunda 10. aşamaya ulaşarak sınırları zorla.' },
        adventure_champion: { title: 'Macera Fatihi', desc: 'Macera Modunda 25. aşamaya ulaşarak şampiyonluk yoluna gir.' },
        adventure_grandmaster: { title: 'Macera Efsanesi', desc: 'Macera Modunun tüm 100 aşamasını fethederek efsane ol!' },
        ice_skater: { title: 'Buz Dansçısı', desc: 'Buzlu kaygan zemin içeren bir bölümü başarıyla tamamla.' },
        fashion_enthusiast: { title: 'Kostüm Meraklısı', desc: 'Koleksiyonunda en az 2 farklı yılan kostümü aç.' },
        fashion_legend: { title: 'Moda İkonu', desc: 'Koleksiyonunda 5 farklı kostümün kilidini aç.' },
        perfectionist: { title: 'Kusursuz Hamle', desc: 'Bir bölümü belirlenen par hamle sayısı veya daha azında bitir.' },
        classic_master_10: { title: 'Bulmaca Çırağı', desc: 'Klasik modda 10 farklı bulmacayı çöz.' },
        classic_master_50: { title: 'Bulmaca Ustası', desc: 'Klasik modda 50 bulmacayı başarıyla tamamla.' },
        classic_grandmaster_100: { title: 'Büyük Usta (Grandmaster)', desc: 'Klasik modun 100 bölümünün tamamını bitir!' },
      },
    },
    adventureSelect: {
      header: 'MACERA MODU',
      subheader: '100 Aşamalı Yılan Macerası',
      highest: 'En Yüksek:',
      currentStage: 'Mevcut Aşama',
      stageNum: (stage) => `Aşama ${stage}`,
      targetHole: 'Hedef Delik',
      chooseSnake: 'Yılanını Seç:',
      startBtn: 'Maceraya Başla',
      continueBtn: (stage) => `Kaldığın Yerden Devam Et (Aşama ${stage})`,
      restartStage1: '1. Aşamadan Yeniden Başla',
      selectStagePrompt: 'Başlamak İstediğin Aşama',
    },
    levelSelect: {
      header: (total) => `Tüm Bölümler (1 - ${total})`,
      selectPrompt: 'Oynamak istediğin bölümü seç:',
      completedCount: (completed, total) => `${completed} / ${total} Tamamlandı`,
    },
    species: {
      red: {
        name: 'Yakut Yılanı',
        title: 'Kızıl Kıvılcım',
        description: 'Ateşli ve enerjik, sıcak taş patikalarda neşeyle süzülmeyi sever.',
      },
      blue: {
        name: 'Okyanus Yılanı',
        title: 'Dalga Gezgini',
        description: 'Sakin ve dengeli, derin safir yarıklara doğru dalga zarafetiyle süzülür.',
      },
      yellow: {
        name: 'Güneş Yılanı',
        title: 'Güneş Filizi',
        description: 'Neşeli gün ışığı saçar, altın sarısı ışıltısıyla parıldar.',
      },
      green: {
        name: 'Yaprak Yılanı',
        title: 'Çayır Sakini',
        description: 'Sessiz orman kâşifi, yosunlu bahçelerle doğal uyum sağlar.',
      },
      purple: {
        name: 'Menekşe Yılanı',
        title: 'Mistik Düşkuran',
        description: 'Gizemli ve bilge, karanlıkta zarif yankılar ve frekanslar saçar.',
      },
      orange: {
        name: 'Kehribar Yılanı',
        title: 'Alacakaranlık İzcisi',
        description: 'Hızlı ve meraklı, geçtiği yerlerde sıcak akşam korları bırakır.',
      },
      pink: {
        name: 'Gül Yılanı',
        title: 'Çiçek Rehberi',
        description: 'Narin taç yaprağı desenleriyle süzülür, sevgi ve neşe saçar.',
      },
      cyan: {
        name: 'Gök Yılanı',
        title: 'Rüzgâr Perisi',
        description: 'Yaz meltemi gibi hafif, ışıltılı buz kristalleri arasında süzülür.',
      },
    },
    skins: {
      classic: {
        name: 'Klasik Canlı',
        description: 'Parlak ve temiz yılan rengi gövde kaplaması.',
      },
      rainbow: {
        name: 'Gökkuşağı Prizması',
        description: 'Her boğumda kayan rengarenk prizmatik ışık dalgaları.',
      },
      galaxy: {
        name: 'Kozmik Nebula',
        description: 'Gece yarısı moru ve derin yıldız tozu ışıltısı.',
      },
      candy: {
        name: 'Şeker Patlaması',
        description: 'Lezzetli pamuk şeker kıvamında tatlı pastel geçişler.',
      },
      jungle: {
        name: 'Derin Orman',
        description: 'Yabani kâşifler için zümrüt ve altın sarısı dokular.',
      },
      lava: {
        name: 'Magma Çekirdeği',
        description: 'Yeraltı ateşinin lav çatlaklarıyla atan erimiş sıcaklığı.',
      },
      ice: {
        name: 'Buzul Kutup Işığı',
        description: 'Kutup gecesinde parıldayan buz kristali pullar.',
      },
    },
  },
  en: {
    common: {
      menu: 'Menu',
      back: 'Back',
      close: 'Close',
      cancel: 'Cancel',
      yes: 'Yes',
      no: 'No',
      level: 'Level',
      stage: 'Stage',
      moves: 'Moves',
      time: 'Time',
      stars: 'Stars',
      coins: 'Coins',
      hints: 'Hints',
    },
    mainMenu: {
      gameTitle: 'COLOR CRAWL',
      gameTagline: 'Guide colorful snakes to their matching holes and collect stars!',
      playClassic: 'Classic Mode',
      classicDesc: 'Solve 100 fun mind-bending puzzles',
      adventureMode: 'Adventure Mode',
      adventureDesc: 'Clear 100 challenging stages with your chosen snake',
      levelsBtn: 'Levels',
      collectionBtn: 'Collection',
      badgesBtn: 'Badges',
      questsBtn: 'Quests',
      settingsAria: 'Settings',
    },
    pauseModal: {
      gamePaused: 'Game Paused',
      sound: 'Sound',
      music: 'Music',
      resume: 'Resume',
      restartLevel: 'Restart Level',
      returnToMainMenu: 'Return to Main Menu',
      exitToLevelSelect: 'Exit to Level Select',
    },
    gameHUD: {
      turn: 'Turn',
      hintBtn: 'Get Hint',
      undoBtn: 'Undo',
      undoTip: 'Point of no return! Undo your last 3 moves:',
      moves: 'Moves',
      targetPortals: 'Targets',
      stage: 'STAGE',
      level: 'Level',
    },
    levelComplete: {
      levelFinished: 'Congratulations! Level Completed',
      stageFinished: (stage) => `Stage ${stage} Cleared!`,
      adventureProgressSub: 'Great adventure progress!',
      gameWonTitle: 'YOU FINISHED THE GAME!',
      gameWonSub: '🎉 CONGRATULATIONS! ALL 100 LEVELS COMPLETED! 🎉',
      gameWonClassicDesc: 'You solved all 100 puzzles in Classic mode and earned the Color Crawl Grandmaster title!',
      gameWonAdventureDesc: 'You conquered all 100 stages in Adventure mode and became a Master Snake Guide!',
      starRatingSuper: '⚡ Super Fast! (50%+ Time Remaining)',
      starRatingGood: '⏱️ Good Pace! (20% - 50% Time Remaining)',
      starRatingClose: '⏳ Close Call! (<20% Time Remaining)',
      starAchievement: 'Star Rating:',
      remainingTime: '⏱️ Time Left:',
      elapsedTime: '⏳ Elapsed Time:',
      movesMade: '🐾 Moves Used:',
      extraStars: 'Bonus Stars Collected:',
      nextLevel: 'Next Level →',
      nextStage: 'Next Stage →',
      replay: 'Replay',
      returnMenuChampion: '🏠 Main Menu (Champion)',
      levelsBtn: 'Levels',
      menuBtn: 'Menu',
    },
    gameOver: {
      title: 'GAME OVER!',
      adventureStageSub: (stage) => `Adventure Stage ${stage}`,
      tryAgain: 'Try Again',
      returnToMenu: 'Main Menu',
      levelSelectBtn: 'Select Level',
      tipHeader: 'Tip:',
      defaultTip: 'Only eat orbs matching your snake color (+1 length). Avoid foreign orbs and reach the matching hole!',
      wrongPortalReason: (own, target) =>
        `Entered wrong portal! ${own} snake cannot enter ${target} hole, only its matching (${own}) hole.`,
      missingOrbsReason: (count) =>
        `Entered the portal before gathering all matching orbs! (${count} orbs remaining). Collect all matching orbs first.`,
      wrongOrbReason: (own, target) =>
        `Ate wrong color orb! ${own} snake cannot eat ${target} orb, only matching (${own}) orbs.`,
      timeoutReason: 'Time is up! Move faster to clear the puzzle in time.',
    },
    settings: {
      settingsTitle: 'Settings',
      languageTitle: 'Language / Dil',
      turkish: 'Türkçe 🇹🇷',
      english: 'English 🇬🇧',
      audioSection: 'Audio & Feedback',
      soundFx: 'Sound Effects',
      soundFxDesc: 'Orb eating, portal whooshes, and UI clicks',
      ambientMusic: 'Music & Ambience',
      ambientMusicDesc: 'Peaceful background soundtrack',
      vibration: 'Haptic Feedback',
      vibrationDesc: 'Subtle vibration cues on turns and moves',
      controlsSection: 'Control Mode',
      swipe: 'Swipe Gestures',
      buttons: 'Arrow Keys',
      both: 'Hybrid (Both)',
      progressSection: 'Game Progress',
      completedLevels: 'Completed Levels:',
      resetProgressBtn: 'Reset All Progress',
      confirmResetTitle: 'Are you sure? All stars and unlocked levels will be reset!',
      yesReset: 'Yes, Reset',
    },
    collection: {
      collectionTitle: 'Snake Sanctuary',
      tabSpecies: (count) => `Species (${count})`,
      tabSkins: (count) => `Skin Patterns (${count})`,
      skinEquipped: 'Equipped',
      skinEquipBtn: 'Equip',
      skinUnlockStars: (stars) => `${stars} Stars`,
      skinLabel: (skin) => `Pattern: ${skin.toUpperCase()}`,
    },
    dailyQuests: {
      title: 'Daily Quests',
      subtitle: 'Complete daily challenges and claim rewards!',
      claimed: 'Claimed ✓',
      claimBtn: 'Claim Reward',
      progress: 'Progress:',
      closeBtn: 'Close',
      quests: {
        daily_login: {
          title: 'Daily Check-in',
          desc: 'Launch the game today to claim bonus coins',
        },
        complete_levels: {
          title: 'Puzzle Solver',
          desc: 'Clear any 3 puzzle levels',
        },
        collect_stars: {
          title: 'Star Seeker',
          desc: 'Gather a total of 6 stars across levels',
        },
        play_adventure: {
          title: 'Adventure Scout',
          desc: 'Clear 2 stages in Adventure mode',
        },
        use_ocean_snake: {
          title: 'Ocean Diver',
          desc: 'Complete 1 level using the Blue Ocean Snake',
        },
      },
    },
    achievements: {
      modalTitle: 'Achievement Badges',
      modalSubtitle: 'Reach special milestones and collect radiant legendary badges!',
      unlockedBadgeModalTitle: 'NEW BADGE UNLOCKED!',
      unlockedBadgeSubtitle: 'Congratulations! You achieved a new milestone!',
      unlockedBadgeTapContinue: 'Continue',
      unlockedCount: (unlocked, total) => `${unlocked} / ${total} Badges Unlocked`,
      tierBronze: 'Bronze',
      tierSilver: 'Silver',
      tierGold: 'Gold',
      tierLegendary: 'Legendary',
      items: {
        first_step: { title: 'First Step', desc: 'Complete your first level in the Color Crawl world.' },
        speed_runner: { title: 'Speed Demon', desc: 'Finish a level with at least 60% remaining time.' },
        star_collector_15: { title: 'Star Collector', desc: 'Collect 15 total stars across puzzles.' },
        star_collector_50: { title: 'Star Master', desc: 'Reach 50 total stars across puzzles.' },
        star_collector_100: { title: 'Star Legend', desc: 'Collect 100 stars and shine bright.' },
        adventure_initiate: { title: 'Adventure Scout', desc: 'Reach stage 3 in Adventure Mode.' },
        adventure_explorer: { title: 'Adventure Explorer', desc: 'Reach stage 10 in Adventure Mode.' },
        adventure_champion: { title: 'Adventure Conqueror', desc: 'Reach stage 25 in Adventure Mode.' },
        adventure_grandmaster: { title: 'Adventure Legend', desc: 'Conquer all 100 stages of Adventure Mode!' },
        ice_skater: { title: 'Ice Skater', desc: 'Successfully complete a level with slippery ice tiles.' },
        fashion_enthusiast: { title: 'Costume Fan', desc: 'Unlock at least 2 different snake skins.' },
        fashion_legend: { title: 'Fashion Icon', desc: 'Unlock 5 different snake skins.' },
        perfectionist: { title: 'Perfectionist', desc: 'Complete a level within the par moves limit.' },
        classic_master_10: { title: 'Puzzle Apprentice', desc: 'Complete 10 classic levels.' },
        classic_master_50: { title: 'Puzzle Master', desc: 'Complete 50 classic levels.' },
        classic_grandmaster_100: { title: 'Grandmaster Champion', desc: 'Complete all 100 levels in Classic mode!' },
      },
    },
    adventureSelect: {
      header: 'ADVENTURE MODE',
      subheader: '100-Stage Snake Odyssey',
      highest: 'Highest:',
      currentStage: 'Current Stage',
      stageNum: (stage) => `Stage ${stage}`,
      targetHole: 'Target Hole',
      chooseSnake: 'Choose Snake:',
      startBtn: 'Start Adventure',
      continueBtn: (stage) => `Continue Adventure (Stage ${stage})`,
      restartStage1: 'Restart From Stage 1',
      selectStagePrompt: 'Select Starting Stage',
    },
    levelSelect: {
      header: (total) => `All Levels (1 - ${total})`,
      selectPrompt: 'Choose a puzzle level to play:',
      completedCount: (completed, total) => `${completed} / ${total} Completed`,
    },
    species: {
      red: {
        name: 'Ruby Snake',
        title: 'The Crimson Spark',
        description: 'Energetic and fiery, loves slithering across warm stone pathways.',
      },
      blue: {
        name: 'Ocean Snake',
        title: 'The Tide Glider',
        description: 'Serene and balanced, gliding with graceful wave-like motions.',
      },
      yellow: {
        name: 'Sun Snake',
        title: 'The Solar Sprout',
        description: 'Spreads radiant sunshine, glowing with golden warmth.',
      },
      green: {
        name: 'Leaf Snake',
        title: 'The Meadow Dweller',
        description: 'Quiet forest explorer, perfectly in tune with mossy groves.',
      },
      purple: {
        name: 'Violet Snake',
        title: 'The Mystic Dreamer',
        description: 'Mysterious and thoughtful, Violet hums soft resonant frequencies.',
      },
      orange: {
        name: 'Amber Snake',
        title: 'The Twilight Scout',
        description: 'Swift and inquisitive, leaves subtle trails of evening embers.',
      },
      pink: {
        name: 'Rose Snake',
        title: 'The Blossom Guide',
        description: 'Adorned with gentle petal flourishes, spreads pure joy.',
      },
      cyan: {
        name: 'Sky Snake',
        title: 'The Zephyr Sprite',
        description: 'Light as a summer breeze, loves soaring near sparkling crystals.',
      },
    },
    skins: {
      classic: {
        name: 'Classic Vibrant',
        description: 'Standard vivid colors with clean glossy highlights.',
      },
      rainbow: {
        name: 'Rainbow Prism',
        description: 'Prismatic shifting gradients on every segment.',
      },
      galaxy: {
        name: 'Cosmic Nebula',
        description: 'Deep starlight shimmer and midnight violet swirls.',
      },
      candy: {
        name: 'Sugar Pop',
        description: 'Sweet pastel swirls like delicious spun confections.',
      },
      jungle: {
        name: 'Deep Canopy',
        description: 'Emerald and gold foliage spots for wild explorers.',
      },
      lava: {
        name: 'Magma Core',
        description: 'Molten cracks pulsing with deep subterranean fire.',
      },
      ice: {
        name: 'Glacial Aurora',
        description: 'Frosted diamond scales that glisten in polar night.',
      },
    },
  },
};

export const getT = (lang: Language = 'tr'): Translations => {
  return TRANSLATIONS[lang] || TRANSLATIONS.tr;
};
