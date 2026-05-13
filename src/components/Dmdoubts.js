import React, { useState } from "react";
import "../Style/Dmdoubts.css";

import arrowIcon from "../assets/blue-arrow.png";

const faqData = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "The timeline depends on the strategy used. SEO may take a few months to show strong results, while paid campaigns and social media ads can generate traffic and leads within a shorter period.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "The cost depends on factors such as marketing channels, campaign goals, advertising budget, and competition. We provide customized digital marketing plans based on your business objectives.",
  },
  {
    question: "Which digital marketing services are best for my business?",
    answer:
      "It depends on your industry, audience, and goals. Services like SEO, social media marketing, content marketing, and paid advertising on platforms like Google Ads can be combined to achieve the best results.",
  },
  {
    question: "Can digital marketing help generate more leads and sales?",
    answer:
      "Yes. Effective digital marketing strategies increase your brand visibility, attract the right audience, and convert visitors into potential customers and sales.",
  },
  {
    question: "Will I receive performance reports for my campaigns?",
    answer:
      " Yes. We provide regular reports with insights on traffic, engagement, leads, and campaign performance to track the effectiveness of your marketing strategies.",
  },
  {
    question: "Can you manage social media marketing for my business?",
    answer:
      "Yes. We manage social media campaigns and content across platforms like Instagram and Facebook to improve brand awareness and audience engagement.",
  },
  {
    question: "Do you provide ongoing digital marketing support?",
    answer:
      " Yes. Digital marketing requires continuous optimization. Our team monitors campaigns, analyzes performance, and improves strategies to ensure consistent growth and long-term success. ",
  },
];

const Dmdoubt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="dmdoubts-section">
      <div className="dmdoubts-container">
        <h2 className="dmdoubts-title">Your Digital Marketing Service Doubts Clarified?</h2>

        <div className="dmdoubts-faq-list">
          {faqData.map((item, index) => (
            <div
              className={`dmdoubts-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="dmdoubts-faq-question-row"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="dmdoubts-faq-question">{item.question}</h3>

                <button className="dmdoubts-faq-btn">
                  <img
                    src={arrowIcon}
                    alt="toggle"
                    className={`dmdoubts-faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`dmdoubts-faq-answer-wrapper ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p className="dmdoubts-faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dmdoubt;