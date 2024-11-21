import { wrapper, shadow } from './hire.js';

const challengeBtn = document.getElementById('challenge');
const challengeForm = document.querySelector('.challengeForm');
const challengBtnSend = document.querySelector('.challengeForm-buttons-send');
const challengBtnEsc = document.querySelector('.challengeForm-buttons-esc');

challengeBtn.addEventListener('click', () => {
  if (wrapper.classList.contains('down-close')) {
    wrapper.classList.remove('down-close');
  }
  if (challengeForm.classList.contains('close')) {
    challengeForm.classList.remove('close');
  }
  challengeForm.classList.add('open');
  wrapper.classList.add('down-open');
  shadow.classList.remove('close');
  shadow.classList.add('open');
});

function ChallengeClose() {
  shadow.classList.remove('open');
  wrapper.classList.remove('down-open');
  challengeForm.classList.remove('open');
  wrapper.classList.add('down-close');
  shadow.classList.add('close');
  challengeForm.classList.add('close');
}

challengBtnSend.addEventListener('click', (event) => {
  event.preventDefault();
  ChallengeClose();
});
challengBtnEsc.addEventListener('click', (event) => {
  event.preventDefault();
  ChallengeClose();
});

// ----------------------Select---------------------------------
const selectQuality = document.getElementById('quality');

selectQuality.addEventListener('input', () => {
  console.log(selectQuality.value);
  if (selectQuality.value == 'uncommon') {
    selectQuality.style.color = `#5DE26A`;
  } else if (selectQuality.value == 'rare') {
    selectQuality.style.color = `#429DD1`;
  } else if (selectQuality.value == 'epic') {
    selectQuality.style.color = `#E84A4A`;
  } else {
    selectQuality.style.color = `#D4A944`;
  }
});
