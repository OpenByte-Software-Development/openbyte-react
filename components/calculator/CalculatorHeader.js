import React from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { v4 as uuid } from "uuid";

// Images
import emptyCheck from "../../public/calculator/empty-check.png";
import stepCompletedIcon from "../../public/calculator/check.png";

const StepIcon = ({ isCompleted, stepName, disabled }) => {
  return (
    <Tab
      className={`flex items-center ${
        !disabled && "opacity-50 cursor-default"
      }`}
      disabled={!disabled}
    >
      <div className="">
        <div className="flex items-center flex-col w-full">
          <Image
            src={isCompleted ? stepCompletedIcon : emptyCheck}
            alt="step icon"
            height="45"
            width="45"
            layout="fixed"
          />
          <span className="block mt-3 uppercase text-xs font-lato font-bold">
            {stepName}
          </span>
        </div>
      </div>

      <div className="bg-light-black w-full uppercase"></div>
    </Tab>
  );
};

const CalculatorHeader = ({ calculator }) => {
  const steps = Object.keys(calculator.steps);
  return (
    <Tab.List className="flex justify-around">
      {steps.map((step, index) => (
        <StepIcon
          key={uuid()}
          stepName={step}
          disabled={index <= calculator.maxTab || true  }
          isCompleted={calculator.steps[step].isCompleted}
        />
      ))}
    </Tab.List>
  );
};

export default CalculatorHeader;
