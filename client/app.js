import {
  getAll,
  ALL_TVSHOWS,
  ALL_TVSHOWS_DESCENDING,
  ALL_TVSHOWS_WITH_REVIEW,
} from "./networkHandler.js";
import {
  buildLiveRanking,
  buildRecentlyAdded,
  buildRecentReviews,
} from "./galleryBuilder.js";

getAll(ALL_TVSHOWS, buildRecentlyAdded);
getAll(ALL_TVSHOWS_DESCENDING, buildLiveRanking);
getAll(ALL_TVSHOWS_WITH_REVIEW, buildRecentReviews);

/* Triaged Search Bar
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");
  const searchBar = document.getElementById("search-bar");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the search query
    const query = searchBar.value.trim();

    // Make a request to the server
    fetch(`/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the response data
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
*/
