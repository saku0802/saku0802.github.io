// ページ遷移アニメーション
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        // スムーズなスクロール
        const targetId = this.getAttribute('href').substring(1); // '#' を除外
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // headerの高さを考慮
                behavior: 'smooth' // スムーズなスクロール
            });
        }

        document.body.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = anchor.getAttribute('href'); 
        }, 300);
    });
});
