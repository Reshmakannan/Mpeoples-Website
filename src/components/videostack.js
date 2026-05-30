import "../Style/videostack.css";

import figmaImg from "../assets/figma.png";
import adobeImg from "../assets/adobe.png";
import psImg from "../assets/ps.png";
import aiImg from "../assets/ai.png";
import xdImg from "../assets/xd.png";
import sketchImg from "../assets/sketch.png";
import miroImg from "../assets/miro.png";
import framerImg from "../assets/framer.png";
import pieImg from "../assets/control.png";

/* VALUE BOX ICONS */
import commitmentImg from "../assets/commitment.png";
import excellenceImg from "../assets/excellence.png";
import passionImg from "../assets/passion.png";
import priorityImg from "../assets/priority.png";

const tools = [
  { src: sketchImg, alt: "Sketch" },
  { src: miroImg, alt: "Miro" },
  { src: framerImg, alt: "Framer" },
  { src: figmaImg, alt: "Figma" },
  { src: xdImg, alt: "Adobe XD" },
  { src: psImg, alt: "Photoshop" },
  { src: aiImg, alt: "Illustrator" },
  { src: adobeImg, alt: "Adobe" },
];

export default function VideoStack() {
  const items = [...tools, ...tools];

  return (
    <section className="video-stack-section">
      <h2 className="video-stack-title">Our Video Production Tech Stack</h2>

      <div className="video-stack-container">
        {/* INFO SECTION */}
        <div className="video-stack-info">
          <div className="video-stack-info-left">
            <h3 className="video-stack-info-heading">
              Our Video Production Technology Stack
            </h3>

            <p className="video-stack-info-desc">
              We use advanced tools and creative techniques to produce
              high-quality videos that are engaging, impactful, and optimized
              for all digital platforms.
            </p>
          </div>

          <div className="video-stack-info-right">
            <img
              src={pieImg}
              alt="Tech stack chart"
              className="video-stack-control"
            />
          </div>
        </div>

        {/* MARQUEE */}
        <div className="video-stack-marquee-outer">
          <div className="video-stack-marquee-inner">
            <div className="video-stack-marquee-track">
              {items.map((tool, i) => (
                <div className="video-stack-cell" key={i}>
                  <span className="video-stack-divider" />

                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className="video-stack-icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLUE VALUE BOX */}
        <div className="video-value-wrapper">
          <div className="video-value-box">
            <div className="video-value-card">
              <img
                src={commitmentImg}
                alt="Commitment"
                className="video-value-image"
              />

              <h4 className="video-value-title">Commitment</h4>

              <p className="video-value-desc">
                We don’t stop until we reach our goals.
              </p>
            </div>

            <div className="video-value-card">
              <img
                src={excellenceImg}
                alt="Excellence"
                className="video-value-image"
              />

              <h4 className="video-value-title">Excellence</h4>

              <p className="video-value-desc">
                We don’t settle for less, as we have set our standards high.
              </p>
            </div>

            <div className="video-value-card">
              <img
                src={passionImg}
                alt="Passion"
                className="video-value-image"
              />

              <h4 className="video-value-title">Passion</h4>

              <p className="video-value-desc">
                We go beyond to develop tools that empower customers.
              </p>
            </div>

            <div className="video-value-card">
              <img
                src={priorityImg}
                alt="Priority"
                className="video-value-image"
              />

              <h4 className="video-value-title">Priority</h4>

              <p className="video-value-desc">
                Customers are our top priority. Customer satisfaction is our
                goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
