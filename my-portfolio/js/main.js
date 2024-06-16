// ページ遷移アニメーション
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 300); // 少し遅らせて表示
});
// 言語切り替え機能は、後ほど実装します。
console.log("JavaScriptファイルを読み込みました。");
