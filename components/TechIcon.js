import React from "react";
import Image from "next/image";

const TechIcon = ({
  src,
  name,
  iconClassName,
  textClassName,
  containerClassName = "",
}) => {
  return (
    <div
      className={`text-center items-center flex flex-col gap-4 w-[85px] ${containerClassName}`}
    >
      <div className={`${iconClassName} mx-auto`}>
        <Image
          src={src}
          alt={`${name} logo`}
          width={src.width}
          height={src.height}
        />
      </div>
      <span
        className={`block text-orange font-bold ${textClassName} whitespace-nowrap`}
      >
        {name}
      </span>
    </div>
  );
};

export default TechIcon;
