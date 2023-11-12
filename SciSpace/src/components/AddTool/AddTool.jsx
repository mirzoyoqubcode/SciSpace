import React from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import styles from "./Addtool.module.scss";
import Footer from "../Footer/Footer";

const AddTool = () => {
  return (
    <div>
      <NavAdmin />
      <div className={styles.wrapper_add_tool}>
        <h1>Add Tools</h1>
        <div className={styles.input_tool_wrapper}>
          <p>Tool Name</p>
          <input type="text" placeholder="Tool Name" />
          <p>Link</p>
          <input type="text" placeholder="Link" />
          <button>Add tool</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddTool;
