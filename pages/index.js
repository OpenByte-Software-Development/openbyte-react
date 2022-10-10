import Head from "next/head";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Home/Hero"));
const WhatWeOffer = dynamic(() => import("../components/Home/WhatWeOffer"));
const OurWorkflow = dynamic(() => import("../components/Home/OurWorkflow"));
const Services = dynamic(() => import("../components/Home/Services"));
const WorkingModels = dynamic(() => import("../components/Home/WorkingModels"));
const OurSkills = dynamic(() => import("../components/Home/OurSkills"));
const OurWorks = dynamic(() => import("../components/Home/OurWorks"));
const Testimonials = dynamic(() => import("../components/Home/Testimonials"));
const Faq = dynamic(() => import("../components/Faq"));
const Layout = dynamic(() => import("../components/Layout/index"));
const ContactFormCta = dynamic(() =>
  import("../components/cta/ContactFormCta")
);

import { FAQS } from "../lib/constants";
import { PAGE_TITLES } from "../lib/constants";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.homepage}</title>
      </Head>
      <Hero />
      <WhatWeOffer />
      <div className="lg:bg-dots bg-no-repeat bg-[right_top_400px]">
        <OurWorkflow />
        <Services />
      </div>
      <WorkingModels />
      <OurWorks />
      <Testimonials />
      <div className="pb-[196px] bg-beige">
        <OurSkills />
      </div>
      <div className="-mt-[196px]">
        <ContactFormCta />
      </div>
      <Faq faqs={FAQS} />
    </Layout>
  );
};

export default Home;
