// Images
import Link from "next/link";

import clutchReview from "../public/clutch-review.png";
import review1 from "../public/ron-hyman.png";
import review2 from "../public/victor-bivol.png";
import review3 from "../public/eugen-gavrev.png";
import peterGrataleAvatar from "../public/peter-gratale.png";
import vladimirGrosuAvatar from "../public/vladimir-grosu.png";
import mevuoPreview from "../public/mevuo-preview.png";
import wonsultingPreview from "../public/case-studies/wonsulting-preview.png";
import staffmetricPreview from "../public/case-studies/staffmetric-preview.png";
import interviewSchoolPreview from "../public/case-studies/interview-school-preview.png";
import orangeCarSharingPreview from "../public/case-studies/orange-car-sharing-preview.png";
import orangeFinancePreview from "../public/case-studies/orange-finance-preview.png";

// CASE STUDIES LOGO ICONS
import wonsultingIcon from "../public/case-studies/wonsulting-icon.svg";
import mevuoIconDark from "../public/case-studies/mevuo-icon-dark.svg";
import staffmetricLogoWhite from "../public/case-studies/staffmetric-logo-white.png";
import interviewSchoolLogoWhite from "../public/case-studies/interview-school-logo-white.png";
import orangeLogoWhite from "../public/case-studies/orange-logo-white.png";

import mevuoIcon from "../public/case-studies/case-study-logos/mevuo-logo.png";
import wonsultingIconDark from "../public/case-studies/case-study-logos/wonsulting-logo.png";
import interviewSchoolLogo from "../public/case-studies/case-study-logos/interview-school-logo.png";
import staffmetricLogo from "../public/case-studies/case-study-logos/staffmetric-logo.png";
import orangeLogo from "../public/case-studies/case-study-logos/orange-logo.png";

// CASE STUDIES COVER IMAGES

// TODO: Move all social networks to constants

export const HEADER_NAV = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    subMenu: [
      {
        title: "Web Development Services",
        href: "/services/web-development",
      },
      {
        title: "Mobile Application Development",
        href: "/services/mobile-applications",
      },
      {
        title: "MVP App Development",
        href: "/services/mvp-development",
      },
      {
        title: "Dedicated Developers",
        href: "/about-us",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-and-policy",
  },
];

export const FAQS = [
  {
    question: "Who are you and who are your customers?",
    answer: (
      <span>
        OpenByte is an ambitious company that has a great experience in Web and
        Software Development with over 10+years of experience.
        <br /> <br /> We are a company that believes in people and trust each
        other, we’re not about processes but about respect and people, also we
        believe that transparency leads to trust and long-term collaboration
        with our customers.
        <br /> <br /> Check out our{" "}
        <Link prefetch={false} href="/case-studies">
          <a className="text-orange">Portfolio</a>
        </Link>{" "}
        to learn more about our clients and the projects we’ve delivered.
      </span>
    ),
  },
  {
    question: "What development services can I receive from OpenByte?",
    answer: (
      <span>
        We offer software development services in the following areas:
      </span>
    ),
    bullets: [
      "Web Development",
      "Mobile Application Development",
      "MVP Development",
      "IT consulting, CTO as service",
    ],
  },
  {
    question: "Which tech stack are you most experienced with?",
    answer: (
      <span>
        We always aim to improve our skills and using at the moment top tech
        stack for building a great product. Now, we mainly specialize in:
      </span>
    ),
    bullets: [
      "React, React Native, Vue, Node, Express, Next, Nest, Electron",
      "Google Cloud, AWS, DigitalOcean",
      "Laravel, Python, PHP",
      "Mysql, MariaDB, MongoDB",
    ],
  },
  {
    question: "Where are your developers located?",
    answer: (
      <span>
        Our office is located in Moldova, Chisinau, 31 August 1989 78, Chișinău
        2012. Most of our employees are in-house and we follow a hybrid working
        model which means that 2 days per week we’re working from home.
      </span>
    ),
  },
  {
    question: "How do you estimate a project duration?",
    answer: (
      <span>
        We prefer to have several sessions with the customer before real
        estimation, and in each session, we ask a lot of questions to fully
        understand what the customers want to build.
        <br /> <br /> In the proposal, we include the project grouped by
        milestones and a timeline for each milestone, which shows the effort in
        days/hours. <br /> <br />
        To make it clear there could be some deviation from the real estimation
        of ~10% because of undefined or missing information.
      </span>
    ),
  },
  {
    question: "How much will my project cost?",
    answer: (
      <span>
        It very depends on the number of features you want to implement on your
        application, and how quickly you want to have a ready-to-use product.
        <br /> <br /> As we mentioned earlier we prefer to bomb our customers
        with a lot of questions before each estimation, it will help us to
        understand what customers really want to build.
        <br /> <br /> To make it short please use our App Development cost
        calculator that can help you with an estimation of money.
        <br /> <br /> To get more precise information about costs, please,
        contact our business development specialists:
        <a className="text-orange" href="mailto: hi@openbyte.dev">
          {" "}
          hi@openbyte.dev
        </a>
      </span>
    ),
  },
  {
    question: "What methodology do you follow?",
    answer: (
      <span>
        Typically, we follow Scrum methodology with two-week iterations
        (sprints). Each sprint starts with a planning meeting and ends with
        delivering a stable, working product or functionality.
      </span>
    ),
  },
];

export const CLIENTS_REVIEWS = [
  {
    avatar: review1,
    name: "Ron Hyman",
    company: "Digitalaya",
    position: "Head of Product",
    review:
      "OpenByte quickly provided good quality deliverables with proactive research. They submitted everything in a timely manner, as well.",
    clutchReview,
    clutchLink: "https://clutch.co/profile/openbyte#reviews",
  },
  {
    avatar: review2,
    name: "Victor Bivol",
    company: "Orange, PM",
    position: "CEO",
    review:
      "Internal stakeholders leverage the product to increase the efficiency of management processes. Their dedication and professionalism set them apart.",
    clutchReview,
    clutchLink: "https://clutch.co/profile/openbyte#reviews",
  },
  {
    avatar: review3,
    name: "Eugen Gavrev",
    company: "Digitalaya",
    position: "IT Project Manager",
    review:
      "Impressive results in very short term. Can take the challenge to very ambitious and complex projects. The team produced high-quality work that exceeded our expectations.",
    clutchReview,
    clutchLink: "https://clutch.co/profile/openbyte#reviews",
  },
  {
    avatar: peterGrataleAvatar,
    name: "Peter Gratale",
    company: "Interview School",
    position: "CEO",
    review:
      "OpenByte successfully delivered the feature on time and with minimal bugs on the first release, exceeding the client's expectations.",
    clutchReview,
    clutchLink: "https://clutch.co/profile/openbyte#reviews",
  },
  {
    avatar: vladimirGrosuAvatar,
    name: "Vladimir Grosu",
    company: "StaffMetric",
    position: "CEO",
    review:
      "The solutions helped the company share employee productivity data with end customers. Overall, their attachment to the project made for a successful partnership.",
    clutchReview,
    clutchLink: "https://clutch.co/profile/openbyte#reviews",
  },
];

export const OUR_WORKS = [
  {
    title: "Mevuo",
    description: "Interactive documents",
    tags: ["Collaboration", "Documentation", "Knowledge"],
    body: "The biggest challenge for that project was to build front-end part that was written with Vue.js + additional components. But to have a flexible and optimized code we build all modules from scratch.",
    ctaLink: "/",
    preview: mevuoPreview,
    clutchReview: clutchReview,
  },
  {
    title: "Mevuo1",
    description: "Interactive documents",
    tags: ["Collaboration", "Documentation", "Knowledge"],
    body: "The biggest challenge for that project was to build front-end part that was written with Vue.js + additional components. But to have a flexible and optimized code we build all modules from scratch.",
    ctaLink: "/",
    preview: mevuoPreview,
    clutchReview: clutchReview,
  },
  {
    title: "Mevuo2",
    description: "Interactive documents",
    tags: ["Collaboration", "Documentation", "Knowledge"],
    body: "The biggest challenge for that project was to build front-end part that was written with Vue.js + additional components. But to have a flexible and optimized code we build all modules from scratch.",
    ctaLink: "/",
    preview: mevuoPreview,
    clutchReview: clutchReview,
  },
];

export const PAGE_TITLES = {
  homepage: "Web Development Services",
  aboutUs: "About us - Learn more about OpenByte",
  contact: "Get in touch with OpenByte",
  services: {
    webDev: "Web Development Services",
    mvpDev: "MVP App Development",
    mobileDev: "Mobile Application Development",
  },
  privacyPolicy: "Privacy & Policy",
  calculator: "App Cost Calculator",
  caseStudies: "Case Studies",
};

export const CASE_STUDIES = [
  {
    title: "Mevuo",
    description: "Interactive documents",
    tags: ["Collaboration", "Documentation", "Knowledge"],
    body: "The biggest challenge for that project was to build front-end part that was written with Vue.js + additional components. But to have a flexible and optimized code we build all modules from scratch. ",
    ctaLink: "/case-studies/mevuo",
    preview: mevuoPreview,
    previewBorder: true,
    imageAlt: "Mevuo dashboard",
    clutchReview: clutchReview,
    clutchProjectLink: "https://clutch.co/profile/openbyte#reviews",
    projectIcon: mevuoIcon,
    previewIcon: mevuoIconDark,
  },
  {
    title: "Wonsulting",
    description: "Resume Builder",
    tags: ["Collaboration", "Documentation", "Knowledge"],
    body: "The main challenge here is to generate high-qualitative bullet points by using AI. We used to train our model based on several thousand documents feeding our model with real-life examples to make our predictions better.",
    ctaLink: "/case-studies/wonsulting",
    preview: wonsultingPreview,
    previewBorder: true,
    imageAlt: "Wonsulting resume builder",
    clutchReview: clutchReview,
    clutchProjectLink: "https://clutch.co/profile/openbyte#review-1947583",
    projectIcon: wonsultingIcon,
    previewIcon: wonsultingIconDark,
  },
  {
    title: "Staffmetric",
    description: "Remote Teams Tracking Solutions",
    tags: ["SaaS", "HR", "Tracking"],
    body: "StaffMetric is an intuitive and free computer monitoring software with well-off productivity reports.",
    ctaLink: "/case-studies/staffmetric",
    preview: staffmetricPreview,
    previewBorder: true,
    imageAlt: "Staffmetric preview",
    clutchReview: clutchReview,
    clutchProjectLink: "https://clutch.co/profile/openbyte#review-1814432",
    previewIcon: staffmetricLogo,
    projectIcon: staffmetricLogoWhite,
  },
  {
    title: "Interview School",
    description: "Online Resume Builder",
    tags: ["SaaS", "HR", "B2C"],
    body: "Interview School is a suite of tools ranging from mock interviews with AI feedback, live interview coaching, and job tracking.",
    ctaLink: "/case-studies/interview-school",
    preview: interviewSchoolPreview,
    previewBorder: true,
    imageAlt: "Interview School Preview",
    clutchReview: clutchReview,
    clutchProjectLink: "https://clutch.co/profile/openbyte#review-1902827",
    previewIcon: interviewSchoolLogo,
    projectIcon: interviewSchoolLogoWhite,
  },
  {
    title: "Orange",
    description: "Car-Sharing APP",
    tags: ["Iot", "Car Sharing", "P2P"],
    body: "The Ride-Sharing app helps to share your car with others during your trip, as a driver, you can add your car and set up your trip, also as a customer you can search for a destination and choose from registered drivers.",
    ctaLink: "/case-studies/orange-car-sharing",
    previewBorder: false,
    preview: orangeCarSharingPreview,
    imageAlt: "Orange Car Sharing App Preview",
    clutchReview: clutchReview,
    clutchProjectLink: "https://clutch.co/profile/openbyte#review-1228448",
    previewIcon: orangeLogo,
    projectIcon: orangeLogoWhite,
  },
  {
    title: "Orange",
    description: "Finance info collector tool",
    tags: ["Finance", "B2B"],
    body: "Lead performance tool that connects data from multiple sources and presents in a beautiful dashboard.",
    ctaLink: "/case-studies/orange-finance-tool",
    preview: orangeFinancePreview,
    previewBorder: true,
    imageAlt: "Interview School Preview",
    clutchReview: clutchReview,
    clutchProjectLink: "https://clutch.co/profile/openbyte#review-1228448",
    projectIcon: orangeLogoWhite,
  },
];
