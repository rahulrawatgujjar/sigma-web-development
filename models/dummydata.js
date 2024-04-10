import mongoose from "mongoose";

const DummydataSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean
});

export const DummyData = mongoose.model("Dummydata", DummydataSchema);
