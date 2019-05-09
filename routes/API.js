var db = require("../models");
const authUser = require("../bin/authService");

module.exports = function(app) {
  //Instagram Login API routes
  app.get("/api/auth", authUser);

  app.get("/api/login", function(req, res) {
    res.redirect(process.env.INSTAGRAM_AUTH_URL);
  });

  // Adding a user to a challenge
  //Adds the user to the challenge checking if he is not already there, then in creates a post for that user and that post will be related to the challenge
  app.post("/api/newuserchallenge/:id", function(req, res) {
    db.Challenge.findOne({user:{_id:req.body.userId}})
    .then(function(dbChallenge){
      if (dbChallenge === null){
          db.Challenge.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { user: req.body.userId } },
            { new: true }
          )
            .populate("user")
            .then(function() {
              db.Post.create(req.body)
                .then(function(dbPost) {
                  db.Post.findOneAndUpdate({ _id: dbPost._id },{ $push: { challenge: req.params.id,user:req.body.userId } },{ new: true }).
                  then (function(dbPost){
                    return db.User.findOneAndUpdate({ _id: req.body.userId},{ $push: { post: dbPost._id} },{ new: true });
                  })
              })
            })
            .then(function() {
              res.json(true);
            })
      }
      else{
        res.json(false);
      }
    })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Removing a user from a challenge
  //Looks for the challenge and removes the association to the user, then it looks for the Post that is related to the challenge & User and delete that post from the user and finally delete that post
  app.post("/api/removeuserchallenge/:id", function(req, res) {
    db.Challenge.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { user: req.body.userId } },
      { new: true }
    )
      .populate("user")
      .then(function(dbChallenge) {
        db.Post.findOne({challenge:{_id:dbChallenge._id},user:{_id:req.body.userId}})
        .then(function(dbPost){
          db.User.findOneAndUpdate({ _id: req.body.userId},{ $pull: { post: dbPost._id } },{ new: true })
          .then(function(){
            return db.Post.deleteOne({_id:dbPost._id})
          })
        })
      })
      .then(function() {
        res.json(true);
      })
      .catch(function(err) {
        res.json(err);
      });
  });


  // Get Number of users in a challenge
  app.get("/api/challengeusers/:id", function(req, res) {
    db.Challenge.findOne({ _id: req.params.id })
      .populate("user")
      .then(function(dbChallenge) {
        res.json(dbChallenge.user);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Get Challenges only belonging to a certain user
  app.get("/api/challenges/:username", function(req, res) {
    db.User.findOne({ _id: req.params.username })
      .populate("user")
      .populate("challenge")
      .then(function(dbUser) {
        res.json(dbUser.post.challenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Post a completed day of a challenge. //Increments one each time right now, could be changed?
    app.post("/api/updatepost/:id", function(req, res) {
    db.Post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { currentDay: 1} },
      { new: true }
    )
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

    //Create Post - Testing purposes
    app.post("/api/newpost", function(req, res) {
    db.Post.create(req.body)
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Create User - Testing purposes
  app.post("/api/signup", function(req, res) {
    db.User.create(req.body)
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Create Challenge - Testing purposes
  app.post("/api/newChallenge", function(req, res) {
    db.Challenge.create(req.body)
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
