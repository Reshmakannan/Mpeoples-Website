import React from "react";
import "../Style/video.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";
import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

import ServicesSection from "../components/videoservices";
import GifSection from "../components/videogif";
import VideoProvide from "../components/videoprovide";
import VideoBenefits from "../components/videobenefits";
import VideoStack from "../components/videostack";
import Forms from "../components/Forms";
import DoubtsSection from "../components/videodoubts";
import ClientFeedback from "../components/Clientfeedback";
import PageFooter from "../components/Pagefooter";


function VideoPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="video-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
         <img src={trapLeft} alt="" className="trap-left" />

        {/* Right trapezoid */}
        <img src={trapRight} alt="" className="trap-right" />
        
        <div className="video-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="video-logo" />

          <h1 className="videos-title">
            Strategic Video Production for Business Growth
          </h1>

          <p className="video-description">
           At MPeoples, we create impactful video content that boosts brand engagement and growth. From promos to corporate videos, we help you tell your story and reach the right audience.
          </p>

          <button className="video-btn">
            Let’s Build Together <span>↗</span>
          </button>
        </div>
      </section>

      <ServicesSection />
       <GifSection />
       <VideoProvide />
       <VideoBenefits />
      <VideoStack />   
      <Forms />
      <DoubtsSection />
      <ClientFeedback />
      <PageFooter />
      


    </>
  );
}

export default VideoPage;