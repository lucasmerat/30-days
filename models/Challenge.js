var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var challengeSchema = new Schema({
  title: String,
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = mongoose.model("Challenge", challengeSchema);
