import React from "react";
import { useState } from "react";
import styles from "./Login.module.scss";
import Footer from "../Footer/Footer";
const Login = () => {
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
