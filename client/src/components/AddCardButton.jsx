import React, { useState } from "react";
import { Button, Modal } from "@mantine/core";
import "../App.css";
import * as deckApi from "../api";

function AddCardButton(props) {
  const {id, setDecks} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [frontValue, setFrontValue] = useState("");
  const [backValue, setBackValue] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    try {
      await deckApi.createFlashcard(id, frontValue, backValue);
      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} size="xl" className="card-add-box">
        +
      </Button>
      <Modal
        title="Insert information for your card here"
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
          value={frontValue}
          onChange={(e) => setFrontValue(e.target.value)}
        />
        <input
          type="text"
          value={backValue}
          onChange={(x) => setBackValue(x.target.value)}
        />
        <Button key="submit" onClick={handleSubmit} className="login-button">
          Submit
        </Button>
      </Modal>
    </>
  );
}

export default AddCardButton;
