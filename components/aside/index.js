let navList = document.querySelectorAll('.nav--link');

for (let navlink of navList) {
  navlink.addEventListener('click', () => {
    setTitle(navlink.textContent);
  });
}
