import Layout from "../components/Layout";
import {
  Hero,
  WhatWeOffer,
  OurWorkflow,
  Services,
  WorkingModels,
  OurSkills,
  OurWorks,
  Faq,
  Testimonials,
} from "../components/Home/index";
import { ContactFormCta } from "../components/cta";
import SocialNetworks from "../components/SocialNetworks";

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
      <Faq />
    </Layout>
  );
};

export default Home;
