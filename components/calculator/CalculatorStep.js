import React from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { v4 as uuid } from "uuid";

import cardTooltipIcon from "../../public/calculator/card-tooltip.svg";

const FeatureCard = ({
  tooltip,
  title,
  icon,
  isSelected,
  cardClickHandler,
}) => {
  return (
    <div
      onClick={cardClickHandler}
      className={`lg:p-6 py-[14px] px-6 border-3 rounded-3xl lg:min-w-[217px] cursor-pointer ${
        isSelected
          ? "border-orange bg-beige"
          : "hover:border-orange border-lightGray"
      }`}
    >
      <div className="lg:block grid grid-rows-1 grid-cols-5">
        <div className="flex justify-end order-2 lg:-order-none col-span-1 items-center">
          <div className="lg:flex items-center tooltip">
            <div className="flex items-center">
              <Image src={cardTooltipIcon} alt={tooltip} />
            </div>
            <div className="tooltiptext flex flex-col justify-end items-center min-h-[120px] lg:-left-[115px] -left-[200px]">
              <div className="max-h-min bg-darkGray rounded-xl py-[9px] px-5">
                <span className="">{tooltip}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mt-2 mx-auto flex lg:flex-col items-center justify-start order-1 col-span-3 w-full lg:-order-none">
          <div className="lg:w-[100px] lg:h-[100px] w-[56px] h-[56px] flex lg:justify-center justify-start items-center lg:mx-auto">
            <Image src={icon} alt={title} />
          </div>

          <span className="block text-center uppercase font-lato text-xs font-bold text-light-black ml-2">
            {title}
          </span>
        </div>

        <div className="lg:mt-5 order-3 lg:-order-none col-span-1 flex justify-end items-center">
          <div
            className={`w-[19px] h-[19px] border-3 border-orange rounded-[4px] bg-checkbox-icon bg-no-repeat bg-center lg:mx-auto ${
              isSelected && "border-orange bg-orange"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const CalculatorStep = ({ title, description, options, cardClickHandler }) => {
  return (
    <Tab.Panel className="lg:py-[52px] py-8">
      <div>
        <div className="text-center text-light-black">
          <h3 className="lg:text-3xl text-xl lg:leading-[40px] leading-[30px] font-bold">
            {title}
          </h3>
          <p className="font-lato">{description}</p>
        </div>
        <div className="flex justify-center gap-6 mt-8 lg:flex-row flex-col">
          {options.map((option, index) => (
            <FeatureCard
              {...option}
              key={uuid()}
              cardClickHandler={() => cardClickHandler(index)}
            />
          ))}
        </div>
      </div>
    </Tab.Panel>
  );
};

export default CalculatorStep;
