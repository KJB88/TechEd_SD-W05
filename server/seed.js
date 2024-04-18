/*  Seed for Database
/* -------------------- */

//#region Setup

import Database from "better-sqlite3";
const db = new Database("./assets/db/database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS tv_shows
(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    desc TEXT NOT NULL,
    likes INTEGER NOT NULL DEFAULT 0,
    imgID INTEGER NOT NULL DEFAULT 0
)`);

db.exec(`
CREATE TABLE IF NOT EXISTS users 
(
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
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
  `INSERT INTO tv_shows (name, desc, likes, imgID) VALUES (?, ?, ?, ?)`
);
insertTVShows.run(
  "Fallout",
  "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
  6342,
  0
);
insertTVShows.run(
  "Attack on Titan",
  "After his hometown is destroyed and is traumatized, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
  4353,
  1
);

insertTVShows.run(
  "The Witcher",
  "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
  9000,
  2
);

insertTVShows.run(
  "Dr Who",
  "The further adventures in time and space of the alien adventurer known as the Doctor and his companions from planet Earth.",
  7634,
  3
);

insertTVShows.run(
  "Bluey",
  "The slice-of-life adventures of an Australian Blue Heeler Cattle Dog puppy as she has fun with her family and friends in everyday situations.",
  9999,
  4
);

insertTVShows.run(
  "Firefly",
  "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
  6534,
  5
);

insertTVShows.run(
  "Cowboy Bebop",
  "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
  2335,
  6
);

insertTVShows.run(
  "Scrubs",
  "In the unreal world of Sacred Heart Hospital, intern John 'J.D.' Dorian learns the ways of medicine, friendship and life.",
  5654,
  7
);

insertTVShows.run(
  "Red Dwarf",
  "The adventures of the last human alive and his friends, stranded three million years into deep space on the mining ship Red Dwarf.",
  3242,
  8
);

insertTVShows.run(
  "My Hero Academia",
  "A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.",
  3425,
  9
);

const insertUsers = db.prepare(`INSERT INTO users (name) VALUES (?)`);
insertUsers.run("Kev");
insertUsers.run("Connor");
insertUsers.run("Colin");
insertUsers.run("Themba");

const insertReview = db.prepare(
  `INSERT INTO reviews (content, tvID, userID) VALUES (?, ?, ?)`
);
insertReview.run(
  "Attack on Titan is the best tall people anime I have ever seen.",
  2,
  1
);
insertReview.run("Best TV show ever! 10 out of 10, would cry again.", 5, 2);
insertReview.run(
  "Attack on Titan - emotion rollercoaster from beginning to end, who'd have though they planned from the start!",
  2,
  2
);
