import Deck from "../model/Deck.js";

class DeckDAO {
    // return the created deck
    async createDeck({name}) {
      const deck = await Deck.create({name});
      return deck;
    }

    // return the created flashcard that belongs to a deck
    async createCard({id, front, back}) {
      const deck = await Deck.findByIdAndUpdate(
        id,
        { $push: { cards: {front: front, back: back} } },
        { new: true, runValidators: true },
      );
    return deck;
    }

    // return all Deck
    async readAllDeck({ name }) {
      const filter = {};
      if (name) {
        filter.name = name;
      }
      const decks = await Deck.find(filter);
      return decks;
    }

    // return all flashcards that belongs to a deck
    async readAllCard({id}) {
      const deck = await Deck.findById(id);
      const flashcards = deck.cards;
      return flashcards;
    }
  
    // return the deck with the given id
    // return null if id does not exist in our database
    async readDeck(id) {
      const deck = await Deck.findById(id);
      return deck;
    }
  
    // return the updated deck
    // return null if id does not exist in our database
    async updateDeck({ id,name }) {
      const deck = await Deck.findByIdAndUpdate(
        id,
        { name },
        { new: true, runValidators: true }
      );
      return deck;
    }

    // return the updated flashcard
    // return null if id does not exist in our database
    async updateCard({ deckid, cardid, front, back }) {
      const deck = await Deck.findOneAndUpdate(
        { _id: deckid, "cards._id": cardid },
        { $set: { "cards.$.front": front, "cards.$.back": back } },
        { new: true, runValidators: true }
      );
      return deck;
    }    
  
    // return the deleted deck
    // return null if id does not exist in our database
    async deleteDeck(id) {
      const deck = await Deck.findByIdAndDelete(id);
      return deck;
    }

    // return the deleted flashcard
    // return null if id does not exist in our database
    async deleteCard(deckid, cardid) {
      const deck = await Deck.findByIdAndUpdate(
        deckid,
        { $pull: { cards: {_id:cardid} } },
        { new: true, runValidators: true },
      );
      return deck;
    }
  }
  
  export default DeckDAO;
