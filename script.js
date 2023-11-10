const form = document.querySelector('.form');
const userName = document.querySelector('.form__input--user-name');
const email = document.querySelector('.form__input--email');
const password = document.querySelector('.form__input--password');
const password2 = document.querySelector('.form__input--password-2');

const checkEmail = input => {
  const regExpPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (regExpPattern.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
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

const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    return;
  }

  if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max}`);
    return;
  }

  showSuccess(input);
};

form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([userName, email, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
});
