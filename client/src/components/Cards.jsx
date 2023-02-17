import React, { useState, useEffect } from "react";
import AddCardButton from "./AddCardButton";
import { Button, Card, Text } from "@mantine/core";
import "../App.css";
import * as deckApi from "../api";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

function Cards(props) {
  const { id } = props;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    deckApi.getAllFlashcards(id).then((cards) => setCards(cards));
  }, [cards]);

  const handleDelete = async (deckId) => {
    try {
      await deckApi.deleteDeck(deckId);
      const newDecks = decks.filter((deck) => deck._id !== deckId);
      setCards(newCards);
    } catch (err) {
      console.error(err);
    }
  };

  if (!cards) {
    return null;
  }

  return (
    <div className="decks-container">
      {cards.map((card) => (
        <Card className="flash-card" shadow="sm">
          <div className="flash-card-fb">
            <Text size="xl" weight={700} className="flash-card__title">
              {card.front}
            </Text>
          </div>
          <div className="flash-card-fb">
            <Text size="xl" weight={700} className="flash-card__title">
              {card.back}
            </Text>
          </div>
          <div className="flash-card__actions">
            <Button
              size="md"
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              Edit
            </Button>
          </div>
        </Card>
      ))}
      <AddCardButton setCards={setCards} />
    </div>
  );
}

export default Cards;
