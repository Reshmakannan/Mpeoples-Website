import React from "react";
import "../Style/gd.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";
import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 


import ServicesSection from "../components/Gdservices";
import CccSection from "../components/Gdccc";
import FutureSection from "../components/Gdfuture";
import GdIndustries from "../components/Gdindustries";
import GdBenefits from "../components/Gdbenefits";
import GdStack from "../components/Gdstack";
import DigitalWorks from "../components/Gdworks";
import Forms from "../components/Forms";
import DoubtsSection from "../components/gddoubts";
import FeedbackSection from "../components/Clientfeedback";
import FooterSection from "../components/Pagefooter";

function GdPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="gd-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
         <img src={trapLeft} alt="" className="trap-left" />

        {/* Right trapezoid */}
        <img src={trapRight} alt="" className="trap-right" />
        
        <div className="gd-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="gd-logo" />

          <h1 className="gds-title">
            Creative Designs That Build Strong Brand Identity
          </h1>

          <p className="gd-description">
           At MPeoples, we create impactful graphic designs that clearly communicate your brand message. Our creative visuals help businesses attract attention, engage audiences, and strengthen their brand presence.
          </p>

          <button className="gd-btn">
            Let’s Build Together <span>↗</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
      <CccSection />
      <FutureSection />
      <GdIndustries />
      <GdBenefits />
      <DigitalWorks />
      <GdStack />
      <Forms />
      <DoubtsSection />
      <FeedbackSection />
      <FooterSection />
      {/* <Gdworks /> */}
    </>
  );
}

export default GdPage;