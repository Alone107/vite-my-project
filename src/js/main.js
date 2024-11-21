import '../css/main.scss';
import './hire.js';
import './credits.js';
import './menu.js';
import './settings.js';
import './progress-circle.js';
import './filter-achivments.js';
import './challengeForm.js';

let currentDate = new Date();
let coins = 1425;
const plus = document.querySelector('.header-left-svg');
const numberCoins = document.querySelector('.coins').innerHTML;
const level = document.querySelector('.level').innerHTML;
const btnEnter = document.querySelector('.enter');

btnEnter.addEventListener('click', () => {
  document.querySelector('.welcome').classList.add('close');
  document.querySelector('.container').classList.remove('disabled');
  counterLevel(100, '.res');
  counterCoins(5, '.res1');
});

plus.addEventListener('click', () => {
  coins++;
  document.querySelector('.coins').innerHTML = coins;
});
document.querySelector('.time').innerHTML =
  currentDate.getHours() +
  ':' +
  currentDate.getMinutes().toString().padStart(2, '0');

document.querySelector('.local').innerHTML =
  currentDate.getHours() -
  2 +
  ':' +
  currentDate.getMinutes().toString().padStart(2, '0');

// -----------------------------

function counterCoins(ms, className) {
  let counter = 0;
  let interval = setInterval(() => {
    document.querySelector('.coins').innerHTML = ++counter;

    counter == coins ? clearInterval(interval) : false;
  }, ms);
}

// -------------------------------------------------------------

// level.innerHTML = ++counter;

function counterLevel(ms, className) {
  let counter = 0;
  let interval = setInterval(() => {
    document.querySelector('.level').innerHTML = ++counter;

    counter == level ? clearInterval(interval) : false;
  }, ms);
}

// -----------------------Setting-----------------------------------

const soundSetting = document.querySelector('.quest-setting-sound');

soundSetting.addEventListener('click', () => {
  document.querySelector('.check').classList.toggle('check--disable');
});
