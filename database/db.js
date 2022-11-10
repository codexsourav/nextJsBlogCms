import mongoose from "mongoose";
mongoose
  .connect("mongodb+srv://sourav:sourav@cluster0.6aannpk.mongodb.net/test")
  .then(() => {
    console.log("Database Is Connected");
  });
