import React from "react";

const CalculatorFooter = ({ nextStep, previousStep }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <button
          className="px-6 py-[11px] bg-transparent text-orange border-3 border-orange text-sm leading-[18px] rounded-full font-extrabold"
          onClick={previousStep}
        >
          Previous step
        </button>
      </div>

      <div>
        <div className="flex justify-between text-center">
          <div className="text-light-black font-bold">
            <span className="block uppercase">
              Estimative price<span className="text-xl leading-[30px]">*</span>
            </span>
            <span className="block text-black text-2xl">{`$ ${"0000"}`}</span>
          </div>
          <div className="text-light-black font-bold">
            <span className="block uppercase">
              Estimative time<span className="text-xl leading-[30px]">*</span>
            </span>
            <span className="block text-black text-2xl">{`days ${"00"}`}</span>
          </div>
        </div>

        <p className="uppercase font-bold font-lato text-lightGray text-xs mt-[21px]">
          <span className="text-black text-xl leading-[30px]">* </span>The
          calculated time and price could variate to 50%
        </p>
      </div>

      <div>
        <button
          className="py-[14px] px-8 bg-orange text-white text-sm leading-[18px] rounded-full font-extrabold"
          onClick={nextStep}
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default CalculatorFooter;
