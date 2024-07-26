const galleryFilter = document.querySelector('.gallery-filter');
const galleryGrid = document.querySelector('.gallery-grid');

galleryFilter.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const filterValue = event.target.dataset.filter;

    // アクティブなフィルターボタンを更新
    galleryFilter.querySelectorAll('button').forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    // ギャラリーアイテムの表示/非表示を切り替え
    galleryGrid.querySelectorAll('.hexagon').forEach(item => {
      if (filterValue === 'all' || item.dataset.year === filterValue || item.dataset.theme === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
});

// ヘキサゴンの回転アニメーション
const hexagons = document.querySelectorAll('.hexagon');

hexagons.forEach(hexagon => {
  hexagon.addEventListener('mouseover', () => {
    hexagon.style.transform = 'rotateY(180deg)';
  });

  hexagon.addEventListener('mouseout', () => {
    hexagon.style.transform = 'rotateY(0deg)';
  });

  // モーダルウィンドウ
  const modal = document.getElementById(hexagon.querySelector('img').dataset.target);
  const closeBtn = modal.querySelector('.close-btn');

  hexagon.addEventListener('click', () => {
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