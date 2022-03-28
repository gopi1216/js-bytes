'use strict';
/*
|| Write a program to display current day and time in the following format.
? Today is: Tuesday.
? Current Time is: 10 PM : 30 : 38
*/
const date = new Date(),
  weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

let hours =
    date.getHours() >= 12
      ? `0${date.getHours() - 12} PM`
      : `${date.getHours()} AM`,
  minutes = date.getMinutes(),
  seconds = date.getSeconds();

weekDays.forEach((weekDay, index) => {
  if (index === date.getDay()) {
    console.log(`Today is: ${weekDay}`);
  }
});

console.log(`Current Time is: ${hours} : ${minutes} : ${seconds}`);

/*
|| Write a program to print the contents of the current window.
? window.print();
*/

/*
|| Write a program to get the current date.
? Current Date: mm-dd-yyyy || mm/dd/yyyy || dd-mm-yyyy || dd/mm/yyyy
*/
let day = date.getDate(),
  month = date.getMonth(),
  year = date.getFullYear();

day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;

console.log(`Date is: ${day} - ${month} - ${year}`);
console.log(`Date is: ${day} / ${month} / ${year}`);
console.log(`Date is: ${month} - ${day} - ${year}`);
console.log(`Date is: ${month} / ${day} / ${year}`);

/*
|| Write a program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
? Formula to calculate perimeter: (side1 + side2 + side3) / 3
? Formula to calculate area: Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3))
*/
let calcArea = (side1, side2, side3) => {
  // @p - perimeter
  let p = (side1 + side2 + side3) / 2,
    area = Math.sqrt(p * ((p - side1) * (p - side2) * (p - side3)));

  console.log(`Ares is: ${area}`);
};

calcArea(5, 6, 7);

/*
|| Write a program to reverse a String.
? 'w3resource' to 'ecruoser3w'
*/

let str = 'w3resource';
let arr = str.split('');
arr.reverse();
str = arr.join('');
console.log(arr, str);

const calcAverage = (n1, n2, n3) => n1 + n2 + n3 / 3;
let avgDolphin = calcAverage(14, 13, 21);
let avgKoalas = calcAverage(25, 64, 49);

const checkWinner = (t1, t2) => {
  if (t1 > t2 * 2) {
    console.log(`Dolphins wins 🏆 (${t1} vs ${t2})`);
  } else if (t2 > t1 * 2) {
    console.log(`Koalas wins 🏆 (${t2} vs ${t1})`);
  } else {
    console.log('No team wins a 🏆');
  }
};

checkWinner(avgDolphin, avgKoalas);
