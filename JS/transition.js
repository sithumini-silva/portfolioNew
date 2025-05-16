document.addEventListener('DOMContentLoaded', function() {

    const links = document.querySelectorAll('a.transition-btn');
    const overlay = document.querySelector('.overlay-transition');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.classList.add('show');

            // After the overlay animation (adjust timing as needed), navigate to the new page
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 1000); // Assuming your CSS transition is 0.5s (500ms)
        });
    });

});