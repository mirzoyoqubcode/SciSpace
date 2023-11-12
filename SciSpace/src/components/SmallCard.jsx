import React from "react";
import Button from "./Button";
import Chat_alt from "../assets/Chat_alt.png";

const SmallCard = ({ date, icon1, text1, text2, views }) => {
  return (
    <div className="mt-10 bg-white p-6">
      <div className="flex justify-between font-medium text-lg lg:2xl">
        <div className="flex items-center gap-x-4">
          <img src={icon1} alt="img" className="w-[51px] h-[51px]" />
          <div className="flex flex-col gap-y-0.5">
            <span>{text1}</span>
            {text2 && <span>{text2}</span>}
          </div>
        </div>
        <p className="text-[#818181] flex items-center justify-center">
          {date || "Feb 10, 2023"}
        </p>
      </div>
      <p className="font-medium text-lg lg:text-2xl mt-6">
        Does AI lead to increased or decreased trust in government agencies,
        busi...
      </p>
      <div className="flex items-center gap-4 mt-6">
        <Button text="Social_sciences" />
        <Button text="AI" />
      </div>
      <div className="flex items-center justify-between mt-6">
        <button
          type="button"
          className="flex items-center font-medium lg:text-xl gap-4"
        >
          <img src={Chat_alt} alt="chat" className="w-[41px] h-[41px]" />
          Answer
        </button>
        <p className="text-[#818181] font-medium lg:text-xl">{views} views</p>
      </div>
    </div>
  );
};

export default SmallCard;
