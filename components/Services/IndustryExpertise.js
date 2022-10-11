import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import arrowRight from "../../public/icons/arrow-right-orange.svg";

const tagActiveStyles = "bg-babyBlue text-light-black";

const ProjectMetadata = () => (
  <div className="font-lato flex lg:flex-col lg:gap-10 flex-row justify-between lg:justify-start">
    <div>
      <span className="text-xs text-darkGray font-bold block lg:mb-[10px]">
        PROJECT DURATION
      </span>
      <span className="text-lg text-lightGray">3 Months</span>
    </div>

    <div>
      <span className="text-xs text-darkGray font-bold block lg:mb-[10px]">
        PROJECT TEAM
      </span>
      <span className="text-lg text-lightGray">2 Developers, 1 PM</span>
    </div>
  </div>
);

const IndustryExpertise = ({ tags, title }) => {
  return (
    <section className="bg-light-black lg:pb-[120px] pt-[110px] py-16 text-white">
      <div className="container mx-auto">
        <h2 className="font-bold lg:text-4xl text-3xl">
          {title}
        </h2>
        <div className="flex mt-8 lg:gap-4 flex-wrap justify-between gap-y-4 lg:justify-start">
          {tags.map(({ title, active = false }, index) => {
            return (
              <div
                key={index}
                className={`border-3 border-babyBlue rounded-full px-6 py-[11px] font-extrabold text-sm ${
                  active ? tagActiveStyles : "text-babyBlue"
                }`}
              >
                {title}
              </div>
            );
          })}
        </div>

        <div className="border-2 border-darkGray p-8 pb-[38px] rounded-3xl flex justify-between mt-12">
          <div className="text-white max-w-[766px]">
            <h3 className="text-3xl font-bold leading-10">Ride-Sharing</h3>
            <div className="block lg:hidden my-4">
              <ProjectMetadata />
            </div>
            <p className="lg:text-xl text-base lg:leading-[32px] leading-[28px] mt-[21px] font-lato">
              The Ride-Sharing app helps to share your car with others during
              your trip, as a driver, you can add your car and set up your trip,
              also as a customer you can search for a destination and choose
              from registered drivers.
            </p>

            <div className="mt-[21px]">
              <Link prefetch={false} href="/case-studies/orange-car-sharing">
                <button className=" text-orange text-sm py-5 font-extrabold ">
                  <div className="flex items-center">
                    <span className="mr-2 block">View Case Study</span>
                    <Image src={arrowRight} alt="arrow" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <ProjectMetadata />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
