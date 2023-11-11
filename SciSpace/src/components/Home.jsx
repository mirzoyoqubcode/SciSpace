import BigCard from "./BigCard";
import Navbar from "./Navbar/Navbar";
import Lamp from "../assets/Lamp.png";
import Old_Avatar from "../assets/old_Avatar.png";
import Return from "../assets/Return.png";
import Recommendation from "../assets/Recommendation.png";
import { IoIosAddCircleOutline } from "react-icons/io";
import { recommendations } from "../utils/constants";
import RedImage from "../assets/red_image.png";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#e9e9e9] min-h-screen py-24">
        <div className="max-w-[1200px] mx-auto min-h-screen max-lg:px-10 max-lg:w-full">
          <BigCard
            icon1={Lamp}
            text1="Suggestions for you"
            iconLast={Return}
            textLast="Share"
          />
          <BigCard
            icon1={Old_Avatar}
            text1="Dr. John Johnson"
            text2="Social sciences and politics professor at MIT"
            iconLast={Return}
            textLast="Share"
            followText="following"
            date="June 16, 2023"
            views="24"
          />
          <div className="flex lg:justify-between flex-wrap items-center gap-4 mt-10 justify-center ">
            {recommendations.map((rec) => {
              const { id, name, field } = rec;
              return (
                <div
                  key={id}
                  className="bg-white flex flex-col items-center p-8"
                >
                  <img
                    src={Recommendation}
                    alt="recommendation"
                    className="w-[300px] h-[300px] object-contain"
                  />
                  <h4 className="font-semibold text-lg lg:text-2xl mt-4">
                    {name}
                  </h4>
                  <button
                    type="button"
                    className="rounded-3xl border-2 border-primary bg-transparent text-primary font-medium py-1 px-6 lg:text-xl mt-4"
                  >
                    #{field}
                  </button>
                  <button
                    type="button"
                    className="bg-transparent flex gap-2 items-center capitalize mt-4 font-medium lg:text-xl"
                  >
                    <IoIosAddCircleOutline />
                    Follow
                  </button>
                </div>
              );
            })}
          </div>
          <BigCard
            icon1={RedImage}
            text1="Science/AAAS"
            text2="Scientific and research journal"
            iconLast={Return}
            textLast="Share"
            followText="following"
            date="May 20, 2023"
            views="259"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
