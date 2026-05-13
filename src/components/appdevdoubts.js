import React, { useState } from "react";
import "../Style/appdevdoubts.css";

import arrowIcon from "../assets/blue-arrow.png";

const faqData = [
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "The development timeline depends on the app’s complexity, features, and platforms. A basic mobile app may take 4–6 weeks, while advanced applications with custom features may take 8–12 weeks or more.",
  },
  {
    question: "How much does mobile app development cost?",
    answer:
      "The cost of mobile app development depends on factors such as features, platform (Android/iOS), design complexity, integrations, and development time. We provide customized pricing based on your business requirements.",
  },
  {
    question: "Will my app work on both Android and iOS?",
    answer:
      "Yes. We develop applications for both Android and iOS platforms. Depending on your needs, we can build native apps or cross-platform apps that work smoothly across multiple devices.",
  },
  {
    question: "Can you redesign or upgrade my existing mobile app?",
    answer:
      "Absolutely. We can analyze your existing app and redesign it with modern UI/UX, improved performance, new features, and better user engagement.",
  },
  {
    question: "Will my mobile app be secure?",
    answer:
      "Yes. We follow secure development practices, including data encryption, secure APIs, and authentication mechanisms to ensure your app and user data remain protected.",
  },
  {
    question: "Can you integrate third-party services into my app?",
    answer:
      "Yes. We can integrate payment gateways, maps, social media logins, analytics tools, push notifications, and other APIs to enhance your app’s functionality.",
  },
  {
    question: "Do you provide app maintenance and support?",
    answer:
      "Yes. We offer ongoing app maintenance and support services, including updates, bug fixes, performance monitoring, and feature enhancements to keep your app running smoothly.",
  },
];

const Appdoubt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="appdoubts-section">
      <div className="appdoubts-container">
        <h2 className="appdoubts-title">Your appdev Development Doubts Clarified ?</h2>

        <div className="appdoubts-faq-list">
          {faqData.map((item, index) => (
            <div
              className={`appdoubts-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="appdoubts-faq-question-row"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="appdoubts-faq-question">{item.question}</h3>

                <button className="appdoubts-faq-btn">
                  <img
                    src={arrowIcon}
                    alt="toggle"
                    className={`appdoubts-faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`appdoubts-faq-answer-wrapper ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p className="appdoubts-faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appdoubt;