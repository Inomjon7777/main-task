let newGame = document.querySelector('#new-game-button');
let ceils = document.querySelectorAll('.little-box');
let remove = document.querySelector('.erase');
let numberOne = document.querySelector('.number-1');
let numberTwo = document.querySelector('.number-2');
let numberThree = document.querySelector('.number-3');
let numberFour = document.querySelector('.number-4');
let numberFive = document.querySelector('.number-5');
let numberSix = document.querySelector('.number-6');
let numberSeven = document.querySelector('.number-7');
let numberEight = document.querySelector('.number-8');
let numberNine = document.querySelector('.number-9');

ceils.forEach((e) => {
    let rand = Math.floor(Math.random() * 10);
    e.addEventListener("click", function () {
        let a = e.innerHTML = rand;
    });
});
a.addEventListener("click", function () {
    e.innerHTML = "";
});