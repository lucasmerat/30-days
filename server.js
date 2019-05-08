require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var authUser = require("./bin/authService");
const util = require("util");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/project3";
const PORT = process.env.PORT || 5000;

//Connect to MongoDB
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true
  },
  function(err) {
    console.log(err);
  }
);

//Initialize Express Server
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Instagram Login API routes
app.get("/auth", authUser);

app.get("/login", function(request, response) {
  response.redirect(process.env.INSTAGRAM_AUTH_URL);
});

// API calls
require("./routes/API")(app);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
