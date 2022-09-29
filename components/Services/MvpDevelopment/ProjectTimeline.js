import React from "react";
import Image from "next/image";

// Images
import projectTimeline1 from "../../../public/project-timeline-1.svg";
import projectTimeline2 from "../../../public/project-timeline-2.svg";
import projectTimeline3 from "../../../public/project-timeline-3.svg";
import projectTimeline4 from "../../../public/project-timeline-4.svg";
import projectTimeline5 from "../../../public/project-timeline-5.svg";
import projectTimeline51 from "../../../public/project-timeline-5-1.svg";
import projectTimeline6 from "../../../public/project-timeline-6.svg";

const ProjectTimeline = () => {
  return (
    <section className="lg:mb-28 overflow-visible">
      <div className="text-center overflow-visible">
        <h2 className="lg:text-[40px] text-[32px] font-bold leading-[50px] text-light-black">
          How are we gonna build your product?
        </h2>

        <p className="text-base font-lato text-darkGray text-center">
          We follow Agile methodologies as they have proven most effective at
          the moment.
        </p>

        <div className="grid grid-rows-1 lg:grid-cols-6 grid-cols-1 lg:gap-8 gap-12 mt-4 place-items-end justify-items-center container pt-6 pb-14 lg:pb-0 bg-project-timeline-mobile bg-no-repeat bg-[center_top_183px] lg:bg-none">
          <div className="">
            <div className="flex justify-center">
              <Image src={projectTimeline1} alt="Discovery" />
            </div>

            <span className="text-[24px] text-black font-bold leading-[30px] mt-[14px] block lg:hidden">
              Discovery
            </span>
          </div>

          <div>
            <div className="flex justify-center">
              <Image src={projectTimeline2} alt="Minimum Viable Product" />
            </div>

            <span className="text-[24px] text-black font-bold leading-[30px] mt-[14px] block lg:hidden">
              Minimum Viable Product
            </span>
          </div>

          <div>
            <div className="flex justify-center">
              <Image src={projectTimeline3} alt="Product Backlog" />
            </div>

            <span className="text-[24px] text-black font-bold leading-[30px] mt-[14px] block lg:hidden">
              Product Backlog
            </span>
          </div>

          <div>
            <div className="flex justify-center">
              <Image src={projectTimeline4} alt="Sprint Backlog" />
            </div>

            <span className="text-[24px] text-black font-bold leading-[30px] mt-[14px] block lg:hidden">
              Sprint Backlog
            </span>
          </div>

          <div>
            <div className="flex lg:flex-col lg:items-end items-center">
              <div className="max-w-[143px] w-auto">
                <Image src={projectTimeline51} alt="Daily cycle" />
              </div>
              <div>
                <Image src={projectTimeline5} alt="Weekly cycle" />
              </div>
            </div>

            <span className="text-[24px] text-black font-bold leading-[30px] mt-[14px] block lg:hidden">
              Sprint Stories
            </span>
          </div>

          <div>
            <div className="flex justify-center">
              <Image src={projectTimeline6} alt="Delivered Product" />
            </div>

            <span className="text-[24px] text-black font-bold leading-[30px] mt-[14px]block lg:hidden">
              Delivered Product
            </span>
          </div>
        </div>

        <div className="hidden lg:block bg-project-timeline bg-no-repeat bg-[top_5px_center] pt-4 -mt-4">
          <div className="container lg:grid grid-rows-1 grid-cols-6 gap-8">
            <div className="">
              <span className="text-[24px] text-black font-bold leading-8 mt-4 block">
                Discovery
              </span>
            </div>

            <div>
              <span className="text-[24px] text-black font-bold leading-8 mt-4 block">
                Minimum Viable
                <br /> Product
              </span>
            </div>

            <div>
              <span className="text-[24px] text-black font-bold leading-8 mt-4 block">
                Product Backlog
              </span>
            </div>

            <div>
              <span className="text-[24px] text-black font-bold leading-8 mt-4 block">
                Sprint <br /> Backlog
              </span>
            </div>

            <div>
              <span className="text-[24px] text-black font-bold leading-8 mt-4 block">
                Sprint Stories
              </span>
            </div>

            <div>
              <span className="text-[24px] text-black font-bold leading-8 mt-4 block">
                Delivered Product
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
