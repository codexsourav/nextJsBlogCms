import "./db";
import mongoose from "mongoose";
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 5,
  },
  poster: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  auther: {
    type: String,
    required: true,
    lowercase: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
mongoose.models = {};
module.exports = mongoose.model("postdata", PostSchema);
