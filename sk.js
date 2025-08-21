// Smooth scroll to cards when hero button is clicked
document.addEventListener('DOMContentLoaded', function () {
  const heroBtn = document.querySelector('.hero-btn');
  const cardGrid = document.querySelector('.card-grid');
  if (heroBtn && cardGrid) {
    heroBtn.addEventListener('click', function (e) {
      e.preventDefault();
      cardGrid.scrollIntoView({ behavior: 'smooth' });
    });
  }
});