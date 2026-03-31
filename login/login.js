const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        toggle.classList.replace("ri-eye-line", "ri-eye-off-line");
    } else {
        password.type = "password";
        toggle.classList.replace("ri-eye-off-line", "ri-eye-line");
    }
});


const emailInput = document.getElementById("email");
const loginBtn = document.getElementById("loginBtn");
const welcomeMsg = document.getElementById("welcomeMsg");


const emailError = document.createElement("small");
emailError.style.color = "red";
emailInput.after(emailError);

const passError = document.createElement("small");
passError.style.color = "red";
password.after(passError);


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(pass) {
    return pass.length >= 6;
}


emailInput.addEventListener("input", function () {

    if (emailInput.value.trim() === "") {
        emailError.textContent = "";
    }
    else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format";
    }
    else {
        emailError.textContent = "";
    }

});


password.addEventListener("input", function () {

    if (password.value.trim() === "") {
        passError.textContent = "";
    }
    else if (!isValidPassword(password.value)) {
        passError.textContent = "Minimum 6 characters required";
    }
    else {
        passError.textContent = "";
    }

});


loginBtn.addEventListener("click", function () {

    const email = emailInput.value.trim();
    const pass = password.value.trim();

    if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
        return;
    }

    if (!isValidPassword(pass)) {
        passError.textContent = "Minimum 6 characters required";
        return;
    }

    welcomeMsg.textContent = "Welcome back, " + email + " 🍜";
    welcomeMsg.style.color = "green";

});


const textElement = document.getElementById("typingText");

const text = "WELCOME BACK";
let index = 0;

function typeEffect() {

    if (index <= text.length) {

        textElement.textContent = text.substring(0, index);
        index++;

        if (index === 8) {
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, 100);
        }
    }
}

typeEffect();