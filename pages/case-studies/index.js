import React from "react";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../../components/Layout/index"));
const PreviousExperience = dynamic(() =>
  import("../../components/PreviousExperience")
);
const PreviousClients = dynamic(() =>
  import("../../components/CaseStudies/CaseStudiesPage/PreviousClients")
);
const CaseStudies = dynamic(() =>
  import("../../components/CaseStudies/CaseStudiesPage/CaseStudies")
);

const CaseStudiesHomepage = () => {
  return (
    <Layout>
      <div className="container pt-16">
        <PreviousClients />
        <CaseStudies />
      </div>
      <div className="bg-beige">
        <PreviousExperience title="What our partners said:" />
      </div>
    </Layout>
  );
};

export default CaseStudiesHomepage;
