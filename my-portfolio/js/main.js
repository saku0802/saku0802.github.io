// ページ遷移アニメーション
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // ページ遷移をキャンセル

        document.body.classList.add('fade-out');

        setTimeout(function() {
            window.location.href = anchor.getAttribute('href'); 
        }, 300); // フェードアウトにかかる時間と同じにする
    });
});
