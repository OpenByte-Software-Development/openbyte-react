import React from "react";

const disabledButtonStyle = "opacity-50";

const CalculatorFooterMobile = ({
  nextStep,
  previousStep,
  resetCalculator,
  days,
  price,
  isFinalStep,
  isNextStepAvailable,
}) => {
  return (
    <div className="">
      <div className="grid grid-rows-1 grid-cols-2 gap-6 max-w-[600px] mx-auto">
        <button
          className="px-6 py-[11px] bg-transparent text-orange border-3 border-orange text-sm leading-[18px] rounded-full font-extrabold"
          onClick={previousStep}
        >
          Previous step
        </button>

        <button
          className={`py-[14px] px-8 bg-orange text-white text-sm leading-[18px] rounded-full font-extrabold ${
            !isNextStepAvailable && disabledButtonStyle
          }`}
          onClick={nextStep}
          disabled={!!!isNextStepAvailable || true}
        >
          Next step
        </button>
      </div>

      <div className="mt-6">
        {isFinalStep ? (
          <div className="w-full">
            <button
              className={`block px-6 py-[11px] bg-transparent text-orange font-extrabold mx-auto`}
              onClick={resetCalculator}
            >
              Start again
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-center text-center gap-11">
              <div className="text-light-black font-bold">
                <span className="block uppercase">
                  Estimative price
                  <span className="text-xl leading-[30px]">*</span>
                </span>
                <span className="block text-black text-2xl">{`$ ${price}`}</span>
              </div>
              <div className="text-light-black font-bold">
                <span className="block uppercase">
                  Estimative time
                  <span className="text-xl leading-[30px]">*</span>
                </span>
                <span className="block text-black text-2xl">{`days ${days}`}</span>
              </div>
            </div>

            <p className="uppercase font-bold font-lato text-lightGray text-xs mt-[21px] text-center">
              <span className="text-black text-xl leading-[30px]">* </span>The
              calculated time and price could variate to 50%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorFooterMobile;
