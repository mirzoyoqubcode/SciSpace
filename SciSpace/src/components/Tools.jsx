import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import ToolCard from "./ToolCard";
import Zotero from "../assets/Zotero.png";
import WebScience from "../assets/WebScience.png";
import Google_Scholar from "../assets/Google_Scholar.png";
import Spss from "../assets/Spss.png";

const Tools = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-[78vh] w-full bg-secondary py-12">
        <div className="mx-auto w-[90%] max-w-[1200px] max-lg:text-center">
          <h2 className="font-semibold text-lg lg:text-2xl">
            Top tools to help your researches
          </h2>
          <ToolCard
            img={Zotero}
            title="Zotero"
            tags={["Research_sources ", "Organizer"]}
            text=" is a free, open-source citation management tool that helps you organize your research sources, create bibliographies, and collaborate with others."
          />
          <ToolCard
            img={Spss}
            title="Spss"
            tags={["Research_sources ", "Organizer"]}
            text=" is a free, open-source citation management tool that helps you organize your research sources, create bibliographies, and collaborate with others."
          />
          <button
            type="button"
            className="bg-white py-4 px-14 font-semibold text-xl lg:text-2xl mt-6"
          >
            Add New Tool
          </button>
          <h2 className="font-semibold text-lg lg:text-2xl mt-12">
            Top databases to help your researches
          </h2>
          <ToolCard
            img={Google_Scholar}
            title="Google Scholar"
            tags={["Research_sources ", "Organizer"]}
            text=" is a free, open-source citation management tool that helps you organize your research sources, create bibliographies, and collaborate with others."
          />
          <ToolCard
            img={WebScience}
            title="Web of Science"
            tags={["Research_sources ", "Organizer"]}
            text=" is a free, open-source citation management tool that helps you organize your research sources, create bibliographies, and collaborate with others."
          />
          <button
            type="button"
            className="bg-white py-4 px-14 font-semibold text-xl lg:text-2xl mt-8"
          >
            Add New Database
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Tools;
