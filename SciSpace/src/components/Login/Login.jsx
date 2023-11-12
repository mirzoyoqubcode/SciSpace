import React from "react";
import { useState } from "react";
import styles from "./Login.module.scss";
import Footer from "../Footer/Footer";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await axios.post("your-api-endpoint/login", {
        username,
        password,
      });

      // Assuming the server responds with a token
      const token = response.data.token;

      // Store the token (you might want to use a more secure storage)
      localStorage.setItem("token", token);

      // Redirect or update UI based on authentication state
    } catch (error) {
      console.error("Login failed", error);
      // Handle login failure (e.g., show an error message)
    }
  };
  return (
    <div>
      <nav>
        <h1>SciSpace</h1>
      </nav>
      <div className={styles.wrapper_login}>
        <h1>Login</h1>
        <div className={styles.input_wrapper}>
          <p>Email</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
