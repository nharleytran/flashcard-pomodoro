import React, { useState, useEffect } from "react";
import { Card, Text, Button } from "@mantine/core";
import StudyController from "./StudyController";
import "../App.css";
import * as deckApi from "../api";

function StudyCard(props) {
  const { id } = props;
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyText, setStudyText] = useState("");

  useEffect(() => {
    setStudyText("Flip to Start");
  }, [currentCardIndex]);
  
  useEffect(() => {
    deckApi.getAllFlashcards(id).then((cards) => setCards(cards));
  }, [id]);

  const handleNextCard = () => {
    setCurrentCardIndex((currentIndex) => (currentIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((currentIndex) =>
      currentIndex === 0 ? cards.length - 1 : currentIndex - 1
    );
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
    if(currentCard && studyText === currentCard.front){
      setStudyText(currentCard.back);
    } else if (currentCard) {
      setStudyText(currentCard.front);
    }
  };
  

  const currentCard = cards[currentCardIndex];
  if (!cards || !currentCard) {
    return null;
  } 

  return (
    <div className="decks-container">
      <div>
        <Card
          key={currentCard._id}
          className={`study-card ${isFlipped ? "flipped" : ""}`}
          shadow="sm"
        >
            <Text size="xl" weight={700} className="study-card-text">
              {studyText}
            </Text>
        </Card>
        <StudyController handleFlipCard={handleFlipCard} handlePrevCard = {handlePrevCard} handleNextCard = {handleNextCard} />
      </div>
    </div>
  );
}

export default StudyCard;


