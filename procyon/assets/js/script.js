'use strict';

document.addEventListener('DOMContentLoaded', function () {
  /*********************************
   *        STICKY NAVIGATION      *
   *********************************/
  window.addEventListener('scroll', function () {
    const headerEl = document.querySelector('header');
    headerEl.classList.toggle('sticky', window.scrollY > 0);
  });

  /**************************************
   *  ANIMAR LOS NUMEROS DE FACTS  *
   *************************************/
  const statsFunction = function () {
    $('.counting').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 3000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  };

  /****************************************************************
   *       CERRAR MOBILE NAVIGATION AL HACER CLIK EN EN LINK      *
   ***************************************************************/
  const navLinkEl = document.querySelectorAll('.navigation__link');
  const navCheckboxEl = document.querySelector('.navigation__checkbox');

  navLinkEl.forEach((link) => {
    link.addEventListener('click', function () {
      setTimeout(() => {
        navCheckboxEl.checked = false;
      }, 500);
    });
  });

  /*********************************
   *    NAV LINK TOGGLE ACTIVE      *
   *********************************/
  // Implementation of IntersectionObserver for toggle active class in main-nav-links
  // Función para manejar la intersección
  function handleIntersection(entries, observe) {
    entries.forEach((entry) => {
      const mainNavListEl = document.querySelector('.header__list');

      const link = mainNavListEl.querySelector(
        `.header__link-${entry.target.classList.value.split('-')[1]}`
      );

      if (entry.target.classList.value == 'section-facts') {
        if (entry.isIntersecting) {
          statsFunction();
        }
      }

      if (entry.target.classList.value !== 'section-facts') {
        if (entry.isIntersecting) {
          link.classList.add('header__link--active');
        } else {
          link.classList.remove('header__link--active');
        }
      }
    });
  }

  // Opciones para el Intersection Observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3, // Porcentaje de visibilidad para considerar como "intersección"
  };

  // Crear una instancia del Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);

  // Obtener todas las secciones y observarlas
  const sections = [
    document.querySelector('.section-mission'),
    document.querySelector('.section-facts'),
    document.querySelector('.section-tours'),
    document.querySelector('.section-journey'),
    document.querySelector('.section-team'),
    document.querySelector('.section-testimonials'),
    document.querySelector('.section-contact'),
  ];

  sections.forEach((section) => observer.observe(section));

  /*********************************
   *        HERO IMAGE SLIDER      *
   *********************************/
  const heroImages = document.querySelectorAll('.hero-slider__image');

  let container1 = 1;

  setInterval(() => {
    container1 = container1 >= 3 ? 0 : container1;

    heroImages.forEach((image) => {
      // restauro valores por defecto
      image.style.opacity = 0;
      image.style.scale = 1;
    });

    heroImages[container1].style.opacity = 1;
    heroImages[container1].style.scale = 1.03;

    container1++;
  }, 6000);

  /*********************************
   *        JOURNEY IMAGE SLIDER    *
   *********************************/
  const journeySliderEl = document.querySelector('.journey-slider');

  const yearBtns = document.querySelectorAll('.year-box__btn');

  yearBtns.forEach((yearBtn, index) => {
    yearBtn.addEventListener('click', function () {
      if (index === 0) {
        journeySliderEl.style.transform = `translateX(-${index * 100}%)`;
      }
      if (index === 1) {
        journeySliderEl.style.transform = `translateX(-${index * 100}%)`;
      }
      if (index === 2) {
        journeySliderEl.style.transform = `translateX(-${index * 100}%)`;
      }
      if (index === 3) {
        journeySliderEl.style.transform = `translateX(-${index * 100}%)`;
      }
    });
  });

  /*********************************
   *   LIGHTBOX CONFIGURATION      *
   *********************************/
  lightbox.option({
    resizeDuration: 200,
    showImageNumberLabel: false,
    disableScrolling: true,
    wrapAround: true,
  });

  /*********************************
   *   ANIMATED SKILLBAR           *
   *********************************/
  $.fn.isFullyInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementTop >= viewportTop && elementBottom <= viewportBottom;
  };

  jQuery(document).ready(function () {
    // on page ready check if element is already in viewport
    animateProgressBar();
  });

  $(window).on('resize scroll', function () {
    // on page resize or scroll check if element is in viewport
    animateProgressBar();
  });

  // if elemnt is visble in viewport , then animate
  var animateProgressBar = function () {
    $('.skills__value-box').each(function () {
      if ($(this).isFullyInViewport()) {
        jQuery(this)
          .find('.skills__bar')
          .animate(
            {
              width: jQuery(this).attr('data-percent'),
            },
            800 // velocidad de relleno milisegundos
          );
      }
    });
  };

  /*********************************
   *      TOGGLE RADIO CHECKED     *
   *********************************/

  const groupEl = document.querySelector('.form__group--radio');
  const radioInput = document.querySelector('.form__radio-input');

  groupEl.addEventListener('click', function () {
    radioInput.checked = !radioInput.checked;
  });
});
