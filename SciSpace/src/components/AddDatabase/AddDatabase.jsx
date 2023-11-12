import React from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import Footer from "../Footer/Footer";
import styles from "./AddDatabase.module.scss";
const AddDatabase = () => {
  return (
    <div>
      <NavAdmin />
      <div className={styles.wrapper_add_tool}>
        <h1>Add Database</h1>
        <div className={styles.input_tool_wrapper}>
          <p>Database Name</p>
          <input type="text" placeholder="Tool Name" />
          <p>Link</p>
          <input type="text" placeholder="Link" />
          <button>Add database</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddDatabase;
