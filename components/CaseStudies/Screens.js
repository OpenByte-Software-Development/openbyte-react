import React from "react";
import Image from "next/image";
import ScreensMobile from "./ScreensMobile";

const Screens = ({ screensRows }) => {
  return (
    <section className="bg-beige lg:bg-dots bg-no-repeat bg-[right_top_-100px] lg:pt-28 lg:pb-20 py-14">
      <div>
        <h2 className="font-bold lg:text-[40px] text-[24px] leading-8 lg:leading-[50px] text-black text-center">
          Interface screens
        </h2>
        <div className="lg:flex flex-col justify-center items-center max-w-max mx-auto hidden">
          <div className="flex flex-col gap-y-20 mt-10">
            {screensRows.map((row, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center gap-x-10 min-w-max mx-auto"
                >
                  {row.map(({ src, alt }, index) => {
                    return (
                      <div
                        key={index}
                        className="border-3 rounded-[24px] flex overflow-hidden"
                      >
                        <Image src={src} alt={alt} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="block lg:hidden pt-4">
          <ScreensMobile screens={screensRows} />
        </div>
      </div>
    </section>
  );
};

export default Screens;
