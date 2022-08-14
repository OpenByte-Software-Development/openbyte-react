import React from "react";
import Image from "next/image";
import { Tag } from "../OpenbyteUI";

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

const Skill = ({ icon, text }) => {
  return (
    <div className="text-center flex flex-col justify-between">
      <Image src={icon} alt={`${text} logo`} />
      <span className="block mt-[15px] text-orange font-bold">{text}</span>
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
                className={`flex flex-wrap lg:flex-nowrap justify-around lg:justify-between gap-10`}
              >
                {Object.keys(SKILLS_MAP).map((skill) => (
                  <Skill icon={SKILLS_MAP[skill]} text={skill} key={skill} />
                ))}
              </div>
            </ContainerTemplate>
          </div>

          <ContainerTemplate title="Industries">
            <div className="flex items-center gap-6 flex-wrap justify-start">
              {industries}
            </div>
          </ContainerTemplate>
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
