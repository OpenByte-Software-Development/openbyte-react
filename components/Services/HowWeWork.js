import React from "react";
import Image from "next/image";

// Images
import timeline1 from "../../public/timeline-1.svg";
import timeline2 from "../../public/timeline-2.svg";
import timeline3 from "../../public/timeline-3.svg";
import timeline4 from "../../public/timeline-4.svg";
import timeline5 from "../../public/timeline-5.svg";
import timeline6 from "../../public/timeline-6.svg";

const STEPS = [
  {
    src: timeline1,
    title: "Project estimation",
    description:
      "We love to ask questions and build great project documentation.",
  },
  {
    src: timeline2,
    title: "Prototype",
    description: "With wireframes we can sync and have a common vision.",
  },
  {
    src: timeline3,
    title: "Design",
    description: "Using modern solutions to have excellent output.",
  },
  {
    src: timeline4,
    title: "Development",
    description: "Turning your ideas and dreams into a real workable product.",
  },
  {
    src: timeline5,
    title: "QA testing",
    description:
      "QA testing is a required step to make sure we eliminate bugs before launch.",
  },
  {
    src: timeline6,
    title: "Launch",
    description:
      "We consult with you before launching your product using modern solutions.",
  },
];

const HowWeWork = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="lg:text-[40px] text-[32px] font-bold leading-[50px] text-center text-light-black">
          How are we work?
        </h2>
        <p className="lg:text-[22px] text-base font-lato leading-8 text-center text-darkGray mx-auto mt-6">
          We follow the best practices that allow us to choose from Agile,
          Waterfall, and others.
        </p>
      </div>

      <div className="lg:bg-how-we-work-services bg-no-repeat bg-[center_top_135px] pb-[70px] mt-8">
        <div className="container lg:grid grid-rows-2 grid-cols-3 gap-x-[64px] gap-y-[85px] mt-4">
          {STEPS.map(({ src, title, description }, index) => {
            return (
              <div key={index} className="lg:mt-0 mt-8">
                <div className="lg:max-w-[152px] mx-auto text-center">
                  <Image src={src} alt={`${title} icon`} />
                </div>

                <div className="lg:mt-6 mt-4 text-center">
                  <h3 className="lg:text-[24px] text-[22px] text-light-black font-bold leading-[30px]">
                    {title}
                  </h3>
                  <p className="font-lato lg:text-[18px] font-base text-gray text lg:leading-9 leading-7 lg:mt-4 mt-2">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
