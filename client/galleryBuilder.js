import Glide from "@glidejs/glide";

// #region Glide impl.
export const recentAddGlide = new Glide(".recently-added-glide", {
  type: "carousel",
  perView: 7,
  startAt: 3,
  focusAt: "center",
  gap: 5,
  breakpoints: {
    700: {
      perView: 2,
    },
    900: {
      perView: 3,
    },
    1100: {
      perView: 4,
    },
    1300: {
      perView: 5,
    },
    1500: {
      perView: 6,
    },
  },
});
export const recentReviewGlide = new Glide(".recent-review-glide", {
  type: "carousel",
  perView: 7,
  startAt: 3,
  focusAt: "center",
  gap: 5,
  breakpoints: {
    700: {
      perView: 2,
    },
    900: {
      perView: 3,
    },
    1100: {
      perView: 4,
    },
    1300: {
      perView: 5,
    },
    1500: {
      perView: 6,
    },
  },
});
export const liveRankingGlide = new Glide(".live-ranking-glide", {
  type: "carousel",
  perView: 7,
  startAt: 3,
  focusAt: "center",
  gap: 5,
  breakpoints: {
    700: {
      perView: 2,
    },
    900: {
      perView: 3,
    },
    1100: {
      perView: 4,
    },
    1300: {
      perView: 5,
    },
    1500: {
      perView: 6,
    },
  },
});
// #endregion Glide impl.

// TODO: Store showIMGs in DB (incl. aria and alt)
const showImgs = [
  { filePath: "fallout.webp", aria: "DEFAULT" },
  { filePath: "aot.webp", aria: "DEFAULT" },
  { filePath: "thewitcher.webp", aria: "DEFAULT" },
  { filePath: "drwho.webp", aria: "DEFAULT" },
  { filePath: "bluey.webp", aria: "DEFAULT" },
  { filePath: "firefly.webp", aria: "DEFAULT" },
  { filePath: "cowboy.webp", aria: "DEFAULT" },
  { filePath: "scrubs.webp", aria: "DEFAULT" },
  { filePath: "reddwarf.webp", aria: "DEFAULT" },
  { filePath: "mha.webp", aria: "DEFAULT" },
];

/* -------------------- */
// #region Gallery Types
// TODO: Allow only a generic export and make decision on type construction based on input params

// Build recently added - NOTE: hacky duplication method
export function buildRecentlyAdded(data) {
  const parent = document.getElementById("recently-added");
  for (let i = 0; i < data.length; i++) {
    const listItemElement = buildListItem(data[i], parent); // Construct LI

    // Construct IMG
    const imgElement = buildImg(
      showImgs[data[i].imgID],
      data[i].alt,
      listItemElement
    );

    // Finalize
    newListElement.append(imgElement); // Append IMG to LI
    parent.append(newlistItem); // Append LI to RecentlyAdded
  }

  recentAddGlide.mount(); // Mount Glide.js carousel
}

// Build live ranking - NOTE: hacky duplication method
export function buildLiveRanking(data) {
  const parent = document.getElementById("live-ranking");
  for (let i = 0; i < data.length; i++) {
    const listItemElement = buildListItem(data[i], parent); // Construct LI
    const imgElement = buildImg(listItemElement); // Construct IMG

    // Finalize
    newListElement.append(imgElement); // Append IMG to LI
    parent.append(newlistItem); // Append LI to RecentlyAdded
  }

  liveRankingGlide.mount(); // Mount Glide.js carousel
}

// Build recent reviews - NOTE: hacky duplication method
export function buildRecentReviews(data) {
  const parent = document.getElementById("recent-review");
  for (let i = 0; i < data.length; i++) {
    const listItemElement = buildListItem(data[i], parent); // Construct LI
    const imgElement = buildImg(listItemElement); // Construct IMG

    // Finalize
    newListElement.append(imgElement); // Append IMG to LI
    parent.append(newlistItem); // Append LI to RecentlyAdded
  }

  recentReviewGlide.mount(); // Mount Glide.js carousel
}

// #endregion Gallery Types
/* -------------------- */
// #region Generic Builders

// Build a LI
function buildListItem() {
  const newlistItem = document.createElement("li");
  newlistItem.classList.add("glide__slide");
  newlistItem.classList.add("gallery-li");
  return newlistItem;
}

// Build an IMG
function buildImg(imgSrc, imgAlt) {
  const newImg = document.createElement("img");
  newImg.classList.add("gallery-img");
  newImg.src = imgSrc;
  newImg.alt = imgAlt;
  return newImg;
}

// #endregion Generic Builders
/* -------------------- */
