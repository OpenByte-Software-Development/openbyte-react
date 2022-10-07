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
  redDigitalOcean,
  redUbuntu,
  redNginx,
  redFirebase,
  java,
  spring,
  swagger,
  reactNative,
  redux,
  geocoder,
  mapbox,
  material,
} from "../../lib/icons";

// Images
import orangeLogo from "../../public/case-studies/orange-logo-big.png";
import orangeCarSharingArchitecture from "../../public/case-studies/orange-car-sharing-architecture.png";
import orangeCarSharingMobileArchitecture from "../../public/case-studies/orange-car-sharing-mobile-architecture.png";
import clientAvatar from "../../public/eugen-gavrev.png";

// Screens
import screen1_1 from "../../public/case-studies/app-screens/orange-car-sharing/1-1.png";
import screen1_2 from "../../public/case-studies/app-screens/orange-car-sharing/1-2.png";
import screen1_3 from "../../public/case-studies/app-screens/orange-car-sharing/1-3.png";
import screen1_4 from "../../public/case-studies/app-screens/orange-car-sharing/1-4.png";
import screen1_5 from "../../public/case-studies/app-screens/orange-car-sharing/1-5.png";
import screen2_1 from "../../public/case-studies/app-screens/orange-car-sharing/2-1.png";
import screen2_2 from "../../public/case-studies/app-screens/orange-car-sharing/2-2.png";
import screen2_3 from "../../public/case-studies/app-screens/orange-car-sharing/2-3.png";
import screen2_4 from "../../public/case-studies/app-screens/orange-car-sharing/2-4.png";
import screen2_5 from "../../public/case-studies/app-screens/orange-car-sharing/2-5.png";
import screen2_6 from "../../public/case-studies/app-screens/orange-car-sharing/2-6.png";
import screen3_1 from "../../public/case-studies/app-screens/orange-car-sharing/3-1.png";
import screen3_2 from "../../public/case-studies/app-screens/orange-car-sharing/3-2.png";
import screen3_3 from "../../public/case-studies/app-screens/orange-car-sharing/3-3.png";
import screen3_4 from "../../public/case-studies/app-screens/orange-car-sharing/3-4.png";
import screen3_5 from "../../public/case-studies/app-screens/orange-car-sharing/3-5.png";

const ORANGE_CAR_SHARING = {
  heroImage: orangeLogo,
  title: "Car-sharing APP",
  tags: ["Iot", "Car Sharing", "P2P"],
};

const ABOUT_ORANGE_CAR_SHARING = {
  title: "About Ride Sharing",
  description:
    "The Ride-Sharing app helps to share your car with others during your trip, as a driver, you can add your car and set up your trip, also as a customer you can search for a destination and choose from registered drivers. ",
  cards: [
    {
      order: "2",
      title: "Idea",
      description:
        "The scope of the application was to help people protect from covid19 during the pandemic period and avoid public transport. Sharing your car space during your work trips with your employees will help to reduce the risk of infection. ",
    },
    {
      order: "3",
      title: "Challenge",
      description:
        "The main challenge was to build a real-time map with drivers, and notify the people when cars reached their location. While as a driver you can bring with you several employees from different points the application should notify them before the driver is close and get ready.",
    },
  ],
};

const ORANGE_CAR_SHARING_SOLUTION = [
  "As a solution we decided to go with PWA (progressive web app) for the mobile app that bring the functionalities we need, and real-time tracking with google firebase syncronization. ",
  "We used most of the functionality provided by Google Cloud in order to maintain the ecosystem and because of our experience with it.",
];

const TECH_STACK = {
  Backend: {
    stackIcons: [
      {
        src: spring,
        name: (
          <span>
            JAVA SPRING <br /> FRAMEWORK
          </span>
        ),
      },
      {
        src: java,
        name: "JAVA",
      },
      {
        src: swagger,
        name: "SWAGGER API",
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
    ],
  },
  "Mobile App": {
    stackIcons: [
      {
        src: reactNative,
        name: "REACT.JS",
      },
      {
        src: material,
        name: "MATERIAL UI",
      },
      {
        src: redux,
        name: "REDUX",
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
        src: geocoder,
        name: (
          <span>
            GOOGLE MAPS <br /> GEOCODER
          </span>
        ),
      },
      {
        src: mapbox,
        name: "MAPBOX",
      },
    ],
  },
};

const CLIENT_REVIEW = {
  title: "Impressive results in very short term.",
  description:
    "Impressive results in very short term. Can take the challenge to very ambitious and complex projects. The team produced high-quality work that exceeded our expectations.",
  clientName: "Eugen Gavrev",
  clientPosition: "IT Project Manager",
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

    {
      src: screen1_4,
      alt: "app screen",
    },
    {
      src: screen1_5,
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
    {
      src: screen2_4,
      alt: "app screen",
    },
    {
      src: screen2_5,
      alt: "app screen",
    },
    {
      src: screen2_6,
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
    {
      src: screen3_3,
      alt: "app screen",
    },
    {
      src: screen3_4,
      alt: "app screen",
    },
    {
      src: screen3_5,
      alt: "app screen",
    },
  ],
];

const OrangeCarSharing = () => {
  return (
    <Layout footer="light">
      <CaseStudyHero
        {...ORANGE_CAR_SHARING}
        logoClassName="lg:max-w-full max-w-[110px]"
      />
      <AboutApp {...ABOUT_ORANGE_CAR_SHARING} />
      <Solution solutions={ORANGE_CAR_SHARING_SOLUTION} />
      <Architecture
        src={orangeCarSharingArchitecture}
        mobileSrc={orangeCarSharingMobileArchitecture}
        alt="Orange Car Sharing Architecure"
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

export default OrangeCarSharing;
