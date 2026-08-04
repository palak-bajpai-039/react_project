import "./index2.css";
import { useState } from "react";
export const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlecontact = (e) => {};

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message"> Message</label>
          <textarea
            type="passward"
            name="message"
            requiredautoComplete="off"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit ">Send Message</button>
        </form>
      </div>
    </div>
  );
};
