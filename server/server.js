/* Server Handling */
/* -------------------- */
import express, { request, response } from "express";
import cors from "cors";
import {
  /* Gets */
  getAllUsers,
  getUserByID,
  getAllReviewsByUserID,
  getAllReviewsByTVShowID,
  getReviewByID,
  getAllTVShows,
  getTVShowByID,
  getTVShowByMostLikes,
  getTVShowsWithReviews,

  /* Posts */
  addUser,
  addTVShow,
  addReview,
  getAllReviewsAndUsersByShowID,
  getUserByName,
} from "./assets/js/dbHandler.js";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(8080, function () {
  console.log("server is running on port 8080");
});

/* -------------------- */
/* #region Get Routing*/

// Root
app.get("/", function (request, response) {
  console.log("GET root");
  response.json("This is root route");
});

// Users
// Get user/all
app.get("/user/all", (request, response) => {
  console.log(`GET /user/all`);
  response.json(getAllUsers());
});

// Get user by ID
app.get("/user/byID", (request, response) => {
  console.log(`GET /user/byID?`);
  response.json(getUserByID(request.query.userID));
});

// Get user by Name
app.get("/user/byName", (request, response) => {
  console.log(`GET /user/byName?`);
  response.json(getUserByName(request.query.userName));
});

// Reviews
// Get all reviews by userID
app.get("/review/all/byUserID", (request, response) => {
  console.log(`GET /review/all/byUserID?`);
  response.json(getAllReviewsByUserID(request.query.userID));
});

// Get all reviews by showID
app.get("/review/all/byShowID", (request, response) => {
  console.log(`GET /review/all/byShowID?`);
  response.json(getAllReviewsByTVShowID(request.query.showID));
});

// Get review by ID
app.get("/review/byID", (request, response) => {
  console.log(`GET /review/byID?`);
  response.json(getReviewByID(request.query.reviewID));
});

// Get reviews and users by show ID
app.get("/review/andUsers/byShowID", (request, response) => {
  console.log(`GET /review/andUsers/byShowID?${request.query.showID}`);
  response.json(getAllReviewsAndUsersByShowID(request.query.showID));
});

// TV Shows
// Get all TV shows
app.get("/tvshow/all", (request, response) => {
  console.log(`GET /tvshow/all`);
  response.json(getAllTVShows());
});

// Get all TV shows
app.get("/tvshow/all/desc", (request, response) => {
  console.log(`GET /tvshow/all/desc`);
  response.json(getTVShowByMostLikes());
});

// Get a TV Show by its ID
app.get("/tvshow/byID", (request, response) => {
  console.log(`GET /tvshow/byID? ${request.query.showID}`);
  response.json(getTVShowByID(request.query.showID));
});

// Get all TV shows sorted by number of Likes (descending)
app.get("/tvshow/byMostLikes", (request, response) => {
  console.log(`GET /tvshow/byMostLikes`);
  response.json(getTVShowByMostLikes());
});

// Get all TV shows that have a review
app.get("/tvshow/withReviews", (request, response) => {
  console.log("GET /tvshow/withReviews");
  response.json(getTVShowsWithReviews());
});

/* #endregion Get Routing*/
/* -------------------- */
/* #region Post Routing */

// Add new user
app.post("/user", (request, response) => {
  console.log(`POST /user`);
  console.log(request.body.userName);
  response.json(addUser(request.body.userName));
});

// Add new TV Show
app.post("/tvshow", (request, response) => {
  console.log(`POST /tvshow`);
  response.json(
    addTVShow(
      request.body.name,
      request.body.desc,
      request.body.likes,
      request.body.img,
      request.body.alt
    )
  );
});

// Add new review
app.post("/review", (request, response) => {
  console.log(`POST /review`);

  response.json(
    addReview(request.body.review, request.body.showID, request.body.userID)
  );
});

/* #endregion Post Routing*/
/* -------------------- */
/* #region Put Routing */
app.put("/user/byID", (request, response) => {
  console.log(`PUT/user/byID`);
  response.json(updateUser(request.body.name));
});

app.put("/tvshow/byID", (request, response) => {
  console.log(`PUT /tvshow/byID`);
  response.json(
    updateUserTVShow(
      request.body.name,
      request.body.desc,
      request.body.likes,
      request.body.imgID
    )
  );
});

app.put("/review/byID", (request, response) => {
  console.log(`PUT/review/byID`);
  response.json(
    updateReview(request.body.content, request.body.showID, request.body.userID)
  );
});

/* #endregion Put Routing*/
/* -------------------- */
/* #region Delete Routing */
app.delete("/user/byID", (request, response) => {
  console.log(`DELETE/user`);
  response.json({ message: `User with ID {userId} delete successfully` });
});

app.delete("/review/byID", (request, response) => {
  console.log(`DELETE/review`);
  response.json({ message: `Review with ID {reviewId} delete successfully` });
});
/* #endregion Delete Routing*/
/* -------------------- */
