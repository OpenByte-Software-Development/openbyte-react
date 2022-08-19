import Layout from "../components/Layout";
import {
  Hero,
  WhatWeOffer,
  OurWorkflow,
  Services,
  WorkingModels,
  OurSkills,
  OurWorks,
  Testimonials,
} from "../components/Home/index";
import Faq from "../components/Faq";
import { ContactFormCta } from "../components/cta";
import SocialNetworks from "../components/SocialNetworks";
import { FAQS } from "../lib/constants";

const Home = () => {
  return (
    <Layout>
      <SocialNetworks />
      <Hero />
      <WhatWeOffer />
      <OurWorkflow />
      <Services />
      <WorkingModels />
      {/* <OurWorks /> */}
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
