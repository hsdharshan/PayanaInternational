// script.js

function showMessage() {
    document.getElementById('message').innerText = 'Hello, you clicked the button!';
}

document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert('Please fill out all required fields.');
        event.preventDefault(); // Prevent form submission
    }
});