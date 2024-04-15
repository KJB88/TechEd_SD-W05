document.querySelectorAll('.gallery').forEach(gallery => {
    const imagesContainer = gallery.querySelector('.gallery-images');
    const prevBtn = gallery.querySelector('.prev-btn');
    const nextBtn = gallery.querySelector('.next-btn');
    const totalImages = imagesContainer.querySelectorAll('img').length;
    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateGallery();
        }
    });

    function updateGallery() {
        const offset = currentIndex * imagesContainer.querySelector('img').offsetWidth;
        imagesContainer.style.transform = `translateX(-${offset}px)`;
    }
});