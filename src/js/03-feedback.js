// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
// const submit = document.querySelector('.submit');

form.addEventListener('input', throttle(onForm, 500));
form.addEventListener('submit', onSubmitBtn);

let formData = {};

saveContextForm();

function onForm(event){
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onSubmitBtn(ev){
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  ev.preventDefault();
  // console.log(ev.target.value);
  ev.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

};

function saveContextForm() {
  const context = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (context) {
    email.value = context.email || '';
    message.value = context.message || ''; 
  }
}