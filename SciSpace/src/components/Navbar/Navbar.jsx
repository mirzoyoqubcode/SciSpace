import React from "react";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { HiOutlineMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const changes = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "100%" },
  };

  return (
    <div className={styles.nav}>
      <h1>SciSpace</h1>
      <ul className={styles.links}>
        <Link to={"/login"}>
          <li>Log in</li>
        </Link>

        <Link to={"/registration"}>
          <li className={styles.signin}>Sign in</li>
        </Link>
      </ul>
      <div className={styles.mobile_nav_icon}>
        <HiOutlineMenu onClick={() => setShowNavMenu(!showNavMenu)} />
      </div>
      <motion.div
        animate={showNavMenu ? "open" : "closed"}
        variants={changes}
        className={clsx({
          [styles.navMenu]: true,
          [styles.showMenu]: showNavMenu,
        })}
      >
        <AiFillCloseCircle
          className={styles.close_icon}
          onClick={() => setShowNavMenu(!showNavMenu)}
        />

        <ul className={styles.mobile_links}>
          <Link to={"/login"}>
            <li>Log in</li>
          </Link>
          <Link to={"/registration"}>
            <li className={styles.mobile_signin}>Sign in</li>
          </Link>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
