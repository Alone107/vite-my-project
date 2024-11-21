import { achivmentsBlock, filterTwo } from './filter-achivments.js';
const circle = document.querySelector('.progress-ring-circle');

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const ofset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = ofset;
}

let allChallenge = achivmentsBlock.length;
let finishChallenge = 0;

for (let i = 0; i < filterTwo.childNodes.length; i++) {
  if (filterTwo.childNodes[i].tagName == 'LI') {
    finishChallenge++;
  }
  finishChallenge;
}

let percents = Math.round((finishChallenge / allChallenge) * 100);
document.querySelector('.achievements-progress-number').innerHTML =
  `${finishChallenge}/${allChallenge}`;

let percentFinish = setProgress(percents);
