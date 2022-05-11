const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tweetschema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    title: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tweet", Tweetschema);
