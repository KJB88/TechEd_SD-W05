
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


  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalImages - 1) {
      currentIndex++;
      updateGallery();
    }

getAll(ALL_TVSHOWS, buildGallery);
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll(".gallery").forEach((gallery) => {
  console.log(gallery)
  const imagesContainer = gallery.querySelector(".gallery-images");
  const prevBtn = gallery.querySelector(".prev-btn");
  const nextBtn = gallery.querySelector(".next-btn");
  const totalImages = imagesContainer.querySelectorAll("img").length;
  let currentIndex = 0;

  prevBtn.addEventListener("click", () => {
    glide.go('<')
    console.log(glide)
  });

  nextBtn.addEventListener("click", () => {
    glide.go('>')

  });

  function updateGallery() {
    const offset =
      currentIndex * imagesContainer.querySelector("img").offsetWidth;
    imagesContainer.style.transform = `translateX(-${offset}px)`;
  }
});


async function getUserName() {
  console.log("test");
  const response = await fetch("http://localhost:8080/get/user", {
    method: "GET",
    body: { id: "1" },
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
}
await getUserName();

