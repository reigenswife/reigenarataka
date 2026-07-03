// ==================== 完整5首歌曲+歌词播放器 ====================
const playlist = [
  { 
    title: "We Belong Together", 
    artist: "Mariah Carey", 
    src: "audio/M500004QiRC30LMa8u.mp3",
    lyrics: [
      { time: 4.06, en: "Oh-ooh-ooh", zh: "" }, { time: 11.11, en: "Oh", zh: "" }, { time: 13.71, en: "Oh, oh-ooh", zh: "" },
      { time: 17.42, en: "Sweet love, yeah", zh: "甜蜜的爱" }, { time: 21.56, en: "I didn't mean it when I said I didn't love you so", zh: "我并非本意 说自己不爱你" },
      { time: 25.05, en: "I should have held on tight, I never shoulda let you go", zh: "我应该好好抓紧你 不放开手让你走" },
      { time: 28.52, en: "I didn't know nothin', I was stupid, I was foolish", zh: "我却什么都没有做 愚蠢之极" },
      { time: 31.31, en: "I was lyin' to myself", zh: "后悔莫及 自欺欺人" }, { time: 35.30, en: "I could not fathom that I would ever be without your love", zh: "我未料想过 没有你的爱我会怎么样" },
      { time: 38.75, en: "Never imagined I'd be sittin' here beside myself", zh: "也没设想过没有你 自己将会如此孑然一身" },
      { time: 42.22, en: "'Cause I didn't know you, 'cause I didn't know me, but I thought I knew everything", zh: "都怪我没懂你 更不懂我自己 以为我自己明白一切" },
      { time: 45.42, en: "I never felt", zh: "却一直在自欺欺人" }, { time: 49.01, en: "The feelin' that I'm feelin' now that I don't hear your voice", zh: "所有曾经那各种缠绵 现在一切已化为乌有" },
      { time: 52.52, en: "Or have your touch and kiss your lips 'cause I don't have a choice", zh: "再也感受不到你的爱抚和亲吻 可我已别无选择" },
      { time: 55.94, en: "Oh, what I wouldn't give to have you lyin' by my side", zh: "我愿奋不顾身 去换取让你重回到我的身边" },
      { time: 59.09, en: "Right here, 'cause, baby (We belong together)", zh: "就我身边 因为我们注定属于彼此" },
      { time: 62.57, en: "When you left, I lost a part of me", zh: "当你离开我的时候我失魂落魄" }, { time: 66.81, en: "It's still so hard to believe", zh: "这一切仍难以让人想象" },
      { time: 70.32, en: "Come back, baby, please", zh: "求求你回到我身边吧" }, { time: 72.40, en: "'Cause we belong together", zh: "因为我们注定属于彼此" },
      { time: 75.16, en: "Who else am I gon' lean on when times get rough?", zh: "当我哀痛欲绝的时候 有谁能让我偎依在他身旁？" }
    ]
  },
  { 
    title: "Underneath the Stars", 
    artist: "Mariah Carey", 
    src: "audio/3594040289.mp3",
    lyrics: [
      { time: 4.45, en: "One summer night", zh: "一个夏日的夜晚" }, { time: 9.02, en: "We ran away for a while", zh: "我们一同跑开" },
      { time: 15.92, en: "Laughing we hurried beneath the sky", zh: "笑着 我们在天空下匆忙" }, { time: 21.20, en: "To an obscure place to hide", zh: "寻找一个安全的可以躲藏的地方" },
      { time: 25.00, en: "That no-one could find", zh: "没有人能够找到" }, { time: 26.93, en: "And we drifted to another state of mind", zh: "接着我们进入了另一种心境" },
      { time: 32.94, en: "And imagined I was yours and you were mine", zh: "想象我是你的你是我的" }, { time: 39.01, en: "As we lay upon the grass", zh: "我们躺在草地上" },
      { time: 41.22, en: "There in the dark", zh: "黑暗中" }, { time: 43.95, en: "Underneath the stars", zh: "我们沐浴璀璨星光" }
    ]
  },
  { 
    title: "I Stay In Love", 
    artist: "Mariah Carey", 
    src: "audio/i.stay.love.mp3",
    lyrics: [
      { time: 2.85, en: "Oh, ooh-ooh-ooh", zh: "" }, { time: 6.30, en: "Oh, ooh-ooh", zh: "" }, { time: 9.76, en: "Oh-oh, ooh-ooh-ooh", zh: "" },
      { time: 12.41, en: "Why do I stay, why do I stay in love? Ooh", zh: "为什么我还要留在爱情里？" },
      { time: 16.93, en: "Oh, ooh-ooh-ooh (Why do I stay)", zh: "为什么我还要留下" }, { time: 24.05, en: "Baby, I stay in love with you", zh: "宝贝，我依然深爱着你" }
    ]
  },
  { 
    title: "Don't Forget About Us", 
    artist: "Mariah Carey", 
    src: "audio/Don't.Forget.About.Us.mp3",
    lyrics: [
      { time: 2.60, en: "(Don't forget about us)", zh: "别将我们遗忘" }, { time: 4.10, en: "Don't baby, don't baby, don't let it go", zh: "亲爱的别放手 别让它溜走" },
      { time: 7.61, en: "No baby, no baby, no baby, no", zh: "不 宝贝 请不要这样" }, { time: 9.11, en: "(Don't forget about us)", zh: "别将我们遗忘" },
      { time: 10.87, en: "Don't baby, don't baby, don't let it go", zh: "亲爱的别放手 别让它溜走" }, { time: 13.37, en: "My baby boy", zh: "我的爱人啊" },
      { time: 17.13, en: "Just let it die with no goodbyes", zh: "任爱消逝无需告别" }, { time: 20.41, en: "Details don't matter, we both paid the price", zh: "细节已不重要 我们都付出代价" }
    ]
  },
  { 
    title: "Come To Me", 
    artist: "Mariah Carey", 
    src: "audio/come.buck.to.me.mp3",
    lyrics: [
      { time: 10.67, en: "The rain falls on my windows", zh: "窗外雨声 淅淅沥沥" }, { time: 13.92, en: "And a coldness runs through my soul", zh: "一阵寒流 噬满我心" },
      { time: 17.17, en: "And the rain falls, oh, the rain falls", zh: "雨一直下个不停" }, { time: 20.42, en: "I don't want to be alone", zh: "我不想 孑然一身" },
      { time: 23.67, en: "I wish that I could Photoshop", zh: "只是想要 修复曾经" }, { time: 27.16, en: "All our bad memories", zh: "我们之间 糟糕回忆" }
    ]
  },
  // 以下两首暂时停用：仓库里的音频文件是空的（只有2字节），
  // 不是缺路径的问题，需要重新上传真实mp3文件后才能取消注释启用。
  // { 
  //   title: "Feat. San E", 
  //   artist: "未知歌手", 
  //   src: "audio/Feat. San E.mp3",
  //   lyrics: []  // 纯音乐 / 暂无歌词
  // },
  // { 
  //   title: "Emotional", 
  //   artist: "未知歌手", 
  //   src: "audio/Emotional.mp3",
  //   lyrics: []  // 纯音乐 / 暂无歌词
  // }
];
