import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <h2>Candy</h2>
      <img src="/Candy.webp" alt="Candy" width="200" />
      <br></br>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Candy;
