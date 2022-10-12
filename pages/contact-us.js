import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Layout = dynamic(() => import("../components/Layout/index"));
const ContactUsWrapper = dynamic(() =>
  import("../components/ContactUs/ContactUsWrapper")
);

import { PAGE_TITLES } from "../lib/constants";

const ContactUs = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.contact}</title>
      </Head>
      <ContactUsWrapper />
    </Layout>
  );
};

export default ContactUs;
