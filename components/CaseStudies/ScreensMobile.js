import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";

const Screen = ({ src, alt }) => {
  return (
    <div className="border-3 rounded-[24px] max-w-fit flex overflow-hidden">
      <Image src={src} alt={alt} />
    </div>
  );
};

const ScreensMobile = ({ screens }) => {
  const allScreens = [].concat.apply([], screens);

  return (
    <div>
      <div className="relative">
        <Swiper
          freeMode={true}
          slidesPerView="auto"
          modules={[FreeMode]}
        >
          {allScreens.map((screen, index) => (
            <SwiperSlide key={index} className="ml-6 max-w-fit">
              <Screen {...screen} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ScreensMobile;
