import React from "react";
import Layout from "../../components/Layout/index";
import PreviousExperience from "../../components/PreviousExperience";
import SocialNetworks from "../../components/SocialNetworks";
import {
  PreviousClients,
  CaseStudies,
} from "../../components/CaseStudies/CaseStudiesPage/index";

const CaseStudiesHomepage = () => {
  return (
    <Layout>
      <SocialNetworks />
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
