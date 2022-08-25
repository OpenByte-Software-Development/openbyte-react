import React from "react";
import Image from "next/image";

// Images
import adv1 from "../../../public/adv-1.svg";
import adv2 from "../../../public/adv-2.svg";
import adv3 from "../../../public/adv-3.svg";
import adv4 from "../../../public/adv-4.svg";
import adv5 from "../../../public/adv-5.svg";

const ADVANTAGES = [
  {
    src: adv1,
    title: "Better User Experience",
    description:
      "Having a business mobile app improves a lot of user experience compared to traditional responsive websites.",
  },
  {
    src: adv2,
    title: "Improves Customer Relationship",
    description:
      "Customized apps allow you to send personalized updates related to your products and services to your existing customers in real-time. ",
  },
  {
    src: adv3,
    title: "Increased recognition Design",
    description:
      "With a better experience, you improve brand loyalty which makes your app unique.",
  },
  {
    src: adv4,
    title: "Customer engagement",
    description:
      "Build long term relationships with your customers by providing support 24/7.",
  },
  {
    src: adv5,
    title: "Generation of Income",
    description:
      "Build additional ways of income by building personalized mobile apps that improve your relationship with customers.",
  },
];

const MobileAppAdvantages = () => {
  return (
    <section className="">
      <svg viewBox="0 0 1920 80" className="mb-[-1px]">
        <path
          d="M960 80C387.5 80 0 0 0 0V81H1920V0C1920 0 1532.5 80 960 80Z"
          fill="#323232"
        />
      </svg>
      <div className="bg-light-black pb-22">
        <div className="container text-white lg:pt-[71px] py-14">
          <h2 className="lg:text-[40px] text-[32px] font-bold leading-[50px] text-center">
            5 Business Advantages to have a mobile app
          </h2>
          <div className="lg:grid grid-rows-2 grid-cols-3 gap-10 mt-11">
            {ADVANTAGES.map(({ src, title, description }) => {
              return (
                <div
                  className="grid grid-rows-1 grid-cols-12 gap-4 mt-10 lg:mt-0"
                  key={title}
                >
                  <div className="col-span-3">
                    <Image src={src} alt={title} />
                  </div>

                  <div className="col-span-9">
                    <div className="flex justify-between flex-col h-full">
                      <div className="">
                        <h3 className="text-[24px] font-bold leading-[30px]">
                          {title}
                        </h3>
                        <p className="text-[18px] text-lightGray leading-9  mt-4">
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
      </div>
    </section>
  );
};

export default MobileAppAdvantages;
