import "/src/index.css";
import { useState } from "react";
const ShortCircuit = () => {
  const [isloggedIn, setIsLoggedIn] = useState(true);
  return (
    <section className="container short-container">
      <h1>Welcome to Short Circuit Evaluation</h1>
      {<p>You are logged in!</p>}
      <div className="grid-three-cols">
        <button onClick={() => setIsLoggedIn(!isloggedIn)}>
          Toggle login State
        </button>
        <button>Set User</button>
        <button> Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuit;
