var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: Number,
  username: String,
  full_name: String,
  bio: String,
  website: String,
  profile_picture: String,
  access_token: String,
  password: String,
  challenge: [{
    type: Schema.Types.ObjectId,
    ref: "Challenge"
  }]
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
