import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Soda from "./components/Soda";
import Chips from "./components/Chips";
import Candy from "./components/Candy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </Router>
  );
}

export default App;
