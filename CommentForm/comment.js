// Comment Submission's Code:

// Real time user validation
document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone');
    const form = document.getElementById('commentForm');
    const passwordMessage = document.getElementById('passwordMessage');
    const userMessage = document.getElementById('userMessage');

    document.getElementById('phone').addEventListener('input', function(event) {
        // Remove all non-numeric characters except hyphen
        this.value = this.value.replace(/[^0-9-]/g, '');

        const phonePattern = /^\d{3}[-]?\d{3}[-]?\d{4}$/;

        if (phonePattern.test(this.value)) {
            this.setCustomValidity('');
        }
        else {
            this.setCustomValidity('Please enter a valid phone number.')
        }
    });


// Real-time username validation
    usernameInput.addEventListener("input", function() {
        const username = usernameInput.value;
        const missingUser = [];

        if (username.length < 6)
            missingUser.push("6-character minimum");

        if (!/[a-z]/.test(username))
            missingUser.push("lower-case letter");

        if (!/[A-Z]/.test(username))
            missingUser.push("upper-case letter");

        if (!/[0-9]/.test(username))
            missingUser.push("Number (0-9)");



        let userOutput = "";
        if (missingUser.length > 0) {
            userOutput = "<strong>Missing: </strong>";
            for (let i = 0; i < missingUser.length - 1; i++)
                userOutput += missingUser[i] + ", ";
            userOutput += missingUser[missingUser.length - 1];
        }

        let strength = "weak";
        let color = "red";
        if (missingUser.length === 0) {
            strength = "strong"
            color = "green"
        }

        userOutput = "Username Strength: <span style='color: " + color + "'>" + strength + "</span><br> " + userOutput;
        userMessage.innerHTML = userOutput;

    });



// Real-time password validation
    passwordInput.addEventListener("input", function() {
        const password = passwordInput.value;
        const missingPass = [];

        if (password.length < 8)
            missingPass.push("8-character minimum");

        if (!/[a-z]/.test(password))
            missingPass.push("lower-case letter");

        if (!/[A-Z]/.test(password))
            missingPass.push("upper-case letter");

        if (!/[0-9]/.test(password))
            missingPass.push("Number");

        if (!/[!@#$%]/.test(password))
            missingPass.push("Special character (!, @, #, $, %)");




        // Preventing username in password
        const username = usernameInput.value;
        if (password.includes(username)) {
            missingPass.push("password cannot contain username")
        }



        let passwordOutput = "";
        if (missingPass.length > 0) {
            passwordOutput = "<strong>Missing: </strong>";
            for (let i = 0; i < missingPass.length - 1; i++)
                passwordOutput += missingPass[i] + ", ";
            passwordOutput += missingPass[missingPass.length - 1];
        }

        let strength;
        let color;
        if (missingPass.length === 0) {
            strength = "strong"
            color = "green"
        }
        else {
            strength = "weak";
            color = "red"
        }

        passwordOutput = "Password Strength: <span style='color: " + color + "'>" + strength + "</span><br> " + passwordOutput;
        passwordMessage.innerHTML = passwordOutput;
    });

    // Form Sanitization
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // sanitizing inputs
        const sanitizedInfo = {
            name: sanitizeInput(name),
            phone: sanitizeInput(phone),
            email: sanitizeInput(email),
            comment: sanitizeInput(comment),
            username: sanitizeInput(username),
            password: sanitizeInput(password),
        };

        console.log('data sanitized', sanitizedInfo);
    });

    function sanitizeInput(input) {
        return input.replace(/[<>&"'"]/g, (char) => {
            switch(char) {
                case '<' : return '&lt;';
                case '>' : return '&gt;';
                case '&' : return '&amp;';
                case '"' : return '&quot;';
                case "'" : return '&apos;';
                default: return char;
            }
        });
    }
});