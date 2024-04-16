import Database from "better-sqlite3";
const db = new Database("./assets/db/database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS tv_shows
(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    desc TEXT NOT NULL,
    likes INTEGER NOT NULL DEFAULT 0
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

const insertTVShows = db.prepare(
  `INSERT INTO tv_shows (name, desc, likes) VALUES (?, ?, ?)`
);
insertTVShows.run("Firefly", "Wild West - but in space!", 0);
insertTVShows.run("Scrubs", "Doctors doing funny doctor stuff.", 0);

const insertUsers = db.prepare(`INSERT INTO users (name) VALUES (?)`);
insertUsers.run("Kev");
insertUsers.run("Steve");
insertUsers.run("Alex");

const insertReview = db.prepare(
  `INSERT INTO reviews (content, userID, tvID) VALUES (?, ?, ?)`
);
insertReview.run("I love Firefly!", 1, 1);
insertReview.run("I love Scrubs!", 1, 2);
insertReview.run("I hate Scubs!", 3, 2);
