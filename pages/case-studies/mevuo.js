import dynamic from "next/dynamic";

const CaseStudyHero = dynamic(() =>
  import("../../components/CaseStudies/CaseStudyHero")
);
const AboutApp = dynamic(() => import("../../components/CaseStudies/AboutApp"));
const Architecture = dynamic(() =>
  import("../../components/CaseStudies/Architecture")
);
const Solution = dynamic(() => import("../../components/CaseStudies/Solution"));
const TechStack = dynamic(() =>
  import("../../components/CaseStudies/TechStack")
);
const CaseStudyReview = dynamic(() =>
  import("../../components/CaseStudies/CaseStudyReview")
);
const Screens = dynamic(() => import("../../components/CaseStudies/Screens"));
const ContactFormCta = dynamic(() =>
  import("../../components/cta/ContactFormCta")
);
const Layout = dynamic(() => import("../../components/Layout/index"));

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
  redFirebase,
  redWebsocket,
} from "../../lib/icons";

// Images
import mevuoLogo from "../../public/case-studies/mevuo-logo-big.png";
import mevuoArchitecture from "../../public/case-studies/mevuo-architecture.png";
import mevuoMobileArchitecture from "../../public/case-studies/mevuo-mobile-architecture.png";
import avatarPlaholder from "../../public/avatar-placeholder.png";

// Screens
import screen1_1 from "../../public/case-studies/app-screens/mevuo/1-1.png";
import screen1_2 from "../../public/case-studies/app-screens/mevuo/1-2.png";
import screen1_3 from "../../public/case-studies/app-screens/mevuo/1-3.png";
import screen2_1 from "../../public/case-studies/app-screens/mevuo/2-1.png";
import screen2_2 from "../../public/case-studies/app-screens/mevuo/2-2.png";

const MEVUO = {
  heroImage: mevuoLogo,
  title: "Interactive documents",
  tags: ["Collaboration", "Documentation", "Knowledge"],
};

const ABOUT_MEVUO = {
  title: "About Mevuo APP",
  description:
    "Meet the evolution of online documents, brings all of your data, tables into one document.",
  cards: [
    {
      order: "2",
      title: "Idea",
      description:
        "The idea was to build a platform for online documents that brings all data together. With Mevuo you can insert powerful and flexible block like tables, boards or even third party sources into your document.",
    },
    {
      order: "3",
      title: "Challenge",
      description:
        "The biggest challenge for that project was to build front-end part that was written with Vue.js + additional components. But to have a flexible and optimized code we build all modules from scratch.",
    },
  ],
};

const MEVUO_SOLUTION = [
  "We decided to use the latest tech stack to build a similar tool and WebSocket to use syncing between users, also for the database we decided to go with MySQL and Laravel for building the REST-API part.",
  "The front-end part was built with Vue.js and most of the packages were written from scratch in order to keep the simplicity and improve code optimization.",
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
        src: redFirebase,
        name: (
          <span>
            GOOGLE <br /> FIREBASE
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
  title:
    "OpenByte quickly provided good quality deliverables with proactive research.",
  description:
    "The team quickly tackled multiple challenges by offering impactful solutions. Their dedication and professionalism set them apart.",
  clientName: "Liam",
  clientPosition: "CEO",
  clientAvatar: avatarPlaholder,
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
  ],
];

const Mevuo = () => {
  return (
    <Layout footer="light">
      <CaseStudyHero {...MEVUO} logoClassName="lg:max-w-full max-w-[200px]" />
      <AboutApp {...ABOUT_MEVUO} />
      <Solution solutions={MEVUO_SOLUTION} />
      <Architecture
        src={mevuoArchitecture}
        mobileSrc={mevuoMobileArchitecture}
        alt="mevuo architecure"
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

export default Mevuo;
