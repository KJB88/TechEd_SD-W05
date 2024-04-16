import Database from "better-sqlite3";

const db = new Database("./assets/db/database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS ...(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        year INTEGER NOT NULL,
        imgUrl TEXT
`);

const insert... = db.prepare(`INSERT INTO ... (..., ...) VALUES (?, ?)`) return(
    "",
    "",
);

const insert... = db.preapare(
    `INSERT INTO ...(..., ...) VALUES (?, ?)`
);

insert...Database.run("", ...)