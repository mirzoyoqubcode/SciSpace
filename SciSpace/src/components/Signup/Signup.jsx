import React from "react";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const Signup = () => {
  // const [formData, setFormData] = useState({
  //   fullname: "s",
  //   institution: "",
  //   department: "",
  //   degree: "",
  //   email: "",
  //   password: "",
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://209.38.252.159/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-control-allow-origin": "*",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       // Redirect to home page on successful submission
  //       window.location.href = "/home";
  //     } else {
  //       // Display an error alert if the request was not successful
  //       alert("Error submitting the form. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting the form:", error);
  //     alert("An unexpected error occurred. Please try again.");
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <div>
      <nav>
        <h1>SciSpace</h1>
      </nav>
      <div className={styles.wrapper_sign_up}>
        <h1>Details</h1>
        <form className={styles.input_wrapper}>
          <p>Full Name</p>
          <input
            type="text"
            // name="fullname"
            // value={formData.name}
            // onChange={handleChange}
            placeholder="Full Name"
          />
          <p>Institution</p>
          <input
            type="text"
            // name="institution"
            // value={formData.institution}
            // onChange={handleChange}
            placeholder="Institution"
          />
          <p>Department</p>
          <input
            type="text"
            // name="department"
            // value={formData.department}
            // onChange={handleChange}
            placeholder="Department"
          />
          <p>Degree</p>
          <input
            type="text"
            // name="degree"
            // value={formData.degree}
            // onChange={handleChange}
            placeholder="Degree"
          />
          <p>Email</p>
          <input
            type="text"
            // name="email"
            // value={formData.email}
            // onChange={handleChange}
            placeholder="Email"
          />
          <p>Password</p>
          <input
            type="password"
            // name="password"
            // value={formData.password}
            // onChange={handleChange}
            placeholder="Password"
          />
          <Link to={"/home"}>
            <button>Sign up</button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
