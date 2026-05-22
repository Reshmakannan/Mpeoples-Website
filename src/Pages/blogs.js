import React from "react";
import "../Style/blogs.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";
import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

import BlogFeatures from "../components/blogfeature";
import BlogService from "../components/blogservice"
import ClientFeedback from "../components/Clientfeedback";
import PageFooter from "../components/Pagefooter";


function BlogsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="blogs-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
         <img src={trapLeft} alt="" className="trap-left" />

        {/* Right trapezoid */}
        <img src={trapRight} alt="" className="trap-right" />
        
        <div className="blogs-overlay">
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="blogs-logo" />

          <h1 className="blogs-title">
            The Innovation Behind Our Success
          </h1>

          <p className="blogs-description">
           At MPeoples, innovation drives everything we do—helping us create smarter solutions, deliver better results, and continuously evolve with changing business needs.
          </p>

          <button className="blogs-btn">
            Let’s Build Together <span>↗</span>
          </button>
        </div>
      </section>

      <BlogFeatures />
      <BlogService />
      <ClientFeedback />
      <PageFooter />




    </>
  );
}

export default BlogsPage;