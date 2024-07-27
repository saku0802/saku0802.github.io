const galleryFilter = document.querySelector('.gallery-filter');
const galleryGrid = document.querySelector('.gallery-grid');
const previewItems = document.querySelectorAll('.preview-item');

galleryFilter.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const filterValue = event.target.dataset.filter;

    // アクティブなフィルターボタンを更新
    galleryFilter.querySelectorAll('button').forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    // ギャラリーアイテムの表示/非表示を切り替え
    previewItems.forEach(item => {
      if (filterValue === 'all' || item.dataset.theme === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
});

// プレビュー画像とモーダルの処理
previewItems.forEach(item => {
  const imageLink = item.querySelector('a');
  // モーダルウィンドウ
  const modal = document.getElementById(imageLink.getAttribute('href').substring(1)); // ここでsubstring(1)を適用
  const closeBtn = modal.querySelector('.close-btn');
  const modalImage = modal.querySelector('img');
  const modalCaption = modal.querySelector('.modal-caption');

  imageLink.addEventListener('click', (event) => {
    event.preventDefault(); // リンクのデフォルト動作を無効化

    // モーダルにタイトルと説明を設定
    modalCaption.querySelector('h3').textContent = imageLink.dataset.title;
    modalCaption.querySelector('p').textContent = imageLink.dataset.description;

    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});