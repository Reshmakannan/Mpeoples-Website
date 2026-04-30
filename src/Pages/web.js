import React from "react";
import "../Style/web.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";

import ServicesSection from "../components/Webservice";
import SoftwareSection from "../components/Websoftware";
import ProcessSection from "../components/Webprocess";
import FutureSection from "../components/Webfuture";
import StackSection from "../components/Webstack";


function WebPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="uiux-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="uiux-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="uiux-logo" />

          <h1 className="uiux-title">
            Crafting High-Quality Websites for Modern Businesses
          </h1>

          <p className="uiux-description">
            At MPeoples, we develop powerful websites that combine clean code, great performance, and seamless user experiences to help your business grow online.
          </p>

          <button className="uiux-btn">
            Let’s Build Together <span>↗</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
      <SoftwareSection />
      <ProcessSection />
      <FutureSection />
      <StackSection />
      
    </>
  );
}

export default WebPage;