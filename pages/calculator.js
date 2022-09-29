import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Calculator, CalculatorHero } from "../components/calculator/index";
import Faq from "../components/Faq";
import { PAGE_TITLES } from "../lib/constants";

const FAQS = [
  {
    question: "How much does it cost to make an app?",
    answer:
      "In order to get an estimative price for your application, use the above software development cost calculator. The final price may vary until 20% - 30% of the total cost, please feel free to contact us by email and get a fixed price for your project.",
  },
  {
    question: "How does a software development calculator work?",
    answer:
      "In order to get a software development cost estimation, we have split the features by categories and estimated how many hours would take to implement each feature. By simply selecting the features we sum up those features and multiply by the number of hours of each feature. And voila, we have an estimative project price. Feel free to contact us if some features are missing.",
  },
  {
    question:
      "What if missing some feature options that I would like to add to my project?",
    answer:
      "If missing some features from our app cost calculator then no worries. Feel free to contact us directly and we’ll estimate the price for the feature you want to implement.",
  },
  {
    question: "What technologies are you using?",
    answer:
      "We’re good at using the latest available frameworks which provide high-level security and a great community. Laravel is our preferable framework for building the back-end and VueJs for building the front-end.",
  },
];

const CalculatorPage = () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLES.calculator}</title>
      </Head>
      <CalculatorHero />
      <Calculator />
      <Faq faqs={FAQS} />
    </Layout>
  );
};

export default CalculatorPage;
