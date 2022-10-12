import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { PAGE_TITLES } from "../../lib/constants";
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
      <Head>
        <title>{PAGE_TITLES.caseStudies}</title>
      </Head>
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
