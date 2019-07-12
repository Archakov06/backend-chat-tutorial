import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
