import React from "react";
import BackgroundNumber from "./BackgroundNumber";

const Solution = ({ solutions }) => {
  return (
    <section className="relative">
      <div className="mx-auto bg-beige lg:pt-28 pt-14 bg-solution bg-no-repeat lg:bg-[position:right_100px_top_20px,_bottom_left] bg-[position:right_60px_bottom_50px,_bottom_left] bg-[length:52px_52px,_140px] pb-20">
        <div className="relative">
          <BackgroundNumber variant="4" />
          <h2 className="font-bold lg:text-[40px] text-2xl lg:leading-[50px] text-black text-center">
            Solution
          </h2>
        </div>

        <div className="text-center max-w-[766px] mx-auto container pb-10">
          {solutions.map((solution, index) => (
            <p
              key={index}
              className="font-lato lg:text-lg text-darkGray lg:mt-8 mt-2"
            >
              {solution}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <svg
          viewBox="0 0 1920 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0V770.064H1920V2.48674C1820.52 46.8925 1690 82.5368 1522.88 109.42C1339.75 138.878 1149.29 153.608 951.512 153.608C665.827 153.608 416.768 126.253 204.336 69.4399C121.779 48.2215 54.6861 24.7822 0 0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Solution;
