'use strict'
import './main.scss';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerIntervalId = null;
    }

    viewCurrentTime() {
        console.log(this.currentTime);
    }

    start() {
        const currentTime = Date.now();        
        const timerEl = document.querySelector(this.selector);
        const daysEl = document.querySelector('[data-value="days"]');
        const hoursEl = document.querySelector('[data-value="hours"]');
        const minsEl = document.querySelector('[data-value="mins"]');
        const secsEl = document.querySelector('[data-value="secs"]');
        

        if (!timerEl) {
            console.error(`Element with selector ${this.selector} not found`);
            return;
        }

        this.timerIntervalId = setInterval(() => {
            const time = this.targetDate - currentTime;
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);

            daysEl.textContent = days;
            hoursEl.textContent = hours;
            minsEl.textContent = mins;
            secsEl.textContent = secs;
        }, 1000);

        console.log(currentTime);
    }

}

const blackFriday = new CountdownTimer({
    selector: "#timer-1",
    targetDate: Date.parse('Mon, 30 May 2023 00:00:00')
});

const startButton = document.querySelector('.button__start');

startButton.addEventListener('click', blackFriday.start);
startButton.addEventListener('click', console.dir(CountdownTimer));
