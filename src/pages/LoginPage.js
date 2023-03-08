import showToast from "../../src/services/Toast.js";

document.addEventListener('DOMContentLoaded', function () {
  const loginPageContainer = document.querySelector('#login-page');

  loginPageContainer.innerHTML = `
  <br><br><br><br>
    <form onsubmit="event.preventDefault()">
      <div class="wrap-login100"
        style="position: relative; width: 100%; max-width: 35rem; margin: 0 auto; background-color: transparent;">
        <span class="login100-form-logo">
          <i class="zmdi zmdi-landscape"></i>
        </span>
        <span class="login100-form-title p-b-34 p-t-27">
          Log in
        </span>
        <div class="wrap-input100 validate-input" data-validate="Enter username">
          <input class="input100" type="text" name="username" id="login-input-email" placeholder="Username">
          <span class="focus-input100" data-placeholder="&#xf207;"></span>
        </div>
        <div class="alert alert-danger d-none" role="alert" id="login-alert-email">
          Email rules
        </div>
        <div class="wrap-input100 validate-input" data-validate="Enter password">
          <input class="input100" type="password" name="pass" id="login-input-password" placeholder="Password">
          <span class="focus-input100" data-placeholder="&#xf191;"></span>
        </div>
        <div class="alert alert-danger d-none" role="alert" id="login-alert-password">
          Password rules
        </div>
        <div class="contact100-form-checkbox">
          <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" id="exampleCheck1">
          <label class="label-checkbox100" for="ckb1">
            Remember me
          </label>
        </div>
        <div class="container-login100-form-btn">
          <button class="login100-form-btn" id="login-btn">
            Login
          </button>
        </div>
        <div class="text-center p-t-90">
          <a class="txt1" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
      <div id="dropDownSelect1"></div>
    </form>
`;

  const loginEmailInput = document.querySelector("#login-input-email");
  const loginPasswordInput = document.querySelector("#login-input-password");
  const loginBtn = document.querySelector("#login-btn");

  // Disable the login button initially
  loginBtn.disabled = true;

  // Enable/disable the login button based on the input fields
  loginEmailInput.addEventListener("input", () => {
    loginBtn.disabled = loginEmailInput.value.trim() === "" || loginPasswordInput.value.trim() === "";
  });

  loginPasswordInput.addEventListener("input", () => {
    loginBtn.disabled = loginEmailInput.value.trim() === "" || loginPasswordInput.value.trim() === "";
  });

  loginBtn.addEventListener("click", () => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      //users === null
      console.log("No users found");
      return;
    }

    let user = users.find(
      (item) =>
        item.email === loginEmailInput.value &&
        item.password === loginPasswordInput.value
    );
    if (!user) {
      console.log("invalid email or password");
      showToast("Incorrect email or password");
      return;
    }
    //remember who connected
    localStorage.setItem(
      "token",
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    );
    location.reload();
  });
});

