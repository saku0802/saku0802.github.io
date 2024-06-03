// main.js
document.addEventListener('DOMContentLoaded', function() {
  // ロード画面を非表示にする
  const loading = document.getElementById('loading');
  setTimeout(function() {
    loading.style.opacity = '0';
    setTimeout(function() {
      loading.style.display = 'none';
    }, 500);
  }, 1500); // 1.5秒後にロード画面を非表示にする

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

  // ハンバーガーメニュー
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav ul');
  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });
});
