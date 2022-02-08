function displayMessage(msgText, msgType) {
  const main = document.querySelector('main'),
    container = document.createElement('div'),
    msg = document.createElement('p'),
    closeButton = document.createElement('button');

  container.setAttribute('class', 'msgBox');
  main.appendChild(container);

  msg.textContent = msgText;
  container.appendChild(msg);

  switch (msgType) {
    case 'info':
      msg.style.background = 'dodger blue';
      break;
    case 'warning':
      msg.style.background = 'yellow';
      break;
    case 'error':
      msg.style.background = 'red';
      break;
    case 'success':
      msg.style.background = '#035956';
      break;
    default:
      msg.style.background = '#999';
  }

  closeButton.textContent = 'X';
  closeButton.setAttribute('type', 'button');
  container.appendChild(closeButton);

  closeButton.addEventListener('click', () => {
    container.parentNode.removeChild(container);
  });
}
/*
let addMessageBox = document.querySelector('.btn-secondary');

addMessageBox.addEventListener('click', () =>
  displayMessage("Yep, it's dynamic one..!", 'error')
);

function random(num) {
  return Math.floor(Math.random() * num);
}

function changeBackground() {
  let randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`,
    heading = document.querySelector('.h2');

  heading.style.backgroundColor = randomColor;
}

let changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeBackground, { once: true });
*/
function setTitle(title) {
  let _title = document.querySelector('[data-title]');
  _title.textContent = title;
}