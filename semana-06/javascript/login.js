
var email = document.querySelector('input[type="email"]');
var emailSpan = document.getElementById('email-span');

var password = document.querySelector('input[type="password"]');
var passwordSpan = document.getElementById('password-span');
var pwNumbers = ['1','2','3','4','5','6','7','8','9','0']; 

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
            if (password.value.includes(['1','2','3'])) {
                passwordSpan.innerText = 'Correct';
                passwordSpan.style.color = 'green';
                password.style.border = '3px solid green';
            } else {
                passwordSpan.innerText = 'Password must have at least one number';
                passwordSpan.style.color = 'red';
                password.style.border = '3px solid red';
            }
        } else {
            passwordSpan.innerText = 'Password must have 8 caracters min';
            passwordSpan.style.color = 'red';
            password.style.border = '3px solid red';
        }

    } else {
        passwordSpan.innerText = 'Must enter a password';
        passwordSpan.style.color = 'red';
        password.style.border = '3px solid red';
    }
}

function focusPassword(){
    passwordSpan.innerText = '';
    email.style.border = '2px solid #37386780';
}

function focusEmail() {
    emailSpan.innerText = '';
    email.style.border = '2px solid #37386780';
}




email.addEventListener('focus', focusEmail);
email.addEventListener('blur', validateEmail);

password.addEventListener('focus', focusPassword);
password.addEventListener('blur', validatePassword);

