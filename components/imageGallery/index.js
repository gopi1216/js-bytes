function generateGallery() {
  let imgList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'],
    thumbBar = document.querySelector('.thumb-nails');

  for (let img of imgList) {
    let imageHolder = document.createElement('img');
    imageHolder.setAttribute('alt', 'Thumbnails');
    imageHolder.setAttribute('src', 'styles/images/' + img);

    thumbBar.appendChild(imageHolder);

    imageHolder.addEventListener('click', () => {
      let fullImage = document.querySelector('.full-img img');
      fullImage.setAttribute('src', 'styles/images/' + img);
    });
  }
}

function changeOverlay() {
  let darken = document.querySelector('.dark');
  darken.addEventListener('click', () => {
    let overlay = document.querySelector('.overlay');
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    if (darken.textContent === 'Dark') {
      darken.textContent = 'Light';
      overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    } else {
      darken.textContent = 'Dark';
      overlay.style.background = 'rgba(0, 0, 0, 0)';
    }
  });
}

generateGallery();
changeOverlay();