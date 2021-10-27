const targetDate = 'November 07 2021 00:00:00 GMT+0700';

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function timeLeft(targetDate) {
    const total = Date.parse(targetDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
}

const interval = setInterval(() => {
    const t = timeLeft(targetDate);
    if (t.total <= 0) {
        clearInterval(interval);
    } else {
        days.innerHTML = ("0" + t.days).slice(-2);
        hours.innerHTML = ("0" + t.hours).slice(-2);
        minutes.innerHTML = ("0" + t.minutes).slice(-2);
        seconds.innerHTML = ("0" + t.seconds).slice(-2);
    }
}, 1000);