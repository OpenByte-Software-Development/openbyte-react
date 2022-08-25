import "swiper/css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "../SwiperNavigation";
import { CLIENTS_REVIEWS } from "../../lib/constants";
import Review from "../Review";

const PreviousExperience = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="lg:pb-32 lg:pt-20 pt-11 pb-[72px]">
      <div className="container">
        <h2 className="lg:text-[40px] text-[32px] font-bold leading-[50px] text-center text-light-black">
          Our previous experience 
        </h2>

        <div className=" px-[35px]">
          <div className="relative lg:mt-16 mt-5">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              navigation={true}
              loop={true}
              height="100%"
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1184: {
                  slidesPerView: 3,
                },
              }}
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
      </div>
    </section>
  );
};

export default PreviousExperience;
