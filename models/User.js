var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: String,
  username: String,
  full_name: String,
  bio: String,
  website: String,
  profile_picture:{
    type:String,
    default:"http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
  },
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
