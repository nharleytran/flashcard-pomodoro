import React from 'react';
import { useParams } from 'react-router-dom';
import DeckHeader from '../components/DeckHeader';
import StudyCard from '../components/StudyCard';
import '../App.css';

function Study() {
  const { id } = useParams();

  return (
    <div className="homepage"
    style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <DeckHeader id={id} />
      <StudyCard id={id}/>
    </div>
  );
}

export default Study;