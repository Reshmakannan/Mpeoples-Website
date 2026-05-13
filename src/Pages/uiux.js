import React from "react";
import "../Style/Uiux.css";
import "../Style/Uiuxservice.css";
import "../Style/Uiuxdesign.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";
import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

import ServicesSection from "../components/Uiuxservice";
import DesignSection from "../components/Uiuxdesign";
import QaSection from "../components/Uiuxqa";
import StackSection from "../components/Uiuxstack";
import FutureSection from "../components/Uiuxfuture";
import FormSection from "../components/Forms";
import DoubtSection from "../components/Uiuxdoubts";
import ClientSection from "../components/Clientfeedback";
import FooterSection from "../components/Pagefooter";

function UIUXPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="uiux-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Left trapezoid */}
        <img src={trapLeft} alt="" className="trap-left" />

        {/* Right trapezoid */}
        <img src={trapRight} alt="" className="trap-right" />

        <div className="uiux-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="uiux-logo" />

          <h1 className="uiux-title">
            Built for Users. Designed for Results.
          </h1>

          <p className="uiux-description">
            We craft intuitive, research-driven UI/UX solutions that transform
            ideas into seamless digital products. From strategy to execution, we
            design experiences that engage, convert, and grow your brand.
          </p>

          <button className="uiux-btn">
            Let's Build Together <span>↗</span>
          </button>
        </div>
      </section>

      <ServicesSection />
      <DesignSection />
      <QaSection />
      <StackSection />
      <FutureSection />
      <FormSection />
      <DoubtSection />
      <ClientSection />
      <FooterSection />
    </>
  );
}

export default UIUXPage;