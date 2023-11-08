const form = document.querySelector('.form');
const userName = document.querySelector('.form__input--user-name');
const email = document.querySelector('.form__input--email');
const password = document.querySelector('.form__input--password');
const password2 = document.querySelector('.form__input--password-2');

const isEmailValid = email => {
  const regExpPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regExpPattern.test(email);
};
