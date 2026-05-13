import React from "react";
import "../Style/saas.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";
import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

import ServicesSection from "../components/saasservices";
import SaassbsServices from "../components/saassbs";
import Saasfuture from "../components/Saasfuture";
import SaasProvide from "../components/Saasindustries";
import SaasBenefits from "../components/Saasbenefits";
import SaasStack from "../components/Saasstack";
import Forms from "../components/Forms";
import DoubtsSection from "../components/Saasdoubts";
import ClientFeedback from "../components/Clientfeedback";
import PageFooter from "../components/Pagefooter";


function SaasPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="saas-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
         <img src={trapLeft} alt="" className="trap-left" />

        {/* Right trapezoid */}
        <img src={trapRight} alt="" className="trap-right" />
        
        <div className="saas-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="saas-logo" />

          <h1 className="saas-title">
            Building Powerful SaaS Products for Modern Businesses
          </h1>

          <p className="saas-description">
            At MPeoples, we create high-performance mobile applications with intuitive design, seamless functionality, and scalable technology to help businesses connect with users and grow in the digital world.
          </p>

          <button className="saas-btn">
            Let’s Build Together <span>↗</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
     <ServicesSection />
     <SaassbsServices />
     <Saasfuture />
     <SaasProvide />
     <SaasBenefits />
     <SaasStack />
    <Forms />
     <DoubtsSection />
    <ClientFeedback />
    <PageFooter />       
    </>
  );
}

export default SaasPage;