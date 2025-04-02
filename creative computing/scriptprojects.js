function changeColor(element) {
    element.classList.toggle('enlarge');

    const video = element.querySelector('video');

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
  
    if (element.classList.contains('enlarge')) {
        video.style.filter = 'none';
    } else {
        video.style.filter = 'grayscale(100%)';
    }

    video.classList.toggle('colored');
}