let currentIndex = 0;

const images = document.querySelectorAll('.carousel-images img, .carousel-video iframe');
const totalImages = images.length;

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateCarousel();
});

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    document.getElementById('review-form').style.display = 'block';
}

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const reviewText = this.querySelector('textarea').value;
    if (reviewText.trim() !== "") {
        const reviewSummary = document.getElementById('review-summary');
        const newReview = document.createElement('p');
        newReview.textContent = reviewText;
        reviewSummary.appendChild(newReview);
        this.reset(); // Clear the form
    }
});
