var db = require("../models");
const authUser = require("../bin/authService");
const passport = require("passport");
const passportSetup = require("../bin/authGoogle");
require("dotenv").config();

module.exports = function(app) {
  //Instagram Login API routes
  app.get("/api/auth", authUser);

  app.get("/api/login", function(req, res) {
    res.redirect(process.env.INSTAGRAM_AUTH_URL);
  });

  //Google Login API routes
  app.get(
    "/api/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );

  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.cookie("userId", req.user._id.toString(), { maxAge: 604800000 });
      if (process.env.NODE_ENV === "development") {
        res.redirect("http://localhost:3000/profile/browse");
      } else {
        res.redirect("/profile/browse");
      }
    }
  );

  //Create local user with username
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    req.body.username = req.body.username.toLowerCase();
    db.User.find(
      {
        username: req.body.username
      },
      (err, existingUsers) => {
        if (err) {
          return res.send({
            success: false,
            message: "Server error"
          });
        } else if (existingUsers.length > 0) {
          console.log("Existing user length is greater than 0");
          return res.send({
            success: false,
            message: "Username already exists"
          });
        }
        const newUser = new db.User();

        newUser.username = req.body.username;
        newUser.password = newUser.generateHash(req.body.password);
        newUser.save((err, user) => {
          if (err) {
            return res.send({
              success: false,
              message: "Server error"
            });
          }
          return res.send({
            success: true,
            message: "Signed up"
          });
        });
      }
    );
  });

  //Login local user with username and pass
  app.post("/api/login/usernamepass", function(req, res) {
    db.User.find(
      {
        username: req.body.username
      },
      (err, userResponse) => {
        if (err) {
          res.send({
            success: false,
            message: "Server error"
          });
        }
        if (userResponse.length < 1) {
          res.end({
            success: false,
            message: "Invalid login"
          });
        }
        const user = userResponse[0];
        if(!user.validPassword(req.body.password)){
          res.send({
            success: false,
            message: "Invalid password"
          });
        } else{
          res.cookie("userId", user._id.toString(), { maxAge: 604800000 });
          if (process.env.NODE_ENV === "development") {
            res.redirect(200,"http://localhost:3000/profile/browse");
          } else {
            res.redirect(200,"/profile/browse");
          }
        }
      }
    );
  });

  //Create Post
  app.post("/api/newpost", function(req, res) {
    db.Post.findOneAndUpdate(
      {
        postDay: req.body.postDay,
        body: req.body.body,
        image: req.body.image,
        user: req.body.user,
        challenge: req.body.challenge
      },
      req.body,
      { upsert: true, returnNewDocument: true, new: true }
    )
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Create Challenge
  app.post("/api/newChallenge", function(req, res) {
    db.Challenge.findOneAndUpdate(
      {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        days: req.body.days
      },
      req.body,
      { upsert: true, returnNewDocument: true, new: true }
    )
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Delete challenge by id
  app.delete("/api/deleteChallenge/:id", function(req, res) {
    db.Challenge.findOneAndDelete({ _id: req.params.id })
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
  app.get("/api/user/:id", function(req, res) {
    console.log("Parametro",req.params.id)
    db.User.findById(req.params.id)
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
      .populate({ path: "challenge", options: { sort: { startDate: 1 } } })
      .then(function(dbUser) {
        res.json(dbUser.challenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Get all challenges user doesn't belong to
  app.get("/api/notchallenges/:id", function(req, res) {
    db.Challenge.find({ user: { $nin: [req.params.id] } })
      .sort({ startDate: 1 })
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
    db.Challenge.findOne({ _id: req.params.id })
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
    db.Challenge.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { user: req.body.userId } },
      { new: true }
    )
      .then(function(dbChallenge) {
        return db.User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { challenge: dbChallenge._id } },
          { new: true }
        ).populate("challenge");
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Remove a user from a challenge - Not Used
  app.delete("/api/removechallengeuser/:id", function(req, res) {
    db.Challenge.findOneAndUpdate(
      { _id: req.params.id, user: { _id: req.body.userId } },
      { $pull: { user: req.body.userId } },
      { new: true }
    )
      .then(function(dbChallenge) {
        return db.User.findOneAndUpdate(
          { _id: req.body.userId },
          { $pull: { challenge: dbChallenge._id } },
          { new: true }
        ).populate("challenge");
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Get all posts related to the user challenges
  app.get("/api/challengeposts/:id", function(req, res) {
    db.User.findOne({ _id: req.params.id })
      .then(function(dbUser) {
        return db.Post.find({ challenge: { $in: dbUser.challenge } })
          .sort({ createdAt: "desc" })
          .populate("challenge")
          .populate("user")
          .populate("likes");
      })
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Add like to a post
  app.post("/api/likePost/:postid/:userid", function(req, res) {
    db.Post.findOneAndUpdate(
      { _id: req.params.postid },
      { $addToSet: { likes: req.params.userid } },
      { new: true }
    )
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Unlike a post
  app.post("/api/unlikePost/:postid/:userid", function(req, res) {
    db.Post.findOneAndUpdate(
      { _id: req.params.postid },
      { $pull: { likes: req.params.userid } },
      { new: true }
    )
      .then(function(dbPost) {
        res.json(dbPost);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
