import React from "react";
import "../Style/Ourteam.css";
import teamImage from "../assets/teams.png";
import arrowIcon from "../assets/arrow.png";

const MeetTeam = () => {
  return (
    <section className="mt-section">
      <div className="mt-inner">

        {/* Left — Image */}
        <div className="mt-left">
          <img src={teamImage} alt="Meet Our Team" className="mt-image" />
        </div>

        {/* Divider */}
        <div className="mt-divider" />

        {/* Right — Content */}
        <div className="mt-right">
          <h2 className="mt-heading">Meet Our Team</h2>

          <div className="mt-quote-block">
            <span className="mt-quote-open">"</span>
            <p className="mt-quote-text">
              We're a team of{" "}
              <span className="mt-highlight-orange">designers</span>,{" "}
              <span className="mt-highlight-blue">developers</span>, and
              thinkers who love solving problems and building meaningful
              digital experiences. Different skills, one shared goal —
              creating work that truly makes an{" "}
              <span className="mt-highlight-green">impact.</span>
            </p>
            <span className="mt-quote-close">"</span>
          </div>

          <div className="mt-cta">
            <span className="mt-cta-text">Meet Our Team</span>
            <button className="mt-cta-btn">
              <img src={arrowIcon} alt="arrow" className="mt-arrow" />
            </button>
          </div>
        </div>

      </div>

      {/* Watermark bottom right */}
      <div className="mt-watermark">&#10697;</div>
    </section>
  );
};

export default MeetTeam;