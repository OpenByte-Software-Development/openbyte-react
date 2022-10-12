import React from "react";
import Image from "next/image";

// Images
import arrowLeft from "../public/arrow-left.svg";

const SwiperNavigation = ({ swiper, className = "" }) => {
  return (
    <div className={className}>
      <div className="h-min absolute top-0 bottom-0 -left-[35px] cursor-pointer my-auto">
        <button onClick={() => swiper.slidePrev()}>
          <Image
            src={arrowLeft}
            height={arrowLeft.height}
            width={arrowLeft.width}
            alt="swiper arrow left"
            className="z-40"
          />
        </button>
      </div>

      <div className="h-min absolute rotate-180 top-0 bottom-0 -right-[35px] cursor-pointer my-auto">
        <button onClick={() => swiper.slideNext()}>
          <Image
            src={arrowLeft}
            height={arrowLeft.height}
            width={arrowLeft.width}
            alt="swiper arrow right"
          />
        </button>
      </div>
    </div>
  );
};

export default SwiperNavigation;
