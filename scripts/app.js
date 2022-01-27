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

let addMessageBox = document.querySelector('.btn-secondary');

addMessageBox.addEventListener('click', () =>
  displayMessage("Yep, it's dynamic one..!", 'error')
);
