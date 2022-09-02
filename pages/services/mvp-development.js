import Layout from "../../components/Layout/index";
import Head from "next/head";
import {
  ServicesHero,
  CommunicationChannels,
  Benefits,
  PreviousExperience,
} from "../../components/Services/index";
import {
  HowMvpWorks,
  MvpDevProcess,
  MvpAdvantages,
  ProjectTimeline,
} from "../../components/Services/MvpDevelopment/index";
import { PriceEstimationCta, ContactFormCta } from "../../components/cta/index";
import Faq from "../../components/Faq";
import TechStack from "../../components/Services/TechStack";
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
  react,
  vue,
  next,
  tailwindcss,
} from "../../lib/icons";
import { PAGE_TITLES } from "../../lib/constants";

// Image
import mvpHero from "../../public/mvp-hero.svg";

const HERO_PROPS = {
  title: "MVP App Development",
  description:
    "We help you build an MVP project by using a verified solution for early user access with enough features to validate your idea.",
  src: mvpHero,
  alt: "MVP App Development",
};

const FAQS = [
  {
    question: "What is an MVP?",
    answer:
      'Usually, MVP is considered a "minimum viable product with the intent to collect as much as possible validated learnings from first customers". That means that you should build an MVP app with highly limited features and focus only on the features that your customers would buy from you.',
  },
  {
    question: "How much time MVP development will take?",
    answer:
      "Building an MVP should cost less than building a full-featured product, also you should be very patient about what features you should include in your MVP product and if they’re the real problem you solve for your customer.",
  },
  {
    question: "What is the best solution for building an MVP for a startup?",
    answer:
      "It depends on who is your audience and what is your budget, but we recommend using the above tech stack in order to build a fully-featured MVP that is more thane enough to validate your idea and have a decent database of users.",
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

const MvpDevelopment = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.services.mvpDev}</title>
      </Head>
      <ServicesHero {...HERO_PROPS} />
      <MvpAdvantages title="Our Industry expertise" tags={["Technology"]} />
      <section className="relative">
        <PriceEstimationCta />
        <div className="bg-light-black absolute top-0 left-0 min-h-[50%] min-w-full -z-10"></div>
      </section>
      <MvpDevProcess />
      <HowMvpWorks />

      <TechStack
        title="What tech-stack we’re using to build your MVP?"
        description="We rely on the most advanced and trustworthy solutions that completely address your business needs."
        techStack={TECH_STACK}
      />
      <CommunicationChannels />
      <ProjectTimeline />
      <Benefits />
      <PreviousExperience />
      <div className="relative">
        <ContactFormCta title="Book a free consultation." />
        <div className="bg-beige absolute bottom-0 left-0 min-h-[50%] min-w-full -z-10"></div>
      </div>
      <Faq faqs={FAQS} />
    </Layout>
  );
};

export default MvpDevelopment;
