import React from "react";
import BackgroundNumber from "./BackgroundNumber";

const Solution = ({ solutions }) => {
  return (
    <section className="">
      <div className="mx-auto bg-beige lg:pt-28 pt-14 lg:bg-puzzle bg-no-repeat bg-[right_80px_top_20px]">
        <div className="relative">
          <BackgroundNumber variant="4" />
          <h2 className="font-bold lg:text-[40px] text-2xl lg:leading-[50px] text-black text-center">
            Solution
          </h2>
        </div>

        <div className="text-center max-w-[766px] mx-auto container pb-10">
          {solutions.map((solution, index) => (
            <p key={index} className="font-lato lg:text-lg text-darkGray lg:mt-8 mt-2">
              {solution}
            </p>
          ))}
        </div>
      </div>
      <div>
        <svg
          viewBox="0 0 1920 151"
        >
          <g>
            <g>
              <path
                d="M2011 -582L2025 -57.445C2003.02 -42.7065 1981.05 -27.9679 1951.75 -13.2293C1849.19 37.3028 1710.01 77.3073 1526.88 106.784C1343.75 136.261 1153.29 151 955.512 151C669.827 151 420.768 123.628 208.336 66.7798C69.1557 30.9862 -26.0727 -11.1238 -92 -55.3394L-106 -582H2011Z"
                fill="#FFFAF7"
              />
              <mask
                id="mask0_2848_17682"
                maskUnits="userSpaceOnUse"
                x="-106"
                y="-582"
                width="2131"
                height="733"
              >
                <path
                  d="M2011 -582L2025 -57.445C2003.02 -42.7065 1981.05 -27.9679 1951.75 -13.2293C1849.19 37.3028 1710.01 77.3073 1526.88 106.784C1343.75 136.261 1153.29 151 955.512 151C669.827 151 420.768 123.628 208.336 66.7798C69.1557 30.9862 -26.0727 -11.1238 -92 -55.3394L-106 -582H2011Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_2848_17682)"></g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2848_17682">
              <rect width="1920" height="151" fill="white" />
            </clipPath>
            <clipPath id="clip1_2848_17682">
              <rect
                width="1920"
                height="383"
                fill="white"
                transform="translate(0 -232)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Solution;
