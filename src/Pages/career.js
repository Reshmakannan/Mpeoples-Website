import React from "react";
import "../Style/career.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";
import trapLeft from "../assets/left-corner.png";
import trapRight from "../assets/right-corner.png";

import WhyJoinUs from "../components/whyjoinus";
import CareerOpportunity from "../components/careeroppurtunity";
import LifeAtMpeoples from "../components/lifeat";
import JoinNetwork from "../components/join";
import ClientFeedback from "../components/Clientfeedback";
import PageFooter from "../components/Pagefooter";

function CareerPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="career-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <img src={trapLeft} alt="" className="trap-left" />

        {/* Right trapezoid */}
        <img src={trapRight} alt="" className="trap-right" />

        <div className="career-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="career-logo" />

          <h1 className="career-title">Build Your Future With Us</h1>

          <p className="career-description">
            At MPeoples, we are committed to shaping careers by fostering
            continuous growth, innovation, and professional excellence and
            presence.
          </p>

          <button className="career-btn">
            Let’s Build Together <span>↗</span>
          </button>
        </div>
      </section>

      <WhyJoinUs />
        <CareerOpportunity />
       <LifeAtMpeoples />
       <JoinNetwork />   
       <ClientFeedback />
      <PageFooter /> 
    </>
  );
}

export default CareerPage;
