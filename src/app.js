import PAGES from "./models/pageModel.js";
import { handlePageChange } from "./routes/router.js";
import "./initialData/initialData.js";
import "./pages/RegisterPage.js";
import "./pages/LoginPage.js";
import "./pages/ProfilePage.js";
import { showNewPopup } from "./pages/JobsPage.js";
import initializeNavbar from "./components/Navbar.js";


document.addEventListener("DOMContentLoaded", () => {
  const getStartedBtn = document.getElementById("get-started-btn");
  getStartedBtn.addEventListener("click", () => {
    handlePageChange(PAGES.JOBS);
  });

  const navAlreadyHaveLink = document.getElementById("alreadyhave");
  navAlreadyHaveLink.addEventListener("click", () => {
    handlePageChange(PAGES.LOGIN);
  });

  initializeNavbar();

  const navHeroLink = document.getElementById("nav-hero-link");
  const navAboutLink = document.getElementById("nav-about-link");
  const navContactLink = document.getElementById("nav-contact-link")
  const navLoginLinks = document.querySelectorAll('.nav-login-page');
  const navRegisterLinks = document.querySelectorAll('.nav-register-page');
  const navJobsPage = document.getElementById("nav-jobs-link");
  const navLogout = document.getElementById("nav-logout");

  navHeroLink.addEventListener("click", function () {
    handlePageChange(PAGES.HERO);
  });
  navContactLink.addEventListener("click", function () {
    handlePageChange(PAGES.CONTACT);
  });
  navAboutLink.addEventListener("click", function () {
    handlePageChange(PAGES.ABOUT);
  });

  navRegisterLinks.forEach(link => {
    link.addEventListener("click", function () {
      handlePageChange(PAGES.REGISTER);
    });
  });

  navLoginLinks.forEach(link => {
    link.addEventListener("click", function () {
      handlePageChange(PAGES.LOGIN);
    });
  });

  const navEditProfilePage = document.getElementById("nav-edit-profile-page");
  navEditProfilePage.addEventListener("click", () => {
    handlePageChange(PAGES.PROFILE);
  });

  navJobsPage.addEventListener("click", function () {
    handlePageChange(PAGES.JOBS);
  });

  navLogout.addEventListener("click", () => {
    localStorage.removeItem("token");
    location.reload();
  });
  const addJobBtn = document.getElementById("addJobBtn");
  addJobBtn.addEventListener("click", () => {
    showNewPopup();
  });
});
