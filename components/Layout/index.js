import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, t, ...props }) => {
  return (
    <div className="relative overflow-hidden">
      <Header {...props} />
      <main className="lg:mt-[100px] mt-[73px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
