import express, { request, response } from "express";
import cors from "cors";

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
  console.log(request.body);
  response.json(request.body);
});

app.get("/all/users", (request, response) => {
  response.json(request.body);
  console.log(request.body);
});

/*app.post("/tvshow", (request, response) => {
    console.log(request.body);
    newData = request.body.tvshow;
    console.log(newData);
    response.json(request.body);
  });*/

// app.delete()
//app.put()
