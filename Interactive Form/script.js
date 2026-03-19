const form = document.getElementById('mainForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const userError = document.getElementById('userError');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isVaild = true;

    if (username.value.trim().length < 3) {
        userError.textContent = "Username must be 3+ characters";
        username.classList.add('invalid');
        isVaild = false;
    } else {
        userError.textContent = "";
        username.classList.remove('invalid');
    }

    if (!email.value.includes('@')) {
        emailError.textContent = "Enter a valid email address";
        email.classList.add('invalid');
        isVaild = false;
    } else {
        emailError.textContent = "";
        email.classList.remove('invalid');
    }

    if (isVaild) {
        successMessage.className = "success-visible";
        form.reset();
    }
});