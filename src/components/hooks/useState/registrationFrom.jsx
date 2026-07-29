import "/src/index.css";
import { useState } from "react";

export const RegistrationFrom = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "passward":
        setPassward(value);
        break;
      case "phone":
        setPhoneNumber(value);
        break;
    }
  };
  // handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1> Sign Up</h1>
          <p> Please fil the from to create an account</p>

          <label htmlFor="firstName">
            <b>Frist Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={firstName}
            onClick={handleChange}
          />
          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last Name"
            required
            value={lastNmae}
            onClick={handleChange}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onClick={handleChange}
          />
          <label htmlFor="passward">
            <b>Passward</b>
          </label>
          <input
            type="passward"
            placeholder="Enter Passward"
            name="passward"
            required
            value={passward}
            onClick={handleChange}
          />
          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phone"
            placeholder="9873428090"
            required
            value={phoneNumber}
            onClick={handleChange}
          />

          <p>
            By creating an account you agree to 📤
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>
          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <section className="summary"></section>
    </>
  );
};
