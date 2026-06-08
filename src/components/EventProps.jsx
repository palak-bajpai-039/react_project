export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey, thank you for hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Palak")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log("Hey User, Welcome");
    props.onClick();
  };

  return (
    <>
      <button onClick={props.onClick}>Click</button>

      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>

      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};

export default EventProps;
