import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesHero = ({ title, description, ...imageProps }) => {
  return (
    <section className="bg-beige pb-14 pt-[106px] bg-dots bg-no-repeat bg-[right_bottom_-143px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between lg:flex-row flex-col">
          <div className="max-w-[655px]">
            <h1 className="lg:text-[56px] text-[32px] font-bold lg:text-left text-center">
              {title}
            </h1>

            <p className="text-lg font-lato mt-4 text-darkGray leading-8">{description}</p>

            <button className="py-[14px] px-8 bg-orange text-white text-base rounded-full font-extrabold w-auto mt-11">
              {"Let's talk"}
            </button>
          </div>
          <div className="mr-[48px]">  
            <Link href="/contact"> 
              <Image src={imageProps.src} alt={imageProps.alt} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
