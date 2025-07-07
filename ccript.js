
  const audio = document.getElementById('audio');
const playPause = document.getElementById('playPause');
const seekBar = document.getElementById('seekBar');

const icon = playPause.querySelector('span');

playPause.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.textContent = 'pause_circle';
    } else {
        audio.pause();
        icon.textContent = 'play_circle';
    }
});

audio.addEventListener('timeupdate', () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
});

seekBar.addEventListener('input', () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});
