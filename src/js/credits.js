import { MoveSectionOpen, MoveSectionClose, shadow, wrapper } from './hire.js';

const buttonCredits = document.getElementById('credits');
const credits = document.querySelector('.credits');

buttonCredits.addEventListener('click', OpenCredits);

function OpenCredits() {
  if (credits.classList.contains('close')) {
    credits.classList.remove('close');
  }
  if (wrapper.classList.contains('down-close')) {
    wrapper.classList.remove('down-close');
  }
  credits.classList.add('open');
  MoveSectionOpen();
}

shadow.addEventListener('click', () => {
  if (credits.classList.contains('open')) {
    CloseCredits();
  }
});

function CloseCredits() {
  credits.classList.remove('open');
  credits.classList.add('close');
  MoveSectionClose();
}
