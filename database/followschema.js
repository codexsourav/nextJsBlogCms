import "./db";
import mongoose from "mongoose";
const Follow = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
mongoose.models = {};
module.exports = mongoose.model("follower", Follow);
