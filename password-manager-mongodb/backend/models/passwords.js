import mongoose from "mongoose";

const PasswordSchema = new mongoose.Schema({
  id: String,
  site: String,
  username: String,
  password: String
});

export const Password = mongoose.model("Passwords",PasswordSchema)