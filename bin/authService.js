require("dotenv").config();
const httpRequest = require("request");

var User = require("../models/User");

module.exports = function(req, res) {
  var options = {
    url: "https://api.instagram.com/oauth/access_token",
    method: "POST",
    form: {
      client_id: process.env.INSTAGRAM_CLIENT_ID,
      client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: process.env.INSTAGRAM_CALLBACK_URI,
      code: req.query.code
    }
  };

  httpRequest(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var r = JSON.parse(body);
      var user = {
        id: r.user.id,
        username: r.user.username,
        full_name: r.user.full_name,
        bio: r.user.bio,
        website: r.user.website,
        profile_picture: r.user.profile_picture,
        access_token: r.access_token
      };
      User.create(user, function(error) {
        if (error) res.send(error);
        if (process.env.NODE_ENV === "development") {
          res.redirect("http://localhost:3000/profile");
        } else {
          res.redirect("/profile");
        }
      });
    }
  });
};
