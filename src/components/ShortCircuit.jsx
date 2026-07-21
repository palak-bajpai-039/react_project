import "/src/index.css";
import { useState } from "react";
const ShortCircuit = () => {
  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");
  return (
    <section className="container short-container">
      <h1>Welcome to Short Circuit Evaluation</h1>
      {isloggedIn && <p>You are logged in!</p>}
      {user ? `Hello ${user}` : "You are logged in!"}
      <div className="grid-three-cols">
        <button onClick={() => setIsLoggedIn(!isloggedIn)}>
          Toggle login State
        </button>
        <button onClick={() => setUser("Technical")}>Set User</button>
        <button> Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuit;
