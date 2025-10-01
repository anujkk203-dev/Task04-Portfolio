// Select the container where stopwatch will appear
const projectsContainer = document.querySelector('.project-cards');

// Create Stopwatch Card
const stopwatchCard = document.createElement('div');
stopwatchCard.classList.add('project-card'); // same styling as other project cards

// Add inner HTML for stopwatch
stopwatchCard.innerHTML = `
  <h3>Stopwatch</h3>
  <p>Simple stopwatch to track time in hours, minutes, and seconds.</p>
  <div class="stopwatch">
    <div id="timeDisplay">00:00:00</div>
    <button id="startStopBtn" class="btn-small">Start</button>
    <button id="resetBtn" class="btn-small">Reset</button>
  </div>
`;

// Append to Projects section
projectsContainer.appendChild(stopwatchCard);

// Stopwatch variables
let time = 0;
let running = false;
let interval;

// DOM Elements
const timeDisplay = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to update time every second
function updateTime() {
  time++;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  // Display time in HH:MM:SS format
  timeDisplay.textContent = 
    `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

// Start/Stop button functionality
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

// Reset button functionality
resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  time = 0;
  running = false;
  timeDisplay.textContent = '00:00:00';
  startStopBtn.textContent = 'Start';
});
