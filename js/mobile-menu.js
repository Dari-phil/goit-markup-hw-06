(() => {
  const mobileMenu = document.querySelector('.menu');
  const openMenuBtn = document.querySelector('.mobile-menu-btn');
  const body = document.querySelector('body');

const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
};
openMenuBtn.addEventListener('click', toggleMenu);
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;

    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      body.classList.remove('no-scroll');
  });
})();