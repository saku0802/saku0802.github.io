const modalButtons = document.querySelectorAll('.details-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-btn');

// モーダルを開く
modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetModalId = button.dataset.target;
        const modal = document.getElementById(targetModalId);
        modal.style.display = 'block';
    });
});

// モーダルを閉じる
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetModalId = button.dataset.target;
        const modal = document.getElementById(targetModalId);
        modal.style.display = 'none';
    });
});

// モーダル以外をクリックしたときに閉じる
modals.forEach(modal => {
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});