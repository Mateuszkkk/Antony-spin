const customCursor = document.getElementById('custom-cursor');
const mainImage = document.getElementById('main-antony-image');
let cursorVisible = false;
const video = document.getElementById('main-antony-video');
const audioButton = document.getElementById('toggle-audio-button');

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

if (video) {
    video.addEventListener('click', () => {
        video.classList.remove('spin-on-click');
        void video.offsetWidth;
        video.classList.add('spin-on-click');
    });

    video.addEventListener('animationend', () => {
        console.log("Animacja obrazka zakończona.");
    });
} else {
    console.error("Nie znaleziono głównego obrazka (#main-antony-image).");
}

if (audioButton && video) {
    
    if (video.muted) {
         audioButton.style.display = 'block';
    } else {
         
         audioButton.style.display = 'none';
    }

    audioButton.addEventListener('click', () => {
        if (video.muted) { 
            video.muted = false; 
            audioButton.textContent = 'Dźwięk włączony'; 
            audioButton.disabled = true; 
            
            audioButton.classList.remove('bg-red-600', 'hover:bg-red-700', 'focus:ring-red-500', 'focus:ring-opacity-50');
            audioButton.classList.add('bg-gray-400', 'cursor-not-allowed');
            
        }
    });
} else {
    console.error("Nie znaleziono przycisku audio (#toggle-audio-button) lub elementu wideo (#main-antony-video).");
     
     if(audioButton) audioButton.style.display = 'none';
}
