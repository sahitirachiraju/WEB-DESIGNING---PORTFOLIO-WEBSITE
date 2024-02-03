function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return false;
    }

    if (emailInput.value.trim() === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }

    if (messageInput.value.trim() === "") {
        alert("Please enter your message.");
        messageInput.focus();
        return false;
    }

    // If all validations pass, you can submit the form or perform other actions.
    // For now, let's display a success message.
    alert("Form submitted successfully!");
}

function isValidEmail(email) {
    // Simple email validation, you may use a more robust approach
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}