// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(i % 4) * 0.1}s`;
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Navbar scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile nav
  const mobileNav = document.querySelector('.mobile-nav');
  document.querySelector('.hamburger').addEventListener('click', () => mobileNav.classList.add('open'));
  document.querySelector('.close-btn').addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
});

// Toast
function addToCart(name) {
  const toast = document.getElementById('toast');
  toast.textContent = '🛒 "' + name + '" adicionado!';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
