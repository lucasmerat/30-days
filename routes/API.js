var db = require("../models");
const authUser = require("../bin/authService");

module.exports = function(app) {
  //Instagram Login API routes
  app.get("/api/auth", authUser);

  app.get("/api/login", function(req, res) {
    res.redirect(process.env.INSTAGRAM_AUTH_URL);
  });

  // Adding a user to a challenge - Not Used
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

  // Removing a user from a challenge - Not Used
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

   //Post a completed day of a challenge. //Increments one each time right now, could be changed? - Not Used
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

  //Create Challenge
  app.post("/api/newChallenge", function(req, res) {
    db.Challenge.create(req.body)
      .then(function(dbChallenge) {
        res.json(dbChallenge);
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
  // Get user info
  app.get("/api/user/:username", function(req, res) {
    db.User.findOne({ username: req.params.username })
      .populate("challenge")
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Get Challenges only belonging to a certain user
  app.get("/api/challenges/:id", function(req, res) {
    db.User.findOne({ _id: req.params.id })
      .populate("challenge")
      .then(function(dbUser) {
        res.json(dbUser.challenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Get all challenges
  app.get("/api/challenges", function(req, res) {
    db.Challenge.find()
      .populate("user")
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

   // Get challenge by id
  app.get("/api/challenge/:id", function(req, res) {
    db.Challenge.findOne({_id:req.params.id})
      .populate("user")
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
  //Add a user to a challenge
  //Only adds user to a challenge if not already there
  app.post("/api/addchallengeuser/:id", function(req, res) {
    db.Challenge.findOne({_id:req.params.id, user:{_id:req.body.userId}})
    .then(function(dbChallenge){
      if (dbChallenge === null)
        {db.Challenge.findOneAndUpdate({ _id: req.params.id },{ $push: { user: req.body.userId } },{ new: true })
          .populate("user")
          .then(function(dbChallenge) {
            return db.User.findOneAndUpdate({ _id: req.body.userId},{ $push: { challenge: dbChallenge._id} },{ new: true }).populate("challenge");
          }).then(function(dbUser){
            res.json(dbUser);
          })
      }
      else {
        res.json(dbChallenge);
      }
    })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Remove a user from a challenge
  app.delete("/api/removechallengeuser/:id", function(req, res) {
    db.Challenge.findOneAndUpdate({_id:req.params.id, user:{_id:req.body.userId}},{ $pull: { user: req.body.userId } },{ new: true })
      .populate("user")
      .then(function(dbChallenge) {
        return db.User.findOneAndUpdate({ _id: req.body.userId},{ $pull: { challenge: dbChallenge._id} },{ new: true }).populate("challenge");
      })
      .then(function(dbUser){
        res.json(dbUser);
      })
    .catch(function(err) {
      res.json(err);
    });
  });
};
