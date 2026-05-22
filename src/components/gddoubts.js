import React, { useState } from "react";
import "../Style/gddoubts.css";

import arrowIcon from "../assets/blue-arrow.png";

const faqData = [
  {
    question: "How long does it take to complete a graphic design project?",
    answer:
      "The timeline depends on the type and complexity of the design. Simple designs like logos or social media creatives may take a few days, while branding or marketing design projects may take a few weeks.",
  },
  {
    question: "How much does graphic design cost?",
    answer:
      "The cost depends on factors such as design requirements, project scope, number of revisions, and design complexity. We provide customized pricing based on your business needs and design goals.",
  },
  {
    question: "Can you design graphics that match my brand identity?",
    answer:
      " Yes. We create designs that align with your brand’s colors, typography, style, and overall identity to ensure visual consistency across all platforms.",
  },
  {
    question: "Can you redesign or improve my existing designs?",
    answer:
      "Absolutely. We can refine your existing graphics with modern design trends, improved visuals, and better layout to enhance your brand’s appearance.",
  },
  {
    question: "Will I get the final design files in different formats?",
    answer:
      " Yes. We deliver design files in multiple formats suitable for both digital and print use, ensuring flexibility for your marketing and branding needs.",
  },
  {
    question: "Can you create designs for both digital and print platforms?",
    answer:
      "Yes. We can integrate payment gateways, CRM systems, analytics tools, cloud services, APIs, and automation tools to extend your SaaS platform’s capabilities.",
  },
  {
    question: "Do you provide ongoing design support?",
    answer:
      "Yes. We offer continuous design support for marketing campaigns, brand updates, and new creative requirements to keep your brand visually strong and consistent.",
  },
];

const Gddoubt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="Gddoubts-section">
      <div className="Gddoubts-container">
        <h2 className="Gddoubts-title">Your Graphic Design Service Doubts Clarified?</h2>

        <div className="Gddoubts-faq-list">
          {faqData.map((item, index) => (
            <div
              className={`Gddoubts-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="Gddoubts-faq-question-row"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="Gddoubts-faq-question">{item.question}</h3>

                <button className="Gddoubts-faq-btn">
                  <img
                    src={arrowIcon}
                    alt="toggle"
                    className={`Gddoubts-faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`Gddoubts-faq-answer-wrapper ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p className="Gddoubts-faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gddoubt;