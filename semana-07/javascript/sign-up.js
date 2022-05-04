
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

var passwordReg = document.getElementById('password-register');
var passwordRegSpan = document.getElementById('passwordSpan');

var Confirm = document.getElementById('password-confirm');
var ConfirmSpan = document.getElementById('confirmSpan');

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

var urlSignup = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';

// Booleans

var nameValid = false, lastValid = false, emailValid = false, passwordValid = false, passwordConfirmValid = false,
dniValid = false, dateValid = false, phoneValid = false, cityValid = false, addressValid = false, postalValid = false;

//Name validation

function validateName() {
    for (var i = 0; i < nameRegister.value.length; i++) {
        if (!letters.includes(nameRegister.value[i].toLowerCase())) {
            nameSpan.innerText = 'Invalid name';
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
        nameValid = true;
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
            lastSpan.innerText = 'Invalid last name';
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
        lastValid = true;
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
        emailValid = true;
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
    if (passwordReg.value != "") {
        if (passwordReg.value.length >= 8) {
            if (passwordReg.value.match(numbers)) {
                passwordValid = true;
                passwordReg.style.border = '3px solid green';
            } else {
                passwordRegSpan.innerText = 'Password must have at least one number';
                badPassword();
            }
        } else {
            passwordRegSpan.innerText = 'Password must have 8 caracters min';
            badPassword();
        }
    } else {
        passwordRegSpan.innerText = 'Must enter a password';
        badPassword();
    }
}

function badPassword() {
    passwordRegSpan.style.color = 'red';
    passwordReg.style.border = '3px solid red';
}

function focusPassword(){
    passwordRegSpan.innerText = '';
    passwordReg.style.border = '3px solid #37386780';
}

passwordReg.addEventListener('focus', focusPassword);
passwordReg.addEventListener('blur', validatePassword);

// Confirm Password

function confirmPassword() {
    if (Confirm.value != "") {
        if (passwordReg.value == Confirm.value) {
            if (passwordValid == true) {
                passwordConfirmValid = true;
                Confirm.style.border = '3px solid green';
            } else {
                ConfirmSpan.innerText = 'Password not valid';
                ConfirmSpan.style.color = 'red';
                Confirm.style.border = '3px solid red';
            }
        } else {
            ConfirmSpan.innerText = 'Passwords do not match';
            ConfirmSpan.style.color = 'red';
            Confirm.style.border = '3px solid red';
        }
    } else {
        ConfirmSpan.innerText = 'Must enter a password';
        ConfirmSpan.style.color = 'red';
        Confirm.style.border = '3px solid red';
    }
}

function focusPasswordConfirm() {
    ConfirmSpan.innerText = '';
    Confirm.style.border = '3px solid #37386780';
}

Confirm.addEventListener('focus', focusPasswordConfirm);
Confirm.addEventListener('blur', confirmPassword);

// DNI validation

function validateDNI() {
    if (dni.value != '') {
        if (dni.value.match(numbers)) {
            if (dni.value.length == 8) {
                dniValid = true;
                dni.style.border = '3px solid green';
            } else {
                dniSpan.innerText = 'DNI must contain 8 numbers';
                dniSpan.style.color = 'red';
                dni.style.border = '3px solid red';
            }
        } else {
            dniSpan.innerText = 'DNI can only contain numbers';
            dniSpan.style.color = 'red';
            dni.style.border = '3px solid red';
        }   
    } else {
        dniSpan.innerText = 'Must enter a DNI';
        dniSpan.style.color = 'red';
        dni.style.border = '3px solid red';
    }      
}

function focusDNI() {
    dniSpan.innerText = '';
    dni.style.border = '3px solid #37386780';
}

dni.addEventListener('focus', focusDNI);
dni.addEventListener('blur', validateDNI);

// Date of Birth Validation

function validateDate() {
    var year = 2022;
    var birthYear = date.value.slice(6,10);
    if (date.value.length == 10) {
        if((year - birthYear) < 100 && (year - birthYear) > 17){
            dateValid = true;
            date.style.border = '3px solid green';
        } else {
            dateSpan.innerText = 'Must be over 18 years old';
            dateSpan.style.color = 'red';
            date.style.border = '3px solid red';
        }
    } else {
        dateSpan.innerText = 'Invalid date input (Must be: dd/mm/yyyy)';
        dateSpan.style.color = 'red';
        date.style.border = '3px solid red';
    }
}

    function focusDate() {
        dateSpan.innerText = '';
        date.style.border = '3px solid #37386780';    
    }
    
    date.addEventListener('focus', focusDate);
    date.addEventListener('blur', validateDate);

// Phone Validation

function validatePhone() {
    if (phone.value.length == 10) {
        phoneValid = true;
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
            cityValid = true;
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

function validateAddress() {
    if (address.value.length != '') {
        if (address.value.length >= 5) {
            if (address.value.match(' ')) {
                if (address.value.match(numbers)) {
                    addressValid = true;
                    address.style.border = '3px solid green';
                } else {
                    addressSpan.innerText = 'Must have at least one number';
                    addressSpan.style.color = 'red';
                    address.style.border = '3px solid red';
                }
            } else {
                addressSpan.innerText = 'Must have a space';
                addressSpan.style.color = 'red';
                address.style.border = '3px solid red';
            }
        } else {
            addressSpan.innerText = 'Must have at least 5 characters';
            addressSpan.style.color = 'red';
            address.style.border = '3px solid red';
        }
    } else {
        addressSpan.innerText = 'Must enter an address';
        addressSpan.style.color = 'red';
        address.style.border = '3px solid red';
    }
}

function focusAddress() {
    addressSpan.innerText = '';
    address.style.border = '3px solid #37386780'; 
}

address.addEventListener('focus', focusAddress);
address.addEventListener('blur', validateAddress);

// Postal Code Validation

function validatePostal() {
    if (postal.value.length >= 4 && postal.value.length <= 5) {
        postalValid = true;
        postal.style.border = '3px solid green';
    } else {
        postalSpan.innerText = 'Postal Code must be between 4 and 5 numbers';
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

// Create Button

var create = document.getElementById('create-button').addEventListener('click', createButton);

function createButton() {
    if (nameValid && lastValid && emailValid && passwordValid && passwordConfirmValid &&
        dniValid && dateValid && phoneValid && cityValid && addressValid && postalValid) {
        successfulRegister();
        var listKey = ['name', 'lastName', 'dni', 'dob', 'phone', 'address', 'city', 'zip', 
        'email', 'password', 'confirmPassword'];
        var listValue = [nameRegister.value, lastName.value, dni.value, date.value, phone.value,
                address.value, city.value, postal.value, emailRegister.value, passwordReg.value, Confirm.value];
        signUpFetch(urlSignup, listKey, listValue);
        storageSignUp()
    } else {
        alert('One of the inputs is not valid. Please try again');
    }
}

function successfulRegister() {
    alert('Register Successful: ' +
                    '\nYour name is: ' + nameRegister.value +
                    '\nYour last name is: ' + lastName.value +
                    '\nYour email is: ' + emailRegister.value +
                    '\nYour password is: ' + passwordReg.value +
                    '\nYour DNI is: ' + dni.value + 
                    '\nYour Birth date is: ' + date.value +
                    '\nYour phone is: ' + phone.value +
                    '\nYour city is: ' + city.value +
                    '\nYour address is: ' + address.value +
                    '\nYour postal code is: ' + postal.value);
}

// Fetch Function

listKey = [];
listValue = [];

function signUpFetch(urlSignup, listKey, listValue) {
    var queryParams = joinParams(listKey, listValue);
    var signUpUrl = urlSignup.concat("?", queryParams);

    fetch(signUpUrl)
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

// LocalStorage Function

function storageSignUp() {
    localStorage.setItem('name', nameRegister.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('email', emailRegister.value);
    localStorage.setItem('password', passwordReg.value);
    localStorage.setItem('DNI', dni.value);
    localStorage.setItem('dob', date.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('zip', postal.value);
}

// Get LocalStorage


    


// Window onload

window.onload = function() {
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault()
    })

    if (localStorage.getItem('name') != 'null') {
        nameRegister.value = localStorage.getItem('name');
        lastName.value = localStorage.getItem('lastName');
        emailRegister.value = localStorage.getItem('email');
        passwordReg.value = localStorage.getItem('password');
        dni.value = localStorage.getItem('DNI');
        date.value = localStorage.getItem('dob');
        phone.value = localStorage.getItem('phone');
        city.value = localStorage.getItem('city');
        address.value = localStorage.getItem('address');
        postal.value = localStorage.getItem('zip');
    }
}