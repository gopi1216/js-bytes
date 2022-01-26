'use strict'

/* || Task 1
-- you have to create a simple function — chooseName() — that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once.

* const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
*/

let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];

function chooseName () {
  let randomNumber = Math.floor(Math.random() * names.length);
  console.log(names[randomNumber]);
}

chooseName();
