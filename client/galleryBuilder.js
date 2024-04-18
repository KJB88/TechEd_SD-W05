import Glide from "@glidejs/glide";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// #region Glide impl.
export const recentAddGlide = new Glide(".recently-added-glide", {
  type: "carousel",
  perView: 5,
  startAt: 3,
  focusAt: "center",
  gap: 5,
  breakpoints: {
    700: {
      perView: 2,
    },
    900: {
      perView: 2,
    },
    1100: {
      perView: 2,
    },
    1300: {
      perView: 3,
    },
    1500: {
      perView: 4,
    },
  },
});
export const recentReviewGlide = new Glide(".recent-review-glide", {
  type: "carousel",
  perView: 2,
  startAt: 0,
  focusAt: "center",
  gap: 1,
});

export const liveRankingGlide = new Glide(".live-ranking-glide", {
  type: "slider",
  perView: 4,
  startAt: 1,
  focusAt: "center",
  gap: 5,
  breakpoints: {
    700: {
      perView: 2,
    },
    900: {
      perView: 2,
    },
    1100: {
      perView: 3,
    },
    1300: {
      perView: 4,
    },
    1500: {
      perView: 4,
    },
  },
});
// #endregion Glide impl.

// TODO: Store showIMGs in DB (incl. aria and alt)
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

/* -------------------- */
// #region Gallery Types
// TODO: Allow only a generic export and make decision on type construction based on input params

// Build recently added - NOTE: hacky duplication method
export function buildRecentlyAdded(data) {
  const parent = document.getElementById("recently-added");
  for (let i = 0; i < data.length; i++) {
    const listItemElement = buildListItem(); // Construct LI

    // Construct IMG
    const imgElement = buildImg(showImgs[data[i].imgID], data[i].alt);

    // Finalize
    listItemElement.append(imgElement); // Append IMG to LI
    parent.append(listItemElement); // Append LI to RecentlyAdded
  }

  recentAddGlide.mount(); // Mount Glide.js carousel
}

// Build live ranking - NOTE: hacky duplication method
export function buildLiveRanking(data) {
  const parent = document.getElementById("live-ranking");
  for (let i = 0; i < data.length; i++) {
    const listItemElement = buildListItem(); // Construct LI
    const imgElement = buildImg(showImgs[data[i].imgID], data[i].alt); // Construct IMG
    const rankHeaderElement = buildRankingHeader(i);
    const likesElement = buildLike(data[i].likes);

    // Finalize
    listItemElement.append(rankHeaderElement);
    listItemElement.append(imgElement); // Append IMG to LI
    listItemElement.append(likesElement);
    parent.append(listItemElement); // Append LI to RecentlyAdded
  }

  liveRankingGlide.mount(); // Mount Glide.js carousel
}

// Build recent reviews - NOTE: hacky duplication method
export function buildRecentReviews(data) {
  const parent = document.getElementById("recent-review");
  for (let i = 0; i < data.length; i++) {
    const listItemElement = buildListItem(); // Construct LI
    const imgElement = buildImg(showImgs[data[i].imgID], data[i].alt); // Construct IMG

    // Finalize
    listItemElement.append(imgElement); // Append IMG to LI
    parent.append(listItemElement); // Append LI to RecentlyAdded
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

function buildRankingHeader(id) {
  const newHeader = document.createElement("h2");
  newHeader.classList.add("ranking-header");
  newHeader.textContent = id + 1;
  return newHeader;
}

function buildLike(likes) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("ranking-likes-container");

  const newSpan = document.createElement("span");
  newSpan.classList.add("likes-counter");
  newSpan.textContent = likes;

  const newImg = document.createElement("img");
  newImg.classList.add("likes-img");
  newImg.src = "tup.png";

  newDiv.append(newImg);
  newDiv.append(newSpan);
  return newDiv;
}
// #endregion Generic Builders
/* -------------------- */
