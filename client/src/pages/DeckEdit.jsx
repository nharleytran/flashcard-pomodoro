import React from 'react';
import { useParams } from 'react-router-dom';
import DeckHeader from '../components/DeckHeader';
import Cards from '../components/Cards';
import '../App.css';

function DeckEdit() {
  const { id } = useParams();

  return (
    <div className="homepage">
      <DeckHeader id={id} />
      <Cards id={id}/>
    </div>
  );
}

export default DeckEdit;