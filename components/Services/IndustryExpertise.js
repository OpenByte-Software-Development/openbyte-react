import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../../components/OpenbyteUI/index";

// Images
import arrowRight from "../../public/icons/arrow-right-orange.svg";

const IndustryExpertise = ({ tags, title }) => {
  return (
    <section className="bg-light-black py-[110px] text-white">
      <div className="container mx-auto">
        <h2 className="font-bold text-[40px] leading-[50px]">{title}</h2>
        <div className="flex mt-8 gap-4">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="border-3 border-babyBlue rounded-full px-6 py-[9px] text-babyBlue font-extrabold text-sm hover:bg-babyBlue hover:text-light-black cursor-pointer"
              >
                {tag}
              </div>
            );
          })}
        </div>

        <div className="border-2 border-darkGray p-8 pb-[38px] rounded-3xl flex justify-between mt-12">
          <div className="text-white max-w-[766px]">
            <h3 className="text-[32px] font-bold leading-10">Ride-Sharing</h3>
            <p className="text-[22px] leading-[32px] mt-[21px]">
              The Ride-Sharing app helps to share your car with others during
              your trip, as a driver, you can add your car and set up your trip,
              also as a customer you can search for a destination and choose
              from registered drivers.
            </p>

            <div className="mt-[21px]">
              <Link href="/">
                <button className=" text-orange text-sm py-5 font-extrabold ">
                  <div className="flex items-center">
                    <span className="mr-2 block">View Case Study</span>
                    <Image src={arrowRight} alt="arrow" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="font-lato flex flex-col gap-10">
            <div>
              <span className="text-xs text-darkGray font-bold block mb-[10px]">
                PROJECT DURATION
              </span>
              <span className="text-lg text-lightGray">3 Months</span>
            </div>

            <div>
              <span className="text-xs text-darkGray font-bold block mb-[10px]">
                PROJECT TEAM
              </span>
              <span className="text-lg text-lightGray">2 Developers, 1 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
