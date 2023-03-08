let jobRequestsArr;
let listDiv;
let isAdmin;
let deleteJobRequest;
let showPopup;
let savedJobRequestsArr;

const initialJobRequestsList = (
  jobRequestsArrFromJobsPage,
  isAdminParam,
  deleteJobRequestFromJobsPage,
  showPopupFromJobsPage
) => {
  listDiv = document.getElementById("jobs-jobs-list");
  isAdmin = isAdminParam;
  deleteJobRequest = deleteJobRequestFromJobsPage;
  showPopup = showPopupFromJobsPage;

  // Check if there are saved job requests in the local storage
  let savedJobRequestsStr = localStorage.getItem("savedJobRequestsArr");
  if (savedJobRequestsStr) {
    savedJobRequestsArr = JSON.parse(savedJobRequestsStr);
  } else {
    savedJobRequestsArr = []; // initialize as empty array if no saved job requests found
  }
  updateJobRequestsList(jobRequestsArrFromJobsPage);
};

const updateJobRequestsList = (jobRequestsArrFromJobsPage) => {
  jobRequestsArr = jobRequestsArrFromJobsPage;
  createList();
};


const createItem = (
  id,
  imgUrl,
  title,
  user,
  location,
  date,
  hours,
  salary,
  description,
  uploadTime
) => {
  const adminBtns = `
  <div class="admin-buttons">
    <button type="button" class="items-link text-primary me-2" id="jobListHeartBtn-${id}">
  <i class="  ${(savedJobRequestsArr.find((j) => j.id === parseInt(id)) ? 'fas' : 'far')} fa-heart heart-icon" id="jobListHeartIcon-${id}"></i>
  </button>
  <button type="button" class="items-link text-primary me-2" id="jobListEditBtn-${id}">
  <i class="fa-solid fa-pen-to-square" id="jobListEditIcon-${id}"></i>
  </button>
  <button type="button" class="items-link text-primary me-2" id="jobListDeleteBtn-${id}">
  <i class="fa-solid fa-trash" id="jobListDeleteIcon-${id}"></i>
  </button>
  </div>
  `;


  let index = jobRequestsArr.findIndex((job) => job.id === id);

  // Add the "reveal" class for the third item and up
  let revealClass = "";
  if (index >= 2) {
    revealClass = "reveal";
  }

  return `
    <div class="job-item p-4 mb-4 ${revealClass}">
      <div class="row g-4">
        <div class="col-12 col-md-8 d-flex align-items-center">
          <img class="flex-shrink-0 img-fluid me-4" src="${imgUrl}" alt="" style="width: 80px; height: 80px; border-radius: 50%;">
          <div class="text-start">
            <h5 class="mb-3">${title}</h5>
            <h6 class="mb-3">User: ${user}</h6>
            <div class="d-flex align-items-center mb-3">
              <i class="fa fa-map-marker-alt text-primary me-2"></i>
              <span class="text-truncate me-3">${location}</span>
              <i class="far fa-calendar-alt text-primary me-2"></i>
              <span class="text-truncate me-3">${date}</span>
            </div>
            <div class="d-flex align-items-center mb-3">
              <i class="far fa-clock text-primary me-2"></i>
              <span class="text-truncate me-3">${hours}</span>
              <span class="text-truncate"><i class="far fa-money-bill-alt text-primary me-2"></i>${salary}</span>
            </div>
            <p class="mb-0">${description}</p>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex flex-column position-relative justify-content-between">
          ${isAdmin ? adminBtns : ""}
        </div>
      </div>
      <br>
      <button type="button" class="btn btn-outline-success mt-2">
      Apply Now
    </button><br><br>
      <div class="row">
        <div class="col-12">
          <small class="text-truncate">${uploadTime}</small>
        </div>
      </div>
    </div>
  `;
};

const getIdFromClick = (ev) => {
  let idFromId = ev.target.id.split("-");
  if (!ev.target.id) {
    idFromId = ev.target.parentElement.id.split("-");
  }
  return idFromId[1];
};

const handleDeleteBtnClick = (ev) => {
  deleteJobRequest(getIdFromClick(ev));
};

const handleEditBtnClick = (ev) => {
  showPopup(getIdFromClick(ev));
};

const handleHeartBtnClick = (ev) => {
  ev.preventDefault();
  let id = getIdFromClick(ev);
  let jobRequest = jobRequestsArr.find((job) => job.id === parseInt(id));
  let heartIcon = document.querySelector(`#jobListHeartIcon-${id}`);

  if (!savedJobRequestsArr.find((job) => job.id === parseInt(id))) {
    savedJobRequestsArr.push(jobRequest);
    heartIcon.classList.remove("far");
    heartIcon.classList.add("fas");

  } else {
    savedJobRequestsArr = savedJobRequestsArr.filter(
      (job) => job.id !== parseInt(id)
    );
    heartIcon.classList.remove("fas");
    heartIcon.classList.add("far");

  }
  localStorage.setItem(
    "savedJobRequestsArr",
    JSON.stringify(savedJobRequestsArr)
  );

};

const clearEventListeners = (idKeyword, eventType, handleFunction) => {
  let elementsBefore = document.querySelectorAll(`[id*='${idKeyword}-']`);
  for (let el of elementsBefore) {
    el.removeEventListener(eventType, handleFunction);
  }
};


const createList = () => {
  let innerStr = "";
  clearEventListeners("jobListDeleteBtn", "click", handleDeleteBtnClick);
  clearEventListeners("jobListEditBtn", "click", handleEditBtnClick);
  clearEventListeners("jobListHeartBtn", "click", handleHeartBtnClick);

  for (let jobRequest of jobRequestsArr) {
    innerStr += createItem(
      jobRequest.id,
      jobRequest.imgUrl,
      jobRequest.title,
      jobRequest.user,
      jobRequest.location,
      jobRequest.date,
      jobRequest.hours,
      jobRequest.salary,
      jobRequest.description,
      jobRequest.uploadTime
    );
  }

  listDiv.innerHTML = innerStr;
  createBtnEventListener("jobListDeleteBtn", handleDeleteBtnClick);
  createBtnEventListener("jobListEditBtn", handleEditBtnClick);
  createBtnEventListener("jobListHeartBtn", handleHeartBtnClick);
};



const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};

export { initialJobRequestsList, updateJobRequestsList };