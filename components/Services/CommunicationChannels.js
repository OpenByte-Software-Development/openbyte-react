import React from "react";
import {
  slack,
  figma,
  googleDocs,
  jira,
  bitbucket,
  zoom,
} from "../../lib/icons";
import TechIcon from "../TechIcon";

const COMMUNICATION_CHANNELS = [
  {
    src: slack,
    name: "SLACK",
    description: "for ongoing communication with your team",
  },
  {
    src: figma,
    name: "FIGMA",
    description: "for presenting wireframes & design",
  },
  {
    src: googleDocs,
    name: "GOOGLE DOCS",
    description: "for collaboration on documentation",
  },
  {
    src: jira,
    name: "JIRA",
    description: "for project management",
  },
  {
    src: bitbucket,
    name: "BITBUCKET",
    description: "for code-related matters",
  },
  {
    src: zoom,
    name: "ZOOM",
    description: "for video conferencing",
  },
];

const CommunicationChannels = () => {
  return (
    <section className="py-28">
      <div className="container">
        <h2 className="text-[40px] font-bold leading-[50px] text-center text-light-black">
          Communication channels we using
        </h2>
        <div
          className={`grid grid-rows-1 grid-cols-6 gap-10 mt-9`}
        >
          {COMMUNICATION_CHANNELS.map(({ src, name, description }, index) => {
            return (
              <div key={index} className="">
                <TechIcon name={name} src={src} />
                <p className="mt-4 font-lato text-base text-darkGray leading-7 text-center">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunicationChannels;
