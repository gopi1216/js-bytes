'use strict';

/* || Task 1
In our first strings task, we start off small. You already have half of a famous quote inside a variable called quoteStart; we would like you to:

-- Look up the other half of the quote, and add it to the example inside a variable called "quoteEnd".
-- Concatenate the two strings together to make a single string containing the complete quote. Save the result inside a variable called "finalQuote".
*/

let quoteStart = 'Don\'t judge each day by the harvest you reap ',
    quoteEnd   = 'but by the seeds that you plant';

let finalQuote = quoteStart + quoteEnd;

console.log( 'Final Quote is:', '\n', finalQuote );


/* || Task 2
In this task you are provided with two variables, "quote" and "substring", which contain two strings. We would like you to:

-- Retrieve the length of the "quote", and store it in a variable called "quoteLength".
-- Find the index position where substring appears in quote, and store that value in a  variable called "index".
-- Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called "revisedQuote".
*/

let quote       = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.',
    substring   = 'green eggs and ham',
    quoteLength = quote.length,
    index       = quote.indexOf( substring );

let revisedQuote = quote.substr( 0, index + substring.length + 1 );

console.clear();
console.log( 'Revised quote is: ', revisedQuote );


/* || Task 3
In the next string task, you are given the same quote that you ended up with in the previous task, but it is somewhat broken! We want you to fix and update it, like so:

-- Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called "fixedQuote".
-- In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
-- There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called "finalQuote".
*/
let quoteStr = 'I dO nOT lIke gREen eGgS anD HAM',
    fixedQuote = quoteStr.substr( 0, 1 ) + quoteStr.slice( 1 ).toLocaleLowerCase();

fixedQuote = fixedQuote.replace( 'green eggs and ham', 'Green apple and papaya' );

let finalQuoteStr = fixedQuote + '.';

console.clear();
console.log( 'Final Quote Str is: ', finalQuoteStr );