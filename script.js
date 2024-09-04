
let stopwatch = document.querySelector(".stopwatch");
let startButton = document.querySelector(".startButton");
let stopButton = document.querySelector(".stopButton");
let resetButton = document.querySelector(".resetButton");

let isRunning = false;
let sec = 0;
let min = 0;
let hr = 0;
let interval;
function start() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            sec++
            if (sec === 60) {
                min++;
                sec = 0;
            }
            if (min === 60) {
                hr++;
                min = 0;
                sec = 0;
            }
            updateDisplay();
        }, 1000);

    }
}
function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
    }
}
function reset() {
    stop();
    sec = 0;
    min = 0;
    hr = 0;
    updateDisplay();
}


function updateDisplay() {
    stopwatch.innerHTML = `${hr}:${min}:${sec}`;
}

startButton.addEventListener("click", function () { start() });
stopButton.addEventListener("click", function () { stop() });
resetButton.addEventListener("click", function () { reset() });

updateDisplay();
