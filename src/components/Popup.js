import Job from "../models/Job.js";
import getNextId from "../utils/getNextId.js";
import showToast from "../services/Toast.js";


const editJobPopupContent = `
<div class="popup-wrapper d-flex justify-content-center align-items-center d-none" id="editJobPopup">
  <div class="popup-div" id="editJobPopupChild">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
        <div class="form-floating mb-3">
          <input type="file" class="form-control" id="editJobPopupImgFile" />
        </div>
      </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="editJobPopupTitle" placeholder="title" />
            <label for="editJobPopupTitle">Job Title</label>
          </div>
        </h5>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="editJobPopupUser" placeholder="User" />
          <label for="editJobPopupUser">User Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="editJobPopupLocation" placeholder="Location" />
          <label for="editJobPopupLocation">Location</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="editJobPopupDate" placeholder="Date" />
          <label for="editJobPopupDate">Date</label>
        </div>
        <div class="form-floating mb-3">
        <input type="text" class="form-control" id="editJobPopupHours" placeholder="hours" />
        <label for="editJobPopupHours">Hours</label>
      </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="editJobPopupSalary" placeholder="Salary" />
          <label for="editJobPopupSalary">Salary</label>
        </div>
        <div class="form-floating mb-3">
          <textarea class="form-control" id="editJobPopupDescription" placeholder="Description"></textarea>
          <label for="editJobPopupDescription">Description</label>
        </div>
      </div>
      <div class="card-footer text-center">
        <button type="button" class="btn btn-success" id="editJobPopupSaveBtn">
          <i class="bi bi-check-circle-fill"></i> Save
        </button>
        <button type="button" class="btn btn-danger" id="editJobPopupCancelBtn">
          <i class="bi bi-x-circle-fill" id="editJobPopupCancelBtnIcon"></i>
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
`;


document.getElementById("popup-container").innerHTML = editJobPopupContent;

let selectedJob, editJob;
const editJobPopup = document.getElementById("editJobPopup");
const editJobPopupImgFile = document.getElementById("editJobPopupImgFile");
const editJobPopupTitle = document.getElementById("editJobPopupTitle");
const editJobPopupUser = document.getElementById("editJobPopupUser");
const editJobPopupLocation = document.getElementById("editJobPopupLocation");
const editJobPopupDate = document.getElementById("editJobPopupDate");
const editJobPopupHours = document.getElementById("editJobPopupHours");
const editJobPopupSalary = document.getElementById("editJobPopupSalary");
const editJobPopupDescription = document.getElementById("editJobPopupDescription");;

const initPopup = (selectedJobFromJobsPage = null, editJobFromJobsPage = null) => {

  if (selectedJobFromJobsPage) {
    selectedJob = selectedJobFromJobsPage;
    editJobPopupImgFile.classList.add("d-none");
  } else {
    selectedJob = new Job(getNextId(), "", "", "", "", "", "", "", "");
    editJobPopupImgFile.classList.remove("d-none");
  }

  if (editJobFromJobsPage && typeof editJobFromJobsPage === "function") {
    editJob = editJobFromJobsPage;
  } else {
    editJob = () => { };
  }

  editJobPopupImgFile.src = selectedJob.imgUrl || "";
  editJobPopupTitle.value = selectedJob.title;
  editJobPopupUser.value = selectedJob.user;
  editJobPopupLocation.value = selectedJob.location;
  editJobPopupDate.value = selectedJob.date;
  editJobPopupHours.value = selectedJob.hours;
  editJobPopupSalary.value = selectedJob.salary;
  editJobPopupDescription.value = selectedJob.description;
  selectedJob.uploadTime = new Date().toLocaleString();
  showPopup();
};

const showPopup = () => {
  editJobPopup.classList.remove("d-none");
};

const hidePopup = () => {
  editJobPopup.classList.add("d-none");
};


window.addEventListener("load", () => {
  editJobPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "editJobPopup" &&
      ev.target.id !== "editJobPopupCancelBtn" &&
      ev.target.id !== "editJobPopupCancelBtnIcon"
    ) {
      return;
    }
    hidePopup();
  });

  document.getElementById("editJobPopupSaveBtn").addEventListener("click", () => {
    if (selectedJob) {
      const requiredFields = [
        "editJobPopupTitle",
        "editJobPopupUser",
        "editJobPopupLocation",
        "editJobPopupDate",
        "editJobPopupHours",
        "editJobPopupSalary",
        "editJobPopupDescription",
      ];
      let imgUrl = "";
      if (selectedJob && selectedJob.imgUrl) {
        imgUrl = selectedJob.imgUrl;
      }
      if (editJobPopupImgFile.files.length > 0) {
        imgUrl = URL.createObjectURL(editJobPopupImgFile.files[0]);
        requiredFields.push("editJobPopupImgFile");
      }

      if (imgUrl === "") {
        showToast(`Please fill in all required fields`);
        return;
      }

      for (let field of requiredFields) {
        if (document.getElementById(field).value === "") {
          showToast(`Please fill in all required fields`);
          return;
        }
      }

      selectedJob.imgUrl = imgUrl;
      selectedJob.title = editJobPopupTitle.value;
      selectedJob.user = editJobPopupUser.value;
      selectedJob.location = editJobPopupLocation.value;
      selectedJob.date = editJobPopupDate.value;
      selectedJob.hours = editJobPopupHours.value;
      selectedJob.salary = editJobPopupSalary.value;
      selectedJob.description = editJobPopupDescription.value;
      editJob(selectedJob);
      hidePopup();
    }
  });
});

export { initPopup, showPopup, hidePopup }


