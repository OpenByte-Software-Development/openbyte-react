import React from "react";
import Image from "next/image";
import TechIcon from "../TechIcon";

const TechStack = ({ techStack }) => {
  return (
    <div className="text-center text-white">
      <svg viewBox="0 0 1920 154">
        <path
          d="M0 0V770.064H1920V2.48674C1820.52 46.8925 1690 82.5368 1522.88 109.42C1339.75 138.878 1149.29 153.608 951.512 153.608C665.827 153.608 416.768 126.253 204.336 69.4399C121.779 48.2215 54.6861 24.7822 0 0Z"
          fill="#323232"
        />
      </svg>
      <div className="bg-light-black pt-20">
        <h2 className="lg:text-[40px] text-[24px] font-bold lg:leading-[50px]">
          Tech Stack
        </h2>

        <div className="lg:grid grid-rows-1 grid-cols-2 lg:gap-x-[144px] lg:gap-y-16 lg:mt-16 mt-12 container">
          {Object.keys(techStack).map((field) => {
            const { stackIcons } = techStack[field];

            return (
              <div key={field} className="mt-6">
                <h3 className="lg:text-2xl text-[22px] font-bold lg:leading-[30px] text-center">
                  {field}
                </h3>
                <div className="flex justify-center lg:gap-14 gap-10 mt-4 flex-wrap">
                  {stackIcons.map((technology, index) => {
                    return (
                      <TechIcon
                        {...technology}
                        key={`${technology.name}-${index}`}
                        iconClassName="flex items-center justify-center lg:max-w-full max-w-[50px] h-[64px] mx-auto"
                        textClassName="text-xs lg:text-base"
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
