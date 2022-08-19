import React from "react";
import Image from "next/image";

// Images
import workflow1 from "../../../public/workflow-1.svg";
import workflow2 from "../../../public/workflow-2.svg";
import workflow3 from "../../../public/workflow-3.svg";
import workflow4 from "../../../public/workflow-4.svg";
import workflow5 from "../../../public/workflow-5.svg";

const STEPS = [
  {
    src: workflow1,
    title: "Identify your customer profile",
    description:
      "A most important part of building MVP is to know who is your customer, and in order to do that, you have to identify your customer profile.",
  },
  {
    src: workflow2,
    title: "Focus on the top 3 problems you want to solve.",
    description:
      "Don’t try to solve all the problems in the world, based on your customer profile focus on maximum 3 features that will solve the customer's problems.",
  },
  {
    src: workflow3,
    title: "Identify your best solutions and present them as features.",
    description:
      "Identify the solutions for your customer profile and present them as the only way to solve their real problem by providing some evidence or real use cases.",
  },
  {
    src: workflow4,
    title: "Build minimal MVP using top 3 solutions.",
    description:
      "Start by building your MVP using the top 3 solutions you identified earlier, they are enough to start gathering feedback from your customers.",
  },
  {
    src: workflow5,
    title:
      "Analyze customer feedback and get insights if those features were useful for them.",
    description:
      "Feedback, Feedback, Feedback! Listen carefully to your customers and improve your app using an iterative process.",
  },
];

const MvpDevProcess = () => {
  return (
    <section className="mb-28 mt-20">
      <div className="container  text-center">
        <h2 className="text-[40px] font-bold leading-[50px] text-light-black">
          MVP development process
        </h2>

        <div className="flex flex-wrap gap-12 mt-12 justify-center">
          {STEPS.map(({ src, title, description }, index) => {
            return (
              <div key={index} className="max-w-[362px]">
                <div className="max-w-[64px] lg:max-w-none mx-auto">
                  <Image src={src} alt={title} />
                </div>

                <div className="mt-6">
                  <h3 className="text-[24px] text-light-black font-bold">
                    {title}
                  </h3>
                  <p className="text-base text-gray font-lato text leading-7 mt-4">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MvpDevProcess;
