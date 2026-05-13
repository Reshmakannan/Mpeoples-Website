import React from "react";
import "../Style/aboutus.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";
import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

import AboutUsOne from "../components/aboutusone";
import AboutWork from "../components/aboutwork";

function AboutusPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="aboutus-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
         <img src={trapLeft} alt="" className="trap-left" />

        {/* Right trapezoid */}
        <img src={trapRight} alt="" className="trap-right" />
        
        <div className="aboutus-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="aboutus-logo" />

          <h1 className="aboutus-title">
            Built for People. Powered by Technology.
          </h1>

          <p className="aboutus-description">
           We develop innovative software products and deliver high-quality services that help businesses grow faster and smarter.
          </p>

          <button className="aboutus-btn">
            Let’s Build Together <span>↗</span>
          </button>
        </div>
      </section>

      <AboutUsOne />
      <AboutWork />

      
    </>
  );
}

export default AboutusPage;