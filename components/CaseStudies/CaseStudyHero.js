import React from "react";
import Image from "next/image";
import TagsContainer from "../TagsContainer";

const CaseStudyHero = ({ heroImage, title, tags, logoClassName }) => {
  return (
    <section className="lg:bg-dots bg-[right_top] bg-no-repeat lg:pt-56 pt-14 pb-7">
      <div className="container">
        <div>
          <div
            className={`flex justify-center items-center mx-auto ${logoClassName}`}
          >
            <Image src={heroImage} alt={title} />
          </div>
          <h3 className="lg:text-[56px] text-[32px] text-black lg:leading-[70px] font-bold text-center lg:mt-11 mt-6">
            {title}
          </h3>
        </div>

        <div className="lg:mt-11 mt-6">
          <TagsContainer tags={tags} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
