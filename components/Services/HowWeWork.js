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
        <h2 className="text-[40px] font-bold leading-[50px] text-center text-light-black">
          How are we work?
        </h2>
        <p className="text-[22px] font-lato leading-8 text-center text-darkGray mx-auto mt-6">
          We follow the best practices that allow us to choose from Agile,
          Waterfall, and others.
        </p>
      </div>

      <div className="bg-how-we-work-services bg-no-repeat bg-[center_top_135px] pb-[70px] mt-8">
        <div className="container grid grid-rows-2 grid-cols-3 gap-x-[64px] gap-y-[85px] mt-4">
          {STEPS.map(({ src, title, description }, index) => {
            return (
              <div key={index}>
                <div className="max-w-[152px] lg:max-w-none mx-auto text-center">
                  <Image src={src} alt={`${title} icon`} />
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-[24px] text-light-black font-bold leading-[30px]">
                    {title}
                  </h3>
                  <p className="font-lato text-[18px] text-gray text leading-9 mt-4">
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
