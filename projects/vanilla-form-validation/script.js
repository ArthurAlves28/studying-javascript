// Input fields
const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
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