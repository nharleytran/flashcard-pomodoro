import React, { useState } from "react";
import { Button, Modal, Text } from "@mantine/core";
import "../App.css";
import * as deckApi from "../api";

function AddDeckButton(props) {
  const {setDecks} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [textValue, setTextValue] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    try {
      await deckApi.createDeck(textValue);
      var alldecks = await deckApi.getAllDecks();
      setDecks(alldecks);
      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} size="xl" className="add-box">
        +
      </Button>
      <Modal
        className="input-form"
        title="Name Your Deck Here"
        opened={isOpen}
        onClose={handleClose}
        closeButtonLabel="Close"
        actions={[
          <Button key="submit" onClick={handleSubmit}>
            Submit
          </Button>,
        ]}
      >
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <Button key="submit" onClick={handleSubmit} className="login-button">
          Submit
        </Button>
      </Modal>
    </>
  );
}

export default AddDeckButton;
