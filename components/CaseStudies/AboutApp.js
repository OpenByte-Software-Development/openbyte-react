import React from "react";
import BackgroundNumber from "./BackgroundNumber";

const AboutCard = ({ title, description, order }) => {
  return (
    <div className="relative border-3 border-black rounded-3xl">
      <div className="px-6 py-5 text-center">
        <div className="relative">
          <BackgroundNumber variant={order} />
          <h4 className="lg:text-[40px] text-2xl text-black font-bold leading-[50px]">
            {title}
          </h4>
        </div>
        <p className="mt-4 text-darkGray text-lg font-lato leading-7">
          {description}
        </p>
      </div>
      {/* shifted background */}
      <div className="bg-pale-orange absolute w-full h-full -left-[10px] -bottom-[10px] -z-10 rounded-3xl"></div>
    </div>
  );
};

const AboutApp = ({ title, description, cards }) => {
  return (
    <section className="container lg:pt-28 lg:pb-20 pt-10 pb-16">
      <div className="relative text-center">
        <div className="relative">
          <BackgroundNumber variant="1" />
          <h2 className="font-bold lg:text-[40px] text-2xl leading-[50px] text-black">
            {title}
          </h2>
        </div>
        <p className="font-lato lg:mt-4 mt-1 text-darkGray text-lg">{description}</p>
      </div>
      <div className="lg:grid grid-rows-1 grid-cols-2 lg:gap-16 mt-20 flex flex-col gap-14">
        {cards.map((card) => (
          <AboutCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

export default AboutApp;
