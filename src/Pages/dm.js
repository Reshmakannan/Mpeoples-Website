import React from "react";
import "../Style/dm.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";
import trapLeft from "../assets/left-corner.png";
import trapRight from "../assets/right-corner.png";

import ServicesSection from "../components/Dmservices";
import RecSection from "../components/Dmrec";
import Dmfuturee from "../components/Dmfuture";
import Dmprocess from "../components/Dmprocess";
import DmBenefits from "../components/Dmbenefits";
import Dmstack from "../components/Dmstack";
import DigitalWorks from "../components/Dmworks";
import Dmforms from "../components/Forms";
import DoubtSection from "../components/Dmdoubts";
import ClientFeedback from "../components/Clientfeedback";
import PageFooter from "../components/Pagefooter";

function DmPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="dm-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <img src={trapLeft} alt="" className="trap-left" />

        {/* Right trapezoid */}
        <img src={trapRight} alt="" className="trap-right" />

        <div className="dm-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="dm-logo" />

          <h1 className="dm-title">
            Strategic Digital Marketing for Business Growth
          </h1>

          <p className="dm-description">
            At MPeoples, we create data-driven digital marketing strategies that
            help brands reach the right audience. From social media campaigns to
            search engine marketing and content promotion, our services boost
            online visibility, engagement, and conversions.
          </p>

          <button className="dm-btn">
            Let’s Build Together <span>↗</span>
          </button>
        </div>
      </section>

      <ServicesSection />
      <RecSection />
      <Dmfuturee />
      <Dmprocess />
      <DmBenefits />
      <Dmstack />
      <DigitalWorks />
      <Dmforms />
      <DoubtSection />
      <ClientFeedback />
      <PageFooter />
    </>
  );
}

export default DmPage;
