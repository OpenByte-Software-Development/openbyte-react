import React from "react";
import Image from "next/image";

const TechIcon = ({ src, name, iconClassName, textClassName }) => {
  return (
    <div className="text-center flex flex-col gap-4">
      <div className={`${iconClassName}`}>
        <Image src={src} alt={`${name} logo`} />
      </div>
      <span className={`block text-orange font-bold ${textClassName}`}>
        {name}
      </span>
    </div>
  );
};

export default TechIcon;
