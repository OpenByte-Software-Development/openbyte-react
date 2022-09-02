import React from "react";
import Head from "next/head";
import {
  AboutCompany,
  AboutTeam,
  Hero,
  HowWeWork,
} from "../components/AboutUs/index";
import SociaNetworks from "../components/SocialNetworks";
import Layout from "../components/Layout/index";
import { PAGE_TITLES } from "../lib/constants";

const AboutUs = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.aboutUs}</title>
      </Head>
      <SociaNetworks />
      <Hero />
      <AboutCompany />
      <AboutTeam />
      <HowWeWork />
    </Layout>
  );
};

export default AboutUs;
