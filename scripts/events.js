'use strict';
/* || Task1
-- you need to create a simple event handler that causes the text inside the button (btn) to change when it is clicked on, and change back when it is clicked again.
*/
let btn = document.querySelector('[data-task = "change-text"]');

btn.addEventListener('click', () => {
  btn.textContent =
    btn.textContent === 'Machine is on' ? 'Machine is off' : 'Machine is on';
});

/* || Task2
--To pass this assessment you need to build an event handler that moves the circle around the provided canvas when the WASD keys are pressed on the keyboard. The circle is drawn with the function drawCircle(), which takes the following parameters as inputs:

* x — the x coordinate of the circle.
* y — the y coordinate of the circle.
* size — the radius of the circle.
*/
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let x = 50;
let y = 50;
const size = 30;

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

drawCircle(x, y, size);

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 65:
      drawCircle(75, 75, 60);
      break;
    case 68:
      drawCircle(85, 85, 75);
      break;
    case 83:
      drawCircle(185, 185, 65);
      break;
    case 87:
      drawCircle(105, 105, 100);
      break;
  }
});
