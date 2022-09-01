import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesHero = ({ title, description, ...imageProps }) => {
  return (
    <section className="bg-beige pb-14 pt-[106px] lg:bg-dots lg:bg-no-repeat lg:bg-[right_bottom_-143px]">
      <div className="container mx-auto">
        <div className="flex items-center lg:flex-row flex-col-reverse justify-between">
          <div className="max-w-[655px] lg:text-left text-center">
            <h1 className="lg:text-[56px] text-[32px] font-bold">{title}</h1>

            <p className="text-lg font-lato mt-4 text-darkGray leading-8">
              {description}
            </p>

            <Link href="/contact">
              <a>
                <button className="py-[14px] px-8 bg-orange text-white text-base rounded-full font-extrabold lg:w-auto mt-11 w-full">
                  {"Let's talk"}
                </button>
              </a>
            </Link>
          </div>
          <div className="lg:mr-[48px] max-w-[145px] lg:w-auto mb-9 lg:mb-0">
            <Image src={imageProps.src} alt={imageProps.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
