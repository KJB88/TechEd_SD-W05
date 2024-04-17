const apiURL = "http://localhost:8080";

export const ALL_USERS = "/user/all";
export const GET_USER_BY_ID = "/user/byID?userID=";
export const ALL_TVSHOWS = "/tvshow/all";
export const GET_TVSHOW_BY_ID = "/tvshow/byID?showID=";
export const GET_ALL_REVIEWS_BY_USERID = "/review/all/byUserID?userID=";
export const GET_ALL_REVIEWS_BY_SHOWID = "/review/all/byShowID?showID=";
export const GET_REVIEW_BYID = "/review/byID?reviewID=";
export const ADD_USER = "/user";
export const ADD_TVSHOW = "/tvshow";
export const ADD_REVIEW = "/review";

// Get ALL
export async function getAll(serverTag) {
  const response = await fetch(`${apiURL}${serverTag}`);

  const data = await response.json();

  console.log(data);
}

// Get by ID
export async function getByID(serverTag, id) {
  const response = await fetch(`${apiURL}${serverTag}${id}`);

  const data = await response.json();

  console.log(data);
}

// Post
export async function postToServer(serverTag, payload) {
  const response = await fetch(`${apiURL}${serverTag}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log(data);
}
