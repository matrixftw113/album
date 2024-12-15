// Back-to-Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'inline-block' : 'none';
});

// Fullscreen Functionality for Slideshow and Gallery
const slideshowImages = document.querySelectorAll('.slideshow-image');
const galleryImages = document.querySelectorAll('.gallery-image');

function toggleFullscreen(img) {
    if (!document.fullscreenElement) {
        img.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

slideshowImages.forEach(img => {
    img.addEventListener('click', () => toggleFullscreen(img));
});

galleryImages.forEach(img => {
    img.addEventListener('click', () => toggleFullscreen(img));
});

// Initialize AOS (Scroll Animations)
AOS.init();
