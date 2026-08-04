import "./index2.css";
import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [passward, setPassward] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const logindata = {
      username: username,
      passward: passward,
    };
    console.log(logindata);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login Form </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="passward">Passward</label>
          <input
            type="text"
            name="passward"
            required
            autoComplete="off"
            value={passward}
            onChange={(e) => setPassward(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
