import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import whatWeOffer1 from "../../public/what-we-offer-1.png";
import whatWeOffer2 from "../../public/what-we-offer-2.png";
import whatWeOffer3 from "../../public/what-we-offer-3.png";
import arrowRight from "../../public/icons/arrow-right-orange.svg";

const WhatWeOffer = () => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="lg:text-[56px] text-[32px] text-center lg:text-left font-bold">
        What we offer
      </h2>

      <div className="block lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:place-items-stretch lg:gap-10 mt-10">
        <div className="grid grid-rows-1 grid-cols-12 gap-4">
          <div className="col-span-3">
            <Image src={whatWeOffer1} alt="outsourcing icon" />
          </div>

          <div className="col-span-9">
            <h3 className="text-[32px] text-light-black font-bold leading-10">
              Outsourcing
            </h3>
            <p className="text-[18px] text-gray leading-9  mt-4">
              We provide a variety of web development services that solve real
              business problems, and respond to market challenges.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-1 grid-cols-12 gap-4 mt-8 lg:mt-0">
          <div className="col-span-3">
            <Image src={whatWeOffer2} alt="Agile teams icon" />
          </div>

          <div className="col-span-9">
            <div className="flex justify-between flex-col h-full">
              <div className="">
                <h3 className="text-[32px] text-light-black font-bold leading-10">
                  Remote Agile Teams
                </h3>
                <p className="text-[18px] text-gray text leading-9 mt-4">
                  We help businesses to build a highly dedicated team of
                  professionals, with a strong culture that provides quality by
                  following agile methodologies.
                </p>
              </div>

              <div className="mt-4">
                <Link href="/calculator">
                  <button className="lg:bg-orange lg:text-white text-orange text-base lg:rounded-full py-5 lg:px-14 font-extrabold lg:w-full">
                    <div className="flex items-center lg:block">
                      <span className="mr-2 lg:mr-0">
                        Choose from developers
                      </span>
                      <span className="block lg:hidden">
                        <Image src={arrowRight} alt="arrow" />
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 grid-cols-12 gap-4 mt-8 lg:mt-0">
          <div className="col-span-3">
            <Image src={whatWeOffer3} alt="Agile teams icon" />
          </div>

          <div className="col-span-9">
            <div className="flex justify-between flex-col h-full">
              <div className="">
                <h3 className="text-[32px] text-light-black font-bold leading-10">
                  Estimate your project
                </h3>
                <p className="text-[18px] text-gray leading-9  mt-4">
                  Feel free to use our software development calculator and get
                  an average price in a matter of minutes.
                </p>
              </div>

              <div className="mt-4">
                <Link href="/calculator">
                  <button className="lg:bg-orange lg:text-white text-orange text-base lg:rounded-full py-5 lg:px-14 font-extrabold lg:w-full">
                    <div className="flex items-center lg:block">
                      <span className="mr-2 lg:mr-0">Estimate App Cost</span>
                      <span className="block lg:hidden">
                        <Image src={arrowRight} alt="arrow" />
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
