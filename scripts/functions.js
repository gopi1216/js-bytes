'use strict'

/* || Task 1
-- you have to create a simple function — chooseName() — that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once.

* const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
*/

let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];

function random() {
  let randomNumber = Math.floor(Math.random() * names.length);
  chooseName(randomNumber);
}

function chooseName(randomNumber) {
  console.log(names[randomNumber]);
}

random();

/* || Task 2
-- For our second functions-related task, you need to create a function that draws a rectangle on the provided <canvas> (reference variable canvas, context available in ctx), based on the five provided input variables:

* x — the x coordinate of the rectangle.
* y — the y coordinate of the rectangle.
* width — the width of the rectangle.
* height — the height of the rectangle.
* color — the color of the rectangle.

-- You'll want to clear the canvas before drawing, so that when the code is updated in the case of the live version, you don't get lots of rectangles drawn on top of one another.

* const canvas = document.querySelector('canvas');
* const ctx = canvas.getContext('2d');

* const x = 50;
* const y = 60;
* const width = 100;
* const height = 75;
* const color = 'blue';
*/
const x = 50,
  y = 60,
  width = 100,
  height = 75,
  color = 'blue',
  canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = '4px';
ctx.rect(x, y, width, height);
ctx.strokeStyle = color;
ctx.stroke();