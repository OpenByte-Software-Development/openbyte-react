import React, { useState } from "react";
import { CLIENTS_REVIEWS } from "../../lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "../SwiperNavigation";
import Review from "../Review";
import "swiper/css";

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="bg-light-black">
      <div className="container mx-auto lg:py-32 py-14">
        <div className="pb-14 lg:bg-hearth bg-[left_top_250px] bg-no-repeat">
          <div className="lg:grid grid-rows-1 grid-cols-9 lg:gap-[132px] lg:items-start">
            <div className="lg:col-span-4 lg:text-left text-center">
              <h2 className="lg:text-6xl text-3xl font-bold text-white">
                Our customers love our work.
              </h2>
              <p className="mt-4 text-lightGray font-lato leading-7 text-lg">
                We only provide great produts combined with excellent customer
                service. See what our satisified customers are saying about our
                services.
              </p>
            </div>

            <div className="lg:col-span-5 px-8 lg:py-0 mt-8 lg:mt-0">
              <div className="relative">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={50}
                  loop={true}
                  onSwiper={(swiper) => setSwiperInstance(swiper)}
                >
                  {CLIENTS_REVIEWS.map((review, index) => (
                    <SwiperSlide key={index}>
                      <Review {...review} className="border-white" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <SwiperNavigation swiper={swiperInstance} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
