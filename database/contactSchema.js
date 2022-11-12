import "./db";
import mongoose from "mongoose";
const Contact = new mongoose.Schema({
  name: {
    type: String,
    recquire: true,
  },
  email: {
    type: String,
    recquire: true,
  },
  message: {
    type: String,
    recquire: true,
  },
  date: {
    type: Date,
    recquire: true,
  },
});
mongoose.models = {};
module.exports = mongoose.model("contact", Contact);
