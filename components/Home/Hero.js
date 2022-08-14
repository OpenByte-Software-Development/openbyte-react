import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import heroBuddy from "../../public/hero-buddy.png";
import clutchFake from "../../public/clutch-fake.png";

const Hero = () => {
  return (
    <section className="bg-hero-section bg-no-repeat bg-[right_2rem_top_2rem]">
      <div className="bg-beige">
        <div className="container lg:mx-auto py-14 lg:p-0">
          <div className="lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:place-items-center lg:justify-items-start">
            <div>
              <h1 className="lg:text-left text-center font-bold lg:text-6xl text-[40px] text-light-black">
                We build software.
              </h1>
              <p className="text-gray text-lg lg:max-w-md mt-4 text-center lg:text-left">
                We provide end-to-end web/mobile software-based solutions for
                your business.
              </p>

              <div className="lg:hidden flex justify-center">
                <Image src={heroBuddy} alt="Openbyte mascot" />
              </div>
              <div className="mt-14">
                <Link href="/calculator">
                  <button className="bg-orange text-white text-base rounded-full lg:py-3.5 py-[18px] px-14 font-extrabold lg:w-auto w-full">
                    Get a cost estimation
                  </button>
                </Link>
              </div>
              <div className="mt-14 flex justify-center lg:block">
                <Image src={clutchFake} alt="fake clutch review" />
                {/* // Replace with clutch widget */}
              </div>
            </div>
            <div className="hidden lg:block">
              <Image src={heroBuddy} alt="Openbyte mascot" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-hero-wave min-h-[150px] bg-no-repeat bg-center hidden lg:block"></div>
    </section>
  );
};

export default Hero;
