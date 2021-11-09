let randomNumber = Math.floor(Math.random() * 100),
    guessCount   = 1,
    resetButton;

const guesses     = document.querySelector('.guesses'),
      lastResult  = document.querySelector('.last-result'),
      guessStatus = document.querySelector('.guess-status'),
      guessSubmit = document.querySelector('.guess-submit'),
      guessField  = document.querySelector('.guess-field');

function checkGuess() {
  let userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ',';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right.';
    lastResult.style.color = '#47BE5A';
    guessStatus.textContent = '';
    setGameOver();
  }
  else if (guessCount === 10) {
    lastResult.textContent = '!!! Game Over !!!';
    guessStatus.textContent = '';
    setGameOver();
  }
  else {
    lastResult.textContent = 'Wrong..!';
    lastResult.style.color = '#3DB75E';

    if (userGuess < randomNumber) {
      guessStatus.textContent = 'Last guess was too low, Try again..!'
    }
    else if (userGuess > randomNumber) {
      guessStatus.textContent = 'Last guess was too high, Try again..!'
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.result-section p');

  for(let i = 0; i <= resetParas.length; i++) {
    resetParas[i].textContent = ''
  }

  resetButton.parentNode.removeChild(resetButton);
}