// モバイルメニュー
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

mobileMenuBtn.addEventListener('click', () => {
  mainNav.style.display = (mainNav.style.display === 'block') ? 'none' : 'block';
});

// スムーススクロール
const navLinks = document.querySelectorAll('a[href^="#"]');

for (const link of navLinks) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetOffsetTop = targetElement.offsetTop;

    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth'
    });
  });
}

// スクロール時のフェードイン
const fadeIns = document.querySelectorAll('.fade-in');

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // entry.target.classList.remove('show'); // 必要に応じて
    }
  });
}, options);

fadeIns.forEach(element => {
  observer.observe(element);
});