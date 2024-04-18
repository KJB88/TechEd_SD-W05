import Glide from "@glidejs/glide";

export const glide = new Glide(".glide", {
  type: "carousel",
  perView: 7,
  startAt: 3,
  focusAt: "center",
  gap: 5,
  breakpoints: {
    700: { perView: 2 },
    900: { perView: 3 },
    1100: { perView: 4 },
    1300: { perView: 5 },
    1500: { perView: 6 },
  },
});

const showImgs = [
  "fallout.webp",
  "aot.webp",
  "thewitcher.webp",
  "drwho.webp",
  "bluey.webp",
  "firefly.webp",
  "cowboy.webp",
  "scrubs.webp",
  "reddwarf.webp",
  "mha.webp",
];

export function buildGallery(data) {
  const glideSlides = document.getElementById("recently-added");

  for (let i = 0; i < data.length; i++) {
    const newListItem = document.createElement("li");
    newListItem.classList.add("glide__slide");
    const newImg = document.createElement("img");
    newImg.src = showImgs[data[i].imgID];
    newImg.alt = data[i].alt;
    newListItem.appendChild(newImg);
    glideSlides.appendChild(newListItem);
  }
  setupNavigationButtons();
  glide.mount();
}

function setupNavigationButtons() {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      glide.go("<");
    });

    nextBtn.addEventListener("click", () => {
      glide.go(">");
    });
  } else {
    console.error("Navigation buttons not found.");
  }
}
