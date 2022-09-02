import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import UnderConstruction from "../components/UnderConstruction";
import { PAGE_TITLES } from "../lib/constants";

const CaseStudies = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.underConstruction}</title>
      </Head>
      <UnderConstruction />
    </Layout>
  );
};

export default CaseStudies;
