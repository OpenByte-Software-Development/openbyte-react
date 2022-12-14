import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import services1 from "../../public/services-1.svg";
import services2 from "../../public/services-2.svg";
import services3 from "../../public/services-3.svg";

const Services = () => {
  return (
    <section className="mx-auto lg:py-28 py-14 bg-light-black">
      <div className="container mx-auto">
        <h2 className="lg:text-6xl text-3xl text-center lg:text-left font-bold text-white">
          Services
        </h2>

        <div className="grid lg:grid-rows-1 lg:grid-cols-3 grid-rows-3 grid-cols-1 mt-10 text-center lg:gap-10">
          <div className="">
            <div className="max-w-[152px] mx-auto lg:max-w-none">
              <Image
                src={services1}
                alt="Web Development Services"
                height={services1.height}
                width={services1.width}
              />
            </div>

            <div className="mt-10">
              <h3 className="lg:text-3xl text-xl text-white font-bold">
                Web Development Services
              </h3>
              <p className="text-lg text-lightGray mt-4">
                We have a wide experience in building awesome products in many
                industries using the latest tech stack technologies in order to
                deliver fast and stable applications
              </p>
            </div>
          </div>

          <div className="">
            <div className="max-w-[152px] mx-auto lg:max-w-none">
              <Image
                src={services2}
                alt="Mobile Application Decelopment"
                height={services2.height}
                width={services2.width}
              />
            </div>

            <div className="mt-10">
              <h3 className="lg:text-3xl text-xl text-white font-bold">
                Mobile Application Development
              </h3>
              <p className="text-lg text-lightGray text mt-4">
                We build high-quality IOS apps and Android mobile applications.
                Our apps are designed well, intuitive and scalable by following
                best principles.
              </p>
            </div>
          </div>

          <div className="">
            <div className="max-w-[152px] mx-auto lg:max-w-none">
              <Image
                src={services3}
                alt="MVP development"
                height={services3.height}
                width={services3.width}
              />
            </div>

            <div className="mt-10">
              <h3 className="lg:text-3xl text-xl text-white font-bold">
                MVP Development
              </h3>
              <p className="text-lg text-lightGray mt-4">
                Transforming your idea into a validated profitable product would
                take time and energy, especially if you???re new to the market. We
                can help you to avoid many holes by building the product
                customers want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
