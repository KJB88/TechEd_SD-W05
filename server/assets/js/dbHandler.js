import Database from "better-sqlite3";
const db = new Database("./assets/db/database.db");

// #region Queries

/* SELECTS */
// Users
const getAllUsers = db.prepare(`SELECT * FROM users`);
const getUserByName = db.prepare(`SELECT * FROM users WHERE name = ?`);
const getUserByID = db.prepare(`SELECT * FROM users WHERE id = ?`);

// Reviews
const getAllReviewsByUser = db.prepare(
  `SELECT * FROM reviews WHERE userID = ?`
);
const getAllReviewsByShow = db.prepare(`SELECT * FROM reviews WHERE tvID = ?`);
const getAllReviewsByShowAndUser = db.prepare(
  `SELECT * FROM reviews WHERE userID = ? AND tvID = ?`
);

// TV Shows
const getTVShowByID = db.prepare(`SELECT * FROM tv_shows WHERE id = ?`);
const getTVShowByName = db.prepare(`SELECT * FROM tv_shows WHERE name = ?`);
const getTVShowsByLessThanRating = db.prepare(
  `SELECT * FROM tv_shows WHERE rating <= (?)`
);
const getTVShowsByGreaterThanRating = db.prepare(
  `SELECT * FROM tv_shows WHERE rating >= (?)`
);

/* INSERTS */
// Users
const insertUsers = db.prepare(`INSERT INTO users (name) VALUES (?)`);

// Reviews
const insertReview = db.prepare(
  `INSERT INTO reviews (content, userID, tvID) VALUES (?, ?, ?)`
);

// TV Shows
const insertTVShows = db.prepare(
  `INSERT INTO tv_shows (name, rating) VALUES (?, ?)`
);

/* UPDATES */
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
// Replace the rating on a TV Show with the given value, specified by TV Show ID
const updateTVShowRatingReplaceByID = db.prepare(
  `UPDATE tv_shows SET rating = (?) WHERE id = ?`
);

// Add the given value on the rating on a TV Show, specified by TV Show ID
const updateTVShowRatingAdditiveByID = db.prepare(
  `UPDATE tv_shows SET rating = rating + (?) WHERE id = ?`
);

// Replace the rating on a TV Show with the given value, specified by TV Show Name
const updateTVShowRatingReplaceByName = db.prepare(
  `UPDATE tv_shows SET rating = (?) WHERE name = ?`
);

// Add the given value on the rating on a TV Show, specified by TV Show Name
const updateTVShowRatingAdditiveByName = db.prepare(
  `UPDATE tv_shows SET rating = rating + (?) WHERE name = ?`
);

/* DELETES */
// Users

//Reviews
const deleteReviewByID = db.prepare(`DELETE FROM reviews WHERE id = ?`);
const deleteReviewByUserID = db.prepare(`DELETE FROM reviews WHERE userID = ?`);
const deleteReviewByTVShowID = db.prepare(`DELETE FROM reviews where tvID = ?`);

const deleteUserByID = db.prepare(`DELETE FROM users WHERE id = ?`);
const deleteUserByName = db.prepare(`DELETE FROM users WHERE name = ?`);

const deleteTVShowByID = db.prepare(`DELETE FROM tv_shows WHERE id = ?`);
const deleteTVShowByName = db.prepare(`DELETE FROM tv_shows WHERE name = ?`);
// #endregion Queries
