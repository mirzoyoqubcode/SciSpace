import React, { useState } from "react";
import styles from "./Registration.module.scss";
import register1 from "../../assets/register1.png";
import register2 from "../../assets/register2.png";
import register3 from "../../assets/register3.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <nav>
        <h1>SciSpace</h1>
      </nav>
      <div className={styles.registeration_main}>
        <h1>What type of researcher are you ?</h1>
        <div className={styles.container_register}>
          <Link to={"/signup"}>
            <article>
              <img src={register1} alt="" />
              <div className={styles.info_card}>
                <p>Academic researcher</p>
                <p className={styles.desc_info}>
                  Academic researcher explanation
                </p>
              </div>
            </article>
          </Link>
          <Link to={"/signup"}>
            <article>
              <img src={register2} alt="" />
              <div className={styles.info_card}>
                <p>Corporate, government, NGO</p>
                <p className={styles.desc_info}>
                  Corporate, government, or NGO researcher explanation
                </p>
              </div>
            </article>
          </Link>
          <Link to={"/signup"}>
            <article>
              <img src={register3} alt="" />
              <div className={styles.info_card}>
                <p>Not a researcher</p>
                <p className={styles.desc_info}>
                  Journalists, citizen scientists in reading and discovering
                  research
                </p>
              </div>
            </article>
          </Link>
        </div>
        <Link to={"/login"}>
          <p className={styles.info_btn}>Already signed in?</p>
        </Link>

        <Link className={styles.btn_wrapper_login} to={"/signup"}>
          <button className={styles.btn_register}>Sign up</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
