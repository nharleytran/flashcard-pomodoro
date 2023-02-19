import React, { useState } from "react";
import { Button, Modal } from "@mantine/core";
import "../App.css";
import * as deckApi from "../api";



function EditCardButton(props) {
  const { deckid, cardid, front, back } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [frontValue, setFrontValue] = useState(front);
  const [backValue, setBackValue] = useState(back);



  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    try {
      await deckApi.updateFlashcard(deckid, cardid, frontValue, backValue);
      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Button
      size="md"
      variant="gradient"
      gradient={{ from: "purple", to: "blue", deg: 105 }}
      className="deck-button"
      onClick={handleOpen}
    >
      Edit
    </Button>
    <Modal
        className="input-form"
        title="Edit Your Card Here"
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
          className="input-line"
        />
        <input
          type="text"
          value={backValue}
          onChange={(x) => setBackValue(x.target.value)}
          className="input-line"
        />
        <Button key="submit" onClick={handleSubmit} className="login-button">
          Submit
        </Button>
      </Modal>
    </>
  );
}

export default EditCardButton;