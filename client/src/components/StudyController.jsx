import React, { useState, useEffect } from "react";
import { Card, Text, Button } from "@mantine/core";
import "../App.css";

function StudyController(props) {
  const { handleFlipCard, handlePrevCard, handleNextCard } = props;

  return (
    <div className="button-bar">
      <Button
        onClick={handlePrevCard}
        size="md"
        variant="gradient"
        gradient={{ from: "grey", to: "blue", deg: 105 }}
        className="deck-button"
      >
        Prev
      </Button>
      <Button
        onClick={handleFlipCard}
        size="md"
        variant="gradient"
        gradient={{ from: "purple", to: "yellow", deg: 105 }}
        className="deck-button"
      >
        Flip
      </Button>
      <Button
        onClick={handleNextCard}
        size="md"
        variant="gradient"
        gradient={{ from: "grey", to: "blue", deg: 105 }}
        className="deck-button"
      >
        Next
      </Button>
    </div>
  );
}

export default StudyController;