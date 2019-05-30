require("dotenv").config();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require("../models/User");

passport.serializeUser((user,done)=>{
done(null,user.id);
});

module.exports = 
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback   : true
    },
    function(req,accessToken, refreshToken, profile, done) {
      var user = {
        id: profile.id,
        username: profile.displayName,
        full_name: profile.displayName,
        profile_picture: profile.photos[0].value,
      };
      User.findOneAndUpdate({id:user.id},user,{upsert:true, returnNewDocument:true, new:false},function(err,dbUser){
        if (err) res.send(err);
        done(null,dbUser);
      }); 
    }
  ));
