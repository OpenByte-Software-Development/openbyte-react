import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../../components/Layout/index"));
const ContactFormCta = dynamic(() =>
  import("../../components/cta/ContactFormCta")
);
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
} from "../../lib/icons";

// Images
import interviewSchoolLogo from "../../public/case-studies/interview-school-logo-big.png";
import interviewSchoolArchitecture from "../../public/case-studies/interview-school-architecture.png";
import interviewSchoolMobileArchitecture from "../../public/case-studies/interview-school-mobile-architecture.png";
import clientAvatar from "../../public/peter-gratale.png";

// Screens
import screen1_1 from "../../public/case-studies/app-screens/interview-school/1-1.png";
import screen1_2 from "../../public/case-studies/app-screens/interview-school/1-2.png";
import screen2_1 from "../../public/case-studies/app-screens/interview-school/2-1.png";
import screen2_2 from "../../public/case-studies/app-screens/interview-school/2-2.png";
import screen2_3 from "../../public/case-studies/app-screens/interview-school/2-3.png";
import screen3_1 from "../../public/case-studies/app-screens/interview-school/3-1.png";
import screen3_2 from "../../public/case-studies/app-screens/interview-school/3-2.png";

const INTERVIEW_SCHOOL = {
  heroImage: interviewSchoolLogo,
  title: "Online Resume Builder",
  tags: ["Saas", "HR", "B2C"],
};

const ABOUT_INTERVIEW_SCHOOL = {
  title: "About Interview School",
  description:
    "Interview School is a suite of tools ranging from mock interviews with AI feedback, live interview coaching, and job tracking.",
  cards: [
    {
      order: "2",
      title: "Idea",
      description:
        "The main idea is to build an additional tool on top of Interview School that will help the users build their resumes more rapidly with a large set of features.",
    },
    {
      order: "3",
      title: "Challenge",
      description: (
        <>
          The biggest challenge we had is to build an resume builder that users
          will be able to download in pdf, docx format and maintain the design
          and structure while downloading it in different format.
          <br /> We had to play around that issue for a while and for sure we
          found an elegant solution to maintain the same design from the
          selected template.
        </>
      ),
    },
  ],
};

const INTERVIEW_SCHOOL_SOLUTION = [
  "The solution was by using our favorite tech-stack that helped us build an elegant, fast, and optimized resume builder with numerous integrated features like multiple templates, zoom in and zoom out, download in different formats, and others.",
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
    ],
  },
};

const CLIENT_REVIEW = {
  title:
    "They built and integrated a full-standing resume builder tool into the client's site.",
  description:
    "OpenByte successfully delivered the feature on time and with minimal bugs on the first release, exceeding the client's expectations. The collaborative team utilized Asana to track their tasks and Slack to communicate effectively with the client.",
  clientName: "Peter Gratale",
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

const InterviewSchool = () => {
  return (
    <Layout footer="light">
      <CaseStudyHero
        {...INTERVIEW_SCHOOL}
        logoClassName="lg:max-w-full max-w-[150px]"
      />
      <AboutApp {...ABOUT_INTERVIEW_SCHOOL} />
      <Solution solutions={INTERVIEW_SCHOOL_SOLUTION} />
      <Architecture
        src={interviewSchoolArchitecture}
        mobileSrc={interviewSchoolMobileArchitecture}
        alt="Interview School Architecure"
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

export default InterviewSchool;
