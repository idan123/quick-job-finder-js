import checkIfConnected from "../utils/checkIfConnected.js";
document.addEventListener('DOMContentLoaded', function () {
  const jobspagecontainer = document.querySelector('#jobspagecontainer');

  jobspagecontainer.innerHTML = `
  <div class="slider-area" data-background="./assets/imgs/bg.jpg">
  <div class="slider-active d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-9 col-md-10">
          <div class="hero__caption text-center">
            <h1>Find The Most Exciting Jobs</h1>
          </div>
        </div>
      </div>
      <!-- Search Box -->
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <!-- form -->
          <form action="#" class="search-box">
            <!-- Select job items start -->
            <!-- Select job items start -->
            <div class="select-form">
            <select name="selectedJob" id="jobCategory" class="form-select">
                <option value="All Jobs">All Jobs</option>
                <option value="Babysitter">Babysitter</option>
                <option value="Bartender">Bartender</option>
                <option value="Waiter">Waiter</option>
                <option value="Driver">Driver</option>
                <option value="Barista">Barista</option>
                <option value="Catering">Catering</option>
              </select>
            </div>
            
            <div class="select-form">
              <div class="select-itms">
                  <select name="selectedCity" id="jobCity">
                    <option value="All Cities">All Cities</option>
                    <option value="San Francisco, CA">San Francisco, CA</option>
                    <option value="Tel Aviv, Israel">Tel Aviv, Israel</option>
                    <option value="Madrid, Spain">Madrid, Spain</option>
                    <option value="Los Angeles, CA">Los Angeles, CA</option>
                    <option value="Rome, Italy">Rome, Italy</option>
                    <option value="Milan, Italy">Milan, Italy</option>
                    <option value="Miami, FL">Miami, FL</option>
                    <option value="Chicago, IL">Chicago, IL</option>
                    <option value="Toronto, Canada">Toronto, Canada</option>
                    <option value="Paris, France">Paris, France</option>
                    <option value="Seattle, WA">Seattle, WA</option>
                  </select>
                </div>
              </div>
              
            <div class="search-form">
              <button type="button" id="findBtn">Find job</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<br><br>
<!-- slider Area End-->

    <!-- Display Buttons start-->
    <div class="d-flex justify-content-between mb-2">
      <div>
        <button type="button" class="btn btn-info" id="jobsListBtn">
          <i class="bi bi-list-task"></i>
        </button>
        <button type="button" class="btn" id="filterSavedBtn">
          <i class="far fa-heart"></i>
        </button>
        <button type="button" class="btn btn-info" id="jobsGalleryBtn">
          <i class="bi bi-grid"></i>
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-info" id="jobsSortASCBtn">
          <i class="fas fa-sort-amount-down-alt"></i>
        </button>
        <button type="button" class="btn btn-info" id="jobsSortDESCBtn">
          <i class="fas fa-sort-amount-up-alt"></i>
        </button>
      </div>
    </div>

    <!-- Display Buttons end-->
  <div class="container-xxl py-5">
    <div class="container">
      <h1 class="text-center mb-5 wow fadeInUp">Job Offers</h1>
      <div>
      <button class="nav-link d-flex justify-content-end d-none" id="addJobBtn" style="font-size: 10rem;" type="button">
        <i class="fa-solid fa-plus addJob"></i>
      </button>
      </div>
      
`;
});

import { initialJobRequestsList, updateJobRequestsList } from "../components/JobRequestsList.js";
import { initialJobRequestsGallery, updateJobRequestsGallery } from "../components/JobRequestsGallery.js";

import checkIfAdmin from "../utils/checkIfAdmin.js";
import { initPopup } from "../components/Popup.js";

let jobRequestsArr, originalJobRequestsArr;
let displayNow; // display that we can see now
/* btns */
let jobsListBtn, jobsGalleryBtn, filterSavedBtn;

/* displays */
let jobsList, jobsGallery;

let isAdmin;
let isFilterBySaved = false;

window.addEventListener("load", () => {
  jobRequestsArr = localStorage.getItem("props");
  if (!jobRequestsArr) {
    return;
  }
  jobRequestsArr = JSON.parse(jobRequestsArr);
  originalJobRequestsArr = [...jobRequestsArr];
  isAdmin = checkIfAdmin();
  initialJobRequestsGallery(jobRequestsArr, isAdmin, deleteJobRequest, showPopup);
  initialJobRequestsList(jobRequestsArr, isAdmin, deleteJobRequest, showPopup);
  initializeElements();
  initializeBtns();
});


const initializeElements = () => {
  /* Buttons */
  jobsListBtn = document.getElementById("jobsListBtn");
  filterSavedBtn = document.getElementById("filterSavedBtn");
  jobsGalleryBtn = document.getElementById("jobsGalleryBtn");
  /* Displays */
  jobsList = document.getElementById("jobsList");
  jobsGallery = document.getElementById("jobsGallery");
  displayNow = jobsList;
  displayToDisplay(displayNow);
};

const showOrig = () => {
  updateJobRequestsList(originalJobRequestsArr);
  updateJobRequestsGallery(originalJobRequestsArr);
}

const filterSavedJobs = () => {
  if (isFilterBySaved) {
    isFilterBySaved = false;
    filterSavedBtn.innerHTML = `<i class="far fa-heart"></i>`;
    showOrig();
  } else {
    isFilterBySaved = true;
    let savedJobs = localStorage.getItem("savedJobRequestsArr");
    if (!savedJobs) {
      return;
    }
    savedJobs = JSON.parse(savedJobs);
    updateJobRequestsList(savedJobs);
    updateJobRequestsGallery(savedJobs);
    filterSavedBtn.innerHTML = `<i class="fas fa-heart"></i>`;
  }
}


const initializeBtns = () => {
  filterSavedBtn.addEventListener("click", () => {
    filterSavedJobs();
  });
  jobsListBtn.addEventListener("click", () => {
    displayToDisplay(jobsList);
    showOrig();
  });
  jobsGalleryBtn.addEventListener("click", () => {
    displayToDisplay(jobsGallery);
    showOrig();
  });
  document.getElementById("jobsSortASCBtn").addEventListener("click", () => {
    sortJobRequests();
  });
  document.getElementById("jobsSortDESCBtn").addEventListener("click", () => {
    sortJobRequests(false);
  });
  const sortButton = document.getElementById("findBtn");
  sortButton.addEventListener("click", () => {
    sortJobs();
  });
  const addJobBtn = document.getElementById("addJobBtn");
  if (checkIfConnected() && checkIfAdmin()) {
    addJobBtn.classList.remove("d-none");
    addJobBtn.classList.add("d-block");
  }
  addJobBtn.addEventListener("click", () => {
    showPopup();
  });
};

const displayToDisplay = (toDisplay) => {
  displayNow.classList.remove("d-block");
  displayNow.classList.add("d-none");
  toDisplay.classList.remove("d-none");
  toDisplay.classList.add("d-block");
  displayNow = toDisplay;
};


const updateDisplays = () => {
  updateJobRequestsList(jobRequestsArr);
  updateJobRequestsGallery(jobRequestsArr);
};

const saveToLocalStorage = (arrToSave) => {
  localStorage.setItem("props", JSON.stringify(arrToSave));
};

const deleteJobRequest = (id) => {
  id = +id; //convert String to number
  originalJobRequestsArr = originalJobRequestsArr.filter(
    (item) => item.id !== id
  );
  saveToLocalStorage(originalJobRequestsArr);
  jobRequestsArr = jobRequestsArr.filter((item) => item.id !== id);
  updateDisplays();
};

const sortJobRequests = (asc = true) => {
  if (asc) {
    // A a to Z
    jobRequestsArr.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    //  Z to A
    jobRequestsArr.sort((a, b) => b.title.localeCompare(a.title));
  }
  updateDisplays();
};


const showPopup = (id) => {
  let selectedJob = jobRequestsArr.find((item) => item.id === +id);
  if (!selectedJob) {
    return;
  }
  initPopup(selectedJob, editJob);
};

const showNewPopup = () => {
  initPopup(undefined, addNewJob);
};

const addNewJob = (newJob) => {
  originalJobRequestsArr = originalJobRequestsArr.concat(newJob);
  let nextId = +newJob.id + 1;
  localStorage.setItem("nextid", nextId + "");
  jobRequestsArr = [...originalJobRequestsArr];
  editJob();
};

const sortJobs = () => {
  const jobCategory = document.getElementById("jobCategory").value;
  const jobCity = document.getElementById("jobCity").value;
  let filteredJobs = originalJobRequestsArr;
  if (jobCategory !== "All Jobs") {
    filteredJobs = filteredJobs.filter((job) => job.title === jobCategory);
  }
  if (jobCity !== "All Cities") {
    filteredJobs = filteredJobs.filter((job) => job.location === jobCity);
  }
  if (jobCategory === "All Jobs" && jobCity === "All Cities") {
    // show all jobs
    filteredJobs = originalJobRequestsArr;
  }
  filteredJobs.sort((a, b) => {
    if (a.location === b.location) {
      return a.title.localeCompare(b.title);
    }
    return a.location.localeCompare(b.location);
  });
  jobRequestsArr = filteredJobs;
  updateDisplays();
};

const editJob = () => {
  saveToLocalStorage(jobRequestsArr);
  updateDisplays();
};


export { showNewPopup };



