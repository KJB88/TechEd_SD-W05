/* TV Show Popup*/
/* -------------------- */
// #region Setup

import {
  // Funcs
  getByID,
  postToServer,

  // msg type
  GET_TVSHOW_BY_ID,
  GET_REVIEWS_AND_USERS_BY_SHOWID,
  ADD_USER,
  ADD_REVIEW,
  GET_USER_BY_ID,
  GET_USER_BY_NAME,
} from "./networkHandler.js";

/* Get params from query URI */
let params = location.href.split("?")[1].split("&");
let showID = params[0].split("=")[1];
showID = showID.split("}")[0];

const entryTracking = [];

// #endregion Setup
/* -------------------- */
// #region Form Handling
const reviewForm = document.getElementById("review-form");
const submitBtn = document.getElementById("submit-btn");
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  submitReview(new FormData(e.target));
});

function clearEntries() {
  for (let i = 0; i < entryTracking.length; i++) entryTracking[i].remove();
  entryTracking.length = 0;
}
// #endregion Form Handling
/* -------------------- */

// #region Fetching

/* Get a TV Show by its id*/
getByID(GET_TVSHOW_BY_ID, showID, (data) => {
  const img = document.getElementById("closeup-img");
  const header = document.getElementById("closeup-header");
  const desc = document.getElementById("closeup-desc");

  img.src = data[0].img;
  img.alt = data[0].alt;
  header.textContent = data[0].name;
  desc.textContent = data[0].desc;
});

populateCloseupReviews();
function populateCloseupReviews() {
  clearEntries();
  /* Get all reviews, filteredwhat TV Show its on and also user name info */
  getByID(GET_REVIEWS_AND_USERS_BY_SHOWID, showID, (data) => {
    const reviewList = document.getElementById("review-list");
    if (data.length === 0) {
      const newLI = document.createElement("li");
      newLI.classList.add("review-entry");
      newLI.textContent = "NO REVIEWS";
      reviewList.append(newLI);
      entryTracking.push(newLI);
    }

    for (let i = 0; i < data.length; i++) {
      const newLI = document.createElement("li");
      newLI.classList.add("review-entry");
      newLI.textContent = `${data[i].name} - ${data[i].content}`;
      reviewList.append(newLI);
      entryTracking.push(newLI);
    }
  });
}
/* Submit a review to the DB */
function submitReview(formData) {
  // Get the juicy data inside the formData object
  const values = Object.fromEntries(formData);
  postToServer(
    ADD_REVIEW,
    {
      review: values.review,
      showID: showID,
      userID: -1,
    },
    () => {
      populateCloseupReviews();
    }
  );
}

// #endregion Fetching
/* -------------------- */
