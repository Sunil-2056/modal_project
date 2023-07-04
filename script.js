'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnClosemodal = document.querySelector('.close-modal');

const btnOpenmodal = document.querySelectorAll('.show-modal');

console.log(btnOpenmodal);

const Openmodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const Closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let index = 0; index < btnOpenmodal.length; index++) {
  btnOpenmodal[index].addEventListener('click', Openmodal);
}

btnClosemodal.addEventListener('click', Closemodal);

overlay.addEventListener('click', Closemodal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    {
      Closemodal();
    }
  }
});
