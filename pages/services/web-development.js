import dynamic from "next/dynamic";
import Head from "next/head";

const Layout = dynamic(() => import("../../components/Layout/index"));
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
const WebFeatures = dynamic(() =>
  import("../../components/Services/WebDevelopment/WebFeatures")
);
const BuildingExperience = dynamic(() =>
  import("../../components/Services/WebDevelopment/BuildingExperience")
);

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

const INDUSTRY_EXPERTISE = {
  title: "Our Industry expertise",
  tags: [
    { title: "Consulting" },
    { title: "Finance" },
    { title: "Technology", active: true },
    { title: "HR" },
  ],
};

const WebDevelopment = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.services.webDev}</title>
      </Head>
      <ServicesHero {...HERO_PROPS} />
      <IndustryExpertise {...INDUSTRY_EXPERTISE} />
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
      <section className="relative">
        <Faq faqs={FAQS} />
        <div className="bg-beige absolute top-0 left-0 rounded-2xl min-w-[100%] min-h-[100%] -z-20"></div>
      </section>
    </Layout>
  );
};

export default WebDevelopment;
