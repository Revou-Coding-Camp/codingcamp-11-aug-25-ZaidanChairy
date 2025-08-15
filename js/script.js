function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName && userName.trim() !== '') {
        document.getElementById('user-greeting').textContent = userName;
    }
}

function sendMessage() {
    let message = document.getElementById('user-message').value;
    if (message.trim() !== '') {
        alert("Message sent: " + message);
        document.getElementById('user-message').value = '';
    } else {
        alert("Please enter a message before sending.");
    }
}
