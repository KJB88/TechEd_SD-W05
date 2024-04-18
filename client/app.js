import { getAll, ALL_TVSHOWS } from "./networkHandler.js";
import { buildGallery, glide } from "./galleryBuilder.js";

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
/*
getAll(ALL_TVSHOWS, (data) => {
  buildGallery(data, "recently-added");
  recentAddGlide.mount(); // Remount recently added Glide
  buildGallery(data, "recent-reviews");
  recentReviewGlide.mount(); // Remount recent review Glide
  buildGallery(data, "live-rankings");
  liveRankingGlide.mount(); // Remount live rankings Glide
});
*/
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
