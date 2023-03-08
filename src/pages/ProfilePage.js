import validateEmail from "../../src/validation/validateEmail.js";
import validatePassword from "../../src/validation/validatePassword.js";
import validateName from "../../src/validation/validateName.js";
import showToast from "../../src/services/Toast.js";

document.addEventListener('DOMContentLoaded', function () {
  const profilePageContainer = document.querySelector('#profile-page');

  profilePageContainer.innerHTML = `
  <br><br><br><br>
  <div class="card-body p-5 pt-4 pb-4" style="border-radius:10px;">
  <h2 class="text-uppercase text-center mb-5">Update Your Account</h2>
  <form onsubmit="event.preventDefault()">
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="profile-input-name" placeholder="Your name" />
          <label for="profile-input-name">Name</label>
        </div>
        <div class="alert alert-danger d-none" role="alert" id="profile-alert-name">
          Name rules
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="profile-input-email" placeholder="name@example.com" />
          <label for="profile-input-email">Email address</label>
        </div>
        <div class="alert alert-danger d-none" role="alert" id="profile-alert-email">
          Email rules
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="profile-input-password" placeholder="New password" />
          <label for="profile-input-password">New password</label>
        </div>
        <div class="alert alert-danger d-none" role="alert" id="profile-alert-password">
          Password rules
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="profile-input-repeat-password"
            placeholder="Repeat new password" />
          <label for="profile-input-repeat-password">Repeat new password</label>
        </div>
        <div class="alert alert-danger d-none" role="alert" id="profile-alert-repeat-password">
          Passwords must match
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="form-floating mb-3">
          <div class="form-outline">
            <select class="form-select" id="profile-country">
              <option value="" disabled selected>Select your country</option>
              <option value="Israel">Israel</option>
              <option value="USA">USA</option>
              <option value="Italy">Italy</option>
              <option value="France">France</option>
              <option value="England">England</option>
              <option value="Holland">Holland</option>
            </select>
          </div>
        </div>
        <div class="form-floating mb-3">
          <input type="text" id="profile-city" class="form-control" placeholder="City" />
          <label for="profile-city">City</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" id="profile-street" class="form-control" placeholder="Street" />
          <label for="profile-street">Street</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" id="profile-house-number" class="form-control" placeholder="House Number" />
          <label for="profile-house-number">House Number</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" id="profile-zip-code" class="form-control" placeholder="Zip Code" />
          <label for="profile-zip-code">Zip Code</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" id="profile-phone" class="form-control" placeholder="Phone" />
          <label for="profile-phone">Phone</label>
        </div>
        <div class="form-check d-flex justify-content-center mb-5">
          <input class="form-check-input me-2" type="checkbox" value="" id="profile-admin" />
          <label for="profile-admin">
            I am a business admin
          </label>
        </div>
      </div>
    </div>
    <div style="margin-bottom: 40px;">
      <div class="d-flex justify-content-center mb-4">
        <button type="submit" id="profile-btn" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
          Update
        </button>
      </div>
    </div>
  </form>
</div>
`;

  const inputName = document.getElementById("profile-input-name");
  const inputEmail = document.getElementById("profile-input-email");
  const inputPassword = document.getElementById("profile-input-password");
  const inputCountry = document.getElementById("profile-country");
  const inputCity = document.getElementById("profile-city");
  const inputStreet = document.getElementById("profile-street");
  const inputHouseNumber = document.getElementById("profile-house-number");
  const inputZipCode = document.getElementById("profile-zip-code");
  const inputPhone = document.getElementById("profile-phone");
  const inputAdmin = document.getElementById("profile-admin");
  const btnProfile = document.querySelector("#profile-btn");

  let nameOk = false;
  let emailOk = false;
  let passwordOk = false;

  window.addEventListener("load", () => {
    let users = localStorage.getItem("users");
    let token = localStorage.getItem("token");
    if (users && token) {
      //we have users
      users = JSON.parse(users); // convert from string to array of objects
      token = JSON.parse(token);
      let user = users.find((item) => item.id === token.id);
      if (user) {
        inputName.value = user.name;
        inputEmail.value = user.email;
        inputPassword.value = user.password;
        inputCountry.value = user.country;
        inputCity.value = user.city;
        inputStreet.value = user.street;
        inputHouseNumber.value = user.houseNumber;
        inputZipCode.value = user.zipCode;
        inputPhone.value = user.phone;
        inputAdmin.checked = user.isAdmin;
      }
    }

    if (inputName.value !== "") {
      checkNameInput();
    }
    if (inputEmail.value !== "") {
      checkEmailInput();
    }
    if (inputPassword.value !== "") {
      checkPasswordInput();
    }
  });

  inputName.addEventListener("input", () => {
    checkNameInput();
  });

  inputEmail.addEventListener("input", () => {
    checkEmailInput();
  });

  inputPassword.addEventListener("input", () => {
    checkPasswordInput();
  });

  const checkNameInput = () => {
    let errorArr = validateName(inputName.value);
    if (errorArr.length === 0) {
      //the text is ok
      inputName.classList.remove("is-invalid");
      document.getElementById("profile-alert-name").classList.add("d-none");
      nameOk = true;
    } else {
      //the text is not ok
      inputName.classList.add("is-invalid");
      document.getElementById("profile-alert-name").classList.remove("d-none");
      document.getElementById("profile-alert-name").innerHTML =
        errorArr.join("<br>");
      nameOk = false;
    }
    checkIfCanEnableBtn();
  };

  const checkEmailInput = () => {
    let errorArr = validateEmail(inputEmail.value);
    if (errorArr.length === 0) {
      inputEmail.classList.remove("is-invalid");
      document.getElementById("profile-alert-email").classList.add("d-none");
      emailOk = true;
    } else {
      inputEmail.classList.add("is-invalid");
      document.getElementById("profile-alert-email").classList.remove("d-none");
      document.getElementById("profile-alert-email").innerHTML = errorArr.join("<br>");
      emailOk = false;
    }
    checkIfCanEnableBtn();
  };

  const checkPasswordInput = () => {
    let errorArr = validatePassword(inputPassword.value);
    if (errorArr.length === 0) {
      inputPassword.classList.remove("is-invalid");
      document.getElementById("profile-alert-password").classList.add("d-none");
      passwordOk = true;
    } else {
      inputPassword.classList.add("is-invalid");
      document.getElementById("profile-alert-password").classList.remove("d-none");
      document.getElementById("profile-alert-password").innerHTML = errorArr.join("<br>");
      passwordOk = false;
    }
    checkIfCanEnableBtn();
  };

  const checkIfCanEnableBtn = () => {
    (btnProfile.disabled = !(nameOk && emailOk && passwordOk));
  }

  btnProfile.addEventListener("click", () => {
    if (!(nameOk && emailOk && passwordOk)) {
      //if someone changed the html from dev tools
      return;
    }
    let users = localStorage.getItem("users");
    let token = localStorage.getItem("token");
    if (users && token) {
      users = JSON.parse(users);
      token = JSON.parse(token);
      let userEmail = users.find((item) => item.email === inputEmail.value);
      let user = users.find((item) => item.id === token.id);
      if (userEmail && user.id !== userEmail.id) {
        showToast("The email address is already in use by another user", false);
        return;
      }
      if (user) {
        user.name = token.name = inputName.value;
        user.email = token.email = inputEmail.value;
        user.password = inputPassword.value;
        user.country = inputCountry.value;
        user.city = inputCity.value;
        user.street = inputStreet.value;
        user.houseNumber = inputHouseNumber.value;
        user.zipCode = inputZipCode.value;
        user.phone = inputPhone.value;
        user.isAdmin = inputAdmin.checked;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("token", JSON.stringify(token));
        showToast("Changes saved successfully!");
      }
    }
    setTimeout(() => {
      location.reload();
    }, 2000);
  });
});


