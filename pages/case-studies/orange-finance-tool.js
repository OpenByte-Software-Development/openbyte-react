import React from "react";
import Layout from "../../components/Layout/index";
import { ContactFormCta } from "../../components/cta";
import SocialNetworks from "../../components/SocialNetworks";
import {
  CaseStudyHero,
  AboutApp,
  Architecture,
  Solution,
  TechStack,
  CaseStudyReview,
  Screens
} from "../../components/CaseStudies";
import {
  redLaravel,
  redLaravelNova,
  redPhp,
  redVue,
  redTailwind,
  redDigitalOcean,
  redUbuntu,
  redNginx,
  redLetsEncrypt,
  redMailgun,
  redWebsocket,
} from "../../lib/icons";

// Images
import orangeLogo from "../../public/case-studies/orange-logo-big.png";
import orangeFinanceToolArchitecture from "../../public/case-studies/orange-fincance-tool-architecture.png";
import orangeFinanceToolMobileArchitecture from "../../public/case-studies/orange-fincance-tool-mobile-architecture.png";

import clientAvatar from "../../public/victor-bivol.png";

// Screens
import screen1_1 from "../../public/case-studies/app-screens/orange-finance/1-1.png";
import screen1_2 from "../../public/case-studies/app-screens/orange-finance/1-2.png";
import screen1_3 from "../../public/case-studies/app-screens/orange-finance/1-3.png";
import screen2_1 from "../../public/case-studies/app-screens/orange-finance/2-1.png";
import screen2_2 from "../../public/case-studies/app-screens/orange-finance/2-2.png";
import screen2_3 from "../../public/case-studies/app-screens/orange-finance/2-3.png";

const ORANGE_FINANCE_TOOL = {
  heroImage: orangeLogo,
  title: "Finance info collector tool",
  tags: ["Finance", "B2B"],
};

const ABOUT_ORANGE_FINANCE_TOOL = {
  title: "About ITPerformance",
  description:
    "Lead performance tool that connects data from multiple sources and presents in a beautiful dashboard.s",
  cards: [
    {
      order: "2",
      title: "Idea",
      description: (
        <span>
          Orange Belgium’s goal was to build a new internal tool that will allow
          visualizing financial data collected from many sources into one
          system.
          <br /> <br />
          The data will be collected from different sources, for example, some
          data should be collected from CSV, XLS files and some data should be
          collected via different services through rest-API.
          <br />
          <br />
          Different source channels should be updated frequently and we needed
          to build a bot that will call regularly those services in order to
          collect the data.
          <br /> <br />
          After data will be collected it should be transformed, cleaned, and
          prepared before being saved in our database.
        </span>
      ),
    },
    {
      order: "3",
      title: "Challenges",
      description: (
        <span>
          The main challenges was to upload or connect multiple sources and
          build reports for them. As a solution we decided to abstract and build
          module called connector that allow to implement custom connectors and
          import data from your own sources. <br />
          <br />
          That gives us more flexibility and possibility to extract data
          automatically by creating a daemon that extract data based on
          schedule.
        </span>
      ),
    },
  ],
};

const ORANGE_FINANCE_TOOL_SOLUTION = [
  "We were excited to help them and build a great infrastructure that will allow them to vizualize all financial structures in an easy way.",
  "Building the platform was divided into several parts and we started with architecture and database design.",
  "Also, the core of the application was the uploading and integration module that was responsible for importing, cleaning, and transforming data.",
  "The upload module was built upon connectors and each connector was responsible to upload, transform and clean data.",
];

const TECH_STACK = {
  Backend: {
    stackIcons: [
      {
        src: redLaravel,
        name: "LARAVEL",
      },
      {
        src: redLaravelNova,
        name: "LARAVEL NOVA",
      },
      {
        src: redPhp,
        name: "PHP",
      },
    ],
  },
  Frontend: {
    stackIcons: [
      {
        src: redVue,
        name: (
          <span>
            VUE.JS <br /> VUEX
          </span>
        ),
      },
      {
        src: redTailwind,
        name: (
          <span>
            TAILWIND CSS <br /> TAILWIND UI
          </span>
        ),
      },
    ],
  },
  Server: {
    stackIcons: [
      {
        src: redDigitalOcean,
        name: "DIGITALOCEAN",
      },
      {
        src: redUbuntu,
        name: "UBUNTU 20.03",
      },
      {
        src: redNginx,
        name: "NGINX",
      },
      {
        src: redLetsEncrypt,
        name: "let's encrypt",
      },
    ],
  },
  "3rd party integrations": {
    stackIcons: [
      {
        src: redMailgun,
        name: (
          <span>
            MAILGUN <br /> SMTP SERVER
          </span>
        ),
      },
      {
        src: redWebsocket,
        name: (
          <span>
            PUSHER <br /> WEBSOCKET
          </span>
        ),
      },
    ],
  },
};

const CLIENT_REVIEW = {
  title: "The team produced high-quality work that exceeded our expectations",
  description:
    "Internal stakeholders leverage the product to increase the efficiency of management processes. Innovative and knowledgable, the team quickly tackled multiple challenges by offering impactful solutions. Their dedication and professionalism set them apart.",
  clientName: "Victor Bivol",
  clientPosition: "PM, Orange",
  clientAvatar,
};

const SCREENS = [
  [
    {
      src: screen1_1,
      alt: "app screen",
    },
    {
      src: screen1_2,
      alt: "app screen",
    },
    {
      src: screen1_3,
      alt: "app screen",
    },
  ],
  [
    {
      src: screen2_1,
      alt: "app screen",
    },
    {
      src: screen2_2,
      alt: "app screen",
    },
    {
      src: screen2_3,
      alt: "app screen",
    },
  ],
];

const OranceFinance = () => {
  return (
    <Layout footer="light">
      <SocialNetworks />
      <CaseStudyHero
        {...ORANGE_FINANCE_TOOL}
        logoClassName="lg:max-w-full max-w-[110px]"
      />
      <AboutApp {...ABOUT_ORANGE_FINANCE_TOOL} />
      <Solution solutions={ORANGE_FINANCE_TOOL_SOLUTION} />
      <Architecture
        src={orangeFinanceToolArchitecture}
        mobileSrc={orangeFinanceToolMobileArchitecture}
        alt="Orange Finance Tool Architecure"
      />
      <TechStack techStack={TECH_STACK} />
      <Screens screensRows={SCREENS} />
      <CaseStudyReview {...CLIENT_REVIEW} />
      <section className="relative">
        <ContactFormCta />
        <div className="bg-light-black absolute top-0 left-0 min-h-[50%] min-w-full -z-10"></div>
      </section>
    </Layout>
  );
};

export default OranceFinance;
