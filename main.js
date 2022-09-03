// USE STRICK MODE DAN FOYDALANILDI
"use strict";
// ELEMENTLAR HTML DAN CHAQIRIB OLINDI
const pomodoroBarBtn = document.querySelector(".bar-first-text");
const shortbreakBarBtn = document.querySelector(".bar-second-text");
const longbreakBarBtn = document.querySelector(".bar-third-text");
let pomodoroTime = document.querySelector(".pomodoro-time");
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
let pomodoroBtnsDiv = document.querySelector(".pomodoro-btns");

// POMODORO BAR UCHUN MINUT YOZILDI
const pomodoroBarBtnMinutes = 25;
let time = pomodoroBarBtnMinutes * 60;
let myInterval;


function updateCountdown() {
    myInterval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        pomodoroTime.innerHTML = `${minutes}:${seconds}`;
        time--;
    }, 1000);
}

function myStop() {
    clearInterval(myInterval);
}

startBtn.addEventListener("click", stopBtnFunction);


function stopBtnFunction() {
    let stopBtn = document.createElement("button");
    stopBtn.classList = "stop-btn";
    stopBtn.innerHTML = "Stop";
    pomodoroBtnsDiv.appendChild(stopBtn);

    stopBtn.addEventListener("click", function () {
        pomodoroTime.innerHTML = "25:00"
    })
}