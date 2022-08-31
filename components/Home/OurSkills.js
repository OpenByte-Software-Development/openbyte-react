import React from "react";
import { Tag } from "../OpenbyteUI";
import TechIcon from "../TechIcon";

// Images
import reactLogo from "../../public/icons/react.svg";
import vueLogo from "../../public/icons/vue.svg";
import nodeLogo from "../../public/icons/node.svg";
import laravelLogo from "../../public/icons/laravel.svg";
import mongoLogo from "../../public/icons/mongo.svg";
import awsLogo from "../../public/icons/aws.svg";

const SKILLS_MAP = {
  REACTJS: reactLogo,
  VUE: vueLogo,
  NODEJS: nodeLogo,
  LARAVEL: laravelLogo,
  MONGODB: mongoLogo,
  AWS: awsLogo,
};

const INDUSTRIES = [
  "Knowledge Sharing",
  "Banking and Finance",
  "Information and Technology",
  "Logistics",
  "Human Resources",
];

const industries = INDUSTRIES.map((industry, index) => (
  <Tag text={industry} variant="blue" key={index} />
));

const ContainerTemplate = ({ title, children }) => {
  return (
    <div className="border-3 border-black rounded-3xl lg:px-[30px] px-4 lg:py-[25px] py-[32px]">
      <h3 className="text-center font-bold text-4xl">{title}</h3>
      <div className="mt-8">{children}</div>
    </div>
  );
};

const OurSkills = () => {
  return (
    <section className="lg:py-[120px] py-16 bg-beige">
      <div className="container mx-auto">
        <div className="lg:grid grid-rows-1 grid-cols-2 gap-10 place-items-stretch">
          <div className="mb-6 lg:mb-0">
            <ContainerTemplate title="Our Skills">
              <div
                className={`grid lg:grid-rows-1 lg:grid-cols-6 grid-cols-3 grid-rows-2 gap-8`}
              >
                {Object.keys(SKILLS_MAP).map((skill, index) => (
                  <TechIcon src={SKILLS_MAP[skill]} name={skill} key={index} />
                ))}
              </div>
            </ContainerTemplate>
          </div>

          <ContainerTemplate title="Industries">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              {industries}
            </div>
          </ContainerTemplate>
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
