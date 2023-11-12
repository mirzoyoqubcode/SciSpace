import React from "react";
import styles from "./NavAdmin.module.scss";
import Logo from "../../assets/logo1.png";
import Avatar_navbar from "../../assets/Avatar_Image.png";
import { GrAddCircle } from "react-icons/gr";
import { AiOutlineBell } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
const NavAdmin = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_wrapper}>
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Tools</li>
        </ul>
      </div>
      <div className={styles.icons}>
        <div className="flex gap-x-4  max-w-[700px] mx-auto">
          <div className="flex items-center relative w-full">
            <input
              type="search"
              name=""
              id=""
              className="bg-transparent outline-none border-2 border-black px-12 py-2 w-full placeholder:text-black font-medium text-lg lg:text-xl "
              placeholder="Search questions"
            />
            <LuSearch className="absolute left-4 font-medium text-lg lg:text-xl" />
          </div>
        </div>
        <GrAddCircle />
        <AiOutlineBell />
        <img src={Avatar_navbar} alt="" />
      </div>
    </div>
  );
};

export default NavAdmin;
