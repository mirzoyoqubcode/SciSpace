import React from "react";
import styles from "./Header.module.scss";
import headerImage from "../../assets/header_image_1.png";
import glossImage from "../../assets/gloss1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const buttonVariants = {
    hover: {
      scale: 1,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
    },
  };
  return (
    <div>
      <div className={styles.wrapper_header}>
        <div className={styles.description_header}>
          <motion.div
            className={styles.text_header}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            <h1>
              Learn about scientific discoveries and maintain your connection to
              the science world
            </h1>
          </motion.div>
          <Link to={"/registration"}>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={styles.btn_join}
            >
              Join Now
            </motion.button>
          </Link>
        </div>
        <motion.div className={styles.images}>
          <img src={headerImage} alt="" />
        </motion.div>
      </div>
      <div className={styles.progress_wrapper}>
        <div className={styles.gloss_image}>
          <img src={glossImage} alt="" className={styles.gloss} />
        </div>
        <div className={styles.progress_desc}>
          <motion.div
            className={styles.progress_title}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            <h1 className={styles.progress_text}>
              <span>Progress</span> your scientific work and become part of a
              <span> network</span> of researchers
            </h1>
          </motion.div>
          <motion.div
            className={styles.skills}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            <div className={styles.skills1}>
              <button>Engineering</button>
              <button>Biology</button>
            </div>
            <div className={styles.skills2}>
              <button>Chemistry</button>
              <button>Physics</button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.community}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1 }}
        >
          Evaluate your <span>influence</span> in the science community
        </motion.h1>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className={styles.community_btn}
        >
          Join Now
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
