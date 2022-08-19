import React from "react";
import Image from "next/image";

const TechIcon = ({ src, name }) => {
  return (
    <div className="text-center flex flex-col justify-between">
      <Image src={src} alt={`${name} logo`} />
      <span className="block mt-[15px] text-orange font-bold">{name}</span>
    </div>
  );
};

export default TechIcon;
