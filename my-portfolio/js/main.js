// main.js
document.addEventListener('DOMContentLoaded', function() {
  // Hide loading screen
  const loading = document.getElementById('loading');
  loading.style.opacity = '0';
  setTimeout(function() {
    loading.style.display = 'none';
  }, 500);

  // Smooth scrolling
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // Hamburger menu
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav ul');
  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
