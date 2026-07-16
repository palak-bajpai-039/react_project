import "/src/index.css";

const ShortCircuit = () => {
  return (
    <section className="container short-container">
      <h1>Welcome to Short Circuit Evaluation</h1>
      {<p>You are logged in!</p>}
      <div className="grid-three-cols">
        <button>Toggle login State</button>
        <button>Set User</button>
        <button> Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuit;
