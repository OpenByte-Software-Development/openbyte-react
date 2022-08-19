import Layout from "../../components/Layout/index";
import {
  ServicesHero,
  IndustryExpertise,
  CommunicationChannels,
  HowWeWork,
  Benefits,
  PreviousExperience,
} from "../../components/Services/index";
import {
  WebFeatures,
  BuildingExperience,
  TechStack,
} from "../../components/Services/WebDevelopment/index";
import SocialNetworks from "../../components/SocialNetworks";
import { PriceEstimationCta, ContactFormCta } from "../../components/cta/index";
import Faq from "../../components/Faq";

// Images
import WebDevelopmentHero from "../../public/web-development.svg";

const HERO_PROPS = {
  title: "Web Development Services",
  description:
    "We have a wide experience in building awesome products in many industries using the latest tech stack technologies in order to deliver fast and stable applications.",
  src: WebDevelopmentHero,
  alt: "Web Development",
};

const FAQS = [
  {
    question: "Which tech stack is the best for my product?",
    answer:
      "We recommend starting development with the most stable and popular frameworks that are on the market simply because it’s much easier to maintain the project because of the availability of developers that knows these frameworks.",
  },
  {
    question: "What’s included in web development services?",
    answer: "We usually follow these steps for each new project:",
    bullets: [
      "We gather all necessary information from customer.",
      "Building a prototype using UX/UI wireframes.",
      "Building actual design and getting your approval before development.",
      "Building your product by using tech-stack we approved together.",
      "Make your website go live.",
    ],
  },
  {
    question: "What I get after product is done?",
    answer:
      "Basically, we gave everything that is related to our experience with you and your projects, below is listed what is included.",
    bullets: [
      "Codebase & access to your repository.",
      "Project documentation.",
      "Credentials to all third-party services.",
    ],
  },
];

const WebDevelopment = () => {
  return (
    <Layout>
      <SocialNetworks />
      <ServicesHero {...HERO_PROPS} />
      <IndustryExpertise
        title="Our Industry expertise"
        tags={["Consulting", "Finance", "Technology", "HR"]}
      />
      <section className="relative">
        <PriceEstimationCta />
        <div className="bg-light-black absolute top-0 left-0 min-h-[50%] min-w-full -z-10"></div>
      </section>
      <WebFeatures />
      <BuildingExperience />
      <TechStack />
      <CommunicationChannels />
      <HowWeWork />
      <Benefits />
      <PreviousExperience />
      <div className="relative">
        <ContactFormCta title="Ready to start your next project?" />
        <div className="bg-beige absolute bottom-0 left-0 min-h-[50%] min-w-full -z-10"></div>
      </div>
      <Faq faqs={FAQS} />
    </Layout>
  );
};

export default WebDevelopment;
