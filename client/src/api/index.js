import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5050",
});

  async function getAllDecks() {
    try {
      const response = await axiosInstance.get('/decks');
      return response.data.data;
    } catch (err) {
      throw err;
    }
  }

  async function getDeck(id) {
    try {
      const response = await axiosInstance.get(`/decks/${id}`);
      return response.data.data;
    } catch (err) {
      throw err;
    }
  }
  async function createDeck(name) {
    try {
      const response = await axiosInstance.post("/decks", { name: name });
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  async function updateDeck(id, deck) {
    try {
      const response = await axiosInstance.put(`/decks/${id}`, deck);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  async function deleteDeck (id) {
    try {
      const response = await axiosInstance.delete(`/decks/${id}`);
      return response.data.data;
    } catch (err) {
      throw err;
    }
  }

  async function getAllFlashcards(deckId) {
    try {
      const response = await axiosInstance.get(`/decks/${deckId}/flashcards`);
      return response.data.data;
    } catch (err) {
      throw err;
    }
  }
  async function createFlashcard(deckId, front, back) {
    try {
      const response = await axiosInstance.post(`/decks/${deckId}/flashcards`, {front: front, back: back});
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  async function updateFlashcard (deckId, flashcardId, flashcard) {
    try {
      const response = await axiosInstance.put(`/decks/${deckId}/flashcards/${flashcardId}`, flashcard);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  async function deleteFlashcard (deckId, flashcardId) {
    try {
      const response = await axiosInstance.delete(`/decks/${deckId}/flashcards/${flashcardId}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  export { getAllDecks, getDeck, createDeck, updateDeck, deleteDeck, getAllFlashcards, createFlashcard, updateFlashcard, deleteFlashcard };