import express, { request, response } from "express";
import cors from "cors";
import { addUser, getAllReviewsByUserID, getReviewByID, getUserByID } from "./assets/js/dbHandler.js";

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
app.get("/get/all reviews by user", (request, response) =>{
  response.json(getAllReviewsByUserID(request.body.id));
  console.log(getAllReviewsByUserID);
});

app.post("/add/all reviews", (request, response) =>{
    console.log(request.body.allreviews);
    response.json(addAllReviews(request.body.allreviews));
  });

app.get("/get/all reviews by tv show", (request, response) => {
  response.json(app.get("/all/reviews", (request, response) => {
    response.json(getAllReviewsByTVshowID(request.body.id));
    console.log(allReviewByTVshow);
  })

  app.post("/add/all reviews by tv show", (request, response) =>{
    console.log(request.body.allreviewsbytvshow);
    response.json(addAllReviewsByTVShow(request.body.allreviewsbytvshow));
  })

app.get("/get/all reviews by username", (request, response) =>{
  response.json(getAllReviewsByUserID(request.body.id));
  console.log(allReviewByUsername);
})

app.post("/get/all reviews by username", (request, response) =>{
    console.log(request.body.allreviewsbyusername);
    response.json(addAllReviewsByUsername(request.body.allreviewsbyusername));
  })

/*app.post("/tvshow", (request, response) => {
    console.log(request.body);
    newData = request.body.tvshow;
    console.log(newData);
    response.json(request.body);
  });*/

// app.delete()
//app.put()
