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
    <section className="container mx-auto pt-[106px]">
      <h2 className="lg:text-6xl text-3xl text-center lg:text-left font-bold">
        What we offer
      </h2>

      <div className="block lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:place-items-stretch lg:gap-10 mt-10">
        <div className="grid grid-rows-1 grid-cols-12 gap-4">
          <div className="col-span-3">
            <Image src={whatWeOffer1} alt="outsourcing icon" />
          </div>

          <div className="col-span-9">
            <h3 className="text-3xl text-light-black font-bold leading-10">
              Outsourcing
            </h3>
            <p className="text-lg text-gray mt-4 font-lato">
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
                <h3 className="text-3xl text-light-black font-bold leading-10">
                  Remote Agile Teams
                </h3>
                <p className="text-lg text-gray mt-4 font-lato">
                  We help businesses to build a highly dedicated team of
                  professionals, with a strong culture that provides quality by
                  following agile methodologies.
                </p>
              </div>

              <div className="mt-4">
                <Link prefetch={false}  href="/about-us#team">
                  <button className="lg:bg-orange lg:text-white text-orange lg:rounded-full lg:p-5 font-extrabold lg:w-full">
                    <div className="flex items-center lg:block">
                      <span className="mr-2 lg:mr-0">
                        Choose from developers
                      </span>
                      <span className="lg:hidden flex items-center">
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
                <h3 className="text-3xl text-light-black font-bold">
                  Estimate your project
                </h3>
                <p className="text-lg text-gray mt-4 font-lato">
                  Feel free to use our software development calculator and get
                  an average price in a matter of minutes.
                </p>
              </div>

              <div className="mt-4">
                <Link prefetch={false}  href="/calculator">
                  <button className="lg:bg-orange lg:text-white text-orange lg:rounded-full lg:p-5 font-extrabold lg:w-full">
                    <div className="flex items-center lg:block">
                      <span className="mr-2 lg:mr-0">Estimate App Cost</span>
                      <span className="lg:hidden flex items-center">
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
