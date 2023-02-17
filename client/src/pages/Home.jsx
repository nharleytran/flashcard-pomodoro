import React, { useState, useEffect } from 'react';
import Decks from "../components/Decks";
import Header from "../components/Header";
import '../App.css';

function Home() {
  return (
    <div className="homepage">
      <Header/>
      <Decks/>
      </div>
  );
}

export default Home;