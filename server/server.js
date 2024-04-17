import express, { request, response } from "express";
import cors from "cors";
import {
  addUser,
  getAllReviewsByUserID,
  getReviewByID,
  getUserByID,
} from "./assets/js/dbHandler.js";

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
app.get("/get/reviews/all", (request, response) => {
  response.json(getAllReviewsByUserID(request.body.id));
  console.log(getAllReviewsByUserID);
});

app.post("/add/review", (request, response) => {
  console.log(request.body.reviews);
  response.json(addAllReviews(request.body.reviews));
});

app.get("/get/review/all/byTvshow", (request, response) => {
  response.json(getAllReviewsByTVShowID(request.body.id));
  console.log(allReviewByTVshow);
});

app.post("/add/tvshow", (request, response) => {
  console.log(request.body.tvshow);
  response.json(addTVShow(request.body.id));
});

app.get("/get/allreviewsbyusername", (request, response) => {
  response.json(getAllReviewsByUserID(request.body.id));
  console.log(allReviewByUsername);
});

/*app.post("/tvshow", (request, response) => {
    console.log(request.body);
    newData = request.body.tvshow;
    console.log(newData);
    response.json(request.body);
  });*/

// app.delete()
//app.put()
