import Glide from "@glidejs/glide";

 export const glide = new Glide(".glide", {
  type: "carousel",
  perView: 7,
  startAt: 3,
  focusAt: "center",
  gap: 5,
  breakpoints: {
    700: {
      perView: 2
    },
    900: {
      perView: 3
    },
    1100: {
      perView: 4
    },
    1300: {
      perView: 5
    },
    1500: {
      perView: 6
    }
  }
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

const glideSlides = document.getElementById("recently-added");

export function buildGallery(data) {
  for (let i = 0; i < data.length; i++) {
    const newlistItem = document.createElement("li");
    newlistItem.classList.add("glide__slide");
    newlistItem.classList.add("gallery-li");
    const newImg = document.createElement("img");
    newImg.classList.add("gallery-img");
    newImg.src = showImgs[data[i].imgID];
    newImg.alt = data[i].alt;

    newlistItem.append(newImg);
    glideSlides.append(newlistItem);
  }

  glide.mount();
}
