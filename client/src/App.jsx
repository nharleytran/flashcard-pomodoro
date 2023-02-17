import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeckEdit from "./pages/DeckEdit"
// import CardEdit from "./pages/CardEdit"
// import Study from "./pages/Study";

function App() {


  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/deckedit/:id" element={ <DeckEdit/> } />
    </Routes>
  );
}

export default App;
