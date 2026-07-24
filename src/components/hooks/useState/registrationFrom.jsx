import "/src/index.css";
import { useState } from "react";

export const RegistrationFrom = () => {
  const [firstName, setFirstName] = useState("");
  const [lastNmae, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <form>
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
