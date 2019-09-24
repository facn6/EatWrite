const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//to be used as an endpoint to log moods

app.post("/logmood", ({ body }, res, next) => {
  console
    .log("Body recieved at endpoint:", body)
    .then(res.redirect(`/logs/${username}`))
    .catch(err => next(err));
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
