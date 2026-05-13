import "../Style/Dmstack.css";

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

export default function UiuxStack() {
  const items = [...tools, ...tools];

  return (
    <section className="dm-stack-section">

      <h2 className="dm-stack-title">
        Our Digital Marketing Tech Stack
      </h2>

      <div className="dm-stack-container">

        {/* INFO SECTION */}
        <div className="dm-stack-info">

          <div className="dm-stack-info-left">

            <h3 className="dm-stack-info-heading">
              Our Digital Marketing Stack
            </h3>

            <p className="dm-stack-info-desc">
              We use modern digital marketing strategies and tools to grow your brand online.Our campaigns increase visibility, attract the right audience, and drive business growth.
            </p>

          </div>

          <div className="dm-stack-info-right">

            <img
              src={controlImg}
              alt="Tech stack chart"
              className="dm-stack-control"
            />

          </div>

        </div>

        {/* MARQUEE */}
        <div className="dm-stack-marquee-outer">

          <div className="dm-stack-marquee-inner">

            <div className="dm-stack-marquee-track">

              {items.map((tool, i) => (
                <div className="dm-stack-cell" key={i}>

                  <span className="dm-stack-divider" />

                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className="dm-stack-icon"
                  />

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* BLUE VALUE BOX */}
        <div className="dm-value-wrapper">

          <div className="dm-value-box">

            <div className="dm-value-card">

              <img
                src={commitmentImg}
                alt="Commitment"
                className="dm-value-image"
              />

              <h4 className="dm-value-title">
                Commitment
              </h4>

              <p className="dm-value-desc">
                We don’t stop until we reach our goals.
              </p>

            </div>

            <div className="dm-value-card">

              <img
                src={excellenceImg}
                alt="Excellence"
                className="dm-value-image"
              />

              <h4 className="dm-value-title">
                Excellence
              </h4>

              <p className="dm-value-desc">
                We don’t settle for less, as we have set our standards high.
              </p>

            </div>

            <div className="dm-value-card">

              <img
                src={passionImg}
                alt="Passion"
                className="dm-value-image"
              />

              <h4 className="dm-value-title">
                Passion
              </h4>

              <p className="dm-value-desc">
                We go beyond to develop tools that empower customers.
              </p>

            </div>

            <div className="dm-value-card">

              <img
                src={priorityImg}
                alt="Priority"
                className="dm-value-image"
              />

              <h4 className="dm-value-title">
                Priority
              </h4>

              <p className="dm-value-desc">
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