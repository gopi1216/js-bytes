'use strict';

const catRequestURL = 'data/cats.json';
let motherInfo = 'The names of mother cats are: ',
  catsInfoSection = document.querySelector('.cats-info'),
  para = document.createElement('p'),
  kittensInfo,
  total = 0,
  male = 0,
  female = 0;

fetch(catRequestURL)
  .then((response) => response.text())
  .then((text) => {
    let cats = JSON.parse(text);
    displayCatInfo(cats);
  });

let displayCatInfo = (cats) => {
  cats.map((cat, index) => {
    if (index === cats.length - 1) {
      motherInfo += ` and ${cat.name}.`;
    } else {
      motherInfo += ` ${cat.name},`;
    }

    para.textContent = motherInfo;

    cat.kittens.map((kitten) => {
      total++;
      if (kitten.gender === 'm') {
        male++;
      } else {
        female++;
      }
      kittensInfo = `Total number of kittens: ${total}, male: ${male} and female: ${female}.`;
    });
    para.textContent += kittensInfo;
  });

  catsInfoSection.appendChild(para);
};
