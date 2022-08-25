import React from "react";
import Image from "next/image";

// Images
import adv1 from "../../../public/mvp-adv-1.svg";
import adv2 from "../../../public/mvp-adv-2.svg";
import adv3 from "../../../public/mvp-adv-3.svg";
import adv4 from "../../../public/mvp-adv-4.svg";

const MVP_ADVANTAGES = [
  {
    src: adv1,
    title: "Quick validation",
    description:
      "Having your MVP first helps you validate your ideas as quickly as possible just by having a few core features that solve your audience problem.",
  },
  {
    src: adv2,
    title: "Reduced expenses",
    description:
      "Why build a fully featured product that is not yet validated? Build your MVP faster just by solving the most important problems.",
  },
  {
    src: adv3,
    title: "Get a quick start",
    description:
      "Release your product faster than competitors adding just enough features to be usable by early customers.",
  },
  {
    src: adv4,
    title: "Pitch effectively",
    description:
      "Get noticed by investors and get funding with a minimal set of features.",
  },
];

const MvpAdvantages = () => {
  return (
    <section className="bg-light-black lg:py-[89px] py-14">
      <div className="container text-white">
        <h2 className="lg:text-[40px] text-[32px] font-bold leading-[50px] text-center">
          Advantages to build an MVP
        </h2>

        <div className="lg:grid grid-rows-2 grid-cols-2 lg:gap-x-16 lg:gap-y-9 mt-11">
          {MVP_ADVANTAGES.map(({ src, title, description }) => {
            return (
              <div
                className="grid grid-rows-1 lg:grid-cols-6 grid-cols-9 gap-4 lg:mt-8 mt-10"
                key={title}
              >
                <div className="lg:col-span-1 col-span-2">
                  <Image src={src} alt={title} />
                </div>

                <div className="lg:col-span-5 col-span-7">
                  <div className="flex justify-between flex-col h-full">
                    <div className="">
                      <h3 className="lg:text-[24px] text-[22px] font-bold leading-[30px]">
                        {title}
                      </h3>
                      <p className="lg:text-[18px] text-base font-lato text-lightGray lg:leading-9 leading-7 mt-4">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MvpAdvantages;
