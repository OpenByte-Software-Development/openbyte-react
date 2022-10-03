import React from "react";
import Link from "next/link";

// Images
import arrowRight from "../../public/icons/arrow-right.svg";

const PriceEstimationCta = () => {
  return (
    <section className="bg-orange lg:bg-opacity-0">
      <div className="z-20">
        <div className="lg:container lg:mx-auto lg:bg-orange bg-none lg:rounded-[30px]">
          <div className="lg:bg-cta-price-estimation-background bg-cta-price-estimation-background-mobile bg-right-bottom bg-no-repeat min-h-[362px] lg:block flex items-center lg:min-h-auto">
            <div className="p-8 lg:py-[73px] lg:px-[96px]">
              <h2 className="text-white font-bold lg:leading-[70px] leading-[50px] lg:text-[56px] text-[40px] lg:max-w-[600px] max-w-[60%]">
                How much will your app cost?
              </h2>

              <div>
                <div className="mt-8">
                  <div className="mt-[50px]">
                    <Link prefetch={false}  href="/calculator">
                      <a>
                        <button
                          role="submit"
                          className="text-orange bg-white text-base font-extrabold rounded-full px-10 py-[18px]"
                        >
                          Get a cost estimation
                        </button>
                      </a>
                    </Link>
                  </div>
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
