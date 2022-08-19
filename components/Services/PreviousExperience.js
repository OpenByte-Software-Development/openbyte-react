import "swiper/css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "../SwiperNavigation";
import { CLIENTS_REVIEWS } from "../../lib/constants";
import Review from "../Review";

const PreviousExperience = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="pb-32 pt-20">
      <div className="container">
        <h2 className="text-[40px] font-bold leading-[50px] text-center text-light-black">
          How are we work?
        </h2>

        <div className="relative mt-16">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            navigation={true}
            loop={true}
            height="100%"
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {CLIENTS_REVIEWS.map((review, index) => {
              return (
                <SwiperSlide key={index} className="h-auto">
                  <Review {...review} className="border-light-black" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <SwiperNavigation swiper={swiperInstance} />
        </div>
      </div>
    </section>
  );
};

export default PreviousExperience;
