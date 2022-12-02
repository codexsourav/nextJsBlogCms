import "./db";
import mongoose from "mongoose";
const Comment = new mongoose.Schema({
  postid: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    default: "#",
  },
  maindate: {
    type: String,
    required: true,
  },
  view: {
    type: Boolean,
    default: false,
  },

  date: {
    type: Date,
    required: true,
  },
});
mongoose.models = {};
module.exports = mongoose.model("comments", Comment);
