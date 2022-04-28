'use strict';

const score0 = document.querySelector('#score--0'),
  score1 = document.querySelector('#score--1'),
  dice = document.querySelector('.dice'),
  btnNew = document.querySelector('.btn--new'),
  btnRoll = document.querySelector('.btn--roll'),
  btnHold = document.querySelector('.btn--hold'),
  currentScoreEl0 = document.querySelector('#current--0'),
  currentScoreEl1 = document.querySelector('#current--1'),
  playerEl0 = document.querySelector('.player--0'),
  playerEl1 = document.querySelector('.player--1');

let currentScore, activePlayer, scores, playing;

let init = () => {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  currentScoreEl0.textContent = 0;
  currentScoreEl1.textContent = 0;
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
};
init();

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    //Generate Random number for dice.
    let randomNumber = Math.trunc(Math.random() * 6) + 1;

    // Display the dice.
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumber}.png`;

    // Assign value to current score, if !1
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      let $player = document.querySelector(`.player--${activePlayer}`);

      playing = false;
      $player.classList.add('player--winner');
      $player.classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
