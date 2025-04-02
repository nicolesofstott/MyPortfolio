document.addEventListener('DOMContentLoaded', function () {
    const image1 = document.querySelector('.image1');
    const image2 = document.querySelector('.image2');
    const image3 = document.querySelector('.image3');
    const image4 = document.querySelector('.image4');
    const image5 = document.querySelector('.image5');
    const image6 = document.querySelector('.image6');
    const image7 = document.querySelector('.image7');
    const image8 = document.querySelector('.image8');
    const img = document.querySelector('img');

    function handleScroll() {
        const xOffset = window.scrollY;
        image1.style.transform = `translateY(${xOffset * parseFloat(image1.dataset.scrollspeed)}px)`;
        image2.style.transform = `translateY(${xOffset * parseFloat(image2.dataset.scrollspeed)}px)`;

        const horizontalOffset = xOffset * parseFloat(image3.dataset.scrollspeed) * 0.5;
        image3.style.transform = `translateX(${horizontalOffset - window.innerWidth * 0.5}px)`;
        image4.style.transform = `translateX(${horizontalOffset - window.innerWidth * 0.5}px)`;
        image5.style.transform = `translateX(${horizontalOffset - window.innerWidth * 0.5}px)`;
        image6.style.transform = `translateX(${horizontalOffset - window.innerWidth * 0.9}px)`;
        image7.style.transform = `translateX(${horizontalOffset - window.innerWidth * 0.9}px)`;
        image8.style.transform = `translateX(${horizontalOffset - window.innerWidth * 0.9}px)`;
    }

    window.addEventListener('scroll', handleScroll);

    function handleObserver(entries) {
        if (entries[0].isIntersecting == true) {
            img.style.animation = 'rotate 2s 1';
        } else {
            img.style.animation = '';
        }
    }

    let observer = new IntersectionObserver(handleObserver);

    observer.observe(img);
});

