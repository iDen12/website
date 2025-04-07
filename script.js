// script.js

document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.add('clicked');
      setTimeout(() => {
        img.classList.remove('clicked');
      }, 500);
    });
  });