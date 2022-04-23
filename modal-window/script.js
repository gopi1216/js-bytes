'use strict';

const modal = document.querySelector('.modal'),
  btnCloseModal = document.querySelector('.close-modal'),
  overLay = document.querySelector('.overlay'),
  showModal = document.querySelectorAll('.show-modal');

let openModal = () => {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

for (let modalItem of showModal) {
  modalItem.addEventListener('click', openModal);
}

let closeModal = () => {
  modal.classList.add('hidden', 'test', 'anotherClass');
  overLay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  console.log(e, e.currentTarget);
  e.key === 'Escape' && !modal.classList.contains('hidden') && closeModal();
});
