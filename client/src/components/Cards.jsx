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

  const handleDelete = async (cardId) => {
    try {
      await deckApi.deleteFlashcard(id, cardId);
      const newCards = cards.filter((card) => card._id !== cardId);
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
        <Card key={card._id} className="flash-card" shadow="sm">
          <Button
            size="md"
            variant="light"
            color="gray"
            className="trashcan-button"
            onClick={() => handleDelete(card._id)}
          >
            <AiOutlineDelete size={20} />
          </Button>
          <div className="flash-card-fb">
            <Text size="xl" weight={700} className="card-front">
              {card.front}
            </Text>
          </div>
          <div className="flash-card-fb">
            <Text size="xl" weight={700} className="card-back">
              {card.back}
            </Text>
          </div>
          <div className="flash-card__actions">
            <Button
              size="md"
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              className="deck-button"
            >
              Edit
            </Button>
          </div>
        </Card>
      ))}
      <AddCardButton id={id} setCards={setCards} />
    </div>
  );
}

export default Cards;
