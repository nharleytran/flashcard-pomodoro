import React, { useState, useEffect } from 'react';
import AddDeckButton from './AddDeckButton';
import { Button, Card, Text } from '@mantine/core';
import '../App.css';
import * as deckApi from "../api";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai';

function Decks() {
  const [decks,setDecks] = useState([]);

  useEffect(() => {
    deckApi.getAllDecks()
      .then((decks) => setDecks(decks))
  }, []);

  const handleDelete = async (deckId) => {
    try {
      await deckApi.deleteDeck(deckId);
      const newDecks = decks.filter((deck) => deck._id !== deckId);
      setDecks(newDecks);
    } catch (err) {
      console.error(err);
    }
  }

  if (!decks) {
    return null;
  }
  

  return (
    <div className="decks-container">
      {decks.map((deck) => (
        <Card key={deck._id} className="deck-box" shadow="sm">
        <Button size='md' variant="light" color="gray" className="trashcan-button" onClick={() => handleDelete(deck._id)}>
          <AiOutlineDelete size={20} />
        </Button>
          <div className="deck-content">
            <Text size="xl" weight={700} className="deck-title">
              {deck.name}
            </Text>
            <Button size='md' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} className="deck-button">Study</Button>
            <Link to={`/deckedit/${deck._id}`}>
              <Button size='md' variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} className="deck-button">Edit</Button>
            </Link>
          </div>
        </Card>
      ))}
      <AddDeckButton setDecks={setDecks}/>
    </div>
  );
}

export default Decks;
