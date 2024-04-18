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

/*
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchBar = document.getElementById('search-bar');

    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the search query
      const query = searchBar.value.trim();
  
      // Make a request to the server
      fetch(`/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
          // Process the response data
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
*/

getAll(ALL_TVSHOWS, buildRecentlyAdded);
getAll(ALL_TVSHOWS_DESCENDING, buildLiveRanking);
getAll(ALL_TVSHOWS_WITH_REVIEW, buildRecentReviews);
//getAll(, buildRecentReviews);
/*
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".gallery").forEach((gallery) => {
    console.log(gallery);
    const imagesContainer = gallery.querySelector(".gallery-images");
    const prevBtn = gallery.querySelector(".prev-btn");
    const nextBtn = gallery.querySelector(".next-btn");
    const totalImages = imagesContainer.querySelectorAll("img").length;
    let currentIndex = 0;

    prevBtn.addEventListener("click", () => {
      glide.go("<");
      console.log(glide);
    });

    nextBtn.addEventListener("click", () => {
      glide.go(">");
    });

    function updateGallery() {
      const offset =
        currentIndex * imagesContainer.querySelector("img").offsetWidth;
      imagesContainer.style.transform = `translateX(-${offset}px)`;
    }
  });
});
*/
