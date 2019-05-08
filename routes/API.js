var db = require("../models");

module.exports = function(app) {
  app.get("/api/hello", (req, res) => {
    res.send({ express: "Hello From Express" });
  });

  app.post("/api/world", (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`
    );
  });


 // Adding a user to a challenge
  app.post("/api/newuserchallenge/:id", function(req, res) {
    db.Challenge.findOneAndUpdate({ _id: req.params.id },{ $push: { user: userid } },{ new: true })
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
    db.Challenge.findOneAndUpdate({ _id: req.params.id },{ $pull: { user: userid } },{ new: true })
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
