const filterSection = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.buttons');
const links = document.querySelectorAll('.li-link');
const navigation = document.querySelector('.nav');
let filterClass = 'beginning-link';

navigation.addEventListener('click', (event) => {
  if (event.target.tagName != 'BUTTON') return false;
  filterClass = event.target.dataset['f'];

  links.forEach((elem) => {
    elem.classList.remove('active');
  });

  buttons.forEach((elem) => {
    elem.classList.remove('active');
  });

  event.target.classList.add('active');
  event.target.parentNode.classList.add('active');

  filterSection.forEach((elem) => {
    elem.classList.remove('hide');
    elem.classList.add('open');
    if (!elem.classList.contains(filterClass)) {
      elem.classList.add('hide');
      elem.classList.remove('open');
    }
  });
});

filterSection.forEach((elem) => {
  if (!elem.classList.contains(filterClass)) {
    elem.classList.add('hide');
  }
});
