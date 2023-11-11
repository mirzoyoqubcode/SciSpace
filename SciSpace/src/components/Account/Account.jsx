import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Avatar from "../../assets/Avatar_Image.png";
import Chat from "../../assets/Chat_alt.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import BigCard from "../BigCard";
import Circle_Check from "../../assets/Circle_Check.png";
import { links, scores } from "../../utils/constants";
import Footer from "../Footer/Footer";

const Account = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#e9e9e9] min-h-screen py-24">
        <div className="max-w-[1200px] mx-auto min-h-screen max-lg:px-10 max-lg:w-full">
          <div className="flex items-center justify-center px-10 lg:p-0 max-lg:flex-col max-lg:gap-y-8">
            <img
              src={Avatar}
              alt="Avatar"
              className="w-[250px] h-[250px] object-contain"
            />
            <div className="lg:ml-16 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
              <h4 className="font-semibold text-2xl max-sm:text-lg">
                Eugene Veniaminovich Lutsenko
              </h4>
              <p className="max-w-lg mt-3 font-medium text-center lg:text-left">
                Kuban State Agricultural University · Department of Information
                Technology doctor of economic Sciences, candidate of technical
                Sciences, Professor
              </p>
            </div>
            <div className="flex lg:flex-col lg:gap-y-4 justify-between items-center lg:ml-36 gap-x-8">
              <Link to="/">
                <BsLinkedin className="text-[40px]" />
              </Link>
              <Link to="/">
                <FiMail className="text-[40px]" />
              </Link>
              <Link to="/">
                <img src={Chat} alt="Chat" className="w-[45px] h-[45px]" />
              </Link>
            </div>
          </div>
          <ul className="flex w-full justify-between items-center mt-8">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url} className="font-medium text-2xl max-sm:text-lg">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="p-8 bg-white mt-8">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center gap-y-6 lg:gap-x-6">
              {scores.map((score) => {
                const { id, number, text } = score;
                return (
                  <div
                    key={id}
                    className="text-center flex flex-row lg:flex-col font-medium text-2xl max-md:text-lg"
                  >
                    <span className="text-primary">{number}</span>
                    <p className="uppercase ml-4 lg:ml-0">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6 flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-6 font-medium">
            <div className="bg-white p-6 w-full text-center">
              <p className="lg:text-2xl text-xl mb-2">Skills and Expertise</p>
              <div>
                <button className="rounded-3xl border-2 border-primary bg-transparent text-primary font-medium py-1 px-6 lg:text-xl ">
                  #Social_sciences
                </button>
                <button className="rounded-3xl border-2 border-primary bg-transparent text-primary font-medium py-1 px-6 ml-4 lg:text-xl">
                  #Politics
                </button>
              </div>
            </div>
            <div className="bg-white p-12 w-full text-center font-medium h-full">
              <p className="font-medium text-3xl max-md:text-xl">
                Public score: 53.6
              </p>
            </div>
          </div>
          {/* Contribution */}
          <BigCard
            icon1={Circle_Check}
            text1="Latest post"
            textLast="See more"
          />
          {/* End of Contribution */}
          {/* RESEARCH INTERESTS */}
          <div
            id="research"
            className="mt-6 flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-6 font-medium"
          >
            <div className="bg-white p-6 w-full text-center flex flex-col justify-center">
              <h3 className="text-lg lg:text-2xl font-medium">Co-founders</h3>
              <p className="text-[#818181]">There are no co-founders yet ! </p>
              <Link to="#" className="text-primary">
                Find co-founders
              </Link>
            </div>
            <div className="bg-white p-12 w-full text-center font-medium h-full">
              <h3 className="text-lg lg:text-2xl font-medium">Cited by</h3>
              <p className="text-[#818181]">Nobody cited you yet </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col lg:flex-row lg:justify-center gap-y-6 lg:gap-x-6 font-medium">
            <div className="bg-white p-6 w-full text-center flex flex-col justify-center">
              <h3 className="text-lg lg:text-2xl font-medium">
                Research adviser
              </h3>
              <p className="text-[#818181]">You have no research advisors </p>
            </div>
            <div className="bg-white p-12 w-full text-center font-medium h-full">
              <h3 className="text-lg lg:text-2xl font-medium">Researchers</h3>
              <p className="text-[#818181]">You have no researchers yet </p>
            </div>
          </div>
          {/* END OF RESEARCH INTERESTS */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Account;
