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
    <section className="bg-light-black py-[89px]">
      <div className="container text-white">
        <h2 className="text-[40px] font-bold leading-[50px] text-center">
          Advantages to build an MVP
        </h2>

        <div className="grid grid-rows-2 grid-cols-2 gap-x-16 gap-y-9 mt-11">
          {MVP_ADVANTAGES.map(({ src, title, description }) => {
            return (
              <div
                className="grid grid-rows-1 grid-cols-6 gap-4 mt-8 lg:mt-0"
                key={title}
              >
                <div className="col-span-1">
                  <Image src={src} alt={title} />
                </div>

                <div className="col-span-5">
                  <div className="flex justify-between flex-col h-full">
                    <div className="">
                      <h3 className="text-[24px] font-bold leading-[30px]">
                        {title}
                      </h3>
                      <p className="text-[18px] font-lato text-lightGray leading-9  mt-4">
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
