import React from "react";
import Image from "next/image";
import {
  node,
  laravel,
  express,
  nest,
  mysql,
  mongo,
  aws,
  react,
  vue,
  next,
  tailwindcss,
  stripe,
  digitalOcean,
  googleCloud,
} from "../../../lib/icons";
import TechIcon from "../../TechIcon";

// Images
import buddy from "../../../public/tech-stack-buddy.svg";

const TECH_STACK = {
  Backend: {
    body: "We have a great tech stack which compounds by the latest top-rated frameworks that have support from a large community and are on the top for the past several years.",
    stackIcons: [
      {
        src: node,
        name: "NODE.JS",
      },
      {
        src: laravel,
        name: "LARAVEL",
      },
      {
        src: express,
        name: "EXPRESS.JS",
      },
      {
        src: nest,
        name: "NEST.JS",
      },
    ],
  },
  Frontend: {
    body: "React and Vue is our favorite frameworks because they are part of almost any of our projects and we succeed to master them at a high level. Be sure that your application is based on a secure foundation.",
    stackIcons: [
      {
        src: react,
        name: "REACT.JS",
      },
      {
        src: vue,
        name: "VUE",
      },
      {
        src: next,
        name: "NEXT.JS",
      },
      {
        src: tailwindcss,
        name: "TAILWIND CSS",
      },
    ],
  },
  Database: {
    body: "We carefully choose the database for each project and take into account the needs of the application by choosing the best stable solution for the project.",
    stackIcons: [
      {
        src: mysql,
        name: "MYSQL",
      },
      {
        src: mongo,
        name: "MONGODB",
      },
      {
        src: aws,
        name: "AWS",
      },
    ],
  },
  "Web Services": {
    body: "Almost any project requires integration with foreign services in order to save time and deliver quality. We’re good at choosing good quality VS good price.",
    stackIcons: [
      {
        src: aws,
        name: "AWS",
      },
      {
        src: stripe,
        name: "STRIPE",
      },
      {
        src: digitalOcean,
        name: "DIGITALOCEAN",
      },
      {
        src: googleCloud,
        name: "GOOGLE CLOUD",
      },
    ],
  },
};

const TechStack = () => {
  return (
    <section>
      <div className="bg-beige pt-28">
        <div className="container">
          <h2 className="text-[40px] font-bold leading-[50px] text-center text-light-black">
            What tech-stack we’re using?
          </h2>
          <p className="text-[22px] font-lato leading-8 text-center text-darkGray max-w-[800px] mx-auto mt-6">
            We create responsive web applications using the latest tech-stack to
            help you focus on your business.
          </p>

          <div className="text-center mt-12">
            <Image src={buddy} alt="tech buddy" />
          </div>

          <div className="grid grid-rows-2 grid-cols-2 gap-x-[144px] gap-y-16 mt-16">
            {Object.keys(TECH_STACK).map((field) => {
              const { body, stackIcons } = TECH_STACK[field];

              return (
                <div key={field} className="text-center">
                  <h3 className="text-black text-2xl font-bold leading-[30px]">
                    {field}
                  </h3>
                  <p className="font-lato text-darkGray text-[22px] mt-4  tracking-[0.02em]">
                    {body}
                  </p>
                  <div className="flex justify-center gap-14 mt-4">
                    {stackIcons.map((technology, index) => {
                      return <TechIcon {...technology} key={index} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div> </div>
    </section>
  );
};

export default TechStack;
