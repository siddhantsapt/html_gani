const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const dep = document.getElementById('dep');
 
var flag1=0;
var flag2=0;
var flag3=0;

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    flag1=1;
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
    if(input==username)
    {
        flag2=1;
    }
    else{
        flag3=1;
    }
  }
}

// Check passwords match
 

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, dep]);
  checkLength(username, 3, 15);
  checkLength(dep, 3, 15);
  checkEmail(email);
 let user = localStorage.getItem("user");

 if(user==null)
 {
    userObj=[]
 }
 else{
    userObj= JSON.parse(user);
 }

 let Obj={
    name:username.value,
    email:email.value,
    dep:dep.value
 }

 if(flag1 && flag1 && flag3)
 {
  userObj.push(Obj);
 }

 localStorage.setItem("user",JSON.stringify(userObj))

 username.value=""
 email.value=""
 dep.value=""

});
