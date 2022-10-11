import React from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
const NotFound =  dynamic(() =>  import("../components/404"))

const Calculator = () => {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
};

export default Calculator;