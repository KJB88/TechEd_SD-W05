import { buildGallery } from "./galleryBuilder";
import { getAll, ALL_TVSHOWS } from "./networkHandler";

getAll(ALL_TVSHOWS, buildGallery);
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".gallery").forEach((gallery) => {
    const imagesContainer = gallery.querySelector(".gallery-images");
    const prevBtn = gallery.querySelector(".prev-btn");
    const nextBtn = gallery.querySelector(".next-btn");
    const totalImages = imagesContainer.querySelectorAll("img").length;
    let currentIndex = 0;

    prevBtn.addEventListener("click", () => {
      currentIndex = Math.max(0, currentIndex - 1);
      updateGallery();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = Math.min(totalImages - 1, currentIndex + 1);
      updateGallery();
    });

    function updateGallery() {
      const offset =
        currentIndex * imagesContainer.querySelector("img").offsetWidth;
      imagesContainer.style.transform = `translateX(-${offset}px)`;
    }
  });
});
