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
const SocialNetworks = dynamic(() => import("../../components/SocialNetworks"));
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
  mysql,
  redLetsEncrypt,
  redMailgun,
  redFirebase,
  redWebsocket,
} from "../../lib/icons";

// Images
import staffmetricLogo from "../../public/case-studies/staff-logo-big.png";
import staffmetricArchitecture from "../../public/case-studies/staff-architecture.png";
import staffmetricMobileArchitecture from "../../public/case-studies/staff-mobile-architecture.png";
import clientAvatar from "../../public/vladimir-grosu.png";

// Screens
import screen1_1 from "../../public/case-studies/app-screens/staffmetric/1-1.png";
import screen1_2 from "../../public/case-studies/app-screens/staffmetric/1-2.png";
import screen2_1 from "../../public/case-studies/app-screens/staffmetric/2-1.png";
import screen2_2 from "../../public/case-studies/app-screens/staffmetric/2-2.png";
import screen2_3 from "../../public/case-studies/app-screens/staffmetric/2-3.png";
import screen3_1 from "../../public/case-studies/app-screens/staffmetric/3-1.png";
import screen3_2 from "../../public/case-studies/app-screens/staffmetric/3-2.png";

const STAFFMETRIC = {
  heroImage: staffmetricLogo,
  title: "Remote Teams Tracking Solutions",
  tags: ["Saas", "HR", "Tracking"],
};

const ABOUT_STAFFMETRIC = {
  title: "About StaffMetric",
  description:
    "StaffMetric is an intuitive and free computer monitoring software with well-off productivity reports.",
  cards: [
    {
      order: "2",
      title: "Idea",
      description:
        "The company offers HR services to B2B companies and needed to develop a productivity software application that will automate and help companies to improve their performance metrics.",
    },
    {
      order: "3",
      title: "Challenge",
      description:
        "The biggest challenge here is to develop a very well-optimized client tracker that will collect all user activities during the work schedule and send to the server productivity reports.",
    },
  ],
};

const STAFFMETRIC_SOLUTION = [
  "The database should be scalable enough in order to support a big amount of data taking into account all the activities that should be collected from company employees.",
  "We’ve built a smart database design that allows us to collect millions of records and based on that data build daily productivity reports. ",
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
        src: mysql,
        name: "MYSQL",
      },
      {
        src: redLetsEncrypt,
        name: "LET'S ENCRYPT",
      },
    ],
  },
  "3rd party integrations": {
    stackIcons: [
      {
        src: redFirebase,
        name: (
          <span>
            GOOGLE <br /> FIREBASE
          </span>
        ),
      },
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
  title:
    "They created solutions and features to track employees's productivity performance.",
  description:
    "The solutions helped the company share employee productivity data with end customers. OpenByte also provided free system support for a year on features and bugs. They held weekly meetings for project status and planning. Overall, their attachment to the project made for a successful partnership.",
  clientName: "Vladimir Grossu",
  clientPosition: "CEO",
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
  [
    {
      src: screen3_1,
      alt: "app screen",
    },
    {
      src: screen3_2,
      alt: "app screen",
    },
  ],
];

const Staffmetric = () => {
  return (
    <Layout footer="light">
      <SocialNetworks />
      <CaseStudyHero
        {...STAFFMETRIC}
        logoClassName="lg:max-w-full max-w-[250px]"
      />
      <AboutApp {...ABOUT_STAFFMETRIC} />
      <Solution solutions={STAFFMETRIC_SOLUTION} />
      <Architecture
        src={staffmetricArchitecture}
        mobileSrc={staffmetricMobileArchitecture}
        alt="Staff Metric Architecure"
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

export default Staffmetric;
