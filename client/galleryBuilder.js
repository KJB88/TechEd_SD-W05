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

export function buildGallery(data, parentElementID) {
  const parentElement = document.getElementById(parentElementID);

  for (let i = 0; i < data.length; i++) {
    const newlistItem = document.createElement("li");
    newlistItem.classList.add("glide__slide");
    newlistItem.classList.add("gallery-li");
    const newImg = document.createElement("img");
    newImg.classList.add("gallery-img");
    newImg.src = showImgs[data[i].imgID];
    newImg.alt = data[i].alt;

    newlistItem.append(newImg);
    parentElement.append(newlistItem);
  }
}
