import React, { useState } from "react";
import "../Style/Webdoubts.css";

import arrowIcon from "../assets/blue-arrow.png";

const faqData = [
  {
    question: "How long does it take to develop a website?",
    answer:
      "The development timeline depends on the complexity and features required. A basic website may take 2–3 weeks, while larger platforms like e-commerce or custom web applications may take 4–8 weeks or more.",
  },
  {
    question: "How much does website development cost?",
    answer:
      "Website development costs vary based on design complexity, number of pages, features, and integrations. We provide customized pricing based on your business requirements.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. All the websites we develop are fully responsive and optimized to work smoothly across mobile devices, tablets, and desktops.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can analyze your current website and redesign it with modern UI/UX, improved performance, and better user engagement.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Yes. We develop websites with SEO best practices, including optimized structure, fast loading speed, and proper meta tags to improve search engine visibility.",
  },
  {
    question: "Can I update the content on my website myself?",
    answer:
      "Yes. We can build your website using CMS platforms that allow you to easily update content, images, and pages without technical knowledge.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes. We offer ongoing maintenance and support services including security updates, bug fixes, performance monitoring, and content updates.",
  },
];

const Webdoubt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="webdoubt-section">
      <div className="webdoubt-container">
        <h2 className="webdoubt-title">Your Website Development Doubts Clarified ?</h2>

        <div className="webdoubt-faq-list">
          {faqData.map((item, index) => (
            <div
              className={`webdoubt-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="webdoubt-faq-question-row"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="webdoubt-faq-question">{item.question}</h3>

                <button className="webdoubt-faq-btn">
                  <img
                    src={arrowIcon}
                    alt="toggle"
                    className={`webdoubt-faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`webdoubt-faq-answer-wrapper ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p className="webdoubt-faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Webdoubt;