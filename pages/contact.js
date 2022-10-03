import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Layout = dynamic(() => import("../components/Layout/index"));
const ContactUsWrapper = dynamic(() => import("../components/ContactUs/ContactUsWrapper"));
const SocialNetworks = dynamic(() => import("../components/SocialNetworks"));

import { PAGE_TITLES } from "../lib/constants";

const ContactUs = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.contact}</title>
      </Head>
      <SocialNetworks />
      <ContactUsWrapper />
    </Layout>
  );
};

export default ContactUs;
