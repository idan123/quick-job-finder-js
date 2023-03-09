let jobRequestsArr;
let galleryDiv;
let isAdmin;
let deleteJobRequest;
let showPopup
const initialJobRequestsGallery = (
    jobRequestsArrFromJobsPage,
    isAdminParam,
    deleteJobRequestFromJobsPage,
    showPopupFromJobsPage
) => {
    galleryDiv = document.getElementById("jobs-jobs-gallery");
    isAdmin = isAdminParam;
    deleteJobRequest = deleteJobRequestFromJobsPage;
    showPopup = showPopupFromJobsPage;
    updateJobRequestsGallery(jobRequestsArrFromJobsPage);
}
const updateJobRequestsGallery = (jobRequestsArrFromJobsPage) => {
    jobRequestsArr = jobRequestsArrFromJobsPage;
    createGallery();
}
const createCard = (
    id,
    title,
    user,
    location,
    date,
    hours,
    salary,
    description,
    imgUrl,
    uploadTime
) => {
    return `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <img src="${imgUrl}" class="img-circle" width="150" alt="${title}">
          <h5 class="card-title mt-3">${title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">User: ${user}</h6>
          <p class="card-text">${description}</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
        <div class="align-items-center text-muted font-weight-bol">
          <i class="fa fa-map-marker-alt text-primary me-2"></i>
          <small>${location}</small><br>
          <i class="far fa-calendar-alt text-primary me-2"></i>
          <small>${date}</small><br>
          <i class="far fa-clock text-primary me-2"></i>
          <small>${hours}</small><br>
          <i class="far fa-money-bill-alt text-primary me-2"></i>
          <small">${salary}</small><br>
          <div class="d-flex justify-content-center align-items-center mt-2">
            <button type="button" class="btn btn-outline-success mt-2">
              Apply Now
            </button>
            </div><br>
            <div class="row">
            <div class="col-12">
              <small class="text-truncate">${uploadTime}</small>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    `;
};

const getIdFromClick = (ev) => {
    let idFromId = ev.target.id.split("-"); // split the id to array
    if (!ev.target.id) {
        idFromId = ev.target.parentElement.id.split("-");
    }
    return idFromId[1];
}
const handleDeleteBtnClick = (ev) => {
    deleteJobRequest(getIdFromClick(ev));
}
const handleEditBtnClick = (ev) => {
    showPopup(getIdFromClick(ev));
}
const clearEventListeners = (idKeyword, handleFunction) => {
    //get all old btns
    let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
    //remove old events
    for (let btn of btnsBefore) {
        btn.removeEventListener("click", handleFunction);
    }
};
const createGallery = () => {
    let innerStr = "";
    //clear event listeners for delete btns
    clearEventListeners("jobGalleryDeleteBtn", handleDeleteBtnClick);
    //clear event listeners for edit btns
    clearEventListeners("jobGalleryEditBtn", handleEditBtnClick);
    for (let jobRequest of jobRequestsArr) {
        innerStr += createCard(
            jobRequest.id,
            jobRequest.title,
            jobRequest.user,
            jobRequest.location,
            jobRequest.date,
            jobRequest.hours,
            jobRequest.salary,
            jobRequest.description,
            jobRequest.imgUrl,
            jobRequest.uploadTime
        );
    }
    galleryDiv.innerHTML = innerStr;
    // add event listeners for delete btns
    createBtnEventListener("jobGalleryDeleteBtn", handleDeleteBtnClick);
    
    createBtnEventListener("jobGalleryEditBtn", handleEditBtnClick);
};
//Creates event listener for the delete buttons
const createBtnEventListener = (idKeyword, handleFunction) => {
    let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
    //add events to new btns
    for (let btn of btns) {
        btn.addEventListener("click", handleFunction);
    }
}
export { initialJobRequestsGallery, updateJobRequestsGallery }