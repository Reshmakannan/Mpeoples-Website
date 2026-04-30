import React, { useState } from "react";
import "../Style/Uiuxdoubts.css";

import arrowIcon from "../assets/blue-arrow.png";

const faqData = [
  {
    question: "How do you ensure a user-friendly design?",
    answer:
      "We follow a research-driven approach that includes user interviews, competitor analysis, and usability testing. Every design decision is backed by real user insights to ensure intuitive and seamless experiences.",
  },
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UX (User Experience) focuses on structure, user flows, and overall usability of a product. UI (User Interface) focuses on visual elements like colors, typography, buttons, and layout that users interact with.",
  },
  {
    question: "How long does a UI/UX project take?",
    answer:
      "The timeline depends on the project scope, complexity, and requirements. Typically, a complete UI/UX design project can take anywhere from 2 to 8 weeks.",
  },
  {
    question: "Do you redesign existing websites or apps?",
    answer:
      "Yes, we redesign existing websites and applications to improve usability, visual appeal, and performance while aligning with your business goals.",
  },
  {
    question: "Will I receive source files and design systems?",
    answer:
      "Yes, we provide editable design source files along with style guides and design systems for future updates and consistency.",
  },
  {
    question: "Do you conduct usability testing?",
    answer:
      "Yes, usability testing is a key part of our process to identify pain points and optimize the user experience.",
  },
  {
    question: "Can you align the design with my brand identity?",
    answer:
      "Absolutely. We ensure every design element reflects your brand identity, values, and target audience.",
  },
];

const Uiuxdoubt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="uiuxdoubt-section">
      <div className="uiuxdoubt-container">
        <h2 className="uiuxdoubt-title">Your UI/UX Doubts Clarified ?</h2>

        <div className="uiuxdoubt-faq-list">
          {faqData.map((item, index) => (
            <div
              className={`uiuxdoubt-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="uiuxdoubt-faq-question-row"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="uiuxdoubt-faq-question">{item.question}</h3>

                <button className="uiuxdoubt-faq-btn">
                  <img
                    src={arrowIcon}
                    alt="toggle"
                    className={`uiuxdoubt-faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`uiuxdoubt-faq-answer-wrapper ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p className="uiuxdoubt-faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Uiuxdoubt;