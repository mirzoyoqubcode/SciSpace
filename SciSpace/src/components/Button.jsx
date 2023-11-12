import React from "react";

const Button = ({ text }) => {
  return (
    <button className="rounded-3xl border-2 border-primary bg-transparent text-primary font-medium py-1 px-6 lg:text-xl">
      #{text}
    </button>
  );
};

export default Button;
