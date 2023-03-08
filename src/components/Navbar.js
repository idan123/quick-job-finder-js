import checkIfAdmin from "../utils/checkIfAdmin.js";
import checkIfConnected from "../utils/checkIfConnected.js";
import getNextId from "../utils/getNextId.js";

let nextId;
let isAdmin;
let isConnected;

const navBeforeLogin = document.getElementById("navBeforeLogin");
const navAfterLogin = document.getElementById("navAfterLogin");

const initializeNavbar = () => {
  nextId = getNextId();
  isAdmin = checkIfAdmin();
  isConnected = checkIfConnected();
  if (isConnected) {
    navBeforeLogin.classList.add("d-none");
    navAfterLogin.classList.remove("d-none");
  }

  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const currentActiveLink = document.querySelector('.navbar-nav .nav-link.active');
      if (currentActiveLink) {
        currentActiveLink.classList.remove('active');
      }
      link.classList.add('active');
    });
  });
};

export default initializeNavbar;
