
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var numbers = /[0-9]/g;

// Get Elements

var nameRegister = document.getElementById('register-name');
var nameSpan = document.getElementById('nameSpan');
var lastName = document.getElementById('register-lastName');
var lastSpan = document.getElementById('lastNameSpan');
var emailRegister = document.querySelector('input[type="email"]');
var emailSpan = document.getElementById('emailSpan');
var password = document.getElementById('password-register');
var passwordSpan = document.getElementById('passwordSpan');
var passwordConfirm = document.getElementById('password-confirm');
var passwordConfirmSpan = document.getElementById('confirmSpan');
var dni = document.getElementById('dni');
var dniSpan = document.getElementById('dniSpan');
var date = document.getElementById('date');
var dateSpan = document.getElementById('dateSpan');
var phone = document.getElementById('phone');
var phoneSpan = document.getElementById('phoneSpan');
var city = document.getElementById('city');
var citySpan = document.getElementById('citySpan');
var address = document.getElementById('address');
var addressSpan = document.getElementById('addressSpan');
var postal = document.getElementById('postalCode');
var postalSpan = document.getElementById('postalSpan');

//Name validation

function validateName() {
    for (var i = 0; i < nameRegister.value.length; i++) {
        if (!letters.includes(nameRegister.value[i].toLowerCase())) {
            nameSpan.innerText = 'Invalid email';
            nameError();
        } 
    }
    if (nameRegister.value.length < 3) {
        nameSpan.innerText = 'Must have more than 3 characters';
        nameError();
    } else if (nameRegister.value.match(numbers)){
        nameSpan.innerText = 'Only letters allowed';
        nameError();
    } else {
        nameSpan.innerText = 'Correct';
        nameSpan.style.color = 'green';
        nameRegister.style.border = '3px solid green';
    }
}

function nameError() {
    nameSpan.style.color = 'red';
    nameRegister.style.border = '3px solid red';
}

function focusName() {
    nameSpan.innerText = '';
    nameRegister.style.border = '3px solid #37386780';
}

nameRegister.addEventListener('blur', validateName);
nameRegister.addEventListener('focus', focusName);

// Last Name Validation

function validateLastName() {
    for (var i = 0; i < lastName.value.length; i++) {
        if (!letters.includes(lastName.value[i].toLowerCase())) {
            lastSpan.innerText = 'Invalid email';
            LastNameError();
        } 
    }
    if (lastName.value.length < 3) {
        lastSpan.innerText = 'Must have more than 3 characters';
        LastNameError();
    } else if (lastName.value.match(numbers)){
        lastSpan.innerText = 'Only letters allowed';
        LastNameError();
    } else {
        lastSpan.innerText = 'Correct';
        lastSpan.style.color = 'green';
        lastName.style.border = '3px solid green';
    }
}

function LastNameError() {
    lastSpan.style.color = 'red';
    lastName.style.border = '3px solid red';
}

function focusLastName() {
    lastSpan.innerText = '';
    lastName.style.border = '3px solid #37386780'
}

lastName.addEventListener('blur', validateLastName);
lastName.addEventListener('focus', focusLastName);

//Email validation

function validateEmail() {
    var regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (regex.test(emailRegister.value)) {
        emailSpan.innerText = 'Correct';
        emailSpan.style.color = 'green';
        emailRegister.style.border = '3px solid green';
    } else {
        emailSpan.innerText = 'Invalid email';
        emailSpan.style.color = 'red';
        emailRegister.style.border = '3px solid red';
    }
} 

function focusEmail() {
    emailSpan.innerText = '';
    emailRegister.style.border = '3px solid #37386780';
}

emailRegister.addEventListener('blur', validateEmail);
emailRegister.addEventListener('focus', focusEmail);

// Password Validation

function validatePassword() {
    if (password.value != "") {
        if (password.value.length > 8) {
            if (password.value.match(numbers)) {
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

function badPassword() {
    passwordSpan.style.color = 'red';
    password.style.border = '3px solid red';
}

function focusPassword(){
    passwordSpan.innerText = '';
    password.style.border = '3px solid #37386780';
}

password.addEventListener('focus', focusPassword);
password.addEventListener('blur', validatePassword);

// Confirm Password

function confirmPassword() {
    if (password.value == passwordConfirm.value) {
        passwordConfirmSpan.innerText = 'Correct';
        passwordConfirmSpan.style.color = 'green';
        passwordConfirm.style.border = '3px solid green';
    } else {
        passwordConfirmSpan.innerText = 'Passwords do not match';
        passwordConfirmSpan.style.color = 'red';
        passwordConfirm.style.border = '3px solid red';
    }
}

function focusPasswordConfirm() {
    passwordConfirmSpan.innerText = '';
    passwordConfirm.style.border = '3px solid #37386780';
}

passwordConfirm.addEventListener('focus', focusPasswordConfirm);
passwordConfirm.addEventListener('blur', confirmPassword);

// DNI validation

function validateDNI() {
    if (dni.value.match(numbers)) {
        if (dni.value.length > 7) {
            dniSpan.innerText = 'Correct';
            dniSpan.style.color = 'green';
            dni.style.border = '3px solid green';
        } else {
            dniSpan.innerText = 'DNI must contain 8 numbers';
            dniSpan.style.color = 'red';
            dni.style.border = '3px solid red';
        }
    }
}

function focusDNI() {
    dniSpan.innerText = '';
    dni.style.border = '3px solid #37386780';
}

dni.addEventListener('focus', focusDNI);
dni.addEventListener('blur', validateDNI);

// Date of Birth Validation

// Phone Validation

function validatePhone() {
    if (phone.value.length == 10) {
        phoneSpan.innerText = 'Correct';
        phoneSpan.style.color = 'green';
        phone.style.border = '3px solid green';
    } else {
        phoneSpan.innerText = 'Phone number must contain 10 numbers';
        phoneSpan.style.color = 'red';
        phone.style.border = '3px solid red';
    }
}

function focusPhone() {
    phoneSpan.innerText = '';
    phone.style.border = '3px solid #37386780';    
}

phone.addEventListener('focus', focusPhone);
phone.addEventListener('blur', validatePhone);

// City Validation

function validateCity() {
    if (city.value.length != '') {
        if (city.value.length > 3) {
            citySpan.innerText = 'Correct';
            citySpan.style.color = 'green';
            city.style.border = '3px solid green';
        } else {
            citySpan.innerText = 'Must contain at least 3 characters';
            citySpan.style.color = 'red';
            city.style.border = '3px solid red';
        }
    } else {
        citySpan.innerText = 'Must enter a city';
        citySpan.style.color = 'red';
        city.style.border = '3px solid red';
    }
}

function focusCity() {
    citySpan.innerText = '';
    city.style.border = '3px solid #37386780'; 
}

city.addEventListener('focus', focusCity);
city.addEventListener('blur', validateCity);

// Address Validation


// Postal Code Validation

function validatePostal() {
    if (postal.value.length >= 4 && postal.value.length <= 5) {
        postalSpan.innerText = 'Correct';
        postalSpan.style.color = 'green';
        postal.style.border = '3px solid green';
    } else {
        postalSpan.innerText = 'Postal Code must have between 4 and 5 numbers';
        postalSpan.style.color = 'red';
        postal.style.border = '3px solid red';
    }
}

function focusPostal() {
    postalSpan.innerText = '';
    postal.style.border = '3px solid #37386780'; 
}

postal.addEventListener('focus', focusPostal);
postal.addEventListener('blur', validatePostal);

// 