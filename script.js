const nav = document.querySelector('nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;

    const siblings = link.closest('nav').querySelectorAll('.nav-link');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

const btnNav = document.querySelector('.btn-mobile-nav');
const aboutSec = document.querySelector('.section-hero-about');
const blogSec = document.querySelector('.section-hero-blog');
const dietsSec = document.querySelector('.section-hero-diets');
const productsSec = document.querySelector('.section-hero-products');

btnNav.addEventListener('click', function () {
  aboutSec.classList.toggle('nav-open');
});

btnNav.addEventListener('click', function () {
  blogSec.classList.toggle('nav-open');
});

btnNav.addEventListener('click', function () {
  dietsSec.classList.toggle('nav-open');
});

btnNav.addEventListener('click', function () {
  productsSec.classList.toggle('nav-open');
});
