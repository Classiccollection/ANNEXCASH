function startTrivia() {
    alert("Trivia game coming soon!");
}

// Simple login functionality
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('Login successful!');
    } else {
        alert('Incorrect credentials, please try again.');
    }
});