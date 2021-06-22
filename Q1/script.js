const timer = document.getElementById('timer');
const btn = document.getElementById('btn');

let timerId;
let elapsedTime = 0;

function startTimer() {
    btn.textContent = 'stop';
    btn.removeEventListener('click', startTimer);
    btn.addEventListener('click', stopTimer);
    timerId = setInterval(() => {
        elapsedTime++;
        timer.textContent = Math.floor(elapsedTime / 100);
    }, 10);
}

function stopTimer() {
    btn.textContent = 'start';
    btn.removeEventListener('click', stopTimer);
    btn.addEventListener('click', startTimer);
    clearInterval(timerId);
}

btn.addEventListener('click', startTimer);