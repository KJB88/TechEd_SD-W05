import Database from "better-sqlite3";
const db = new Database("./assets/db/database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS tv_shows
(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    rating REAL NOT NULL DEFAULT 2.5
)`);

db.exec(`
CREATE TABLE IF NOT EXISTS users 
(
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
)`);

db.exec(`
CREATE TABLE IF NOT EXISTS reviews 
(
  id INTEGER PRIMARY KEY,
  content TEXT NOT NULL,
  tvID INTEGER NOT NULL,
  userID INTEGER NOT NULL,
  FOREIGN KEY (tvID) REFERENCES tv_shows (id) ON DELETE CASCADE,
  FOREIGN KEY (userID) REFERENCES users (id) ON DELETE CASCADE
)`);

const insertUsers = db.prepare(`INSERT INTO users (name) VALUES (?)`);

insertUsers.run("Kev");
insertUsers.run("Steve");
insertUsers.run("Alex");

const insertTVShows = db.prepare(
  `INSERT INTO tv_shows (name, rating) VALUES (?, ?)`
);

insertTVShows.run("Firefly", "4.7");
insertTVShows.run("Scrubs", "3.2");

const insertReview = db.prepare(
  `INSERT INTO reviews (content, userID, tvID) VALUES (?, ?, ?)`
);

insertReview.run("I love Firefly!", 1, 1);
insertReview.run("I love Scrubs!", 1, 2);
insertReview.run("I hate Scubs!", 3, 2);

console.log(db);
/* 
db.exec(`
CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        message TEXT NOT NULL,
        likes INTEGER DEFAULT 0
      )
`);

/* Populate Tables 
const seedInsert = db.prepare(
  `INSERT INTO messages (name, message) VALUES 
  (?, ?)`
);
*/
