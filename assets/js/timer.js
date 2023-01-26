const initialSecondsLeft = 1800;

const $hours = document.querySelector('.timer__hours');
const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');

let timerId;
const onStartTimerCallback = () => {
  let secondsLeft = initialSecondsLeft;
  if (timerId) {
    clearInterval(timerId);
  }
  timerId = setInterval(() => {
    secondsLeft -= 1;
    $minutes.textContent = secondsLeft / 60 < 10 ? '0' + Math.floor(secondsLeft / 60) : Math.floor(secondsLeft / 60)
    $seconds.textContent = secondsLeft % 60 < 10 ? '0' + (secondsLeft % 60) : secondsLeft % 60;
    if (secondsLeft <= 0) {
      clearInterval(timerId);
    }
  }, 1000);
};
onStartTimerCallback();
