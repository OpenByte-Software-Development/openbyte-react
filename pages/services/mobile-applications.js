import Head from "next/head";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../../components/Layout/index"));
const ApplicationTypes = dynamic(() =>
  import("../../components/Services/MobileApps/ApplicationTypes")
);
const MobileAppAdvantages = dynamic(() =>
  import("../../components/Services/MobileApps/MobileAppAdvantages")
);
const ServicesHero = dynamic(() =>
  import("../../components/Services/ServicesHero")
);
const IndustryExpertise = dynamic(() =>
  import("../../components/Services/IndustryExpertise")
);
const CommunicationChannels = dynamic(() =>
  import("../../components/Services/CommunicationChannels")
);
const HowWeWork = dynamic(() => import("../../components/Services/HowWeWork"));
const Benefits = dynamic(() => import("../../components/Services/Benefits"));
const PreviousExperience = dynamic(() =>
  import("../../components/PreviousExperience")
);
const PriceEstimationCta = dynamic(() =>
  import("../../components/cta/PriceEstimationCta")
);
const ContactFormCta = dynamic(() =>
  import("../../components/cta/ContactFormCta")
);
const Faq = dynamic(() => import("../../components/Faq"));
const TechStack = dynamic(() => import("../../components/Services/TechStack"));

import {
  node,
  laravel,
  express,
  nest,
  mysql,
  mongo,
  aws,
  stripe,
  digitalOcean,
  googleCloud,
  reactNative,
  firebase,
} from "../../lib/icons";
import { PAGE_TITLES } from "../../lib/constants";

// Image
import mobileAppsHero from "../../public/mobile-apps-hero.svg";

const HERO_PROPS = {
  title: "Mobile Application Development",
  description:
    "We help you choose the best tech-stack for your mobile application taking into account your budget, idea and your audience.",
  src: mobileAppsHero,
  alt: "Mobile Application Development",
};

const FAQS = [
  {
    question: "What are cross-platform mobile application means?",
    answer:
      "This is an approach that allows developers to build a mobile solution that is simultaneously compatible with several operating systems and platforms (Android, iOS).",
  },
  {
    question: "Why using React-Native for mobile development?",
    answer:
      "First of all because of cross-platform compatibility, which means one code base covers Android/IOS OS. That speeds development time and reduces the costs simply because are used the same language(Javascript).",
  },
  {
    question:
      "What are benefits by using React-Native instead of native mobile apps?",
    answer: "Here are listed some of most common benefits.",
    bullets: [
      "Cross-platform compatibility",
      "Reusable code and pre-built components",
      "Coding in a familiar programming language",
      "Hot and Live Reloading",
      "Rich UI",
      "Reduced costs",
    ],
  },
];

const TECH_STACK = {
  Backend: {
    body: "We have a great tech stack which compounds by the latest top-rated frameworks that have support from a large community and are on the top for the past several years.",
    stackIcons: [
      {
        src: node,
        name: "NODE.JS",
      },
      {
        src: laravel,
        name: "LARAVEL",
      },
      {
        src: express,
        name: "EXPRESS.JS",
      },
      {
        src: nest,
        name: "NEST.JS",
      },
    ],
  },
  "Mobile Apps": {
    body: (
      <>
        We use <span className="text-black">react-native</span> for building
        cross-platform mobile applications and it combines the best parts of
        native development with React, a best-in-class JavaScript library for
        building user interfaces.
      </>
    ),
    stackIcons: [
      {
        src: reactNative,
        name: "REACT NATIVE",
      },
    ],
  },
  Database: {
    body: "We carefully choose the database for each project and take into account the needs of the application by choosing the best stable solution for the project.",
    stackIcons: [
      {
        src: mysql,
        name: "MYSQL",
      },
      {
        src: mongo,
        name: "MONGODB",
      },
      {
        src: aws,
        name: "AWS",
      },
      {
        src: firebase,
        name: "FIREBASE",
      },
    ],
  },
  "Web Services": {
    body: "Almost any project requires integration with foreign services in order to save time and deliver quality. We’re good at choosing good quality VS good price.",
    stackIcons: [
      {
        src: aws,
        name: "AWS",
      },
      {
        src: stripe,
        name: "STRIPE",
      },
      {
        src: digitalOcean,
        name: "DIGITALOCEAN",
      },
      {
        src: googleCloud,
        name: "GOOGLE CLOUD",
      },
    ],
  },
};

const INDUSTRY_EXPERTISE = {
  title: "Our Industry expertise",
  tags: [{ title: "Technology", active: true }],
};

const MobileApplications = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.services.mobileDev}</title>
      </Head>
      <ServicesHero {...HERO_PROPS} />
      <IndustryExpertise {...INDUSTRY_EXPERTISE} />
      <section className="relative">
        <PriceEstimationCta />
        <div className="bg-light-black absolute top-0 left-0 min-h-[50%] min-w-full -z-10"></div>
      </section>
      <ApplicationTypes />
      <MobileAppAdvantages />
      <TechStack
        title="What tech-stack we’re using?"
        description="We rely on the most advanced and trustworthy solutions that completely address your business needs."
        techStack={TECH_STACK}
      />
      <CommunicationChannels />
      <HowWeWork />
      <Benefits />
      <PreviousExperience />
      <div className="relative">
        <ContactFormCta title="Still not sure if you need a mobile app?" />
        <div className="bg-beige absolute bottom-0 left-0 min-h-[50%] min-w-full -z-10"></div>
      </div>
      <section className="relative">
        <Faq faqs={FAQS} />
        <div className="bg-beige absolute top-0 left-0 rounded-2xl min-w-[100%] min-h-[100%] -z-20"></div>
      </section>
    </Layout>
  );
};

export default MobileApplications;
