import "../Style/Webstack.css";

import figmaImg from "../assets/figma.png";
import adobeImg from "../assets/adobe.png";
import psImg from "../assets/ps.png";
import aiImg from "../assets/ai.png";
import xdImg from "../assets/xd.png";
import sketchImg from "../assets/sketch.png";
import miroImg from "../assets/miro.png";
import framerImg from "../assets/framer.png";
import controlImg from "../assets/control.png";

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

export default function UiuxStack() {
  const items = [...tools, ...tools];

  return (
    <section className="web-stack-section">

      <h2 className="web-stack-title">
        Our Graphic Design Tech Stack
      </h2>

      <div className="web-stack-container">

        {/* INFO SECTION */}
        <div className="web-stack-info">

          <div className="web-stack-info-left">

            <h3 className="web-stack-info-heading">
              Our Graphic Design Stack
            </h3>

            <p className="web-stack-info-desc">
             We create visually compelling graphic designs that strengthen your brand identity and communication. Our creative visuals help attract attention, engage audiences, and elevate your brand presence. 
            </p>

          </div>

          <div className="web-stack-info-right">

            <img
              src={controlImg}
              alt="Tech stack chart"
              className="web-stack-control"
            />

          </div>

        </div>

        {/* MARQUEE */}
        <div className="web-stack-marquee-outer">

          <div className="web-stack-marquee-inner">

            <div className="web-stack-marquee-track">

              {items.map((tool, i) => (
                <div className="web-stack-cell" key={i}>

                  <span className="web-stack-divider" />

                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className="web-stack-icon"
                  />

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* BLUE VALUE BOX */}
        <div className="web-value-wrapper">

          <div className="web-value-box">

            <div className="web-value-card">

              <img
                src={commitmentImg}
                alt="Commitment"
                className="web-value-image"
              />

              <h4 className="web-value-title">
                Commitment
              </h4>

              <p className="web-value-desc">
                We don’t stop until we reach our goals.
              </p>

            </div>

            <div className="web-value-card">

              <img
                src={excellenceImg}
                alt="Excellence"
                className="web-value-image"
              />

              <h4 className="web-value-title">
                Excellence
              </h4>

              <p className="web-value-desc">
                We don’t settle for less, as we have set our standards high.
              </p>

            </div>

            <div className="web-value-card">

              <img
                src={passionImg}
                alt="Passion"
                className="web-value-image"
              />

              <h4 className="web-value-title">
                Passion
              </h4>

              <p className="web-value-desc">
                We go beyond to develop tools that empower customers.
              </p>

            </div>

            <div className="web-value-card">

              <img
                src={priorityImg}
                alt="Priority"
                className="web-value-image"
              />

              <h4 className="web-value-title">
                Priority
              </h4>

              <p className="web-value-desc">
                Customers are our top priority.
                Customer satisfaction is our goal.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}