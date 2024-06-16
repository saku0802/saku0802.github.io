// ページ遷移アニメーション
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 300); // 少し遅らせて表示
});
