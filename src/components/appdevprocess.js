import { useState } from "react";
import "../Style/appdevprocess.css";

import swotImage from "../assets/iPhone.png";
import flowImage from "../assets/CMD.png";
import wireframesImage from "../assets/image.png";
import dashboardImage from "../assets/appdesi.png";
import uxUiImage from "../assets/group (2).png";
import deloyeImage from "../assets/CMDS.png";
import postImage from "../assets/appdesi.png";
import markImage from "../assets/appdesign.png";

const stepsData = [
  {
    title: "Idea & Conceptualization",
    description:
      "A successful mobile app begins with a clear idea focused on solving a specific problem. Understanding the target audience through market research helps identify user needs, preferences, and trends. Based on these insights, key features and functionalities are planned to deliver real value and a seamless user experience.",
    image: swotImage,
  },

  {
    title: "Planning",
    description:
      "Once the app concept is defined, the next step is strategic planning. This includes setting a clear project timeline, selecting the right technology stack, and creating wireframes or mockups to visualize the app’s layout and user flow. This planning stage acts as a blueprint for smooth design and development.",
    image: flowImage,
  },

  {
    title: "Design",
    description:
      "The design phase focuses on creating an intuitive UI and a seamless UX. Designers develop high-fidelity prototypes to visualize the app and allow stakeholders to interact with it before development. User and stakeholder feedback during this stage helps refine the design and ensure it meets user expectations.",
    image: wireframesImage,
  },

  {
    title: "Development",
    description:
      "The development phase begins by setting up the required tools and environment. Developers then build the front-end and back-end of the app, ensuring smooth functionality. APIs and third-party services are integrated to add features like payments, social sharing, and data storage.",
    image: dashboardImage,
  },

  {
    title: "Testing",
    description:
      "Testing ensures the app works smoothly and meets user expectations. It includes functional, usability, and performance testing to verify features, user experience, and app stability. Bugs are identified and fixed, while user acceptance testing (UAT) allows stakeholders to confirm the app meets their requirements.",
    image: uxUiImage,
  },

  {
    title: "Deployment",
    description:
      "After testing, the app is prepared for deployment on platforms like the Apple App Store and Google Play Store. Ensuring compliance with store guidelines is important to avoid rejections. The launch is carefully monitored to quickly resolve any issues and ensure a smooth rollout.",
    image: deloyeImage,
  },

  {
    title: "Post-Launch & Maintenance",
    description:
      "After launch, user feedback and reviews help identify improvements and enhance app performance. Regular updates are made to fix bugs, add new features, and keep the app relevant. Continuous monitoring ensures a smooth experience and maintains user satisfaction.",
    image: postImage,
  },

  {
    title: "Marketing & Promotion",
    description:
      "A strong marketing strategy helps increase the app’s reach and success. Using social media, app store optimization (ASO), and targeted advertising can attract potential users. Engaging promotional content also helps create awareness, boost downloads, and improve user engagement.",
    image: markImage,
  },
];

export default function Appdesign() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextStep = () => {
    if (currentStep < stepsData.length - 1) {
      setDirection("next");
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection("prev");
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="appdevprocess-section">
      <div className="appdevprocess-container">

        {/* TITLE */}

        <h2 className="appdevprocess-title">
          Our App Development Process
        </h2>

        <p className="appdevprocess-subtitle">
          Idea to App. Design to Launch. Built to Scale.
        </p>

        {/* CONTENT */}

        <div className="appdevprocess-content">

          {/* LEFT SIDE STEPS */}

          <div className="appdevprocess-steps">

            {stepsData.map((step, index) => (

              <p
                key={index}
                className={
                  index === currentStep
                    ? "appdevprocess-step-item appdevprocess-step-item-active"
                    : "appdevprocess-step-item"
                }
              >
                {index + 1}. {step.title}
              </p>

            ))}

          </div>

          {/* DETAILS */}

          <div className="appdevprocess-details">

            <h3 className="appdevprocess-details-title">
              {stepsData[currentStep].title}
            </h3>

            <div className="appdevprocess-description-box">
              <p>{stepsData[currentStep].description}</p>
            </div>

            {/* SLIDER */}

            <div className="appdevprocess-slider">

              <button
                onClick={prevStep}
                className="appdevprocess-nav-btn"
                disabled={currentStep === 0}
              >
                {"<"}
              </button>

              {/* DOTS */}

              <div className="appdevprocess-dots">

                {stepsData.map((_, i) => (

                  <span
                    key={i}
                    className={
                      i === currentStep
                        ? i === stepsData.length - 1
                          ? "appdevprocess-dot appdevprocess-dot-active appdevprocess-dot-last"
                          : "appdevprocess-dot appdevprocess-dot-active"
                        : "appdevprocess-dot"
                    }
                  />

                ))}

              </div>

              <button
                onClick={nextStep}
                className="appdevprocess-nav-btn"
                disabled={currentStep === stepsData.length - 1}
              >
                {">"}
              </button>

            </div>

            {/* BUTTONS */}

            <div className="appdevprocess-cta">

              <button className="appdevprocess-btn-primary">
                Let's Build Together ↗
              </button>

              <button className="appdevprocess-btn-ghost">
                Free consultation

                <span className="appdevprocess-arrow-icon">
                  ↗
                </span>
              </button>

            </div>

          </div>

          {/* IMAGE */}

          <div className="appdevprocess-image-wrapper">

            <div className="appdevprocess-image-frame">

              <img
                key={currentStep}
                src={stepsData[currentStep].image}
                alt={stepsData[currentStep].title}
                className={`appdevprocess-moving-image ${
                  direction === "next"
                    ? "appdevprocess-slide-left"
                    : "appdevprocess-slide-right"
                }`}
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}