import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  name?: string;
  username: string;
  email: string;
  profilePic?: string;
  coverPic?: string;
  razorpayId?: string;
  razorpaySecret?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<User>({
  name: {
    type: String
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "please use a valid email address"]
  },
  profilePic: {
    type: String
  },
  coverPic: {
    type: String
  },
  razorpayId: {
    type: String
  },
  razorpaySecret: {
    type: String
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  updatedAt:{
    type: Date,
    default: Date.now
  }
});

const UserModel = (mongoose.models?.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema);
export default UserModel;