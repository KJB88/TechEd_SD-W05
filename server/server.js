import express, { request, response } from "express";
import cors from "cors";
import { addUser, getReviewByID, getUserByID } from "./assets/js/dbHandler.js";

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
  response.json(addUser(request.body.name));
});

app.get("/get/user", (request, response) => {
  response.json(getUserByID(request.body.id));
  console.log(response.body);
});
app.get("/get/review", (request, response) => {
  response.json(getReviewByID(request.body.id));
  console.log(getReview);
});
app.get("/all/reviews", (request, response) => {
  response.json(getAllReviewsByUserID(request.body.id));
  console.log(allReview);
});

app.get("/all/reviews", (request, response) => {
  response.json(getAllReviewsByUserID(request.body.id));
  console.log(allReview);
});

app.get("/all/reviews", (request, response) => {
  response.json(getAllReviewsByUserID(request.body.id));
  console.log(allReview);
});

/*app.post("/tvshow", (request, response) => {
    console.log(request.body);
    newData = request.body.tvshow;
    console.log(newData);
    response.json(request.body);
  });*/

// app.delete()
//app.put()
