'use strict';
/**
|| Write a program to display current day and time in the following format.
-- Today is: Tuesday
-- Current Time is: 10 PM : 30 : 38
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

weekDays.forEach((day, index) => {
  if (index === date.getDay()) {
    console.log(`Today is: ${day}`);
  }
});

console.log(`Current Time is: ${hours} : ${minutes} : ${seconds}`);
