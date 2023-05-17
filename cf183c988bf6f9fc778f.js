import './main.scss';
class СountdownTimer {
  constructor(_ref) {
    let {
      selector,
      targetDate
    } = _ref;
    this.selector = selector, this.targetDate = targetDate, this.timerIntervalId = null;
  }
  viewCurrentTime() {
    console.log(this.currentTime);
  }
  start() {
    const currentTime = Date.now();
    const timerEl = document.querySelector(this.selector);
    const refs = {
      // timerEl: document.querySelector(this.selector),
      daysEl: document.querySelector('[data-value="days"]'),
      hoursEl: document.querySelector('[data-value="hours"]'),
      minsEl: document.querySelector('[data-value="mins"]'),
      secsEl: document.querySelector('[data-value="secs"]')
    };
    if (!timerEl) {
      console.error(`Element with selector ${this.selector} not found`);
      return;
    }
    this.timerIntervalId = setInterval(() => {
      const time = this.targetDate - currentTime;
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const mins = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
      const secs = Math.floor(time % (1000 * 60) / 1000);
      refs.daysEl.textContent = days;
      refs.hoursEl.textContent = hours;
      refs.minsEl.textContent = mins;
      refs.secsEl.textContent = secs;
    }, 1000);
    console.log(currentTime);
  }
}
const blackFriday = new СountdownTimer({
  selector: "#timer-1",
  targetDate: Date.parse('Mon, 15 May 2023 00:00:00')
});
const startButton = document.querySelector('.button__start');
startButton.addEventListener('click', blackFriday.start);

// refs.StartButton.addEventListener('click', console.log(СountdownTimer));

console.log(Date.now());