const reviewImages = document.querySelectorAll('.rev');
let currentIndex = 0;

function showImage(index) {
    reviewImages.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

showImage(currentIndex);

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? reviewImages.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === reviewImages.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});