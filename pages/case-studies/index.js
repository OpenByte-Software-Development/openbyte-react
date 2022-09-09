import React from "react";
import Layout from "../../components/Layout/index";
import PreviousExperience from "../../components/PreviousExperience";

const CaseStudies = () => {
  return (
    <Layout>
      <div className="bg-beige pt-14 pb-32">
        <div className="container">
          <PreviousExperience title="What our partners said:" />
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;
