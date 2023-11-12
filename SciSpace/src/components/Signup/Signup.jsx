import React from "react";
import styles from "./Signup.module.scss";
import { useState } from "react";
import Footer from "../Footer/Footer";
const Signup = () => {
  return (
    <div>
      <nav>
        <h1>SciSpace</h1>
      </nav>
      <div className={styles.wrapper_sign_up}>
        <h1>Details</h1>
        <div className={styles.input_wrapper}>
          <p>Full Name</p>
          <input type="text" placeholder="Full Name" />
          <p>Institution</p>
          <input type="text" placeholder="Institution" />
          <p>Department</p>
          <input type="text" placeholder="Department" />
          <p>Degree</p>
          <input type="text" placeholder="Degree" />
          <p>Email</p>
          <input type="text" placeholder="Email" />
          <p>Password</p>
          <input type="password" placeholder="Password" />
          <button>Sign up</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
