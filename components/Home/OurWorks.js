import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "../SwiperNavigation";
import { OUR_WORKS } from "../../lib/constants";

const Project = () => {
  return (
    <div className="border-3 border-black rounded-3xl py-8 pl-12 min-h-[500px]">
      <div className="bg-beige absolute -bottom-[20px] -left-[20px] rounded-3xl min-w-[100%] min-h-[100%] -z-10"></div>
    </div>
  );
};

const OurWorks = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="bg-our-works bg-bottom bg-no-repeat mt-[72px]">
      <div className="container mx-auto">
        <h2 className="text-[56px] font-bold text-light-black leading-[70px]">
          Our works
        </h2>

        <div className="mt-14">
          <div className="relative">
            <Swiper
            spaceBetween="100"
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              loop={true}
            >
              {OUR_WORKS.map((project, index) => (
                <SwiperSlide key={index}>
                  <Project {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperNavigation swiper={swiperInstance} />
          </div>

          <div className="mt-14">
            <button className="font-extrabold text-orange bg-white rounded-full py-4 px-11 block mx-auto">
              See All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
