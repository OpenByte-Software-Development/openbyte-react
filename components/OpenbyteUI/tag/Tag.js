import React from "react";

const VARIANTS = {
  blue: "bg-babyBlue",
  yellow: "bg-yellow",
};

const Tag = ({ variant, text }) => {
  const backgroundColor = VARIANTS[variant] || VARIANTS.blue;
  return (
    <div
      className={`border-2 border-black rounded-[30px] px-[8px] py-[1px] flex items-center ${backgroundColor}`}
    >
      <span className="text-base font-medium leading-7 whitespace-nowrap">{text}</span>
    </div>
  );
};

export default Tag;
