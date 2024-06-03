// main.js
document.addEventListener('DOMContentLoaded', function() {
  // スムーズスクロール
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
});
