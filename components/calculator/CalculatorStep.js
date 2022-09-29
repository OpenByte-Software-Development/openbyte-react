import React from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";

import cardTooltipIcon from "../../public/calculator/card-tooltip.png";

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
      className={`p-6 border-3  rounded-3xl min-w-[217px] cursor-pointer ${
        isSelected
          ? "border-orange bg-beige"
          : "hover:border-orange border-lightGray"
      }`}
    >
      <div>
        <div className="flex justify-end">
          <div className="flex tooltip items-center">
            <Image src={cardTooltipIcon} alt={tooltip} />
            <span className="tooltiptext">{tooltip}</span>
          </div>
        </div>

        <div className="mt-2 mx-auto">
          <div className="w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <Image src={icon} alt={title} />
          </div>

          <span className="block text-center uppercase font-lato text-xs font-bold text-light-black">
            {title}
          </span>
        </div>

        <div className="mt-5">
          <div
            className={`w-[19px] h-[19px] border-3 border-orange rounded-[4px] bg-checkbox-icon bg-no-repeat bg-center mx-auto ${
              isSelected && "border-orange bg-orange"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const CalculatorStep = ({
  title,
  description,
  options,
  cardClickHandler,
}) => {
  return (
    <Tab.Panel className="py-[52px]">
      <div>
        <div className="text-center text-light-black">
          <h3 className="text-[32px] leading-[40px] font-bold">{title}</h3>
          <p className="font-lato ">{description}</p>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          {options.map((option, index) => (
            <FeatureCard
              {...option}
              key={option.title}
              cardClickHandler={() => cardClickHandler(index)}
            />
          ))}
        </div>
      </div>
    </Tab.Panel>
  );
};

export default CalculatorStep;
