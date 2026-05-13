import React, { useState } from "react";
import "../Style/Saasdoubts.css";

import arrowIcon from "../assets/blue-arrow.png";

const faqData = [
  {
    question: "How long does it take to develop a SaaS product?",
    answer:
      "The development timeline depends on the complexity, features, integrations, and scalability requirements. A basic SaaS platform may take 6–8 weeks, while advanced platforms with custom modules and integrations may take 12–16 weeks or more.",
  },
  {
    question: "How much does SaaS product development cost?",
    answer:
      "The cost depends on factors such as features, UI/UX design, cloud infrastructure, integrations, security requirements, and development time. We provide customized pricing based on your business goals and product requirements.",
  },
  {
    question: "Can the SaaS platform scale as my business grows?",
    answer:
      "Yes. Our SaaS solutions are built with scalable cloud architecture, allowing you to easily add new users, features, and integrations as your business expands.",
  },
  {
    question: "Can you upgrade or improve my existing SaaS platform?",
    answer:
      "Absolutely. We can analyze your current SaaS product and enhance it with modern UI/UX design, improved performance, advanced features, and better system architecture.",
  },
  {
    question: "Will my SaaS platform be secure?",
    answer:
      "Yes. We follow secure development practices, including data encryption, secure APIs, role-based access control, and regular security updates to protect your platform and user data.",
  },
  {
    question: "Can you integrate third-party tools and services?",
    answer:
      "Yes. We can integrate payment gateways, CRM systems, analytics tools, cloud services, APIs, and automation tools to extend your SaaS platform’s capabilities.",
  },
  {
    question: "Do you provide maintenance and support for SaaS products?",
    answer:
      "Yes. We provide ongoing maintenance and support, including updates, bug fixes, performance monitoring, and feature upgrades to ensure your SaaS platform runs smoothly and efficiently.",
  },
];

const Saasdoubt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="saasdoubts-section">
      <div className="saasdoubts-container">

        <h2 className="saasdoubts-title">
          Your SaaS Development Doubts Clarified ?
        </h2>

        <div className="saasdoubts-faq-list">
          {faqData.map((item, index) => (
            <div
              className={`saasdoubts-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="saasdoubts-faq-question-row"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="saasdoubts-faq-question">
                  {item.question}
                </h3>

                <button className="saasdoubts-faq-btn">
                  <img
                    src={arrowIcon}
                    alt="toggle"
                    className={`saasdoubts-faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`saasdoubts-faq-answer-wrapper ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p className="saasdoubts-faq-answer">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Saasdoubt;