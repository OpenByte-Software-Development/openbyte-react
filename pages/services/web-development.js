import Layout from "../../components/Layout/index";
import Head from "next/head";
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
} from "../../components/Services/WebDevelopment/index";
import TechStack from "../../components/Services/TechStack";
import SocialNetworks from "../../components/SocialNetworks";
import { PriceEstimationCta, ContactFormCta } from "../../components/cta/index";
import Faq from "../../components/Faq";
import {
  node,
  laravel,
  express,
  nest,
  mysql,
  mongo,
  aws,
  react,
  vue,
  next,
  tailwindcss,
  stripe,
  digitalOcean,
  googleCloud,
} from "../../lib/icons";
import { PAGE_TITLES } from "../../lib/constants";

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
  Frontend: {
    body: "React and Vue is our favorite frameworks because they are part of almost any of our projects and we succeed to master them at a high level. Be sure that your application is based on a secure foundation.",
    stackIcons: [
      {
        src: react,
        name: "REACT.JS",
      },
      {
        src: vue,
        name: "VUE",
      },
      {
        src: next,
        name: "NEXT.JS",
      },
      {
        src: tailwindcss,
        name: "TAILWIND CSS",
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

const WebDevelopment = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.services.webDev}</title>
      </Head>
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
      <TechStack
        title="What tech-stack we’re using?"
        description="We create responsive web applications using the latest tech-stack to help you focus on your business."
        techStack={TECH_STACK}
      />
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
