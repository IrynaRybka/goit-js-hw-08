const throttle = require('lodash.throttle');
// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form"');
const submit = document.querySelector('.submit');

form.addEventListener('input', throttle(onForm, 500));
submit.addEventListener('submit', onSubmitBtn)

const formData = {};

function onForm(event){
    formData = event.target.value;
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitBtn(event){
console.log(event.target.value)
}