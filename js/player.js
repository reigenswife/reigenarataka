// ==================== 音乐播放器核心逻辑 ====================
// 依赖 playlist.js 中定义的全局 playlist 数组
// 对接页面中 id 为 music-player 的播放器控件

(function () {
  if (typeof playlist === 'undefined' || !Array.isArray(playlist) || playlist.length === 0) {
    console.warn('playlist 未定义或为空，音乐播放器无法初始化');
    return;
  }

  const audio = new Audio();
  audio.preload = 'metadata';
  audio.volume = 0.7;

  let currentTrack = 0;
  let isPlaying = false;

  const titleEl = document.getElementById('song-title');
  const artistEl = document.getElementById('song-artist');
  const prevBtn = document.getElementById('prev-btn');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const nextBtn = document.getElementById('next-btn');
  const progressEl = document.getElementById('progress');
  const selectEl = document.getElementById('playlist-select');
  const lyricsPanel = document.getElementById('lyricsPanel');

  // 如果播放器所需的DOM元素缺失，直接停止初始化，避免报错
  if (!titleEl || !playPauseBtn || !progressEl) {
    console.warn('音乐播放器所需的DOM元素缺失，初始化中止');
    return;
  }

  function buildSelect() {
    if (!selectEl) return;
    selectEl.innerHTML = '';
    playlist.forEach((track, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = track.title + ' - ' + track.artist;
      selectEl.appendChild(opt);
    });
    selectEl.value = currentTrack;
  }

  function renderLyricLine(en, zh) {
    if (!lyricsPanel) return;
    lyricsPanel.innerHTML =
      '<div class="lyric-line-main">' +
        '<div class="lyric-en-main">' + (en || '♪') + '</div>' +
        '<div class="lyric-zh-main">' + (zh || '') + '</div>' +
      '</div>';
  }

  function loadTrack(index, autoplay) {
    currentTrack = (index + playlist.length) % playlist.length;
    const track = playlist[currentTrack];

    audio.src = track.src;
    titleEl.textContent = track.title;
    if (artistEl) artistEl.textContent = track.artist;
    if (selectEl) selectEl.value = currentTrack;
    progressEl.value = 0;
    renderLyricLine('♪ 等待播放 ♪', '点击播放按钮，倾听旋律中的故事');

    if (autoplay) {
      audio.play()
        .then(() => { isPlaying = true; updatePlayPauseIcon(); })
        .catch(() => { isPlaying = false; updatePlayPauseIcon(); console.log('播放需要用户交互'); });
    } else {
      isPlaying = false;
      updatePlayPauseIcon();
    }
  }

  function updatePlayPauseIcon() {
    playPauseBtn.textContent = isPlaying ? '⏸' : '▶';
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play()
        .then(() => { isPlaying = true; updatePlayPauseIcon(); })
        .catch(() => { isPlaying = false; updatePlayPauseIcon(); console.log('播放需要用户交互'); });
    } else {
      audio.pause();
      isPlaying = false;
      updatePlayPauseIcon();
    }
  }

  function nextTrack() {
    loadTrack(currentTrack + 1, isPlaying);
  }

  function prevTrack() {
    loadTrack(currentTrack - 1, isPlaying);
  }

  // 进度条更新
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      progressEl.value = (audio.currentTime / audio.duration) * 100;
    }

    // 歌词同步：找到当前时间点应显示的那一行歌词
    const track = playlist[currentTrack];
    if (track && track.lyrics && track.lyrics.length > 0) {
      let activeLine = null;
      for (let i = 0; i < track.lyrics.length; i++) {
        if (track.lyrics[i].time <= audio.currentTime) {
          activeLine = track.lyrics[i];
        } else {
          break;
        }
      }
      if (activeLine) {
        renderLyricLine(activeLine.en, activeLine.zh);
      }
    }
  });

  // 拖动进度条跳转播放位置
  progressEl.addEventListener('input', () => {
    if (audio.duration) {
      audio.currentTime = (progressEl.value / 100) * audio.duration;
    }
  });

  // 播放结束自动切下一首
  audio.addEventListener('ended', () => {
    nextTrack();
  });

  audio.addEventListener('error', () => {
    console.warn('音频加载失败：', audio.src);
    if (titleEl) titleEl.textContent = '（这首暂时放不出来）';
  });

  playPauseBtn.addEventListener('click', togglePlay);
  if (nextBtn) nextBtn.addEventListener('click', nextTrack);
  if (prevBtn) prevBtn.addEventListener('click', prevTrack);
  if (selectEl) {
    selectEl.addEventListener('change', () => {
      loadTrack(parseInt(selectEl.value, 10), isPlaying);
    });
  }

  // 初始化：展示第一首歌信息，但不自动播放（浏览器策略也不允许无交互自动播放）
  buildSelect();
  loadTrack(0, false);
})();
