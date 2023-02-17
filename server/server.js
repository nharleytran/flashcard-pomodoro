import app from "./src/index.js";

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Flashcard API at http://localhost:${PORT}/`);
});