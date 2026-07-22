import { useState } from "react";
import "/src/index.css";

const CounterChallenges = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
  };
  const handleDecrement = () => {
    setCount(count - step);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container state-container">
      <h1>useState Challenges</h1>

      <p>
        Count : <span> {count}</span>
      </p>

      <div>
        <label>
          Step:
          <input
            type="number"
            vlaue={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
        <br />
        <br />

        <div className="grid-three-cols">
          <button className="state-button" onClick={handleIncrement}>
            Increment
          </button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CounterChallenges;
