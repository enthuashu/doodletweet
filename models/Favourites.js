const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tweetschema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    tweetid: {
      type: Schema.Types.ObjectId,
      ref: "tweet",
    },
    tweetedby: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("favourite", Tweetschema);
