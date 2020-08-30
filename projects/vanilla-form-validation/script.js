// Input fields
const firstName = document.getElementById('firstName');
const secondName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
// Form
const form = document.getElementById('myForm');
// Validation colors
const green = '#4CAF50';
const red = '#F44336';

function validateFirstName() {
    if(checkIfIsEmpty(firstName)) return;

    if(!checkIfOnlyLetters(firstName)) return;
    return true;
}

function validateSecondName() {
    if(checkIfIsEmpty(secondName)) return;

    if(!checkIfOnlyLetters(secondName)) return;
    return true;
}

function validatePassword() {
    // Empty check
    if(checkIfIsEmpty(password)) return;
    // Must be a certain length
    if(!meetLength(password, 4, 100)) return;
    // Check password aganist our character set
    // 1- a
    // 2- a 1
    // 3- A a 1
    // 4- A a 1 @
    if(!containsCharacters(password, 1)) return;
    return true;
}

// Utility function
function checkIfIsEmpty(field) {
    if(isEmpty(field.value.trim())) {
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else {
        setValid(field);
        return false;
    }
}

function isEmpty(value) {
    if(value === '') return true;
    return false;
}

function setInvalid(field, message) {
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field) {
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    //field.nextElementSibling.style.color = green;
}

function checkIfOnlyLetters(field) {
    if(/^[a-zA-Z ]+$/.test(field.value)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.value} must contain only letters`);
        return false;
    }
}

function meetLength(field, minLength, maxLength) {
    if(field.value.length >= minlength && field.value.length < maxLength) {
        setValid(field);
        return true;
    } else if(field.value.length < minLength) {
        setInvalid(field, `${field.name} must be at least ${minLength} character long`);
        return false;
    } else {
        setInvalid(field, `${field.name} must be shorter than ${maxLength} characters`);
        return false;
    }
}

function containsCharacters(field, code) {
    let regEx;
    switch(code) {
        case 1:
            // letters
            regEx
        default:
            return false;
    }
}