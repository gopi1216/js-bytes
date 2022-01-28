'use strict';

function square(num) {
  return Math.pow(num, 2);
}

function cube(num) {
  return Math.pow(num, 3);
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;

  let iterator = num - 1;
  while (iterator > 1) {
    num *= iterator;
    iterator--;
  }
  return num;
}

let submitBtn = document.querySelector('.primary');

submitBtn.addEventListener('click', () => {
  let num = parseInt(document.querySelector('.form-control').value),
    para = document.createElement('p'),
    container = document.querySelector('.result-section');

  container.appendChild(para);
  if (isNaN(num)) {
    para.textContent = 'Please Enter a valid number';
    para.style.background = '#f00';
  } else {
    para.textContent = `${num} squared is ${square(num)}.
                        ${num} cubed is ${cube(num)}.
                        ${num} factorial is ${factorial(num)}`;
  }
});
