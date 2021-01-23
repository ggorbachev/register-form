const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function showError(input, message) {
  const formContainer = input.parentElement;
  const small = formContainer.querySelector('.small');
  formContainer.className = 'form-container error';
  small.innerText = message;
}
function showSuccess(input) {
  const formContainer = input.parentElement;
  formContainer.className = 'form-container success';
}
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email не корректный');
  }
}
function checkRequired(inputArray) {
  inputArray.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, 'Заполните поле');
    } else {
      showSuccess(input);
    }
  });
}
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `Должно быть не меньше ${min} символов`);
  } else if (input.value.length > max) {
    showError(input, `Должно быть не больше ${max} символов`);
  } else {
    showSuccess(input);
  }
}
function checkPasswordsMatch(inputOne, inputTwo) {
  if (inputOne.value !== inputTwo.value) {
    showError(inputTwo, 'Пароли не совпадают');
  }
}


form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, confirmPassword);
});