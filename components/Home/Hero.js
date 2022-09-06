import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
// Images
import heroBuddy from "../../public/hero-buddy.png";

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
              <div className="mt-14 flex justify-center items-center lg:block">
                <Script src="https://widget.clutch.co/static/js/widget.js" />
                <div
                  className="clutch-widget hero-clutch-widget w-auto mx-auto focus"
                  data-url="https://widget.clutch.co"
                  data-widget-type="2"
                  data-height="50"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-scale="100"
                  data-clutchcompany-id="573596"
                ></div>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image src={heroBuddy} alt="Openbyte mascot" />
            </div>
          </div>
        </div>
      </div>

      <svg className="block" viewBox="0 0 1920 154">
        <path
          d="M2005 -744.5L2019 -54.6457C1997.02 -39.9072 1975.05 -25.1686 1945.75 -10.43C1843.19 40.1021 1704.01 80.1066 1520.88 109.584C1337.75 139.061 1147.29 153.799 949.512 153.799C663.827 153.799 414.768 126.428 202.336 69.5791C63.1557 33.7856 -32.0727 -8.32452 -98 -52.5401L-112 -744.5H2005Z"
          fill="#FFFAF7"
        />
      </svg>
    </section>
  );
};

export default Hero;
