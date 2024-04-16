import express, { request, response } from "express";
import cors from "cors";
import { getUserByID } from "./assets/js/dbHandler.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
  response.json("This is root route");
});

app.listen(8080, function () {
  console.log("server is running on port 8080");
});

app.post("/add/user", (request, response) => {
  console.log(request.body.name);
  response.json(request.body);
});

app.get("/get/user", (request, response) => {
  response.json(getUserByID(request.body.id));
  console.log(response.body);
});

/*app.post("/tvshow", (request, response) => {
    console.log(request.body);
    newData = request.body.tvshow;
    console.log(newData);
    response.json(request.body);
  });*/

// app.delete()
//app.put()
