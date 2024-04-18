import {
  getAll,
  ALL_TVSHOWS,
  ALL_TVSHOWS_DESCENDING,
  ALL_TVSHOWS_WITH_REVIEW,
} from "./networkHandler.js";
import {
  buildLiveRanking,
  buildRecentlyAdded,
  buildRecentReviews,
} from "./galleryBuilder.js";

getAll(ALL_TVSHOWS, buildRecentlyAdded);
getAll(ALL_TVSHOWS_DESCENDING, buildLiveRanking);
getAll(ALL_TVSHOWS_WITH_REVIEW, buildRecentReviews);
