var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  postDay: Number,
  image:String,
  body:String,
  createdAt:{
    type:Date,
    default:Date.now()
  },
  challenge: {
    type: Schema.Types.ObjectId,
    ref: "Challenge"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});


module.exports = mongoose.model("Post", PostSchema);
