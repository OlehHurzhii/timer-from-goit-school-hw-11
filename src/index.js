import './main.scss';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerIntervalId = null;
    }

    start() {
        this.timerIntervalId = setInterval(() => {         

            const currentTime = Date.now();        
            const timerEl = document.querySelector(this.selector);
            const daysEl = document.querySelector('[data-value="days"]');
            const hoursEl = document.querySelector('[data-value="hours"]');
            const minsEl = document.querySelector('[data-value="mins"]');
            const secsEl = document.querySelector('[data-value="secs"]');
            const time = this.targetDate - currentTime;
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);

            daysEl.textContent = days;
            hoursEl.textContent = hours;
            minsEl.textContent = mins;
            secsEl.textContent = secs;

            if (!timerEl) {
                console.error(`Element with selector ${this.selector} not found`);
                return;
            }
        }, 1000);
    }
}

const blackFriday = new CountdownTimer({
    selector: "#timer-1",
    targetDate: Date.parse('Mon, 16 May 2023 00:00:00')
});

const refs = {
    startButton: document.querySelector('.button__start'),
    stopButton: document.querySelector('.button__stop'),
}

refs.startButton.addEventListener('click', blackFriday.start);
// refs.stopButton.addEventListener('click', blackFriday.stop);
