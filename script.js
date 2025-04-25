const customCursor = document.getElementById('custom-cursor');
const mainImage = document.getElementById('main-antony-image');
let cursorVisible = false;

const updateCursorPosition = (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;

    if (!cursorVisible) {
        customCursor.style.display = 'block';
        cursorVisible = true;
    }
};

document.addEventListener('mousemove', updateCursorPosition);

document.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
    cursorVisible = false;
});

document.addEventListener('mouseenter', () => {
    cursorVisible = false;
});

const cursorImage = new Image();
cursorImage.src = 'antony.png';
cursorImage.onerror = () => {
    console.error("Nie można załadować obrazu kursora: antony.png. Używanie stylu zastępczego.");
    if (customCursor) {
        customCursor.style.backgroundImage = 'none';
        customCursor.style.backgroundColor = 'transparent';
        customCursor.style.border = '1px solid #d1d5db';
    }
};
cursorImage.onload = () => {
    console.log("Obraz kursora załadowany pomyślnie.");
};

if (mainImage) {
    mainImage.addEventListener('click', () => {
        mainImage.classList.remove('spin-on-click');
        void mainImage.offsetWidth;
        mainImage.classList.add('spin-on-click');
    });

    mainImage.addEventListener('animationend', () => {
        console.log("Animacja obrazka zakończona.");
    });
} else {
    console.error("Nie znaleziono głównego obrazka (#main-antony-image).");
}