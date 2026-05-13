import React, { useState } from "react";
import "../Style/videodoubts.css";

import arrowIcon from "../assets/blue-arrow.png";

const faqData = [
  {
    question: "How long does it take to complete a video production project?",
    answer:
      "The timeline depends on the type and complexity of the video. Simple videos may take a few days, while high-quality productions with scripting, shooting, and editing may take a few weeks.",
  },
  {
    question: "How much does video production cost?",
    answer:
      "The cost varies based on factors such as video length, concept, production quality, equipment, locations, and editing requirements. We provide customized pricing based on your business needs.",
  },
  {
    question: "What types of videos are best for my business?",
    answer:
      "It depends on your goals and audience. Promotional videos, corporate videos, social media content, and explainer videos can be used individually or combined for better results.",
  },
  {
    question: "Can video production help increase leads and sales?",
    answer:
      "Yes. Engaging videos attract attention, build trust, and effectively showcase your products or services, helping convert viewers into potential customers.",
  },
  {
    question: "Will I be involved in the creative process?",
    answer:
      "Absolutely. We collaborate with you during scripting, planning, and feedback stages to ensure the final video aligns with your vision and expectations.",
  },
  {
    question: "Do you provide video editing and post-production services?",
    answer:
      "Yes. We handle complete post-production including editing, sound design, color grading, and visual effects to deliver a polished final video.",
  },
  {
    question: "Do you offer ongoing video content support?",
    answer:
      "Yes. We can create and manage continuous video content for marketing campaigns, social media, and branding to support your long-term growth.",
  },
];

const Videodoubt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="videodoubt-section">
      <div className="videodoubt-container">
        <h2 className="videodoubt-title">Your Video Production Service Doubts Clarified?</h2>

        <div className="videodoubt-faq-list">
          {faqData.map((item, index) => (
            <div
              className={`videodoubt-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="videodoubt-faq-question-row"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="videodoubt-faq-question">{item.question}</h3>

                <button className="videodoubt-faq-btn">
                  <img
                    src={arrowIcon}
                    alt="toggle"
                    className={`videodoubt-faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`videodoubt-faq-answer-wrapper ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p className="videodoubt-faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videodoubt;