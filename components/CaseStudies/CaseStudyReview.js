import React from "react";
import Image from "next/image";

// Images
import quoteSign from "../../public/quote.png";

const CaseStudyReview = ({
  title,
  description,
  clientName,
  clientPosition,
  clientAvatar,
}) => {
  return (
    <div className="bg-light-black py-28">
      <div className="container">
        <div className="lg:grid grid-rows-1 grid-cols-2 text-white lg:text-left text-center">
          <div className="max-w-[363px]">
            <h2 className="lg:text-8xl text-2xl lg:leading-[75px] font-bold">
              That’s what our partner said:
            </h2>
          </div>
          <div className="relative">
            <div className="flex justify-between opacity-50 absolute w-full lg:-top-[35px] -top-[10px]">
              <div className="flex lg:max-w-full max-w-[29px]">
                <Image src={quoteSign} alt="quote sign"/>
              </div>
              <div className="flex lg:max-w-full max-w-[29px]">
                <Image src={quoteSign} alt="quote sign" />
              </div>
            </div>

            <div className="lg:mx-[80px] mx-[30px]">
              <h3 className="lg:text-2xl text-2xl font-bold">{title}</h3>
              <p className="mt-4 font-lato text-lg text-lightGray">
                {description}
              </p>

              <div className="flex gap-4 items-center lg:justify-start justify-center mt-[18px]">
                <div className="bg-avatar-background bg-no-repeat bg-center p-2 flex justify-center items-center rounded-full">
                  <Image
                    src={clientAvatar}
                    alt={`${clientName}'s avatar`}
                    className="rounded-full"
                  />
                </div>

                <div className="">
                  <span className="text-base font-bold">{clientName}</span>
                  <div>
                    <span className="text-orange text-xs font-semibold">
                      {clientPosition}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyReview;
