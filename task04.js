// Stopwatch Code
let time = 0;
let running = false;
let interval;

const timeDisplay = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTime() {
  time++;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  timeDisplay.textContent = 
    `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

startStopBtn.addEventListener('click', () => {
  if (!running) {
    interval = setInterval(updateTime, 1000);
    startStopBtn.textContent = 'Stop';
    running = true;
  } else {
    clearInterval(interval);
    startStopBtn.textContent = 'Start';
    running = false;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  time = 0;
  running = false;
  timeDisplay.textContent = '00:00:00';
  startStopBtn.textContent = 'Start';
});
