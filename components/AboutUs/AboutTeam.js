import React from "react";
import Image from "next/image";
import Link from "next/link";

// Image
import teamBuddy from "../../public/team-buddy.png";
// Team
import nasco from "../../public/team-members/nasco.png";
import bordei from "../../public/team-members/bordei.png";
import ciuchitu from "../../public/team-members/ciuchitu.png";
import dodon from "../../public/team-members/dodon.png";
import popcov from "../../public/team-members/popcov.png";
import lozan from "../../public/team-members/lozan.png";

const TEAM = [
  {
    photo: nasco,
    name: "Nasco Grigore",
    position: "DevOps",
    skills: ["JS/TS", "Python"],
  },
  {
    photo: bordei,
    name: "Bordei Radu",
    position: "Full-Stack",
    skills: ["Python", "Tkinter"],
  },
  {
    photo: dodon,
    name: "Dodon Aurel",
    position: "Full-Stack",
    skills: ["JS/TS", "NodeJS"],
  },
  {
    photo: ciuchitu,
    name: "Ciuchitu Nichita",
    position: "Full-Stack",
    skills: ["JS/TS", "NodeJS"],
  },
  {
    photo: lozan,
    name: "Lozan Alexandru",
    position: "Full-Stack",
    skills: ["JS/TS", "C/C++"],
  },
  {
    photo: popcov,
    name: "Popcov Artiom",
    position: "Front-End",
    skills: ["JS/TS", "NodeJS"],
  },
];

const TeamMember = ({ photo, name, position, skills }) => {
  return (
    <div className="lg:p-4 p-0 border-2 border-black relative rounded-lg max-w-[175px] lg:max-w-[236px]">
      <div className="w-[100%] lg:rounded-lg lg:border-none border-b-2 border-black grid min-h-[245px]">
        <Image
          src={photo}
          alt={`${name}'s avatar`}
          className="object-cover object-center w-[100%] rounded-lg min-h-[245px]"
        />
      </div>

      <div className="text-center font-bold lg:mt-6 p-4 lg:p-0">
        <span className="block text-lightGray text-xs">{position}</span>
        <span className="block text-black text-[15px]">{name}</span>
        <span className="block text-orange mt-3">{skills.join(" | ")}</span>
      </div>

      <div className="bg-beige absolute -top-2 -right-2 rounded-lg min-w-[100%] min-h-[100%] -z-10"></div>
    </div>
  );
};

const AboutTeam = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="lg:text-[40px] text-[24px] font-bold text-black text-center">
          About team
        </h2>
        <div className="text-center mt-8 text-lg font-lato max-w-[766px] mx-auto text-gray leading-7">
          <p>
            We’re a talented team that is passionate about the improvement and
            perfection of our products. We constantly invest to improve
            ourselves and believe that work and life should be balanced in order
            to deliver long-run products.
          </p>
          <p className="mt-7">
            We know how to do Agile and that it’s about the experience, not only
            words.
          </p>
          <p className="mt-7">
            We know more than 5 top-notch programming languages and a tremendous
            amount of frameworks. Anyway, our focus is MERN/MEVN, cloud as AWS,
            GCP and Firebase, CI/CD tools as CircleCI, and Jenkins tech-stack.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center lg:justify-start lg:gap-[78px] gap-[16px] my-[72px] scroll-m-40"
          id="team"
        >
          {TEAM.map((member, index) => {
            return <TeamMember {...member} key={index} />;
          })}

          <div className="p-4 border-2 border-black relative rounded-lg hidden lg:block">
            <div className="w-[200px] h-[250px] rounded-lg">
              <Image
                src={teamBuddy}
                alt="become member"
                width={200}
                className="object-cover object-center w-[200px] h-[250px] rounded-lg"
              />
            </div>

            <div className="text-center font-bold mt-6">
              <span className="block text-black text-[12px]">
                JOIN OUR TEAM
              </span>

              <a href="mailto: hi@openbyte.dev">
                <button className="bg-orange mt-3 text-white text-base rounded-full py-[11px] px-6 font-extrabold w-auto">
                  Become Member
                </button>
              </a>
            </div>

            <div className="bg-beige absolute -top-2 -right-2 rounded-lg min-w-[100%] min-h-[100%] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
