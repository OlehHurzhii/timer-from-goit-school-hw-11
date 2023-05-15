class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.timerIntervalId = null;
  
      this.start();
    }
  
    start() {
      const timerEl = document.querySelector(this.selector);
      const daysEl = timerEl.querySelector('[data-value="days"]');
      const hoursEl = timerEl.querySelector('[data-value="hours"]');
      const minsEl = timerEl.querySelector('[data-value="mins"]');
      const secsEl = timerEl.querySelector('[data-value="secs"]');
  
      this.timerIntervalId = setInterval(() => {
        const time = this.targetDate - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const secs = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');
  
        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minsEl.textContent = mins;
        secsEl.textContent = secs;
      }, 1000);
    }
  
    stop() {
      clearInterval(this.timerIntervalId);
    }
  }