import "./db";
import mongoose from "mongoose";
const Users = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});
mongoose.models = {};
module.exports = mongoose.model("users", Users);
