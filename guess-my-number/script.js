'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1,
  score = 20,
  highScore = 0;

const printMessage = (message) => {
  let $message = document.querySelector('.message');
  $message.textContent = message;
};

const updateNumber = (number, size) => {
  let $number = document.querySelector('.number');
  $number.textContent = number;
  $number.style.width = size;
};

const updateScore = (number) => {
  let $score = document.querySelector('.score');
  $score.textContent = number;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    printMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    printMessage('🎉 Correct Number.');
    updateNumber(secretNumber, '30rem');
    document.body.style.backgroundColor = '#04AA6D';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      printMessage(guess < secretNumber ? '📉 Too Low.' : '📈 Too high.');
      updateScore(--score);
    } else {
      printMessage('👎 You Lost the Game');
      updateScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  printMessage('Start guessing...');
  updateNumber('?', '15rem');
  updateScore(score);
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
});
