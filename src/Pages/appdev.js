import React from "react";
import "../Style/appdev.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";
import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

import ServicesSection from "../components/appservices";
import ProcessSection from "../components/appdevprocess";
import FutureSection from "../components/appdevfuture";
import MobileAppTrends from "../components/apptrends";
import AppBenefits from "../components/appdevbenefits";
import DevStack from "../components/appdevstack";
import FormsSection from "../components/Forms";
import DoubtsSection from "../components/appdevdoubts";
import FeedbackSection from "../components/Clientfeedback";
import PageFooter from "../components/Pagefooter";

function AppdevPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="appdev-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
         <img src={trapLeft} alt="" className="trap-left" />

        {/* Right trapezoid */}
        <img src={trapRight} alt="" className="trap-right" />
        
        <div className="appdev-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="appdev-logo" />

          <h1 className="appdev-title">
            Building Powerful Mobile Apps for Modern Businesses
          </h1>

          <p className="appdev-description">
          At MPeoples, we create high-performance mobile applications with intuitive design, seamless functionality, and scalable technology to help businesses connect with users and grow in the digital world.
          </p>

          <button className="appdev-btn">
            Let’s Build Together <span>↗</span>
          </button>
        </div>
      </section>


      <ServicesSection />
      <ProcessSection />
      <FutureSection />
      <MobileAppTrends/>
      <AppBenefits />
      <DevStack />
      <FormsSection />
      <DoubtsSection  />
      <FeedbackSection />
      <PageFooter />
    </>
  );
}

export default AppdevPage;