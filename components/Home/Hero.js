import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import heroBuddy from "../../public/hero-buddy.png";
import clutchLogo from "../../public/clutch-1.png";
import stars from "../../public/five-stars.png";

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
              <p className="text-gray text-lg lg:max-w-md mt-4 text-center lg:text-left font-lato">
                We provide end-to-end web/mobile software-based solutions for
                your business.
              </p>

              <div className="lg:hidden flex justify-center">
                <Image src={heroBuddy} alt="Openbyte mascot" />
              </div>
              <div className="mt-14">
                <Link prefetch={false} href="/calculator">
                  <button className="bg-orange text-white text-base rounded-full lg:py-3.5 py-[18px] px-14 font-extrabold lg:w-auto w-full">
                    Get a cost estimation
                  </button>
                </Link>
              </div>
              <div>
                <a
                  href="https://clutch.co/profile/openbyte"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="relative lg:max-w-max">
                    <div className="mt-14 flex items-stretch justify-between lg:justify-start gap-12">
                      <div className="flex">
                        <Image
                          src={clutchLogo}
                          alt="clutch logo"
                          height={clutchLogo.height}
                          width={clutchLogo.width}
                        />
                      </div>

                      <div className="flex flex-col justify-between min-h-full">
                        <div>
                          <Image
                            src={stars}
                            alt="OpenByte five stars"
                            height={stars.height}
                            width={stars.width}
                          />
                        </div>
                        <span className="uppercase block font-lato text-sm">
                          Reviews: 5
                        </span>
                      </div>
                    </div>
                    <div className="absolute min-w-full min-h-full top-0 left-0 z-50"></div>
                  </div>
                </a>
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
