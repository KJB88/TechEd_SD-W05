import Database from "better-sqlite3";
import express, { request, response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const db = new Database("database.db");

app.get("/...", function (request, response) {
  response.json("This is root route");
});
app.get("/", function (request, response) {
  constant = db.prepare("SELECT* FROM ...").all();
  response.json();
  console.log(...);
});
app.listen(..., function() {
console.log("server is running on port...")
});

let ... = [];
app.get("/", (request, response) => {
    response.json(...);
});

app.post("/",(request. response) = >{
    const {...Database, ...} = request.body; timetstamp: newDate () };
    const new...{...Database, ...Database.SqliteError,}
    ...Database.push(new...);
    response.status().json({... ""});
});

// consta timestamp = Date.now();
//console.log(timestamp)
//const timestampInSeconds= Math.floor(Date.now() / 1000);
//console.log(timestampInSeconds)

