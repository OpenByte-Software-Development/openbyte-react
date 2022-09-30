import React, { useReducer, useState } from "react";
import { Tab } from "@headlessui/react";
import CalculatorFooter from "./CalculatorFooter";
import CalculatorHeader from "./CalculatorHeader";
import CalculatorStep from "./CalculatorStep";
import CalculatorCompleteModal from "./CalculatorCompleteModal";
import { v4 as uuid } from "uuid";

const hourlyRate = parseInt(process.env.NEXT_PUBLIC_HOURLY_RATE);

//icons
// screen 1
import calculator1_1 from "../../public/calculator/icons/1-1.png";
import calculator1_2 from "../../public/calculator/icons/1-2.png";
import calculator1_3 from "../../public/calculator/icons/1-3.png";
//screen 2
import calculator2_1 from "../../public/calculator/icons/2-1.png";
import calculator2_2 from "../../public/calculator/icons/2-2.png";
import calculator2_3 from "../../public/calculator/icons/2-3.png";
import calculator2_4 from "../../public/calculator/icons/2-4.png";
// screen 3
import calculator3_1 from "../../public/calculator/icons/3-1.png";
import calculator3_2 from "../../public/calculator/icons/3-2.png";
import calculator3_3 from "../../public/calculator/icons/3-3.png";
import calculator3_4 from "../../public/calculator/icons/3-4.png";
// screen 4
import calculator4_1 from "../../public/calculator/icons/4-1.png";
import calculator4_2 from "../../public/calculator/icons/4-2.png";
import calculator4_3 from "../../public/calculator/icons/4-3.png";
// screen 5
import calculator5_1 from "../../public/calculator/icons/5-1.png";
import calculator5_2 from "../../public/calculator/icons/5-2.png";
// screen 6
import calculator6_1 from "../../public/calculator/icons/6-1.png";
//screen 7
import calculator7_1 from "../../public/calculator/icons/7-1.png";
import calculator7_2 from "../../public/calculator/icons/7-2.png";
import calculator7_3 from "../../public/calculator/icons/7-3.png";
import calculator7_4 from "../../public/calculator/icons/7-4.png";
import calculator7_5 from "../../public/calculator/icons/7-5.png";

const CALCULATOR_ACTIONS = {
  CARD_CLICK: "card_click",
  COMPLETE_STEP: "complete_step",
  NEXT_STEP: "next_step",
  PREVIOUS_STEP: "previous_step",
  SELECT_TAB: "select_tab",
  RESET_CALCULATOR: "reset_calculator",
};

const OverviewCard = ({ title, options }) => (
  <div className="bg-beige">
    <div className="bg-light-black p-4 text-white capitalize font-lato text-lg">
      {title}:
    </div>

    <div className="mt-[10px] py-5 px-4">
      <ul className="uppercase flex gap-6 flex-col">
        {options
          .filter((option) => option.isSelected)
          .map((option) => (
            <li
              key={uuid()}
              className="flex flex-col gap-10 font-lato font-bold text-xs"
            >
              {option.title}
            </li>
          ))}
      </ul>
    </div>
  </div>
);

const OverviewStep = ({ steps, price, days }) => {
  return (
    <Tab.Panel className="pt-14 pb-16">
      <div className="text-center text-light-black">
        <h3 className="text-[32px] leading-[40px] font-bold">
          Calculation results
        </h3>

        <div className="my-6">
          <div className="flex justify-center text-center gap-11">
            <div className="text-light-black font-bold">
              <span className="block uppercase">
                Estimative price
                <span className="text-xl leading-[30px]">*</span>
              </span>
              <span className="block text-orange text-2xl">{`$ ${price}`}</span>
            </div>
            <div className="text-light-black font-bold">
              <span className="block uppercase">
                Estimative time<span className="text-xl leading-[30px]">*</span>
              </span>
              <span className="block text-orange text-2xl">{`days ${days}`}</span>
            </div>
          </div>

          <p className="uppercase font-bold font-lato text-lightGray text-xs mt-[21px]">
            <span className="text-black text-xl leading-[30px]">* </span>The
            calculated time and price could variate to 50%
          </p>
        </div>
      </div>

      <div className="grid grid-rows-1 grid-cols-6 gap-[10px] rounded-[24px] overflow-hidden">
        {Object.keys(steps)
          .filter((step) => step !== "additional")
          .map((step) => (
            <OverviewCard
              title={step}
              options={steps[step].options}
              key={uuid()}
            />
          ))}
      </div>
    </Tab.Panel>
  );
};

const CALCULATOR_STEPS = {
  countedHours: 0,
  stepIndex: 0,
  maxTab: 0,
  steps: {
    type: {
      title: "What type of app you are going to build?",
      description: "Choose an appropriate type of app you want to build.",
      required: true,
      options: [
        {
          title: "Web Application",
          tooltip:
            "Web application have responsive design and if you need a mobile version we can convert the web application to PWA.",
          icon: calculator1_1,
          hours: 0,
          isSelected: false,
        },
        {
          title: "Desktop software",
          tooltip:
            "We build the desktop application using Electron.js which is a framework that allows us to build the app for macOS and Windows in parallel.",
          icon: calculator1_2,
          hours: 0,
          isSelected: false,
        },
        {
          title: "Android, IOS",
          tooltip:
            "For Android and IOS, we use React Native which allows us to share the same code base and decrease the time of development.",
          icon: calculator1_3,
          hours: 0,
          isSelected: false,
        },
      ],
    },
    authentication: {
      isCompleted: false,
      title: "How your users will authenticate?",
      description: "You can select multiple authentication channels.",
      required: true,
      options: [
        {
          title: "Via Email",
          tooltip:
            "Your users will use a basic email/password form in order to be authenticated.",
          icon: calculator2_1,
          hours: 8,
          isSelected: false,
        },
        {
          title: "Social",
          tooltip:
            "Login through popular social networks like Facebook, Google or LinkedIn.",
          icon: calculator2_2,
          hours: 16,
          isSelected: false,
        },
        {
          title: "SSO",
          tooltip: "Authenticate your users through single sign-on.",
          icon: calculator2_3,
          hours: 16,
          isSelected: false,
        },
        {
          title: "Two-factor authentication",
          tooltip: "Enable two-factor authentication method by sms code.",
          icon: calculator2_4,
          hours: 16,
          isSelected: false,
        },
      ],
    },
    profile: {
      isCompleted: false,
      title: "Profile Management",
      description:
        "Select if are you need any additional features related to profile management.",
      required: false,
      options: [
        {
          title: "Profile",
          tooltip:
            "Allows users to update profile, recovery passowrd by email.",
          icon: calculator3_1,
          hours: 24,
          isSelected: false,
        },
        {
          title: "Audit logs",
          tooltip: "Register all user actions.",
          icon: calculator3_2,
          hours: 16,
          isSelected: false,
        },
        {
          title: "Roles, Permissions",
          tooltip:
            "With roles and permissions you can create permission-based content/pages.",
          icon: calculator3_3,
          hours: 32,
          isSelected: false,
        },
        {
          title: "Invite By Email",
          tooltip: "Allows to invite other users by email.",
          icon: calculator3_4,
          hours: 24,
          isSelected: false,
        },
      ],
    },
    messages: {
      isCompleted: false,
      title: "How your users will communicate?",
      description: "Not all features are related to users communication.",
      required: false,
      options: [
        {
          title: "notifications",
          tooltip: "Notify your users through system notifications.",
          icon: calculator4_1,
          hours: 24,
          isSelected: false,
        },
        {
          title: "messages",
          tooltip: "Build internal chat.",
          icon: calculator4_2,
          hours: 48,
          isSelected: false,
        },
        {
          title: "transactional messages ",
          tooltip: "Trigger event-based transactional emails.",
          icon: calculator4_3,
          hours: 32,
          isSelected: false,
        },
      ],
    },
    payment: {
      isCompleted: false,
      title: "How your users will be charged?",
      description: "If you are startup you can choose subscription type.",
      required: false,
      options: [
        {
          title: "card payment",
          tooltip: "Trigger event-based transactional emails.",
          icon: calculator5_1,
          hours: 24,
          isSelected: false,
        },
        {
          title: "subscriptions",
          tooltip:
            "A good option for SaaS applications, in case you want to charge your users on a monthly basis.",
          icon: calculator5_2,
          hours: 32,
          isSelected: false,
        },
      ],
    },
    reports: {
      isCompleted: false,
      title: "Do you need database-related charts?",
      description:
        "You can choose this option if your application require charts from collected data.",
      required: false,
      options: [
        {
          title: "analytics",
          tooltip: "Build internal chart analytics.",
          icon: calculator6_1,
          hours: 40,
          isSelected: false,
        },
      ],
    },
    reports: {
      isCompleted: false,
      title: "Do you need any additional features?",
      description: "Please select if any additional options are needed.",
      options: [
        {
          title: "Crash reporting",
          tooltip: "Tracking errors in real-time.",
          icon: calculator7_1,
          hours: 16,
          isSelected: false,
        },
        {
          title: "Tracking Analytics",
          tooltip:
            "Integrate tracking analytics tools in order to collect user data.",
          icon: calculator7_2,
          hours: 16,
          isSelected: false,
        },
        {
          title: "Export data",
          tooltip: "Allows to export data in csv, xls, pdf formats.",
          icon: calculator7_3,
          hours: 16,
          isSelected: false,
        },
        {
          title: "Booking system",
          tooltip: "Simple booking system.",
          icon: calculator7_4,
          hours: 48,
          isSelected: false,
        },
        {
          title: "Real-time map",
          tooltip: "Integrate real-time map.",
          icon: calculator7_5,
          hours: 56,
          isSelected: false,
        },
      ],
    },
    additional: {
      isCompleted: false,
      required: false,
      title: " ",
      description: " ",
      options: [],
    },
  },
};

const calculatorReducer = (state, action) => {
  const calculatorState = { ...state };
  const calculatorStepOptions = Object.keys(calculatorState.steps);
  const stepIndex = calculatorState.stepIndex;

  switch (action.type) {
    case CALCULATOR_ACTIONS.CARD_CLICK: {
      const { index } = action;
      const step = calculatorStepOptions[stepIndex];
      const selectedOption = calculatorState.steps[step].options[index];

      if (selectedOption.isSelected) {
        calculatorState.countedHours =
          calculatorState.countedHours - selectedOption.hours;
      } else {
        calculatorState.countedHours =
          calculatorState.countedHours + selectedOption.hours;
      }

      const updatedStep = {
        ...selectedOption,
        isSelected: !selectedOption.isSelected,
      };

      // set card as selected
      calculatorState.steps[step].options.splice(index, 1, updatedStep);

      return calculatorState;
    }
    case CALCULATOR_ACTIONS.COMPLETE_STEP: {
      const step = calculatorStepOptions[stepIndex];

      if (stepIndex <= calculatorStepOptions.length - 1) {
        calculatorState.steps[step].isCompleted = true;
      }

      return calculatorState;
    }
    case CALCULATOR_ACTIONS.PREVIOUS_STEP: {
      if (stepIndex === 0) return calculatorState;

      calculatorState.stepIndex = stepIndex - 1;

      return calculatorState;
    }
    case CALCULATOR_ACTIONS.NEXT_STEP: {
      if (stepIndex + 1 === calculatorStepOptions.length)
        return calculatorState;

      calculatorState.stepIndex = stepIndex + 1;

      if (calculatorState.stepIndex > calculatorState.maxTab) {
        calculatorState.maxTab = calculatorState.stepIndex;
      }

      return calculatorState;
    }
    case CALCULATOR_ACTIONS.SELECT_TAB: {
      const { index } = action;

      calculatorState.stepIndex = index;

      return calculatorState;
    }
    case CALCULATOR_ACTIONS.RESET_CALCULATOR: {
      return CALCULATOR_STEPS;
    }
    default:
      return calculatorState;
  }
};

const getIsNextStepAvailable = (currentStep) => {
  const { options, required } = currentStep;

  if (!required) return true;

  return options.some((option) => option.isSelected);
};

const Calculator = () => {
  const [showModal, setShowModal] = useState(false);
  const [calculator, dispatch] = useReducer(
    calculatorReducer,
    CALCULATOR_STEPS
  );

  const cardClickHandler = (index) => {
    dispatch({ type: CALCULATOR_ACTIONS.CARD_CLICK, index });
  };
  const nextStep = () => {
    if (calculator.stepIndex + 1 === Object.keys(calculator.steps).length) {
      setShowModal(true);
    }
    dispatch({ type: CALCULATOR_ACTIONS.COMPLETE_STEP });
    dispatch({ type: CALCULATOR_ACTIONS.NEXT_STEP });
  };
  const previousStep = () => {
    dispatch({ type: CALCULATOR_ACTIONS.PREVIOUS_STEP });
  };
  const selectTab = (index) => {
    dispatch({ type: CALCULATOR_ACTIONS.SELECT_TAB, index });
  };

  const resetCalculator = () => {
    dispatch({
      type: CALCULATOR_ACTIONS.RESET_CALCULATOR,
    });
  };

  return (
    <section className="container pt-[88px] pb-28">
      <Tab.Group selectedIndex={calculator.stepIndex} onChange={selectTab}>
        <CalculatorHeader calculator={calculator} />

        <Tab.Panels>
          {Object.keys(calculator.steps).map((step) => {
            return step === "additional" ? (
              <OverviewStep
                key={uuid()}
                days={Math.floor(calculator.countedHours / 8)}
                price={Math.floor(calculator.countedHours * hourlyRate)}
                steps={calculator.steps}
                cardClickHandler={cardClickHandler}
              />
            ) : (
              <CalculatorStep
                {...calculator.steps[step]}
                key={uuid()}
                cardClickHandler={cardClickHandler}
              />
            );
          })}
        </Tab.Panels>

        <CalculatorFooter
          nextStep={nextStep}
          previousStep={previousStep}
          resetCalculator={resetCalculator}
          days={Math.floor(calculator.countedHours / 8)}
          price={Math.floor(calculator.countedHours * hourlyRate)}
          isFinalStep={
            calculator.stepIndex === Object.keys(calculator.steps).length - 1
          }
          isNextStepAvailable={getIsNextStepAvailable(
            calculator.steps[Object.keys(calculator.steps)[calculator.stepIndex]]
          )}
        />
      </Tab.Group>
      <CalculatorCompleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        options={{
          hours: calculator.countedHours,
          price: Math.floor(calculator.countedHours * hourlyRate),
        }}
      />
    </section>
  );
};

export default Calculator;
