import express from "express";
import flashcards from "./routes/flashcards.js";
import * as db from "./data/db.js";
import bodyParser from "body-parser";
import cors from 'cors';

db.connect();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.get("/", (req, res) => {
  res.send("Welcome to the Flashcard API!");
});

app.use(flashcards);

app.use((err, req, res, next) => {
  if (err) {
    const code = err.status || 500;
    res.status(code).json({
      status: code,
      message: err.message || `Internal Server Error!`,
    });
  }
  next();
});

export default app;
