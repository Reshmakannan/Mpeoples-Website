import React from "react";
import "../Style/ImpactStories.css";

import lookitIcon from "../assets/lookit.png";
import mobileMockup from "../assets/Mobile.png";

const ImpactStories = () => {
  return (
    <section className="impact2-section">
      <div className="impact2-container">
        <h2 className="impact2-title">Impact Stories</h2>
        <p className="impact2-subtitle">
          Real Problems. Real Solutions. Real Impact.
        </p>

        <div className="impact2-timeline">
          <div className="impact2-line"></div>
          <div className="impact2-dot"></div>

          <div className="impact2-card">
            
            {/* Header */}
            <div className="impact2-card-header">
              <img src={lookitIcon} alt="Lookit Icon" className="impact2-icon" />
              <h3>Lookit App</h3>
            </div>

            <p className="impact2-description">
              Designed a mobile-first experience that improved user engagement
              and simplified content discovery.
            </p>

            {/* Image */}
            <div className="impact2-image-box">
              <img src={mobileMockup} alt="Mobile UI" />
            </div>

            {/* Stats */}
            <div className="impact2-stats">
              <div className="impact2-stat">
                <h4>50K+ Users</h4>
                <p>Rapid growth driven by seamless onboarding.</p>
              </div>

              <div className="impact2-stat impact2-middle">
                <h4>+38% Engagement</h4>
                <p>Smarter UX increased daily interactions</p>
              </div>

              <div className="impact2-stat">
                <h4>+42% Retention</h4>
                <p>Optimized performance reduced drop-offs.</p>
              </div>
            </div>

            {/* Footer */}
            <div className="impact2-footer">
              <div className="impact2-tags">
                <span className="impact2-tag impact2-blue">UX Research</span>
                <span className="impact2-tag impact2-orange">Mobile UX</span>
                <span className="impact2-tag impact2-green">Engagement</span>
                <span className="impact2-tag impact2-purple">UI Redesign</span>
              </div>

              <div className="impact2-arrow">↗</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;