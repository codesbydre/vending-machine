import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <h2>Soda</h2>
      <img src="/Soda.jpg" alt="Soda" width="200" />
      <br></br>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Soda;
