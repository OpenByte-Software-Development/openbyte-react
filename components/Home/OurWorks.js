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
      <div className="my-8 ml-12 mr-0">
        <div className="grid grid-rows-1 grid-cols-2 gap-20">
          <div>
            <h3 className="text-black text-[56px] font-bold leading-[70px]">
              {title}
            </h3>
            <h4 className="text-black text-[32px] font-bold leading-10">
              {description}
            </h4>

            <div className="flex my-8 gap-4">{projectTags}</div>

            <p className="font-lato text-lg text-darkGray">{body}</p>

            <div className="mt-11 flex justify-between items-end">
              <div>
                <Link href="/">
                  <button className="lg:bg-transparent text-orange text-base rounded-full border-orange border-3 py-4 px-8 font-extrabold">
                    Learn more
                  </button>
                </Link>
              </div>
              <div>
                <Image src={clutchReview} alt="clutch review" />
              </div>
            </div>
          </div>

          <div className="flex justify-end h-auto">
            <div className="rounded-l-[25px] border-3 border-r-[0px] border-black grid">
              <Image src={preview} alt="Mevuo app preview" />
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
      <svg viewBox="0 0 1920 350" className="absolute bottom-0">
        <path
          d="M2012 1026L2025.5 394.709C2003.52 366.8 1981.55 338.891 1952.25 310.983C1849.69 215.296 1710.51 139.544 1527.38 83.7261C1344.25 27.9087 1153.79 0 956.012 0C670.327 0 421.268 51.8305 208.836 159.478C69.6557 227.257 -25.5727 306.996 -91.5 390.722L-105 1026H2012Z"
          fill="#323232"
        />
      </svg>
      <div className="container mx-auto">
        <h2 className="text-[56px] font-bold text-light-black leading-[70px]">
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
