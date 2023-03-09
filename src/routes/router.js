import PAGES from "../models/pageModel.js";

/* Our pages */
const PAGES_ARRAY = [
  {
    id: PAGES.HERO,
    element: document.getElementById(PAGES.HERO)
  },
  {
    id: PAGES.JOBS,
    element: document.getElementById(PAGES.JOBS)
  },
  {
    id: PAGES.CONTACT,
    element: document.getElementById(PAGES.CONTACT)
  },
  {
    id: PAGES.LOGIN,
    element: document.getElementById(PAGES.LOGIN)
  },
  {
    id: PAGES.REGISTER,
    element: document.getElementById(PAGES.REGISTER)
  },
  {
    id: PAGES.PROFILE,
    element: document.getElementById(PAGES.PROFILE)
  },
  {
    id: PAGES.PAGE404,
    element: document.getElementById(PAGES.PAGE404)
  },
];

function handlePageChange(pageToDisplay) {
  /* hide all pages */
  PAGES_ARRAY.forEach((page) => {
    page.element.classList.remove("d-block");
    page.element.classList.add("d-none");
  });

  /* show the selected page */
  const selectedPage = PAGES_ARRAY.find((page) => page.id === pageToDisplay);
  if (selectedPage) {
    selectedPage.element.classList.remove("d-none");
    selectedPage.element.classList.add("d-block");
    window.scrollTo(0, 0); // Add this line to scroll to the top of the page
  } else {
    PAGES_ARRAY.find((page) => page.id === PAGES.PAGE404).element.classList.remove("d-none");
    PAGES_ARRAY.find((page) => page.id === PAGES.PAGE404).element.classList.add("d-block");
    window.scrollTo(0, 0); // Add this line to scroll to the top of the page
  }
}

export { handlePageChange };
