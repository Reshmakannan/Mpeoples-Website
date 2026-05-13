import "../Style/appdevstack.css";

import androidImg from "../assets/android.png";
import dartImg from "../assets/dart.png";
import firebaseImg from "../assets/firebase.png";
import flutterImg from "../assets/flutter.png";
import githubImg from "../assets/github.png";
import kotlinImg from "../assets/kotlin.png";
import vscodeImg from "../assets/vscode.png";
import postmanImg from "../assets/postman.png";
import controlImg from "../assets/control.png";

/* VALUE BOX ICONS */
import commitmentImg from "../assets/commitment.png";
import excellenceImg from "../assets/excellence.png";
import passionImg from "../assets/passion.png";
import priorityImg from "../assets/priority.png";

const tools = [
  { src: kotlinImg, alt: "Sketch" },
  { src: vscodeImg, alt: "Miro" },
  { src: postmanImg, alt: "Framer" },
  { src: androidImg, alt: "Figma" },
  { src: githubImg, alt: "Adobe XD" },
  { src: firebaseImg, alt: "Photoshop" },
  { src: flutterImg, alt: "Illustrator" },
  { src: dartImg, alt: "Adobe" },
];

export default function AppdevStack() {
  const items = [...tools, ...tools];

  return (
    <section className="appdevstack-stack-section">

      <h2 className="appdevstack-stack-title">
        Our Mobile App Development Tech Stack
      </h2>

      <div className="appdevstack-stack-container">

        {/* INFO SECTION */}
        <div className="appdevstack-stack-info">

          <div className="appdevstack-stack-info-left">

            <h3 className="appdevstack-stack-info-heading">
              Our App Technology Stack
            </h3>

            <p className="appdevstack-stack-info-desc">
              We use modern technologies to build fast, secure, and scalable mobile apps that deliver a smooth experience across Android and iOS. 
            </p>

          </div>

          <div className="appdevstack-stack-info-right">

            <img
              src={controlImg}
              alt="Tech stack chart"
              className="appdevstack-stack-control"
            />

          </div>

        </div>

        {/* MARQUEE */}
        <div className="appdevstack-stack-marquee-outer">

          <div className="appdevstack-stack-marquee-inner">

            <div className="appdevstack-stack-marquee-track">

              {items.map((tool, i) => (
                <div className="appdevstack-stack-cell" key={i}>

                  <span className="appdevstack-stack-divider" />

                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className="appdevstack-stack-icon"
                  />

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* BLUE VALUE BOX */}
        <div className="appdevstack-value-wrapper">

          <div className="appdevstack-value-box">

            <div className="appdevstack-value-card">

              <img
                src={commitmentImg}
                alt="Commitment"
                className="appdevstack-value-image"
              />

              <h4 className="appdevstack-value-title">
                Commitment
              </h4>

              <p className="appdevstack-value-desc">
                We don’t stop until we reach our goals.
              </p>

            </div>

            <div className="appdevstack-value-card">

              <img
                src={excellenceImg}
                alt="Excellence"
                className="appdevstack-value-image"
              />

              <h4 className="appdevstack-value-title">
                Excellence
              </h4>

              <p className="appdevstack-value-desc">
                We don’t settle for less, as we have set our standards high.
              </p>

            </div>

            <div className="appdevstack-value-card">

              <img
                src={passionImg}
                alt="Passion"
                className="appdevstack-value-image"
              />

              <h4 className="appdevstack-value-title">
                Passion
              </h4>

              <p className="appdevstack-value-desc">
                We go beyond to develop tools that empower customers.
              </p>

            </div>

            <div className="appdevstack-value-card">

              <img
                src={priorityImg}
                alt="Priority"
                className="appdevstack-value-image"
              />

              <h4 className="appdevstack-value-title">
                Priority
              </h4>

              <p className="appdevstack-value-desc">
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