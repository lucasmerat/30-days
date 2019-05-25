require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/project3";
const PORT = process.env.PORT || 5000;
const passport = require("passport");

//Connect to MongoDB
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    dbName: "project3"
  },
  function(err) {
    console.log(err);
  }
);
mongoose.set("useFindAndModify", false);

//Initialize Express Server
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json({ limit: "5mb", type: "application/json" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "5mb",
    type: "application/x-www-form-urlencoding"
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

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
