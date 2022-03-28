'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');

  if (!guess) {
    message.textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number.';
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too Low.';
      document.querySelector('.score').textContent = --score;
    } else {
      message.textContent = '👎 You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high.';
      document.querySelector('.score').textContent = --score;
    } else {
      message.textContent = '👎 You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
