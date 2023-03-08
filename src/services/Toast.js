const toast = document.getElementById("toast");
let id = 1;

const showToast = (msg, success = true) => {
  let thisId = id++;

  const toastMsg = document.createElement("div");
  toastMsg.id = `toastMsg-${thisId}`;
  toastMsg.classList.add("toast-msg", success ? "success" : "error");
  toastMsg.innerHTML = `
    <span>${msg}</span>
    <div class="toast-timer"></div>
  `;
  toast.appendChild(toastMsg);

  // Remove message when animation ends
  toastMsg.addEventListener("animationend", () => {
    toastMsg.remove();
  });

  // Start animation
  setTimeout(() => {
    toastMsg.classList.add("animate-in");
  }, 100);
};

export default showToast;
