import PAGES from "../models/pageModel.js";
import validateEmail from "../validation/validateEmail.js";
import { handlePageChange } from "../routes/router.js";
import validatePassword from "../validation/validatePassword.js";
import validateName from "../validation/validateName.js";
import User from "../models/User.js";
import showToast from "../services/Toast.js";

document.addEventListener('DOMContentLoaded', function () {
  const registerPageContainer = document.querySelector('#register-page');

  registerPageContainer.innerHTML = `
  <br><br><br><br><br>
    <div class="card-body p-5 pt-4 pb-4">
    <h2 class="text-uppercase text-center mb-5">Create an account</h2>
    <form onsubmit="event.preventDefault()">
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="form-floating mb-3">
            <input type="text" id="register-input-name" class="form-control" placeholder="Name" required />
            <label for="register-input-name">Name*</label>
          </div>
          <div class="alert alert-danger d-none" role="alert" id="register-alert-name">
            Name rules
          </div>
          <div class="form-floating mb-3">
            <input type="text" id="register-input-email" class="form-control" placeholder="Email" required />
            <label for="register-input-email">Email*</label>
          </div>
          <div class="alert alert-danger d-none" role="alert" id="register-alert-email">
            Email rules
          </div>
          <div class="form-floating mb-3">
            <input type="password" id="register-input-password" class="form-control" placeholder="Password" required />
            <label for="register-input-password">Password*</label>
          </div>
          <div class="alert alert-danger d-none" role="alert" id="register-alert-password">
            Password rules
          </div>
          <div class="form-floating mb-3">
            <input type="password" id="register-input-repeat-password" class="form-control" placeholder="Password"
              required />
            <label for="register-input-repeat-password">Repeat your password</label>
          </div>
          <div class="alert alert-danger d-none" role="alert" id="register-alert-repeat-password">
            Passwords must match
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="form-floating mb-3">
            <div class="form-outline">
              <select class="form-select" id="country">
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
            <input type="text" id="city" class="form-control" placeholder="City" />
            <label for="city">City</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" id="Street" class="form-control" placeholder="Street" />
            <label for="Street">Street</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" id="House-Number" class="form-control" placeholder="House Number" />
            <label for="House-Number">House Number</label>
          </div>
          <div class="form-floating mb-3">
    <input type="text" id="Zip-Code" class="form-control" placeholder="Zip Code" />
    <label for="Zip-Code">Zip Code</label>
    </div>
    <div class="form-floating mb-3">
    <input type="text" id="Phone" class="form-control" placeholder="Phone" />
    <label for="Phone">Phone</label>
    </div>
    <div class="form-check d-flex justify-content-center mb-5">
    <input class="form-check-input me-2" type="checkbox" value="" id="Admin" />
    <label for="Admin">
    I am a business admin
    </label>
    </div>
    </div>
        </div>
        <div>
          <div class="form-check d-flex justify-content-center mb-3">
            <input class="form-check-input me-2" type="checkbox" value="" id="terms" required />
            <label for="terms">
              I agree to the <a href="https://example.com/terms-and-conditions" class="text-body"><u>terms and
                  conditions</u></a>
            </label>
          </div>
          <div class="d-flex justify-content-center mb-4">
            <button type="submit" id="register-btn"
              class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
              Create
            </button>
          </div>
          <div class="text-center mb-4">
          <p class="mb-2 text-black">Already have an account? <a href="#" id="alreadyhave"
              class="fw-bold text-black"><u>Login here</u></a></p>
        </div>
        </div>
      </form>
    </div>
  </div>
`;

  const inputEmail = document.getElementById("register-input-email");
  const inputName = document.getElementById("register-input-name");
  const inputPassword = document.getElementById("register-input-password");
  const repeatPassword = document.getElementById("register-input-repeat-password");
  const btnRegister = document.querySelector("#register-btn");
  const terms = document.getElementById("terms");
  let termsChecked = false;
  btnRegister.disabled = true;
  let nameOk = false;
  let emailOk = false;
  let passwordOk = false;
  let repeatPasswordOk = false;

  if (inputName.value !== "") {
    checkNameInput();
  }
  if (inputEmail.value !== "") {
    checkEmailInput();
  }
  if (inputPassword.value !== "") {
    checkPasswordInput();
  }

  inputName.addEventListener("input", () => {
    checkNameInput();
    checkIfCanEnableBtn();
  });

  inputEmail.addEventListener("input", () => {
    checkEmailInput();
    checkIfCanEnableBtn();
  });

  inputPassword.addEventListener("input", () => {
    checkPasswordInput();
    checkIfCanEnableBtn();
  });

  repeatPassword.addEventListener("input", () => {
    checkRepeatPasswordInput();
    checkIfCanEnableBtn();
  });

  terms.addEventListener("change", () => {
    termsChecked = !termsChecked;
    checkIfCanEnableBtn();
  });

  const checkNameInput = () => {
    let errorArr = validateName(inputName.value);
    if (errorArr.length === 0) {
      //the text is ok
      inputName.classList.remove("is-invalid");
      document.getElementById("register-alert-name").classList.add("d-none");
      nameOk = true;
    } else {
      //the text is not ok
      inputName.classList.add("is-invalid");
      document.getElementById("register-alert-name").classList.remove("d-none");
      document.getElementById("register-alert-name").innerHTML = errorArr.join("<br>");
      nameOk = false;
    }
    checkIfCanEnableBtn();
  };

  const checkEmailInput = () => {
    let errorArr = validateEmail(inputEmail.value);
    if (errorArr.length === 0) {
      //the text is ok
      inputEmail.classList.remove("is-invalid");
      document.getElementById("register-alert-email").classList.add("d-none");
      emailOk = true;
    } else {
      //the text is not ok
      inputEmail.classList.add("is-invalid");
      document.getElementById("register-alert-email").classList.remove("d-none");
      document.getElementById("register-alert-email").innerHTML = errorArr.join("<br>");
      emailOk = false;
    }
    checkIfCanEnableBtn();
  };

  const checkPasswordInput = () => {
    let errorArr = validatePassword(inputPassword.value);
    if (errorArr.length === 0) {
      //the text is ok
      inputPassword.classList.remove("is-invalid");
      document.getElementById("register-alert-password").classList.add("d-none");
      passwordOk = true;
    } else {
      //the text is not ok
      inputPassword.classList.add("is-invalid");
      document.getElementById("register-alert-password").classList.remove("d-none");
      document.getElementById("register-alert-password").innerHTML = errorArr.join("<br>");
      passwordOk = false;
    }
    checkIfCanEnableBtn();
  };

  const checkRepeatPasswordInput = () => {
    if (inputPassword.value === repeatPassword.value) {
      //the text is ok
      repeatPassword.classList.remove("is-invalid");
      document.getElementById("register-alert-repeat-password").classList.add("d-none");
      repeatPasswordOk = true;
    } else {
      //the text is not ok
      repeatPassword.classList.add("is-invalid");
      document.getElementById("register-alert-repeat-password").classList.remove("d-none");
      repeatPasswordOk = false;
    }
    checkIfCanEnableBtn();
  };

  const checkIfCanEnableBtn = () => {
    btnRegister.disabled = !(nameOk && emailOk && passwordOk && repeatPasswordOk && document.querySelector("#terms").checked) || (inputName.value === "" && inputEmail.value === "" && inputPassword.value === "" && repeatPassword.value === "");
  };

  btnRegister.addEventListener("click", () => {
    if (inputName.value === "" || inputEmail.value === "" || inputPassword.value === "" || repeatPassword.value === "") {
      showToast("Please fill in all the information", false);
      return;
    }
    let users = localStorage.getItem("users");
    let nextUserId = localStorage.getItem("nextUserId");
    nextUserId = +nextUserId;
    let newUser = new User(
      nextUserId,
      inputName.value,
      inputEmail.value,
      inputPassword.value
    );
    nextUserId++;
    localStorage.setItem("nextUserId", nextUserId + "");
    if (document.querySelector("#Admin").checked) {
      newUser.isAdmin = true;
    }
    if (document.querySelector("#country").value) {
      newUser.country = document.querySelector("#country").value;
    }
    if (document.querySelector("#city").value) {
      newUser.city = document.querySelector("#city").value;
    }
    if (document.querySelector("#Street").value) {
      newUser.street = document.querySelector("#Street").value;
    }
    if (document.querySelector("#House-Number").value) {
      newUser.houseNumber = document.querySelector("#House-Number").value;
    }
    if (document.querySelector("#Zip-Code").value) {
      newUser.zipCode = document.querySelector("#Zip-Code").value;
    }
    if (document.querySelector("#Phone").value) {
      newUser.phone = document.querySelector("#Phone").value;
    }
    if (!users) {
      //the first user
      users = [newUser];
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      //we have users
      users = JSON.parse(users);
      for (let user of users) {
        if (user.email === inputEmail.value) {
          //display msg - email already exists
          showToast("Email already exists", false);
          return;
        }
      }
      users = [...users, newUser];
      localStorage.setItem("users", JSON.stringify(users));
    }
    showToast("Account was created successfully", true);
    setTimeout(() => {
      handlePageChange(PAGES.LOGIN);
      inputName.value = "";
      inputEmail.value = "";
      inputPassword.value = "";
      repeatPassword.value = "";
      document.querySelector("#Admin").checked = false;
      document.querySelector("#country").value = "";
      document.querySelector("#city").value = "";
      document.querySelector("#Street").value = "";
      document.querySelector("#House-Number").value = "";
      document.querySelector("#Zip-Code").value = "";
      document.querySelector("#Phone").value = "";
      terms.checked = false;
    }, 2000);
  });
});






