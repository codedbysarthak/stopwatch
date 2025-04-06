const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
let time = document.getElementById("time");

let hourTime = 0;
let minuteTime = 0;
let secondTime = 0;

function displayTwoDigitTime(num) {
    return num < 10 ? `0${num}` : `${num}`;
}

function displayTime() {
    time.textContent = `${displayTwoDigitTime(hourTime)} : ${displayTwoDigitTime(minuteTime)} : ${displayTwoDigitTime(secondTime)}`;
}

displayTime();

let timer = null;

startButton.onclick = () => {
    if (!timer) {
        timer = setInterval(() => {
            secondTime++;
            if (secondTime === 60) {
                secondTime = 0;
                minuteTime++;
            }
            if (minuteTime === 60) {
                minuteTime = 0;
                hourTime++;
            }
            displayTime();
        }, 1000);
    }
};

stopButton.onclick = () => {
    clearInterval(timer);
    timer = null;
};

resetButton.onclick = () => {
    clearInterval(timer);
    timer = null;
    secondTime = 0;
    minuteTime = 0;
    hourTime = 0;
    displayTime();
};
