import { BsCheckCircle } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";

const BigCard = () => {
  return (
    <div id="contribution" className="mt-6 p-10 bg-white">
      <div className="flex justify-between font-medium text-lg lg:2xl">
        <p className="flex items-center gap-x-2">
          <BsCheckCircle /> Latest post
        </p>
        <p className="text-[#818181]">Feb 10, 2023</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-3 text-lg lg:text-2xl">
          The Impact of Social Media on Political Polarization
        </h3>
        <p className="font-medium text-md lg:text-xl">
          Social media has become an integral part of our lives, and it plays a
          significant role in shaping our political views. However, there is
          growing concern that social media may be contributing to political
          polarization, as algorithms tend to show users content that reinforces
          their existing beliefs. This research paper will investigate the
          impact of social media on political polarization, examining...
        </p>
      </div>
      <div className="flex justify-between mt-6">
        <div>
          <button className="rounded-3xl border-2 border-primary bg-transparent text-primary font-medium py-1 px-6 text-xl max-md:text-md">
            #Social_sciences
          </button>
          <button className="rounded-3xl border-2 border-primary bg-transparent text-primary font-medium py-1 px-6 ml-4 text-xl max-md:text-md">
            #Politics
          </button>
        </div>
        <p className="text-md lg:text-xl text-[#818181]">69 views</p>
      </div>
      <div className="flex justify-between mt-10 text-md lg:text-xl font-medium">
        <div className="flex gap-6">
          <button
            type="button"
            className="bg-transparent flex gap-2 items-center"
          >
            <PiShareFatLight />
            Recommend
          </button>
          <button
            type="button"
            className="bg-transparent flex gap-2 items-center"
          >
            <IoIosAddCircleOutline />
            Follow
          </button>
        </div>
        <a className="text-primary cursor-pointer">See more</a>
      </div>
    </div>
  );
};

export default BigCard;
