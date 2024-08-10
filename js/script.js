// script.js

document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert('Please fill out all required fields.');
        event.preventDefault(); // Prevent form submission
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav ul');

    menu.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});