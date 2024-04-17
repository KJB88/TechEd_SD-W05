import { getAll, ALL_TVSHOWS } from "./networkHandler.js";
import { buildGallery } from "./galleryBuilder.js";
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

getAll(ALL_TVSHOWS, buildGallery);
document.querySelectorAll(".gallery").forEach((gallery) => {
  const imagesContainer = gallery.querySelector(".gallery-images");
  const prevBtn = gallery.querySelector(".prev-btn");
  const nextBtn = gallery.querySelector(".next-btn");
  const totalImages = imagesContainer.querySelectorAll("img").length;
  let currentIndex = 0;

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalImages - 1) {
      currentIndex++;
      updateGallery();
    }
  });

  function updateGallery() {
    const offset =
      currentIndex * imagesContainer.querySelector("img").offsetWidth;
    imagesContainer.style.transform = `translateX(-${offset}px)`;
  }
});
