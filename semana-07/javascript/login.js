
var email = document.querySelector('input[type="email"]');
var emailSpan = document.getElementById('email-span');

var password = document.querySelector('input[type="password"]');
var passwordSpan = document.getElementById('password-span');
var pwNumbers = /[0-9]/g;
var emailValid = false, passwordValid = false;

const url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';

// Email Validation

function validateEmail() {
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (regex.test(email.value)) {
        emailValid = true;
        emailSpan.style.color = 'green';
        email.style.border = '3px solid green';
    } else {
        emailSpan.innerText = 'Invalid email';
        emailSpan.style.color = 'red';
        email.style.border = '3px solid red';
    }
}

email.addEventListener('focus', focusEmail);
email.addEventListener('blur', validateEmail);

// Password Validation

function validatePassword() {
    if (password.value != "") {
        if (password.value.length >= 8) {
            if (password.value.match(pwNumbers)) {
                passwordValid = true;
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

password.addEventListener('focus', focusPassword);
password.addEventListener('blur', validatePassword);

// Login Button Function

var LogIn = document.getElementById('login-button').addEventListener('click', loginButton);

function successLogin() {
    alert(
        'Success: ' +
        '\nYour email is: ' + email.value +
        '\nYour password is: ' + password.value);
}

function loginButton() {
    if (emailValid === true) {
        if (passwordValid === true) {
            successLogin();
            var listKey = ['email', 'password'];
            var listValue = [email.value, password.value];
            loginFetch(url,listKey,listValue);
        } else {
            alert('Password invalid');
        }
    } else {
        alert('Email invalid');
    }
}

// Fetch Function

listKey = [];
listValue = [];

function loginFetch(url, listKey, listValue) {
    var queryParams = joinParams(listKey, listValue);
    var loginUrl = url.concat("?", queryParams);

    fetch(loginUrl)
        .then(response => response.json())
        .then(function(result) {
            console.log('Result: ', result);
            alert(result.msg);
        })
        
}

function joinParams(listKey, listValue) {
    var arr = [];
    for (var x = 0; x < listKey.length; x++) {
        arr.push(listKey[x].concat("=", listValue[x]));
    }
    console.log('Arr: ', arr)
    return arr.join('&');
}


// Window onload

window.onload = function() {
    document.getElementById('form-login').addEventListener('submit', function(event) {
        event.preventDefault()
    })
}
