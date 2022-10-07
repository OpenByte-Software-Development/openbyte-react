import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const AboutCompany = dynamic(() =>
  import("../components/AboutUs/AboutCompany")
);
const AboutTeam = dynamic(() => import("../components/AboutUs/AboutTeam"));
const Hero = dynamic(() => import("../components/AboutUs/Hero"));
const HowWeWork = dynamic(() => import("../components/AboutUs/HowWeWork"));
const Layout = dynamic(() =>
  import("../components/../components/Layout/index")
);
import { PAGE_TITLES } from "../lib/constants";

const AboutUs = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.aboutUs}</title>
      </Head>
      <Hero />
      <AboutCompany />
      <AboutTeam />
      <HowWeWork />
    </Layout>
  );
};

export default AboutUs;
