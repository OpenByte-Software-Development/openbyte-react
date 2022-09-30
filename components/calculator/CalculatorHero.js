import React from "react";

const CalclulatorHero = () => {
  return (
    <section className="bg-light-black text-white text-center lg:py-28 pt-16 pb-14">
      <div className="container">
        <div className="max-w-[750px] mx-auto">
          <span className="uppercase block text-orange font-lato font-bold lg:text-base text-xs max-w-[275px] mx-auto lg:max-w-full">
            HOW MUCH DOES IT COST TO MAKE AN APP FOR YOUR BUSINESS?
          </span>
          <h2 className="lg:text-[56px] text-[32px] lg:leading-[70px] leading-[40px] font-bold">
            Software Development Cost Calculator
          </h2>
          <p className="font-lato lg:text-lg text-base lg:mt-6 mt-4 text-lightGray">
            If you want to estimate the average cost of your software
            application feel free to use our software development calculator and
            get an average price in a matter of minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalclulatorHero;
