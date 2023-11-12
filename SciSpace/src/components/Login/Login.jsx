import React from "react";
import styles from "./Login.module.scss";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
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
          <input type="text" placeholder="Username" />
          <p>Password</p>
          <input type="password" placeholder="Password" />
          <button>
            <Link to={"/home"}>Login</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
