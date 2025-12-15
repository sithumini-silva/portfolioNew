document.getElementById('contactForm').addEventListener('submit', function (e) {
    // Store form data in localStorage before submission
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    localStorage.setItem('formSubmitted', 'true');
    localStorage.setItem('formData', JSON.stringify(formData));

    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Let the form submit normally to Web3Forms
});

// After page loads
window.addEventListener('load', function () {
    if (localStorage.getItem('formSubmitted') === 'true') {
        // Show success message
        document.getElementById('success-message').style.display = 'block';

        // Clear form data from localStorage
        localStorage.removeItem('formSubmitted');

        // Optionally restore form data if needed
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            localStorage.removeItem('formData');
        }

        // Clear form fields
        document.getElementById('contactForm').reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
            document.getElementById('success-message').style.display = 'none';
        }, 5000);
    }
});

// Dark/Light Mode Toggle
// const themeToggle = document.getElementById('themeToggle');
// const body = document.body;

// <button className="theme-toggle" id="themeToggle">
//     <i className="fas fa-moon"></i>
// </button>