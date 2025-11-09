// Select elements
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

// Listen for mouse movement on the speed control area
speed.addEventListener('mousemove', function (e) {
  // Calculate the mouse position inside the speed div
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;

  // Set playback speed range (0.4x to 4x)
  const min = 0.4;
  const max = 4;
  const playbackRate = percent * (max - min) + min;

  // Update video speed and UI
  bar.style.height = `${Math.round(percent * 100)}%`;
  bar.textContent = `${playbackRate.toFixed(2)}×`;
  video.playbackRate = playbackRate;
});
