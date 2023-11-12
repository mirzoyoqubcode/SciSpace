import Button from "./Button";
import Footer from "./Footer/Footer";
import { LuSearch } from "react-icons/lu";
import SmallCard from "./SmallCard";
import Old_Avatar from "../assets/old_Avatar.png";
import NavAdmin from "./NavAdmin/NavAdmin";

const Questions = () => {
  return (
    <>
      <NavAdmin />
      <section className="min-h-[78vh] w-full bg-secondary py-12">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <div className="flex gap-x-4 pt-6 max-w-[700px] mx-auto">
            <div className="flex items-center relative w-full">
              <input
                type="search"
                name=""
                id=""
                className="bg-transparent border-2 border-black px-12 py-2 w-full placeholder:text-black font-medium text-lg lg:text-2xl "
                placeholder="Search questions"
              />
              <LuSearch className="absolute left-4 font-medium text-lg lg:text-2xl" />
            </div>
            <button
              type="button"
              className="border-2 border-black py-1 px-4 text-2xl lg:text-3xl font-medium"
            >
              +
            </button>
          </div>
          <div className="flex justify-center gap-x-4 mt-8 mx-auto w-[95%]">
            <Button text="Social_sciences" />
            <Button text="Politics" />
            <Button text="Recommended" />
            <Button text="Newest" />
          </div>
          <SmallCard
            icon1={Old_Avatar}
            text1="Dr. John Johnson"
            text2="Social sciences and politics professor at MIT"
            views="20"
            date="June 16, 2023"
          />
          <SmallCard
            icon1={Old_Avatar}
            text1="Dr. John Johnson"
            text2="Social sciences and politics professor at MIT"
            views="20"
            date="June 16, 2023"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Questions;
