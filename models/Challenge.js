var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var challengeSchema = new Schema({
  title: String,
  description:String,
  image:String,
  startDate: Date,
  createdAt:{
    type:Date,
    default:Date.now()
  },
  days:[{
    type: String
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = mongoose.model("Challenge", challengeSchema);
