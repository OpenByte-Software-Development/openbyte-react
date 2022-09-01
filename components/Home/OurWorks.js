import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../OpenbyteUI/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "../SwiperNavigation";
import { OUR_WORKS } from "../../lib/constants";

// title: "Mevuo",
//     description: "Interactive documents",
//     tags: ["Collaboration", "Documentation", "Knowledge"],
//     body: "The biggest challenge for that project was to build front-end part that was written with Vue.js + additional components. But to have a flexible and optimized code we build all modules from scratch.",
//     ctaLink: "/",
//     preview: "",
//     clutchReview: "",

const Project = ({
  title,
  description,
  tags,
  body,
  ctaLink,
  preview,
  clutchReview,
}) => {
  const projectTags = tags.map((tagText, index) => (
    <Tag text={tagText} variant="blue" key={index} />
  ));
  return (
    <div className="border-3 border-black rounded-3xl">
      <div className="lg:my-8 lg:ml-12 lg:mr-0 my-6 mx-9">
        <div className="grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-1 grid-cols-1 lg:gap-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-black text-[56px] font-bold leading-[70px] hidden lg:block">
              {title}
            </h3>
            <h4 className="text-black text-[32px] font-bold leading-10 hidden lg:block">
              {description}
            </h4>

            <div className="my-6 lg:my-0">
              <div className="grid grid-rows-1 grid-cols-2 lg:block">
                <div className="flex lg:my-8 gap-4 lg:flex-row flex-col justify-start">
                  {projectTags}
                </div>

                <div className="lg:hidden flex items-end">
                  <Image src={clutchReview} alt="clutch review" />
                </div>
              </div>
            </div>

            <p className="font-lato text-lg text-darkGray">{body}</p>

            <div className="mt-11 flex justify-between items-end w-full">
              <div className="w-full">
                <Link href="/">
                  <button className="bg-transparent text-orange text-base rounded-full border-orange border-3 py-4 px-8 font-extrabold lg:w-auto w-full">
                    Learn more
                  </button>
                </Link>
              </div>
              <div className="hidden lg:block">
                <Image src={clutchReview} alt="clutch review" />
              </div>
            </div>
          </div>

          <div className="flex justify-end order-1 w-full relative">
            <div className="lg:rounded-l-[27px] rounded-[25px] lg:rounded-none border-3 lg:border-r-[0px] border-black grid overflow-hidden w-full h-[224px] lg:h-auto">
              <Image src={preview} alt="Mevuo app preview" />
            </div>

            <div className="w-full h-full absolute top-0 left-0 rounded-[25px] flex justify-end flex-col bg-dark-gradient px-4 pb-3 lg:hidden">
              <h3 className="text-white text-[32px] font-bold">{title}</h3>
              <h4 className="text-white text-[22px] font-bold">
                {description}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurWorks = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="mt-[72px] relative">
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
        <h2 className="lg:text-[56px] text-[32px] font-bold text-light-black leading-[70px] text-center lg:text-left">
          Our works
        </h2>

        <div className="mt-14">
          <div className="relative">
            <div className="bg-beige absolute -bottom-[15px] -left-[15px] rounded-3xl min-w-[100%] min-h-[100%]"></div>

            <Swiper
              slidesPerView={1}
              spaceBetween={100}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              loop={true}
            >
              {OUR_WORKS.map((project, index) => (
                <SwiperSlide key={index}>
                  <Project {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperNavigation
              swiper={swiperInstance}
              className="hidden lg:block"
            />
          </div>

          <div className="mt-14">
            <Link href="/case-studies">
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
