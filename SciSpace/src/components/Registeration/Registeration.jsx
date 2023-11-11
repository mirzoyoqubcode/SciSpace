import React from "react";
import styles from "./Registeration.module.scss";
const Registeration = () => {
  return (
    <div>
      <nav>
        <h1>SciSpace</h1>
      </nav>
      <div className={styles.registeration_main}>
        <h1>What type of researcher are you ?</h1>
        <div>
          <article>
            <img src="" alt="" />
            <div className={styles.info_card}></div>
          </article>
          <article>
            <img src="" alt="" />
            <div className={styles.info_card}></div>
          </article>
          <article>
            <img src="" alt="" />
            <div className={styles.info_card}></div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Registeration;
