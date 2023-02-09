import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Flashcard API");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
