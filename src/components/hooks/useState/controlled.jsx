import { useState } from "react";
import "/src/index.css";
// controlled from functionality
const ControlledFrom = () => {
  const [name, setName] = useState();
  const Change = (event) => {
    setName(event.target.value);
  };
  // handle submit functionality
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataValue = document.querySelector("#inputName").value;
    console.log(dataValue);
  };
  return (
    <section className="container state-container">
      <h1>unControlled Component</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="inputName"
            name="name"
            type="text"
            value={name}
            onChange={Change}
          />
        </label>
        <br />
        <button type="submit" className="state-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ControlledFrom;
