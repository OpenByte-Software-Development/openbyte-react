import "swiper/css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "./SwiperNavigation";
import { CLIENTS_REVIEWS } from "../lib/constants";
import Review from "./Review";

const PreviousExperience = ({ title = "Our previous experience" }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="lg:pb-32 lg:pt-20 pt-11 pb-[72px]">
      <div className="container">
        <h2 className="lg:text-4xl text-3xl font-bold leading-[50px] text-center text-light-black">
          {title}
        </h2>

        <div className=" px-[35px]">
          <div className="relative lg:mt-16 mt-5">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              loop={true}
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
                  <SwiperSlide key={index}>
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
