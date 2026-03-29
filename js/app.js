
// JavaScript for mobile menu navigation [cite: 19, 54]
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

  // JavaScript for the Web Share API to make it shareable
async function sharePage() {
  if (navigator.share) {
  try {
  await navigator.share({
  title: 'Rural Changemakers Erasmus+ Blog',
  text: 'Check out our amazing Erasmus+ journey and learn how you can become a changemaker too!',
  url: window.location.href
});
  console.log('Successfully shared');
} catch (error) {
  console.error('Error sharing:', error);
}
} else {
  alert('Web Share API is not supported in your browser. Copy the URL to share!');
}
}

// ... existing code ...
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[currentSlide].classList.add('active');
}

// ... existing code ...
document.addEventListener('DOMContentLoaded', () => {
  // Hero Background Slider
  const slides = document.querySelectorAll('.bg-slider .slide');
  if (slides.length > 0) {
    let currentSlide = 0;

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000); // Changes image every 5 seconds
  }
});
// ... existing code ...
