import "../Style/Saasstack.css";

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

export default function SaasStack() {
  const items = [...tools, ...tools];

  return (
    <section className="saas-stack-section">

      <h2 className="saas-stack-title">
       Our SaaS Product Development Tech Stack
      </h2>

      <div className="saas-stack-container">

        {/* INFO SECTION */}
        <div className="saas-stack-info">

          <div className="saas-stack-info-left">

            <h3 className="saas-stack-info-heading">
              Our SaaS Technology Stack
            </h3>

            <p className="saas-stack-info-desc">
              We use modern technologies to build fast, secure, and scalable SaaS applications with seamless user experiences and reliable cloud solutions.
            </p>

          </div>

          <div className="saas-stack-info-right">

            <img
              src={controlImg}
              alt="Tech stack chart"
              className="saas-stack-control"
            />

          </div>

        </div>

        {/* MARQUEE */}
        <div className="saas-stack-marquee-outer">

          <div className="saas-stack-marquee-inner">

            <div className="saas-stack-marquee-track">

              {items.map((tool, i) => (
                <div className="saas-stack-cell" key={i}>

                  <span className="saas-stack-divider" />

                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className="saas-stack-icon"
                  />

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* BLUE VALUE BOX */}
        <div className="saas-value-wrapper">

          <div className="saas-value-box">

            <div className="saas-value-card">

              <img
                src={commitmentImg}
                alt="Commitment"
                className="saas-value-image"
              />

              <h4 className="saas-value-title">
                Commitment
              </h4>

              <p className="saas-value-desc">
                We don’t stop until we reach our goals.
              </p>

            </div>

            <div className="saas-value-card">

              <img
                src={excellenceImg}
                alt="Excellence"
                className="saas-value-image"
              />

              <h4 className="saas-value-title">
                Excellence
              </h4>

              <p className="saas-value-desc">
                We don’t settle for less, as we have set our standards high.
              </p>

            </div>

            <div className="saas-value-card">

              <img
                src={passionImg}
                alt="Passion"
                className="saas-value-image"
              />

              <h4 className="saas-value-title">
                Passion
              </h4>

              <p className="saas-value-desc">
                We go beyond to develop tools that empower customers.
              </p>

            </div>

            <div className="saas-value-card">

              <img
                src={priorityImg}
                alt="Priority"
                className="saas-value-image"
              />

              <h4 className="saas-value-title">
                Priority
              </h4>

              <p className="saas-value-desc">
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