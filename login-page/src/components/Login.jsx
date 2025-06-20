import { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function usernameChange(e) {
    setUsername(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log in your MovieApp</h2>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={usernameChange}
          required
          placeholder="Type your usename"
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={passwordChange}
          required
          placeholder="Type your password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
