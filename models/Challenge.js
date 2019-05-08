var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var challengeSchema = new Schema({
  title: string,
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = mongoose.model("Challenge", challengeSchema);
