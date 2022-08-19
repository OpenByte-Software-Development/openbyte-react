import React from "react";
import Image from "next/image";

// Image
import doubleCheckMark from "../public/icons/faq-bullet.svg";

export const Bullet = ({ as = "li", text, className = "" }) => {
  const Element = as;
  return (
    <Element key={text} className={`flex items-center ${className}`}>
      <Image src={doubleCheckMark} alt="bullet icon" />
      <span className="ml-4 font-lato text-lg">{text}</span>
    </Element>
  );
};

const BulletPoints = ({ bullets }) => {
  return (
    <ul className="flex flex-col gap-4 mt-4">
      {bullets.map((bulletText) => (
        <li key={bulletText} className="flex items-center">
          <Image src={doubleCheckMark} alt="bullet icon" />
          <span className="ml-4 font-lato text-lg">{bulletText}</span>
        </li>
      ))}
    </ul>
  );
};

export default BulletPoints;
