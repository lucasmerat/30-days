var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: Number,
  username: String,
  full_name: String,
  bio: String,
  website: String,
  profile_picture: String,
  access_token: String,
  challenge: [{
    type: Schema.Types.ObjectId,
    ref: "Challenge"
  }]
});

module.exports = mongoose.model("User", userSchema);
