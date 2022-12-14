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
  googleCloud,
  postmark,
  sentry,
} from "../../lib/icons";

// Images
import wonsultingLogo from "../../public/case-studies/wonsulting-logo-big.png";
import wonsultingArchitecture from "../../public/case-studies/wonsulting-architecture.png";
import wonsultingMobileArchitecture from "../../public/case-studies/wonsulting-mobile-architecture.png";
import clientAvatar from "../../public/ron-hyman.png";

// Screens
import screen1_1 from "../../public/case-studies/app-screens/wonsulting/1-1.png";
import screen1_2 from "../../public/case-studies/app-screens/wonsulting/1-2.png";
import screen2_1 from "../../public/case-studies/app-screens/wonsulting/2-1.png";
import screen2_2 from "../../public/case-studies/app-screens/wonsulting/2-2.png";
import screen2_3 from "../../public/case-studies/app-screens/wonsulting/2-3.png";
import screen3_1 from "../../public/case-studies/app-screens/wonsulting/3-1.png";
import screen3_2 from "../../public/case-studies/app-screens/wonsulting/3-2.png";

const WONSULTING = {
  heroImage: wonsultingLogo,
  title: "Resume Builder",
  tags: ["SaaS", "HR", "Resume"],
};

const ABOUT_WONSULTING = {
  title: "About Wonsulting",
  description:
    "Wonsulting is an awesome tool that tends to help people to save time when building their resumes by using AI powered technologies.",
  cards: [
    {
      order: "2",
      title: "Idea",
      description:
        "With a bullet point generator users can improve their resumes with the help of AI so that they will be ready to land their dream job.",
    },
    {
      order: "3",
      title: "Challenge",
      description:
        "The main challenge here is to generate high-qualitative bullet points by using AI. We used to train our model based on several thousand documents feeding our model with real-life examples to make our predictions better.",
    },
  ],
};

const WONSULTING_SOLUTION = [
  "We???ve got a superset of tools that help users save time and generate cover letter messages that can be included in LinkedIn messages or bullet points that can be included in resumes.",
  "Also, we???ve built a simple CV Builder with AI-generated bullet points that can help users create a modern resume in minutes.",
];

const TECH_STACK = {
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
      {
        src: sentry,
        name: "SENTRY",
      },
      {
        src: googleCloud,
        name: "GOOGLE CLOUD",
      },
      {
        src: postmark,
        name: "POSTMARK",
      },
    ],
  },
};

const CLIENT_REVIEW = {
  title: "They were very knowledgeable and took initiative from the beginning.",
  description:
    "OpenByte quickly provided good quality deliverables with proactive research. They submitted everything in a timely manner, as well.",
  clientName: "Ron Hyman",
  clientPosition: "Head of Product",
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

const Wonsulting = () => {
  return (
    <Layout footer="light">
      <CaseStudyHero
        {...WONSULTING}
        logoClassName="lg:max-w-full max-w-[120px]"
      />
      <AboutApp {...ABOUT_WONSULTING} />
      <Solution solutions={WONSULTING_SOLUTION} />
      <Architecture
        src={wonsultingArchitecture}
        mobileSrc={wonsultingMobileArchitecture}
        alt="wonsulting architecure"
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

export default Wonsulting;
