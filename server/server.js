/* Server Handling */
/* -------------------- */
import express from "express";
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

  /* Posts */
  addUser,
  addTVShow,
  addReview,
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

// TV Shows
// Get all TV shows
app.get("/tvshow/all", (request, response) => {
  console.log(`GET /tvshow/all`);
  response.json(getAllTVShows());
});

// Get a TV Show by its ID
app.get("/tvshow/byID", (request, response) => {
  console.log(`GET /tvshow/byID?`);
  response.json(getTVShowByID(request.query.showID));
});

/* #endregion Get Routing*/
/* -------------------- */
/* #region Post Routing */

// Add new user
app.post("/user", (request, response) => {
  console.log(`POST /user`);

  response.json(addUser(request.body.name));
});

// Add new TV Show
app.post("/tvshow", (request, response) => {
  console.log(`POST /tvshow`);
  response.json(
    addTVShow(
      request.body.name,
      request.body.desc,
      request.body.likes,
      request.body.imgID
    )
  );
});

// Add new review
app.post("/review", (request, response) => {
  console.log(`POST /review`);

  response.json(
    addReview(request.body.content, request.body.showID, request.body.userID)
  );
});

/* #endregion Post Routing*/
/* -------------------- */
/* #region Put Routing */

/* #endregion Put Routing*/
/* -------------------- */
/* #region Delete Routing */

/* #endregion Delete Routing*/
/* -------------------- */
