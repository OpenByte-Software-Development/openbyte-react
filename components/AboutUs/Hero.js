import React from "react";

const STATS = [
  {
    number: "15+",
    title: "countries",
    description: "many of our customers are from the usa/eu.",
  },
  {
    number: "30+",
    title: "apps developed",
    description: "we have great experience in building web/mobile apps.",
  },
  {
    number: "5+",
    title: "programming languages",
    description: "we know top-notch programming languages and frameworks.",
  },
  {
    number: "3+",
    title: "focus area ",
    description:
      "we help founders to build great products and b2b companies to optimize their business.",
  },
];

const Stat = ({ number, title, description }) => {
  return (
    <div className="lg:mb-0 mb-4 border-3 border-light-black lg:px-16 lg:py-11 px-14 py-6 rounded-3xl bg-beige hover:bg-light-black hover:text-white cursor-pointer">
      <div className="text-orange font-bold">
        <span className="lg:text-8xl text-6xl block">{number}</span>
        <span className="lg:text-3xl text-xl block">{title}</span>
      </div>

      <p className="lg:text-lg text-base font-lato mt-4">{description}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="lg:mt-[95px] pt-24 bg-about-us lg:bg-right-top bg-[top_-10px_right_-50px] bg-no-repeat lg:bg-auto bg-[length:196px_196px]">
      <div className="container mx-auto">
        <h1 className="lg:text-6xl text-3xl font-bold text-center">
          A perfect team for solving complex problems in a professional manner
        </h1>
        <div className="lg:grid grid-rows-2 grid-cols-2 gap-16 mt-16">
          {STATS.map((stat) => (
            <Stat {...stat} key={stat.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
