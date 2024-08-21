const slides = document.querySelectorAll('.images');
const slidesContainer = document.querySelector('.images-1');
let currentIndex = 0;
const totalSlides = slides.length;
let intervalId;

function showSlide(index) {
    slidesContainer.style.transition = 'transform 0.5s ease';
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function startSlideshow() {
    intervalId = setInterval(showNextSlide, 3500);
}

function stopSlideshow() {
    clearInterval(intervalId);
}

startSlideshow();

document.querySelectorAll('.button-1-1').forEach((button, index) => {
    button.addEventListener('click', () => {
        stopSlideshow();
        currentIndex = index;
        showSlide(currentIndex);
        startSlideshow();
    });
});


    const container = document.querySelector('.dekstop-doorway');
    const button1 = document.querySelector('.dekstop-doorway-button-1');
    const button2 = document.querySelector('.dekstop-doorway-button-2');

    button1.addEventListener('click', () => {
        container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    });

    button2.addEventListener('click', () => {
        container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    });