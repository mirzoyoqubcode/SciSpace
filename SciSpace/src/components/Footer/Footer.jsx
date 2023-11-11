import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className="font-medium">
        © By <span>Dots</span> team
      </h1>
    </div>
  );
};

export default Footer;
