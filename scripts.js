const userNameInput = document.querySelector("#userName");
const userCountryInput = document.querySelector("#userCountry");
const userZipCodeInput = document.querySelector("#userZipCode");
const userPasswordInput = document.querySelector("#userPassword");
const userConfirmPasswordInput = document.querySelector("#userConfirmPassword");
const sendFormBtn = document.querySelector("#submit");
sendFormBtn.addEventListener("click", function () {
  if (submitForms()) {
    window.alert("welcome to our system :D");
  }
});

const specialChar = /[!@#$%^&*(),.?":{}|<>_-]/;
const upperCase = /[A-Z]/;
const zipCodePattern = /^[A-Za-z0-9\s-]{3,10}$/;

let aux;

function validateName() {
  let result;
  if (userNameInput.value === "") {
    userNameInput.setCustomValidity("Your Username cannot be empty");
    userNameInput.className = "invalid";
    result = false;
  } else if (userNameInput.value.length < 4) {
    userNameInput.setCustomValidity(
      "Your Username cannot be less than 4 characters"
    );
    userNameInput.className = "invalid";
    result = false;
  } else {
    userNameInput.setCustomValidity("");
    userNameInput.className = "";
    result = true;
  }
  userNameInput.reportValidity();
  return result;
}

function validateCountryInput() {
  let result;

  if (userCountryInput.value === "") {
    userCountryInput.setCustomValidity("Your Country code cannot be empty");
    userCountryInput.className = "invalid";
    result = false;
  } else if (userCountryInput.value.length > 3) {
    userCountryInput.setCustomValidity(
      "Your Country Code cannot be more than 3 characters"
    );
    userCountryInput.className = "invalid";
    result = false;
  } else if (!upperCase.test(userCountryInput.value)) {
    userCountryInput.setCustomValidity(
      "Your Country Code must have Upper letter"
    );
    userCountryInput.className = "invalid";
    result = false;
  } else {
    userCountryInput.setCustomValidity("");
    userCountryInput.className = "";
    result = true;
  }
  userCountryInput.reportValidity();
  return result;
}

function validateZipCode() {
  let result;

  if (userZipCodeInput.value === "") {
    userZipCodeInput.setCustomValidity("Your Zip code cannot be empty");
    result = false;

    userZipCodeInput.className = "invalid";
  } else if (!zipCodePattern.test(userZipCodeInput.value)) {
    userZipCodeInput.setCustomValidity("Invalid ZIP code format");
    userZipCodeInput.className = "invalid";
    result = false;
  } else {
    userZipCodeInput.setCustomValidity("");
    userZipCodeInput.className = "";
    result = true;
  }
  userZipCodeInput.reportValidity();
  return result;
}

function validatePassword() {
  let result;
  if (userPasswordInput.value === "") {
    userPasswordInput.setCustomValidity("Your Password cannot be empty");
    userPasswordInput.className = "invalid";
  } else if (userPasswordInput.value.length < 4) {
    userPasswordInput.setCustomValidity(
      "Your Password cannot be less than 4 characters"
    );
    userPasswordInput.className = "invalid";
    result = false;
  } else if (!specialChar.test(userPasswordInput.value)) {
    userPasswordInput.setCustomValidity(
      "Your Password must have at least 1 Special char as: " + specialChar
    );
    userPasswordInput.className = "invalid";
    result = false;
  } else if (!upperCase.test(userPasswordInput.value)) {
    userPasswordInput.setCustomValidity(
      "Your Password must have at least 1 Upper case char."
    );
    userPasswordInput.className = "invalid";
    result = false;
  } else {
    userPasswordInput.setCustomValidity("");
    userPasswordInput.className = "";
    aux = userPasswordInput.value;
    userConfirmPasswordInput.disabled = false;
    result = true;
  }
  userPasswordInput.reportValidity();
  return result;
}

function validateConfirmPassword() {
  let result;
  if (userConfirmPasswordInput.value === "") {
    userConfirmPasswordInput.setCustomValidity(
      "Your Confirm Password cannot be empty"
    );
    userConfirmPasswordInput.className = "invalid";
    result = false;
  } else if (userConfirmPasswordInput.value !== aux) {
    userConfirmPasswordInput.setCustomValidity("Your Password must be equal");
    userConfirmPasswordInput.className = "invalid";
    result = false;
  } else {
    userConfirmPasswordInput.setCustomValidity("");
    userConfirmPasswordInput.className = "";
    result = true;
  }
  userConfirmPasswordInput.reportValidity();
  return result;
}

function submitForms() {
  return (
    validateName() &&
    validateCountryInput() &&
    validateZipCode() &&
    validatePassword() &&
    validateConfirmPassword()
  );
}
