let currentSlide = 0;
let slideTimer;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active'); 
        }
    });

    currentSlide = index;
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const nextSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(nextSlide);
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const nextSlide = (currentSlide + 1) % totalSlides;
    showSlide(nextSlide);
}
function startAutoSlide() {
    slideTimer = setInterval(() => {
        prevSlide();
    }, 5000); 

function stopAutoSlide() {
    clearInterval(slideTimer);
}

// Ініціалізація каруселі
window.addEventListener('DOMContentLoaded', () => {
    showSlide(0); 
    startAutoSlide(); 

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
});
}
