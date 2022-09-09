import React from "react";
import Image from "next/image";
import { CASE_STUDIES } from "../../lib/constants";

const previosClientsLogos = CASE_STUDIES.map((caseStudy) => ({
  src: caseStudy.projectIcon,
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
      <div>
        {previosClientsLogos.map((client) => (
          <CaseStudyLogo {...client} key={client.alt} />
        ))}
      </div>
    </div>
  );
};

export default PreviousClients;
