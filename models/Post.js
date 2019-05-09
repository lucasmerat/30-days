var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title:String,
  body:String,
  currentDay:{
    type:Number,
    default:0},
  totalDays:{
    type:Number,
    default:30},
  createdAt:{
    type:Date,
    default:Date.now
  },
  challenge: [{
    type: Schema.Types.ObjectId,
    ref: "Challenge"
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});


module.exports = mongoose.model("Post", PostSchema);
