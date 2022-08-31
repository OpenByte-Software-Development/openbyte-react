import React from "react";
import Image from "next/image";
import TechIcon from "../TechIcon";

// Images
import buddy from "../../public/tech-stack-buddy.svg";

const TechStack = ({ techStack, title, description }) => {
  return (
    <section>
      <div className="bg-beige pt-28 pb-[50px]">
        <div className="container ">
          <h2 className="text-[40px] font-bold leading-[50px] text-center text-light-black">
            {title}
          </h2>
          <p className="text-[22px] font-lato leading-8 text-center text-darkGray max-w-[800px] mx-auto mt-6">
            {description}
          </p>

          <div className="text-center mt-12">
            <Image src={buddy} alt="tech buddy" />
          </div>

          <div className="grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-[144px] lg:gap-y-16 lg:mt-16 mt-12">
            {Object.keys(techStack).map((field) => {
              const { body, stackIcons } = techStack[field];

              return (
                <div key={field} className="text-center mt-6">
                  <h3 className="text-black lg:text-2xl text-[22px] font-bold leading-[30px]">
                    {field}
                  </h3>
                  <p className="font-lato text-darkGray lg:text-[22px] text-base mt-4 tracking-[0.02em]">
                    {body}
                  </p>
                  <div className="flex justify-center lg:gap-14 gap-12 mt-4">
                    {stackIcons.map((technology, index) => {
                      return <TechIcon {...technology} key={index} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1920 80">
        <path
          d="M1920 0H0V80H5.00848C51.971 70.7857 425.296 1 960 1C1494.7 1 1868.03 70.7857 1914.99 80H1920V0Z"
          fill="#FFFAF6"
        />
      </svg>
    </section>
  );
};

export default TechStack;
