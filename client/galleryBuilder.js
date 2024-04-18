import Glide from "@glidejs/glide";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// #region Glide impl.
export const recentAddGlide = new Glide("#recently-added-glide", {
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
export const recentReviewGlide = new Glide("#recent-review-glide", {
  type: "carousel",
  perView: 2,
  startAt: 0,
  focusAt: "center",
  gap: 1,
});

export const liveRankingGlide = new Glide("#live-ranking-glide", {
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
/*
Fancybox.show([
  {
    src: "https://fancyapps.com/iframe.html",
    type: "iframe",
    preload: false,
    width: 600,
    height: 300,
  },
]);
*/

/* -------------------- */
// #region Gallery Types

// Build recently added - NOTE: hacky duplication method
export function buildRecentlyAdded(data) {
  const parent = document.getElementById("recently-added");
  for (let i = 0; i < data.length; i++) {
    const listItemElement = buildListItem(); // Construct LI

    // Construct IMG
    const imgElement = buildImg(data[i].img, data[i].alt, data[i].id);

    // Finalize
    listItemElement.append(imgElement); // Append IMG to LI
    parent.append(listItemElement); // Append LI to RecentlyAdded
  }

  setupNavigationButtons("recently-added-glide", recentAddGlide);
  recentAddGlide.mount(); // Mount Glide.js carousel
}

// Build live ranking - NOTE: hacky duplication method
export function buildLiveRanking(data) {
  const parent = document.getElementById("live-ranking");
  for (let i = 0; i < data.length; i++) {
    const listItemElement = buildListItem(); // Construct LI
    const imgElement = buildImg(data[i].img, data[i].alt, data[i].id); // Construct IMG

    const rankHeaderElement = buildRankingHeader(i);
    const likesElement = buildLike(data[i].likes);

    // Finalize
    listItemElement.append(rankHeaderElement);
    listItemElement.append(imgElement); // Append IMG to LI
    listItemElement.append(likesElement);
    parent.append(listItemElement); // Append LI to RecentlyAdded
  }

  setupNavigationButtons("live-ranking-glide", liveRankingGlide);
  liveRankingGlide.mount(); // Mount Glide.js carousel
}

// Build recent reviews - NOTE: hacky duplication method
export function buildRecentReviews(data) {
  const parent = document.getElementById("recent-review");
  for (let i = 0; i < data.length; i++) {
    const listItemElement = buildListItem(); // Construct LI
    const imgElement = buildImg(data[i].img, data[i].alt, data[i].id); // Construct IMG

    // Finalize
    listItemElement.append(imgElement); // Append IMG to LI
    parent.append(listItemElement); // Append LI to RecentlyAdded
  }

  setupNavigationButtons("recent-review-glide", recentReviewGlide);
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
function buildImg(imgSrc, imgAlt, showID) {
  const newImg = document.createElement("img");
  newImg.classList.add("gallery-img");
  newImg.src = imgSrc;
  newImg.alt = imgAlt;

  newImg.addEventListener("click", () => {
    Fancybox.show([
      {
        src: `closeup.html?showID=${showID}}`,
        type: "iframe",
        fitToView: false,
        preload: false,
        width: 800,
        height: 600,
      },
    ]);
  });
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

function setupNavigationButtons(parentGlide, glideElement) {
  const parent = document.getElementById(parentGlide);
  const prevBtn = parent.querySelector(".prev-btn");
  const nextBtn = parent.querySelector(".next-btn");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      glideElement.go("<");
    });

    nextBtn.addEventListener("click", () => {
      glideElement.go(">");
    });
  } else {
    console.error("Navigation buttons not found.");
  }
}
