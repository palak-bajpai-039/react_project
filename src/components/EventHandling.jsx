import "./EV.css";

export const EventHanhling = () => {
  //function handleButtonClick() {
  //  alert("On click event");
  //}

  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("Hey I am onclick Event");
  };
  const handlerWelcomeUser = (user) => {
    console.log(`Hey ${user} , welcome`);
  };

  return (
    <>
      {/*  //? Function component with Named function */}
      <button onClick={handleButtonClick}>click me</button>
      <br />
      <button onClick={(event) => handleButtonClick(event)}> click me 2</button>
      <br />
      {/*//? Inline event handlers */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />
      {/*//? Function components with Inline Arrow functions */}
      <button onClick={() => alert("Hey I am inline event function")}>
        Inline Arr Function
      </button>
      <br />
      {/*//? Passing Argument to event handlers */}
      {/*<button onClick={handlerWelcomeUser("vinod")}>click me</button>*/}
      <button onClick={() => handlerWelcomeUser("vinod")}>click me</button>
    </>
  );
};
