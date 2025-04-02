const scrollWrapper = document.querySelector('.horizontal-scroll-wrapper');
const parallaxImages = document.querySelectorAll('.parallax-image');

scrollWrapper.addEventListener('scroll', () => {
  const scrollLeft = scrollWrapper.scrollLeft;
  parallaxImages.forEach((img) => {
    const speed = parseFloat(img.dataset.speed) || 0.5;
    img.style.transform = `translateY(${scrollLeft * speed}px)`;
  });
});