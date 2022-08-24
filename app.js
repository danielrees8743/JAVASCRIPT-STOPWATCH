let minutesEl = document.querySelector('#minutes');
let secondsEl = document.querySelector('#seconds');
let tensEl = document.querySelector('#tens');
let startBtn = document.querySelector('#button-start');
let stopButton = document.querySelector('#button-stop');

let resetBtn = document.querySelector('#button-reset');

let [minute, second] = [0, 0];
let counter = 0;
let timerId;
let isRunning = false;

const timer = () => {
  tensEl++;
  second++;

  // second === 60 ? then second = 0 && minute++
  second === 60 && ([second, minute] = [0, minute++]);

  //   console.log(`${second}`.padStart(3, '0'));
  minutesEl.textContent = minute < 10 ? '0' + minute : minute;
  secondsEl.textContent = second < 10 ? '0' + second : second;
};

function clearTimer() {
  isRunning = false;
  clearInterval(timerId);
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timerId = setInterval(timer, 1000);
  }
});
// if seconds = 60{minute++, seconds = 0}

// addEventListener
stopButton.addEventListener('click', clearTimer);

// addEventListener
resetBtn.addEventListener('click', () => {
  // add zero.
  [minute, second] = [0, 0];
  minutesEl.textContent = '00';
  secondsEl.textContent = '00';
  // clear the timer
  clearTimer();
});
