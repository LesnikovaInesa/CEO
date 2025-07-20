(() => {
    const mobileMenu = document.querySelector('.js-menu');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const burgerIcon = openMenuBtn.querySelector('.burger-icon use');
  
    const toggleMenu = () => {
      const isMenuOpen = mobileMenu.classList.toggle('is-open');
      openMenuBtn.setAttribute('aria-expanded', isMenuOpen);

      if (isMenuOpen) {
        burgerIcon.setAttribute('href', './images/icons.svg#icon-line-1');
        openMenuBtn.classList.add('is-open');
      } else {
        burgerIcon.setAttribute('href', './images/icons.svg#icon-menu');
        openMenuBtn.classList.remove('is-open');
      }

      document.body.classList.toggle('no-scroll', isMenuOpen);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      document.body.classList.remove('no-scroll');
      burgerIcon.setAttribute('href', './images/icons.svg#icon-menu');
      openMenuBtn.classList.remove('is-open');
    });
  })();