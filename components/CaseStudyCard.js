import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tag } from "./OpenbyteUI";

const CaseStudy = ({
  title,
  description,
  tags,
  body,
  imageAlt,
  ctaLink,
  preview,
  clutchReview,
  clutchProjectLink,
  className,
  previewBorder = true,
}) => {
  const projectTags = tags.map((tagText, index) => (
    <Tag text={tagText} variant="blue" key={index} />
  ));

  return (
    <div
      className={`border-3 border-black rounded-3xl ${className} h-full flex justify-end items-center lg:py-8 lg:pl-12 lg:pr-0 py-6 px-9 `}
    >
      <div className="h-max">
        <div className="grid lg:grid-rows-1 lg:grid-cols-2 grid-rows-1 grid-cols-1 lg:gap-20">
          <div className="order-2 lg:order-1 flex flex-col">
            <div>
              <h3 className="text-black text-6xl font-bold hidden lg:block">
                {title}
              </h3>
              <h4 className="text-black text-3xl font-bold leading-10 hidden lg:block">
                {description}
              </h4>
            </div>

            <div className="my-6 lg:my-0">
              <div className="grid grid-rows-1 grid-cols-2 lg:block">
                <div className="flex lg:my-8 gap-4 lg:flex-row flex-col justify-start">
                  {projectTags}
                </div>

                <div className="lg:hidden flex items-end">
                  <Link prefetch={false} href={clutchProjectLink}>
                    <a target="_blank" rel="noreferrer">
                      <Image src={clutchReview} alt="clutch review" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-full flex flex-col justify-between">
              <p className="font-lato text-lg text-darkGray">{body}</p>

              <div className="mt-11 flex justify-between items-end w-full">
                <div className="w-full">
                  <Link prefetch={false} href={ctaLink}>
                    <button className="bg-transparent text-orange text-base rounded-full border-orange border-3 py-4 px-8 font-extrabold lg:w-auto w-full">
                      Learn more
                    </button>
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <Link prefetch={false} href={clutchProjectLink}>
                    <a target="_blank" rel="noreferrer">
                      <Image src={clutchReview} alt="clutch review" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end order-1 w-full relative">
            <div
              className={`${
                previewBorder &&
                "border-3 lg:border-r-[0px] border-black lg:rounded-l-[27px] rounded-[25px] lg:rounded-none"
              } grid overflow-hidden w-full h-[224px] lg:h-auto`}
            >
              <Image src={preview} alt={imageAlt} />
            </div>

            <div className="w-full h-full absolute top-0 left-0 rounded-[25px] flex justify-end flex-col bg-dark-gradient px-4 pb-3 lg:hidden">
              <div className="text-white font-bold">
                <h3 className="text-3xl">{title}</h3>
                <h4 className="text-xl">{description}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
