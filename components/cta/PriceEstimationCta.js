import React from "react";
import Image from "next/image";

// Images
import arrowRight from "../../public/icons/arrow-right.svg";

const PriceEstimationCta = () => {
  return (
    <section className="bg-orange lg:bg-opacity-0">
      <div className="bg-cta-background-mobile bg-right-bottom bg-no-repeat z-20 lg:bg-none">
        <div className="container lg:mx-auto lg:bg-orange bg-none lg:rounded-[30px]">
          <div className="lg:bg-cta-price-estimation-background bg-right-bottom lg:py-[73px] py-8 lg:px-[96px] bg-no-repeat">
            <h2 className="text-white font-bold lg:leading-[70px] leading-[50px] lg:text-[56px] text-[40px] max-w-[600px]">
              How much will your app cost?
            </h2>

            <div>
              <div className="mt-8 max-w-[220px]">
                <div className="mt-[50px]">
                  <button
                    role="submit"
                    className="text-orange bg-white text-base font-extrabold rounded-full px-10 py-[18px]"
                  >
                    Get a cost estimation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimationCta;
