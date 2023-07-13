import React from "react";

import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import SearchPopup from "./SearchPopup";
import RoutesList from "./RoutesList";

const Layout = (props) => {
  return (
    <div>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <Loader />

      <div className="page-wrapper">
        <Header />

        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content"></div>
        </div>

        <RoutesList />

        <Footer />
      </div>

      <MobileNav />

      <SearchPopup />

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="icon-up-arrow"></i>
      </a>
    </div>
  );
};

export default Layout;
