import "../Style/Webstack.css";

import angularImg from "../assets/angular.png";
import bootstrapImg from "../assets/bootstrap5.png";
import css3Img from "../assets/css3.png";
import html5Img from "../assets/html5.png";
import jsImg from "../assets/jscode.png";
import reactImg from "../assets/reactjscode.png";
import phpImg from "../assets/phpcode.png";
import nextImg from "../assets/nextjscode.png";
import controlImg from "../assets/control.png";

/* VALUE BOX ICONS */
import commitmentImg from "../assets/commitment.png";
import excellenceImg from "../assets/excellence.png";
import passionImg from "../assets/passion.png";
import priorityImg from "../assets/priority.png";

const tools = [
  { src: reactImg, alt: "Sketch" },
  { src: phpImg, alt: "Miro" },
  { src: nextImg, alt: "Framer" },
  { src: angularImg, alt: "Figma" },
  { src: jsImg, alt: "bootstrap XD" },
  { src: css3Img, alt: "css3" },
  { src: html5Img, alt: "Illustrator" },
  { src: bootstrapImg, alt: "bootstrap" },
];

export default function UiuxStack() {
  const items = [...tools, ...tools];

  return (
    <section className="web-stack-section">

      <h2 className="web-stack-title">
        Our Web Development Technology Stack
      </h2>

      <div className="web-stack-container">

        {/* INFO SECTION */}
        <div className="web-stack-info">

          <div className="web-stack-info-left">

            <h3 className="web-stack-info-heading">
              Our Web Technology Stack
            </h3>

            <p className="web-stack-info-desc">
              We use modern technologies and powerful frameworks to build secure, 
scalable, and high-performance websites that deliver seamless digital experiences.
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