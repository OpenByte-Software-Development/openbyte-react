import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import heroBuddy from "../../public/hero-buddy.png";
import clutchLogo from "../../public/clutch-1.png";
import stars from "../../public/five-stars.png";

const Hero = () => {
  return (
    <section className="bg-hero-section bg-no-repeat bg-[right_2rem_top_2rem] relative">
      <div className="bg-beige pb-[42px]">
        <div className="container lg:mx-auto py-14 lg:p-0">
          <div className="lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:place-items-center lg:justify-items-start">
            <div>
              <h1 className="lg:text-left text-center font-bold lg:text-8xl text-4xl text-light-black">
                We build software.
              </h1>
              <p className="text-gray text-lg lg:max-w-md mt-4 text-center lg:text-left font-lato">
                We provide end-to-end web/mobile software-based solutions for
                your business.
              </p>

              <div className="lg:hidden flex justify-center">
                <Image
                  src={heroBuddy}
                  alt="Openbyte mascot"
                  height={heroBuddy.height}
                  width={heroBuddy.width}
                />
              </div>
              <div className="mt-14">
                <Link prefetch={false} href="/calculator">
                  <button className="bg-orange text-white text-base rounded-full py-[18px] px-14 font-extrabold lg:w-auto w-full">
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
              <Image
                src={heroBuddy}
                alt="Openbyte mascot"
                height={heroBuddy.height}
                width={heroBuddy.width}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        <svg viewBox="0 0 1920 154" height="100%" width="100vw">
          <path
            d="M0 0V770.064H1920V2.48674C1820.52 46.8925 1690 82.5368 1522.88 109.42C1339.75 138.878 1149.29 153.608 951.512 153.608C665.827 153.608 416.768 126.253 204.336 69.4399C121.779 48.2215 54.6861 24.7822 0 0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
