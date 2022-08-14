import React, { useState } from "react";
import Image from "next/image";
import { CLIENTS_REVIEWS } from "../../lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "../SwiperNavigation";
import "swiper/css";

// Images
import defaultAvatar from "../../public/default-review-avatar.png";

const Review = ({ avatar, name, company, position, review, clutchReview }) => (
  <div className="pl-2 pb-2">
    <div className="border-2 border-white rounded-3xl relative p-8">
      <div className="flex gap-4 items-center">
        <div className="bg-avatar-background bg-no-repeat bg-center p-2 flex justify-center items-center">
          <Image src={defaultAvatar} alt={`${name}'s avatar`} />
        </div>

        <div>
          <span className="text-base text-light-black font-bold">{name}</span>
          <div>
            <span className="text-orange text-xs font-semibold">{company}</span>{" "}
            <span className="text-light-black text-xs font-semibold">
              {position}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <p className="font-lato text-light-black text-lg leading-7">{review}</p>
      </div>

      <div className="mt-8">
        {/* // TODO: replace with actual clutch review */}
        <Image src={clutchReview} alt="clutch review" />
      </div>
      <div className="bg-yellow absolute -bottom-2 -left-2 rounded-3xl min-w-[100%] min-h-[100%] -z-10"></div>
    </div>
  </div>
);

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="bg-light-black">
      <div className="container mx-auto lg:py-32 py-14">
        <div className="pb-14 lg:bg-hearth bg-[left_bottom_-15px] bg-no-repeat">
          <div className="lg:grid grid-rows-1 grid-cols-9 lg:gap-[132px] lg:items-start">
            <div className="lg:col-span-4 lg:text-left text-center">
              <h2 className="lg:text-[56px] text-[32px] font-bold text-white lg:leading-[70px] leading-[40px]">
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
                  navigation={true}
                  loop={true}
                  onSwiper={(swiper) => setSwiperInstance(swiper)}
                >
                  {CLIENTS_REVIEWS.map((review, index) => (
                    <SwiperSlide key={index}>
                      <Review {...review} />
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
