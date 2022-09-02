import Layout from "../components/Layout/index";
import Head from "next/head";
import { ContactUsWrapper } from "../components/ContactUs/index";
import SocialNetworks from "../components/SocialNetworks";
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
