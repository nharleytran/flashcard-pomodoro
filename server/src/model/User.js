import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema ({
  username: String,
  name: String,
  googleId: String,
  secret: String
});

const User = mongoose.model("User", userSchema);

export default User;