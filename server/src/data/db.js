import mongoose from "mongoose";
import dotenv from 'dotenv';
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import findOrCreate from "mongoose-findorcreate";


dotenv.config()

const URI = process.env.DB_URI;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export function connect() {

  mongoose.connect(URI, option);
  mongoose.connection.on("error", (err) => {
    console.log("Could not connect to MongoDB");
    console.log(err);
  });

  mongoose.set('strictQuery', true);
  // mongoose.set("useCreateIndex", true);
  mongoose.connection.on("open", () => {
    console.log("Connected to MongoDB!");
  });
}
