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
  desc: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  cate: {
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
  uri: {
    type: String,
    required: true,
    unique: true,
  },
  maindate: {
    type: String,
    required: true,
  },
  view: {
    type: Number,
    required: true,
  },
  viewcount: {
    type: Number,
  },
});
mongoose.models = {};
module.exports = mongoose.model("postdata", PostSchema);
