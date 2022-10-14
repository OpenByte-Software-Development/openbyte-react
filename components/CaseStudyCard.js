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
  imageClassName = "object-cover object-left-top",
}) => {
  const projectTags = tags.map((tagText, index) => (
    <Tag text={tagText} variant="blue" key={index} />
  ));

  return (
    <div
      className={`${className} border-3 border-black rounded-3xl h-full flex justify-end items-center lg:py-8 lg:pl-12 lg:pr-0 py-6 px-9 `}
    >
      <div className="w-full">
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:gap-20 min-w-full order-2">
          <div
            className={`flex justify-end order-1 w-full relative lg:rounded-l-[25px] rounded-[25px] overflow-hidden lg:overflow-visible`}
          >
            <div
              className={`${
                previewBorder
                  ? "border-3 lg:border-r-[0px] border-black lg:rounded-l-[25px] lg:rounded-r-[0px] rounded-[25px]"
                  : "lg:pr-[32px] pr-0"
              } grid overflow-hidden w-full`}
            >
              <Image
                src={preview}
                height={preview.height}
                width={preview.width}
                alt={imageAlt}
                className={`${
                  previewBorder
                    ? imageClassName
                    : " lg:object-fill object-cover object-left-top"
                }`}
              />
            </div>

            <div className="w-full h-full absolute top-0 left-0 flex justify-end flex-col bg-dark-gradient px-4 pb-3 lg:hidden">
              <div className="text-white font-bold">
                <h3 className="text-3xl">{title}</h3>
                <h4 className="text-xl">{description}</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
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

                <div className="lg:hidden flex items-end justify-end">
                  <Link prefetch={false} href={clutchProjectLink}>
                    <a target="_blank" rel="noreferrer">
                      <Image
                        src={clutchReview}
                        height={clutchReview.height}
                        width={clutchReview.width}
                        alt="clutch review"
                      />
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
                    <a>
                      <button className="bg-transparent text-orange text-base rounded-full border-orange border-3 py-4 px-8 font-extrabold lg:w-auto w-full">
                        Learn more
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <Link prefetch={false} href={clutchProjectLink}>
                    <a target="_blank" rel="noreferrer">
                      <Image
                        src={clutchReview}
                        height={clutchReview.height}
                        width={clutchReview.width}
                        alt="clutch review"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
