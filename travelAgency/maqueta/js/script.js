'use strict';

// here I will create all necessary script for my webpage

// function to add the possibility to go to the top
// If the user click back to top btn
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// function to make possible a sticky header
window.addEventListener('scroll', function () {
  console.log('hola');
  const headerEl = document.querySelector('header');
  headerEl.classList.toggle('sticky', window.scrollY > 1080);
});

// mobile navigation
const btnMobileEl = document.querySelector('.btn-mobile-nav');
const headerNavEl = document.querySelector('.header-nav');
const headerEl = document.querySelector('header');
const htmlEl = document.querySelector('html');

btnMobileEl.addEventListener('click', function () {
  headerEl.classList.toggle('open');
  headerNavEl.classList.toggle('nav-open');
  htmlEl.classList.toggle('disable-scroll');
});
