/*  Handler for Database
Allows controlled access to the database */
/* -------------------- */

//#region Setup

import Database from "better-sqlite3";
const db = new Database("./assets/db/database.db");

// #endregion Setup

/* -------------------- */

// #region Queries
// #region SELECT

// Users
const selectAllUsers = db.prepare(`SELECT * FROM users`);
const selectUserByName = db.prepare(`SELECT * FROM users WHERE name = ?`);
const selectUserByID = db.prepare(`SELECT * FROM users WHERE id = ?`);

// Reviews
const selectReviewByID = db.prepare(`SELECT * FROM reviews WHERE id = ?`);
const selectAllReviewsByUserID = db.prepare(
  `SELECT * FROM reviews WHERE userID = ?`
);
const selectAllReviewsByTVShowID = db.prepare(
  `SELECT * FROM reviews WHERE tvID = ?`
);
const selectAllReviewsByTVShowIDAndUserID = db.prepare(
  `SELECT * FROM reviews WHERE tvID = ? AND  userID = ?`
);

// TV Shows
const selectAllTVShows = db.prepare(`SELECT * FROM tv_shows`);
const selectTVShowByID = db.prepare(`SELECT * FROM tv_shows WHERE id = ?`);
const selectTVShowByName = db.prepare(`SELECT * FROM tv_shows WHERE name = ?`);
const selectTVShowsWithLikesLessThan = db.prepare(
  `SELECT * FROM tv_shows WHERE likes <= (?)`
);
const selectTVShowsWithLikesGreaterThan = db.prepare(
  `SELECT * FROM tv_shows WHERE likes >= (?)`
);

// #endregion SELECT
/* ----- */
// #region INSERT

// Users
const insertUser = db.prepare(`INSERT OR IGNORE INTO users (name) VALUES (?)`);

// Reviews
const insertReview = db.prepare(
  `INSERT OR IGNORE INTO reviews (content, tvID, userID) VALUES (?, ?, ?)`
);

// TV Shows
const insertTVShows = db.prepare(
  `INSERT OR IGNORE INTO tv_shows (name, desc, likes, imgID) VALUES (?, ?, ?, ?)`
);

// #endregion INSERT
/* ----- */
// #region UPDATE

// Users
const updateUserNameByID = db.prepare(
  `UPDATE users SET name = (?) WHERE id = ?`
);
const updateUserNameByName = db.prepare(
  `UPDATE users SET name = (?) WHERE name = ?`
);

// Reviews
const updateReviewByReviewID = db.prepare(
  `UPDATE reviews SET content = (?) WHERE id = ?`
);

// TV Shows
// Replace the likes on a TV Show with the given value, specified by TV Show ID
const updateTVShowLikesReplaceByID = db.prepare(
  `UPDATE tv_shows SET likes = ? WHERE id = ?`
);

// Add one to the likes of a TV Show, specified by TV Show ID
const updateTVShowLikesAdditiveByID = db.prepare(
  `UPDATE tv_shows SET likes = likes + 1 WHERE id = ?`
);

// Replace the likes on a TV Show with the given value, specified by TV Show Name
const updateTVShowLikesReplaceByName = db.prepare(
  `UPDATE tv_shows SET likes = ? WHERE name = ?`
);

// Add one to the likes of a TV Show, specified by TV Show Name
const updateTVShowLikesAdditiveByName = db.prepare(
  `UPDATE tv_shows SET likes = likes + 1 WHERE name = ?`
);

// #endregion UPDATE
/* ----- */
// #region DELETE

// Users
const deleteUserByID = db.prepare(`DELETE FROM users WHERE id = ?`); // Delete the user with the given ID
const deleteUserByName = db.prepare(`DELETE FROM users WHERE name = ?`); // Delete the user with the given name

//Reviews
const deleteReviewByID = db.prepare(`DELETE FROM reviews WHERE id = ?`); // Delete the review with the given ID
const deleteReviewsByUserID = db.prepare(
  `DELETE FROM reviews WHERE userID = ?`
); // Delete all reviews given by a user, specified by the User's ID

const deleteReviewsByTVShowID = db.prepare(
  `DELETE FROM reviews where tvID = ?`
); // Delete all reviews on a TV Show, specified by the TV Show's ID

// TV Shows
const deleteTVShowByID = db.prepare(`DELETE FROM tv_shows WHERE id = ?`); // Delete the TV Show specified by the given ID
const deleteTVShowByName = db.prepare(`DELETE FROM tv_shows WHERE name = ?`); // Delete the TV Show specified by the given Name

// #endregion DELETE
// #endregion Queries

/* -------------------- */

// #region Interface
/* These control the access to the query, ensuring validity of input and integrity of output, including error handling. */

// #region GET / SELECT / RETURN
// Users
/* Returns all users in the database. */
export function getAllUsers() {
  return selectAllUsers.all();
}

/* Returns the user specified by the given userName. */
export function getUserByName(userName) {
  return selectUserByName.all(userName);
}

/* Returns the user specified by the given user ID. */
export function getUserByID(userID) {
  return selectUserByID.all(userID);
}

// Reviews
/* Returns a review specified by the given review ID. */
export function getReviewByID(reviewID) {
  return selectReviewByID.all(reviewID);
}

/* Returns all reviews by a user, specified by their user ID */
export function getAllReviewsByUserID(userID) {
  return selectAllReviewsByUserID.all(userID);
}

/* Returns all reviews on a TV Show, specified by its TV Show ID */
export function getAllReviewsByTVShowID(tvShowID) {
  return selectAllReviewsByTVShowID.all(tvShowID);
}

/* Returns all reviews on a TV Show, written by a specific User, specified by the TV Show ID and user ID respectively. */
export function getAllReviewsByTVShowIDAndUserID(tvShowID, userID) {
  return selectAllReviewsByTVShowIDAndUserID.all(tvShowID, userID);
}

// TV Shows
/* Returns all TV shows */
export function getAllTVShows() {
  return selectAllTVShows.all();
}

/* Returns a TV show by its ID */
export function getTVShowByID(tvShowID) {
  return selectTVShowByID.all(tvShowID);
}

/* Returns a TV Show by its Name */
export function getTVShowByName(tvShowName) {
  return selectTVShowByName.all(tvShowName);
}
/* Returns TV shows that have a number of likes less than the given threshold */
export function getTVShowsWithLikesLessThan(threshold) {
  return selectTVShowsWithLikesLessThan.all(threshold);
}

/* Returns TV shows that have a number of likes greater than the given threshold */
export function getTVShowsWithLikesGreaterThan(threshold) {
  return selectTVShowsWithLikesGreaterThan.all(threshold);
}

// #endregion GET
/* ----- */
// #region ADD / POST / INSERT

// Users
/* Add a user to the database
Returns all users. */
export function addUser(userName) {
  insertUser.run(userName);
  return getAllUsers();
}

// Reviews
/* Add a review to the database
Returns all reviews from the given user (by user ID) on the given TV Show (by tvShow ID). */
export function addReview(reviewContent, tvShowID, userID) {
  insertReview.run(reviewContent, tvShowID, userID);
  return getAllReviewsByTVShowIDAndUserID(tvShowID, userID);
}

// TV Shows
/* Adds a TV Show to the database
Returns all TV Shows. */
export function addTVShow(showName, description, likes, imgID) {
  insertTVShows.run(showName, description, likes, imgID);
  return getAllTVShows();
}

// #endregion ADD / POST / INSERT
/* ----- */
// #region PUT / MODIFY / MUTATE

// Users
/* Modify a user's name with the given userName,  specified by ID
Returns the modified user after the change. */
export function modifyUserNameByID(newUserName, userID) {
  updateUserNameByID.run(newUserName, userID);
  return getUserByID(userID);
}

/* Replace a user's name with the given userName, specified by Name
Returns the modified user after the change. */
export function modifyUserNameByName(newUserName, userName) {
  updateUserNameByName.run(newUserName, userName);
  return getUserByName(newUserName);
}

// Reviews
/* Replace a review's content with the new content, specified by ID
Returns the modified review after the change. */
export function modifyReviewByReviewID(newReviewContent, reviewID) {
  updateReviewByReviewID.run(newReviewContent, reviewID);
  return getReviewByID(reviewID);
}

// TV Shows
/* Modify the rating of a TV Show with the given rating, specified by ID
Returns the modified TV Show after the change.*/
export function modifyTVShowLikesReplaceByID(newLikeCount, tvShowID) {
  updateTVShowLikesReplaceByID.run(newLikeCount, tvShowID);
  return getTVShowByID(tvShowID);
}

/* Modify the rating of a TV by adding the given rating to it, specified by ID.
Returns the modified TV Show after the change. */
export function modifyTVShowLikesAdditiveByID(tvShowID) {
  updateTVShowLikesAdditiveByID.run(tvShowID);
  return getTVShowByID(tvShowID);
}

/* Modify the rating of a TV show by replacing it with the given rating, specified by TV Show Name. 
Returns the modified TV Show after the change. */
export function modifyTVShowLikesReplaceByName(newLikeCount, tvShowName) {
  updateTVShowLikesReplaceByName.run(newLikeCount, tvShowName);
  return getTVShowByName(tvShowName);
}

/* Modify the rating of a TV by adding the given rating to it, specified by Name.
Returns the modified TV Show after the change. */
export function modifyTVShowLikesAdditiveByName(tvShowName) {
  updateTVShowLikesAdditiveByName.run(tvShowName);
  return getTVShowByName(tvShowName);
}

// #endregion PUT / MODIFY / MUTATE
/* ----- */
// #region DELETE / REMOVE / ERASE

// Users
/* Delete a user specified by the user ID. 
Returns the result of the operation. */
export function removeUserByID(userID) {
  return deleteUserByID.run(userID);
}

/* Delete a user specified by the user name. 
Returns the result of the operation. */
export function removeUserByName(userName) {
  return deleteUserByName.run(userName);
}

/* Delete a review specified by the review ID. 
Returns the result of the operation. */
export function removeReviewByID(reviewID) {
  return deleteReviewByID.run(reviewID);
}

/* Delete all reviews specified by the user ID. 
Returns the result of the operation. */
export function removeReviewsByUserID(userID) {
  return deleteReviewsByUserID.run(userID);
}

/* Delete all reviews on a TV show, specified by TV Show ID.
Returns the result of the operation. */
export function removeReviewsByTVShowID(tvShowID) {
  return deleteReviewsByTVShowID.run(tvShowID);
}

/* Delete a TV show, specified by TV Show ID.
Returns the result of the operation. */
export function removeTVShowByID(tvShowID) {
  return deleteTVShowByID.run(tvShowID);
}

/* Delete a TV show, specified by TV Show Name.
Returns the result of the operation. */
export function removeTVShowByName(tvShowName) {
  return deleteTVShowByName.run(tvShowName);
}

// #endregion DELETE / REMOVE / ERASE
// #endregion Interface

/* -------------------- */

// #region Testing

function testSelects() {
  console.log("GET USERS");
  console.log(getAllUsers());
  console.log(getUserByName("Kev"));
  console.log(getUserByID(1));

  console.log("GET REVIEWS");
  console.log(getReviewByID(1));
  console.log(getAllReviewsByUserID(1));
  console.log(getAllReviewsByTVShowID(1));
  console.log(getAllReviewsByTVShowIDAndUserID(1, 1));

  console.log("GET TVSHOWS");
  console.log(getAllTVShows());
  console.log(getTVShowByID(1));
  console.log(getTVShowByName("Firefly"));
  console.log(getTVShowsWithLikesLessThan(5));
  console.log(getTVShowsWithLikesGreaterThan(0));
}

function testInserts() {
  console.log(addUser("Sara"));
  console.log(addReview("This is the best show that ever existed!", 1, 1));
  console.log(
    addTVShow("24", "How does he manage to do all this in 24 hours?", 0, 1)
  );
}

function testUpdates() {
  console.log(modifyUserNameByID("Kevin", 1));
  console.log(modifyUserNameByName("Kev", "Kevin"));
  console.log(modifyReviewByReviewID("I REALLY love this show!!", 1));
  console.log(modifyTVShowLikesReplaceByID(1, 1));
  console.log(modifyTVShowLikesAdditiveByID(1));
  console.log(modifyTVShowLikesReplaceByName(1, "Firefly"));
  console.log(modifyTVShowLikesAdditiveByName("Firefly"));
}

function testDeletes() {
  console.log(removeUserByID(1));
  console.log(removeUserByName("Steve"));
  console.log(removeReviewByID(1));
  console.log(removeReviewsByUserID(1));
  console.log(removeReviewsByTVShowID(1));
  console.log(removeTVShowByID(1));
  console.log(removeTVShowByName("Firefly"));
}
//#endregion Testing

/* -------------------- */
