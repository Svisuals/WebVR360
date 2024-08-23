document.addEventListener('DOMContentLoaded', () => {
    // Defina o número total de imagens e o prefixo
    const totalImages = 10; // Ajuste o número total de imagens que você tem
    const prefix = '360_'; // Prefixo das imagens
    const suffix = '.jpg'; // Sufixo das imagens

    const thumbnailContainer = document.getElementById('thumbnails');
    const image360 = document.getElementById('imagen360');
    const galleryButton = document.getElementById('toggle-gallery-btn');
    const galleryContainer = document.getElementById('thumbnail-container');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    
    let currentIndex = 0;

    function updateImage(index) {
        const src = `${prefix}${index + 1}${suffix}`;
        console.log('Atualizando imagem para:', src); // Log para depuração
        image360.setAttribute('src', src);
    }

    function createThumbnail(index) {
        const src = `${prefix}${index + 1}${suffix}`;
        const img = document.createElement('img');
        img.src = src;
        img.className = 'thumbnail';
        img.addEventListener('click', () => {
            updateImage(index);
            currentIndex = index;
        });
        thumbnailContainer.appendChild(img);
    }

    function updateGalleryVisibility() {
        galleryContainer.style.opacity = galleryContainer.style.opacity === '0' ? '1' : '0';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateImage(currentIndex);
    }

    function showPrevious() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateImage(currentIndex);
    }

    galleryButton.addEventListener('click', updateGalleryVisibility);
    leftArrow.addEventListener('click', showPrevious);
    rightArrow.addEventListener('click', showNext);

    // Cria as miniaturas com base na quantidade de imagens
    for (let i = 0; i < totalImages; i++) {
        createThumbnail(i);
    }
});
