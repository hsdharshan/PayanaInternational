// Function to load HTML content into a target element
function loadHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Function to toggle the menu
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}

// Load header and footer on page load
document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');

    // Load header and footer based on the current file's location
    if (headerElement && footerElement) {
        // Get the current file path
        const path = window.location.pathname;

        // Determine the relative path for header and footer based on the current file's directory depth
        const relativePath = path.includes('fixed-international') || path.includes('fixed-india') ? '../' : '';

        loadHTML('header', `${relativePath}header.html`);
        loadHTML('footer', `${relativePath}footer.html`);
    }

    // Attach event listener for the menu toggle button
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
});
