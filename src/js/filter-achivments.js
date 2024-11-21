const achieved = document.querySelector('.achieved');
const progress = document.querySelector('.progress');
const todo = document.querySelector('.todo');
const achievedList = document.querySelector('.filter-achivments');
const achievedTitle = document.querySelector('.filter-achivments-title');
const chalengeCol = document.querySelector('.achievements-progress');
const filterFlex = document.querySelector('.achievements-wrapper');
export const achivmentsBlock = document.querySelectorAll('.achievements-block');
export const filterTwo = document.querySelector('.filter-two');

achieved.addEventListener('click', () => {
  document.querySelector('.list-check').classList.toggle('hiden');
  document.querySelector('.name-check').classList.toggle('shadow-text');
  achievedList.classList.toggle('hiden');
  achievedTitle.classList.toggle('hiden');
  filterTwo.classList.toggle('full');
});
progress.addEventListener('click', () => {
  document.querySelector('.list-check-2').classList.toggle('hiden');
  document.querySelector('.name-check-2').classList.toggle('shadow-text');
  document.querySelector('.achievements-list-2').classList.toggle('hiden');
  achievedList.classList.toggle('full');
});
todo.addEventListener('click', () => {
  document.querySelector('.list-check-3').classList.toggle('hiden');
  document.querySelector('.name-check-3').classList.toggle('shadow-text');
  chalengeCol.classList.toggle('hiden');
  filterFlex.classList.toggle('todo');
  achivmentsBlock.forEach((elem) => elem.classList.toggle('todo'));
  achievedList.classList.toggle('todo');
});

function AddCheck(classBLock) {
  document.querySelector(`${classBLock}`).classList.toggle('hiden');
}
