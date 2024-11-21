const buttonHire = document.getElementById('hire');
const hire = document.querySelector('.hire');
export const wrapper = document.querySelector('.wrapper');
export const shadow = document.querySelector('.shadow');
const buttonEsc = document.querySelector('.hire-buttons-esc');
const buttonSend = document.querySelector('.hire-buttons-send');
const buttonOpen = document.getElementById('open-connect');
const hireTitle = document.getElementById('hire-title');
const hireText = document.getElementById('hire-text');

buttonHire.addEventListener('click', () => {
  OpenPopup();
  hireTitle.innerHTML = 'open for hire';
  hireText.innerHTML = 'I would love to hear about your projects!';
});

function OpenPopup() {
  if (hire.classList.contains('close')) {
    hire.classList.remove('close');
  }
  if (wrapper.classList.contains('down-close')) {
    wrapper.classList.remove('down-close');
  }
  hire.classList.add('open');
  MoveSectionOpen();
}

export function MoveSectionOpen() {
  if (wrapper.classList.contains('close')) {
    wrapper.classList.remove('close');
  }
  if (shadow.classList.contains('close')) {
    shadow.classList.remove('close');
  }
  wrapper.classList.add('move');
  shadow.classList.add('open');
}

export function MoveSectionClose() {
  wrapper.classList.remove('move');
  wrapper.classList.add('close');
  shadow.classList.remove('open');
  shadow.classList.add('close');
}

function ClosePopup() {
  hire.classList.remove('open');
  hire.classList.add('close');
  MoveSectionClose();
}

buttonEsc.addEventListener('click', () => {
  ClosePopup();
});

buttonSend.addEventListener('click', () => {
  ClosePopup();
});

buttonOpen.addEventListener('click', () => {
  OpenPopup();
  hireTitle.innerHTML = 'connect with me';
  hireText.innerHTML = 'wanna chat? Or just share something cool?';
});
