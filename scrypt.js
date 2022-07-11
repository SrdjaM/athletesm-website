///////////////////////////////////////////////////////////
// Current Year

const yearEl = document.querySelector('.year');

const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

const learnMore = document.querySelector('.learn-more');

const sectionCards = document.querySelector('.cards');

learnMore.addEventListener('click', function (e) {
  sectionCards.scrollIntoView({ behavior: 'smooth' });
});

const nav = document.querySelector('nav');

const handleHover = function (e) {
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

///////////////////////////////////////////////////////////
// Navigation functions

const btnNav = document.querySelector('.btn-mobile-nav');
const heroSec = document.querySelector('.section-hero');
const aboutSec = document.querySelector('.section-hero-about');

btnNav.addEventListener('click', function () {
  heroSec.classList.toggle('nav-open');
});
