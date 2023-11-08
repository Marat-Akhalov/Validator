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

const showSuccess = input => {
  const formControl = input.closest('.form__control');
  formControl.classList.add('success');
};

const showError = (input, message) => {
  const formControl = input.closest('.form__control');
  formControl.classList.add('error');
  const formError = formControl.querySelector('.form__error');
  formError.textContent = message;
};

const getFieldName = input => {
  return input.dataset.field[0].toUpperCase() + input.dataset.field.slice(1);
};

console.log(getFieldName(email));

const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${input.dataset.field} is required`);
    } else {
      showSuccess(input);
    }
  });
};
