
var email = document.querySelector('input[type="email"]');
var emailSpan = document.getElementById('email-span');

var password = document.querySelector('input[type="password"]');
var passwordSpan = document.getElementById('password-span');
var pwNumbers = /[0-9]/g;

var LogIn = document.getElementById('login-button');
LogIn.addEventListener('click', loginButton());


function validateEmail() {
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (regex.test(email.value)) {
        emailSpan.innerText = 'Correct';
        emailSpan.style.color = 'green';
        email.style.border = '3px solid green';
    } else {
        emailSpan.innerText = 'Invalid email';
        emailSpan.style.color = 'red';
        email.style.border = '3px solid red';
    }
}

function validatePassword() {
    if (password.value != "") {
        if (password.value.length > 8) {
            if (password.value.match(pwNumbers)) {
                passwordSpan.innerText = 'Correct';
                passwordSpan.style.color = 'green';
                password.style.border = '3px solid green';
            } else {
                passwordSpan.innerText = 'Password must have at least one number';
                badPassword();
            }
        } else {
            passwordSpan.innerText = 'Password must have 8 caracters min';
            badPassword();
        }
    } else {
        passwordSpan.innerText = 'Must enter a password';
        badPassword();
    }
}


function focusPassword(){
    passwordSpan.innerText = '';
    password.style.border = '3px solid #37386780';
}

function focusEmail() {
    emailSpan.innerText = '';
    email.style.border = '3px solid #37386780';
}

function badPassword() {
    passwordSpan.style.color = 'red';
    password.style.border = '3px solid red';
}


email.addEventListener('focus', focusEmail);
email.addEventListener('blur', validateEmail);

password.addEventListener('focus', focusPassword);
password.addEventListener('blur', validatePassword);

