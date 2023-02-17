import React, { useState, useEffect } from 'react';
import { Button, Text } from '@mantine/core';
import * as deckApi from "../api";
import { Link } from "react-router-dom";
import '../App.css';


function DeckHeader(props) {
  const { id } = props;
  const [deck, setDeck] = useState(null);
  useEffect(() => {
    deckApi.getDeck(id)
      .then((deck) => setDeck(deck))
  }, [deck]);

  if (!deck) {
    return null;
  }

  return (
    <div className="header">
      <Text size="lg" weight={700} sx={{ fontSize: '29px' }} className="header-text">
        {deck.name}
      </Text>
      <Link to={'/'}>
      <Button>
        Back
      </Button>
      </Link>
    </div>
  );
}

export default DeckHeader;
