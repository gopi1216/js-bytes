async function getData() {
  let requestURL = 'data/heroes.json',
    request = new Request(requestURL),
    response = await fetch(request),
    superHeroesText = await response.text(),
    superHeroes = JSON.parse(superHeroesText);

  populateHeader(superHeroes);
  populateSection(superHeroes);

  console.log(superHeroes);
}

function populateHeader(hObj) {
  let header = document.querySelector('.header'),
    headerTitle = document.createElement('h1'),
    headerDescription = document.createElement('p');

  headerTitle.textContent = hObj['squadName'];
  header.appendChild(headerTitle);
  headerDescription.textContent = `Hometown: ${hObj['homeTown']}`;
  header.appendChild(headerDescription);
}

function populateSection(hObj) {
  let section = document.querySelector('section'),
    heroes = hObj['members'];

  for (let hero of heroes) {
    let memberArticle = document.createElement('article'),
      articleTitle = document.createElement('h2'),
      firstPara = document.createElement('p'),
      secondPara = document.createElement('p'),
      thirdPara = document.createElement('p'),
      powerList = document.createElement('ul');

    articleTitle.textContent = hero.title;
    firstPara.textContent = `Secret identity: ${hero.secretIdentity}`;
    secondPara.textContent = `Age: ${hero.age}`;
    thirdPara.textContent = `Superpowers: `;

    let superPowers = hero.powers;

    for (let power of superPowers) {
      let listitem = document.createElement('li');

      listitem.textContent = power;
      powerList.appendChild(listitem);
    }

    memberArticle.appendChild(articleTitle);
    memberArticle.appendChild(firstPara);
    memberArticle.appendChild(secondPara);
    memberArticle.appendChild(thirdPara);
    memberArticle.appendChild(powerList);

    section.appendChild(memberArticle);
  }
}

getData();
