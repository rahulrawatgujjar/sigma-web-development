import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "its_a_default_title"
  },
  desc: String,
  isDone: Boolean,
  days: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  }
});

export const Todo = mongoose.model("Todo", TodoSchema);
