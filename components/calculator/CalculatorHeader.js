import React from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { v4 as uuid } from "uuid";

// Images
import emptyCheck from "../../public/calculator/empty-check.png";
import stepCompletedIcon from "../../public/calculator/check.png";

const getStepLineHeight = (disabled, stepIndex, isCompleted) => {
  let lineWidth = "";

  if (disabled) {
    if (stepIndex === 0) {
      if (isCompleted) {
        lineWidth = "w-1/2 right-0";
      }
    } else if (stepIndex === 6) {
      lineWidth = "w-1/2 left-0";
    } else if (isCompleted) {
      lineWidth = "w-full";
    } else {
      lineWidth = "w-1/2 left-0";
    }
  }

  return lineWidth;
};

const StepIcon = ({
  isCompleted,
  stepName,
  disabled,
  stepIndex,
  currentStep,
}) => {
  return (
    <Tab
      className={`flex items-center relative ${
        !disabled && "opacity-50 cursor-default"
      }`}
      disabled={!disabled}
    >
      <div className="mx-auto">
        <div className="flex items-center flex-col w-full mx-auto z-10">
          <Image
            src={isCompleted ? stepCompletedIcon : emptyCheck}
            alt="step icon"
            height={stepCompletedIcon.height}
            width={stepCompletedIcon.width}
            layout="fixed"
          />
          <span className="lg:block mt-3 uppercase text-xs font-lato font-bold hidden">
            {stepName}
          </span>
        </div>
      </div>
      <div
        className={`h-[3px] bg-light-black absolute top-[22.5px] -z-10 ${getStepLineHeight(
          disabled,
          stepIndex,
          isCompleted
        )}`}
      ></div>
    </Tab>
  );
};

const CalculatorHeader = ({ calculator, stepsData }) => {
  const steps = Object.keys(stepsData);
  return (
    <Tab.List className="grid grid-rows-1 grid-cols-7">
      {steps.map((step, index) => (
        <StepIcon
          key={uuid()}
          stepName={step}
          disabled={index <= calculator.maxTab}
          isCompleted={calculator[step].isCompleted}
          stepIndex={index}
          currentStep={calculator.stepIndex}
        />
      ))}
    </Tab.List>
  );
};

export default CalculatorHeader;
