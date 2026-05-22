import React from "react";
import "../Style/web.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";

import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

import ServicesSection from "../components/Webservice";
import SoftwareSection from "../components/Websoftware";
import ProcessSection from "../components/Webprocess";
import FutureSection from "../components/Webfuture";
import StackSection from "../components/Webstack";
import PlatformSection from "../components/Webplatforms";
import FormSection from "../components/Forms";
import DoubtsSection from "../components/Webdoubts";
import ClientSection from "../components/Clientfeedback";
import Pagefooter from "../components/Pagefooter";


function WebPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="web-page"
        style={{ backgroundImage: `url(${bgImage})` }}>
        <img src={trapLeft} alt="" className="trap-left" />
        <img src={trapRight} alt="" className="trap-right" />
        
        <div className="web-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="web-logo" />

          <h1 className="web-title">
            Crafting High-Quality Websites for Modern Businesses
          </h1>

          <p className="web-description">
            At MPeoples, we develop powerful websites that combine clean code, great performance, and seamless user experiences to help your business grow online.
          </p>

          <button className="web-btn">
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
      <PlatformSection />
      <FormSection />
      <DoubtsSection />
      <ClientSection />
      <Pagefooter />
      
    </>
  );
}

export default WebPage;