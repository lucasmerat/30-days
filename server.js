const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const InstagramStrategy = require("passport-instagram").Strategy;
const util = require("util");
const INSTAGRAM_CLIENT_ID = process.env.CLIENT_ID;
const INSTAGRAM_CLIENT_SECRET = process.env.CLIENT_SECRET;
const MONGO_PW = process.env.MONGO_PW;
const port = process.env.PORT || 5000;

//Connect to MongoDB
mongoose.connect(
  "mongodb://srv-captain--project-3-db:27017/project3",
  {
    useNewUrlParser: true
  },
  function(err) {
    console.log(err);
  }
);

//Initialize Passport and Instagram Authentication
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new InstagramStrategy(
    {
      clientID: INSTAGRAM_CLIENT_ID,
      clientSecret: INSTAGRAM_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/instagram/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function() {
        // To keep the example simple, the user's Instagram profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Instagram account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

//Initialize Express Server
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// API calls
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
