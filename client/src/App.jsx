import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeckEdit from "./pages/DeckEdit"
import Study from "./pages/Study";

function App() {


  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/deckedit/:id" element={ <DeckEdit/> } />
      <Route path="/study/:id" element={ <Study/> } />
    </Routes>
  );
}

export default App;
