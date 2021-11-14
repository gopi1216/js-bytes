'use strict';

/* || Task 1
-- Create four variables that contain numbers. Call the variables something sensible.
-- Add the first two variables together and store the result in another variable.
-- Subtract the fourth variable from the third and store the result in another variable.
-- Multiply the results from the last two steps together, storing the result in a variable called 'finalResult'.
-- The product should be 48. If it isn't, you'll have to adjust some of the initial input values.
-- Finally, write a calculation that checks whether finalResult is an even number. Store the result in a variable called 'evenOddResult'.
*/

let num1          = 7,
    num2          = 5,
    num3          = 7,
    num4          = 3,
    finalResult   = ( 7 + 5 ) * ( 7 - 3 ),
    evenOddResult = ( finalResult % 2 === 0) ? 'The Final Result is EVEN.' : 'The Final Result is ODD.';

    console.log(evenOddResult);


/* || Task 2
-- Write a calculation that multiplies result and result2 together and assigns the result back to result. This will require assignment shorthand.
-- let result = 7 + 13 / 9 + 7;
-- Let result2 = 100 / 2 * 6;
-- Write a line of code that takes result and formats it to 2 decimal places, storing the result of this in a variable called 'finalResult'.
-- Check the data type of finalResult using typeof; you'll probably see that it is actually of string type! Write a line of code that converts it to a number type, storing the result in a variable called finalNumber.
-- The value of finalNumber needs to be 10.42. Go back and update the original calculations you were provided with so that they give this final result. Don't update the numbers or the operators.
*/

let result  = ( 7 + 13 ) / ( 9 + 7 ),
    result2 = 100 / ( 2 * 6 );

result *= result2;
console.log(result);

let finalResult1 = result.toFixed(2);
console.log('finalResult1 is ' + typeof finalResult1 + 'type', finalResult1);

let finalNumber = Number(finalResult1);
console.log('finalNumber is ' + typeof finalNumber + 'type', finalNumber);


/* || Task 3
-- You've got three groups, each consisting of a statement and two variables.
-- For each one, write a test that proves or disproves the statement made.
-- Store the results of those tests in variables called weightComparison, heightComparison, and pwdMatch, respectively.

** Statement 1: The elephant weights less than the mouse
let eleWeight = 1000;
let mouseWeight = 2;

** Statement 2: The Ostrich is taller than the duck
let ostrichHeight = 2;
let duckHeight = 0.3;

** Statement 3: The two passwords match
let pwd1 = 'stromboli';
let pwd2 = 'stROmBoLi';
*/
let eleWeight        = 1000,
    mouseWeight      = 2,
    ostrichHeight    = 2,
    duckHeight       = 0.3,
    pwd1             = 'stromboli',
    pwd2             = 'stROmBoLi',
    weightComparison = (eleWeight > mouseWeight) ? 'True: Elephant weight is more.' : 'False: Mouse weight is less.',
    heightComparison = (ostrichHeight > duckHeight) ? 'True: Ostrich is taller than duck.' : 'False: Ostrich is shorter than duck.',
    pwdComparison    = (pwd1 === pwd2) ? 'Both Paswords are equal.' : 'Both passwords are not equal.' ;

console.log(weightComparison);
console.log(heightComparison);
console.log(pwdComparison);