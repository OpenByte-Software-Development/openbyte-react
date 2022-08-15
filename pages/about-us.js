import React from "react";
import {
  AboutCompany,
  AboutTeam,
  Hero,
  HowWeWork,
} from "../components/AboutUs/index";
import SociaNetworks from "../components/SocialNetworks";
import Layout from "../components/Layout/index";

const AboutUs = () => {
  return (
    <Layout>
      <SociaNetworks />
      <Hero />
      <AboutCompany />
      <AboutTeam />
      <HowWeWork />
    </Layout>
  );
};

export default AboutUs;
