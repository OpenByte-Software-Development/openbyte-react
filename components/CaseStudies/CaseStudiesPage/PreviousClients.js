import React from "react";
import Image from "next/image";
import { CASE_STUDIES } from "../../../lib/constants";

const previosClientsLogos = CASE_STUDIES.map((caseStudy) => ({
  src: caseStudy.previewIcon,
  alt: caseStudy.title,
}));

const CaseStudyLogo = ({ src, alt }) => {
  return (
    <div>
      <Image src={src} alt={alt} />
    </div>
  );
};

const PreviousClients = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold lg:text-[56px] text-[32px]">Case Studies</h2> 
        <p className="text-lg font-lato text-darkGray ">
          We are in a way to increasing your business 
        </p>
      </div>

      <div className="mt-12 flex justify-center gap-[88px]">
        {previosClientsLogos.map((client) => (
          <CaseStudyLogo {...client} key={client.alt} />
        ))}
      </div>
    </div>
  );
};

export default PreviousClients;