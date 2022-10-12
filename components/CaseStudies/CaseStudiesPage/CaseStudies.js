import React, { useState } from "react";
import CaseStudyCard from "../../CaseStudyCard";
import { CASE_STUDIES } from "../../../lib/constants";
import { v4 as uuid } from "uuid";

const CaseStudies = ({}) => {
  const [visibleCaseStudies, setVisibleCaseStudies] = useState(2);
  const caseStudiesLenght = CASE_STUDIES.length;

  const showMoreCaseStudiesHandler = () => {
    return caseStudiesLenght < visibleCaseStudies + 2
      ? setVisibleCaseStudies(caseStudiesLenght)
      : setVisibleCaseStudies(visibleCaseStudies + 2);
  };

  return (
    <section className="py-16">
      <div className="flex flex-col lg:gap-20 gap-8">
        {CASE_STUDIES.slice(0, visibleCaseStudies).map((caseStudy) => (
          <CaseStudyCard {...caseStudy} className="bg-beige" key={uuid()} />
        ))}
      </div>

      <div
        className={`mt-14 ${
          visibleCaseStudies === caseStudiesLenght
            ? "hidden"
            : "lg:flex justify-center "
        }`}
      >
        <button
          className="bg-orange text-white text-base rounded-full lg:py-[14px] py-[18px] px-[64px] font-extrabold lg:w-auto w-full leading-6 "
          onClick={showMoreCaseStudiesHandler}
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default CaseStudies;
