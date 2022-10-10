import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "../SwiperNavigation";
import { CASE_STUDIES } from "../../lib/constants";
import CaseStudy from "../CaseStudyCard";
import { v4 as uuid } from "uuid";

const OurWorks = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="mt-[65px] relative">
      <div className="bg-light-black absolute bottom-0 left-0 min-h-[30%] min-w-full -z-10 block lg:hidden"></div>
      <svg
        viewBox="0 0 1920 350"
        className="absolute bottom-0"
        height="100%"
        width="100vw"
      >
        <path
          d="M2012 1026L2025.5 394.709C2003.52 366.8 1981.55 338.891 1952.25 310.983C1849.69 215.296 1710.51 139.544 1527.38 83.7261C1344.25 27.9087 1153.79 0 956.012 0C670.327 0 421.268 51.8305 208.836 159.478C69.6557 227.257 -25.5727 306.996 -91.5 390.722L-105 1026H2012Z"
          fill="#323232"
        />
      </svg>
      <div className="container mx-auto">
        <h2 className="lg:text-6xl text-3xl font-bold text-light-black text-center lg:text-left">
          Our works
        </h2>

        <div className="mt-14">
          <div className="relative">
            <div className="bg-beige absolute -bottom-[15px] -left-[15px] rounded-3xl min-w-[100%] min-h-[100%]"></div>

            <Swiper
              slidesPerView={1}
              spaceBetween={100}
              autoHeight={true}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              loop={true}
            >
              {CASE_STUDIES.map((project) => (
                <SwiperSlide key={uuid()}>
                  <CaseStudy {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperNavigation
              swiper={swiperInstance}
              className="hidden lg:block"
            />
          </div>

          <div className="mt-14">
            <Link prefetch={false} href="/case-studies">
              <button className="font-extrabold text-orange bg-white rounded-full py-4 px-11 block mx-auto">
                See All Case Studies
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
