import "/src/index.css";

const ControlledFrom = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="container state-container">
      <h1>Controlled Component</h1>
      <form onSubmit={handleSubmit}>
        <label>
          =Name:
          <input id="inputName" name="name" type="text" />
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
