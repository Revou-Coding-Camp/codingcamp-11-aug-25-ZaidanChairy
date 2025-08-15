function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName && userName.trim() !== '') {
        document.getElementById('user-greeting').textContent = userName;
    }
}

function sendMessage() {
    let name = document.getElementById('user-name').value;
    let date = document.getElementById('user-date').value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let message = document.getElementById('user-message').value;

    // Validation
    if (!name || !date || !gender || !message) {
        alert("Harap isi semua field!");
        return;
    }

    let currentTime = new Date().toString();

    // Display output
    document.getElementById('output').innerHTML = `
        <p><strong>Current time:</strong> ${currentTime}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${date}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;

    // Reset form
    document.getElementById('user-name').value = '';
    document.getElementById('user-date').value = '';
    document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
    document.getElementById('user-message').value = '';
}
