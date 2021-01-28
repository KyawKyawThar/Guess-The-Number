'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');
    // document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    //  document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      displayScore(score);
      // document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayScore(0);
      // document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor =
        'rgba(231, 24, 52, 0.842)';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  console.log('Click');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing';
  displayScore(score);
  // document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#3944bc';
  document.querySelector('.number').style.width = '15rem';
});
