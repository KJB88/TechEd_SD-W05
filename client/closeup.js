import {
  getByID,
  GET_TVSHOW_BY_ID,
  GET_REVIEWS_AND_USERS_BY_SHOWID,
} from "./networkHandler.js";

let params = location.href.split("?")[1].split("&");
let showID = params[0].split("=")[1];
showID = showID.split("}")[0];

getByID(GET_TVSHOW_BY_ID, showID, (data) => {
  const img = document.getElementById("closeup-img");
  const header = document.getElementById("closeup-header");
  const desc = document.getElementById("closeup-desc");

  img.src = data[0].img;
  img.alt = data[0].alt;
  header.textContent = data[0].name;
  desc.textContent = data[0].desc;
});

getByID(GET_REVIEWS_AND_USERS_BY_SHOWID, showID, (data) => {
  const reviewList = document.getElementById("review-list");

  console.log(data);
  if (data.length === 0) {
    const newLI = document.createElement("li");
    newLI.textContent = "NO REVIEWS";
    reviewList.append(newLI);
  }

  for (let i = 0; i < data.length; i++) {
    const newLI = document.createElement("li");
    newLI.textContent = `${data[i].name} - ${data[i].content}`;
    reviewList.append(newLI);
  }
});
