const apiURL = "http://localhost:8080";

export const ALL_USERS = "/user/all";
export const GET_USER_BY_ID = "/user/byID?userID=";
export const ALL_TVSHOWS = "/tvshow/all";
export const ALL_TVSHOWS_DESCENDING = "/tvshow/all/desc";
export const ALL_TVSHOWS_WITH_REVIEW = "/tvshow/withReviews";
export const GET_TVSHOW_BY_ID = "/tvshow/byID?showID=";
export const GET_ALL_REVIEWS_BY_USERID = "/review/all/byUserID?userID=";
export const GET_ALL_REVIEWS_BY_SHOWID = "/review/all/byShowID?showID=";
export const GET_REVIEW_BYID = "/review/byID?reviewID=";
export const ADD_USER = "/user";
export const ADD_TVSHOW = "/tvshow";
export const ADD_REVIEW = "/review";

// Get ALL
export async function getAll(serverTag, callback) {
  const response = await fetch(`${apiURL}${serverTag}`);

  const data = await response.json();
  //console.log(data);
  callback(data);
}

// Get by ID
export async function getByID(serverTag, id, callback) {
  const response = await fetch(`${apiURL}${serverTag}${id}`);

  const data = await response.json();
  callback(data);
}

// Post
export async function postToServer(serverTag, payload, callback) {
  const response = await fetch(`${apiURL}${serverTag}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  callback(data);
}
