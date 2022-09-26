import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, footer = "dark", ...props }) => {
  return (
    <div className="relative overflow-hidden">
      <Header {...props} />
      <main className="lg:mt-[100px] mt-[73px]">{children}</main>
      <Footer variant={footer} />
    </div>
  );
};

export default Layout;
