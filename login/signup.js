const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function(){
if(password.type === "password"){
password.type = "text";
toggle.classList.replace("ri-eye-line","ri-eye-off-line");
}else{
password.type = "password";
toggle.classList.replace("ri-eye-off-line","ri-eye-line");
}
});


const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");


const nameError = document.createElement("small");
nameError.style.color = "red";
nameInput.after(nameError);

const emailError = document.createElement("small");
emailError.style.color = "red";
emailInput.after(emailError);

const passError = document.createElement("small");
passError.style.color = "red";
password.after(passError);


function isValidName(name){
return /^[A-Za-z ]+$/.test(name);
}

function isValidEmail(email){
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(pass){
return pass.length >= 6;
}


nameInput.addEventListener("input", function(){
if(nameInput.value === ""){
nameError.textContent = "";
}
else if(!isValidName(nameInput.value)){
nameError.textContent = "Only letters allowed";
}
else{
nameError.textContent = "";
}
});


emailInput.addEventListener("input", function(){
if(emailInput.value === ""){
emailError.textContent = "";
}
else if(!isValidEmail(emailInput.value)){
emailError.textContent = "Invalid email format";
}
else{
emailError.textContent = "";
}
});


password.addEventListener("input", function(){
if(password.value === ""){
passError.textContent = "";
}
else if(!isValidPassword(password.value)){
passError.textContent = "Min 6 characters required";
}
else{
passError.textContent = "";
}
});


const signupBtn = document.getElementById("signupBtn");
const successMsg = document.getElementById("successMsg");

signupBtn.addEventListener("click", function(){

if(!isValidName(nameInput.value)){
nameError.textContent = "Only letters allowed";
return;
}

if(!isValidEmail(emailInput.value)){
emailError.textContent = "Invalid email format";
return;
}

if(!isValidPassword(password.value)){
passError.textContent = "Min 6 characters required";
return;
}

successMsg.textContent = "Account created successfully 🎉";
successMsg.style.color = "green";

});


const textElement = document.getElementById("typingText");
const text = "Welcome to OtakuEats";
let index = 0;

function typeEffect(){
if(index <= text.length){
textElement.textContent = text.substring(0, index);
index++;
setTimeout(typeEffect, 100);
}
}

typeEffect();