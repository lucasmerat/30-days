var db = require("../models");
const authUser = require("../bin/authService");

module.exports = function(app) {
  //Instagram Login API routes
  app.get("/api/auth", authUser);

  app.get("/api/login", function(request, response) {
    response.redirect(process.env.INSTAGRAM_AUTH_URL);
  });

  // Adding a user to a challenge
  app.post("/api/newuserchallenge/:id", function(req, res) {
    db.Challenge.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { user: req.body.userId } },
      { new: true }
    )
      .populate("user")
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Removing a user from a challenge
  app.post("/api/removeuserchallenge/:id", function(req, res) {
    db.Challenge.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { user: req.body.userId } },
      { new: true }
    )
      .populate("user")
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Users in a challenge
  app.get("/api/userchallenge/:id", function(req, res) {
    db.Challenge.findOne({ _id: req.params.id })
      .populate("user")
      .then(function(dbChallenge) {
        res.json(dbChallenge.user);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
