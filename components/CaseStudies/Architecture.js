import React from "react";
import Image from "next/image";

const Architecture = ({ src, alt, mobileSrc }) => {
  return (
    <section className="container lg:py-24 pt-11 pb-3">
      <div>
        <h2 className="font-bold lg:text-[40px] text-2xl lg:leading-[50px] text-black text-center">
          Architecture
        </h2>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <div className="lg:hidden">
          <Image src={mobileSrc} alt={alt} />
        </div>
        <div className="hidden lg:block">
          <Image src={src} alt={alt} />
        </div>
      </div>
    </section>
  );
};

export default Architecture;
