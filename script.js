document.addEventListener('DOMContentLoaded', function () {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        let parallaxContainers = document.querySelectorAll('.parallax-container');

        parallaxContainers.forEach(container => {
            container.style.backgroundPositionY = -(currentScrollPos * 0.5) + 'px';
        });

        prevScrollPos = currentScrollPos;
    }
});
