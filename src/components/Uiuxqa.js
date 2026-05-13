import { useState } from "react";
import "../Style/Uiuxqa.css";
import qaImage from "../assets/uiux-qa.png";

const faqs = [
  {
    id: 1,
    question: "Do you deliver projects on time?",
    answer:
      "Yes. We follow a structured design process with clear milestones and timelines. From research to final handoff, every stage is planned to ensure on-time delivery without compromising quality.",
  },
  {
    id: 2,
    question: "Do you offer a satisfaction guarantee?",
    answer:
      "Absolutely. We involve you throughout the design process, gather feedback at every stage, and refine until the final output aligns perfectly with your expectations and business goals.",
  },
  {
    id: 3,
    question: "Who will work on my project?",
    answer:
      "Your project will be handled by a dedicated UI/UX team including a UX strategist, UI designer, and prototyping expert — ensuring both creativity and usability are balanced.",
  },
  {
    id: 4,
    question: "Are your services affordable?",
    answer:
      "We provide flexible pricing models tailored to startups, growing businesses, and enterprises. Our goal is to deliver high-quality design solutions that offer real ROI.",
  },
  {
    id: 5,
    question: "Can you match my brand vision?",
    answer:
      "Yes. We deeply understand your brand identity, target audience, and business objectives before starting. Every design decision reflects your vision and strengthens your brand presence.",
  },
  {
    id: 6,
    question: "Do you provide usability testing?",
    answer:
      "Yes. We conduct usability testing and validation to identify friction points and optimize user flows, ensuring a smooth and intuitive experience.",
  },
  {
    id: 7,
    question: "Will I receive complete design files?",
    answer:
      "Definitely. You will receive organized source files, design systems, assets, and developer-ready documentation for seamless implementation.",
  },
  {
    id: 8,
    question: "Do you provide long-term support?",
    answer:
      "We provide flexible pricing models tailored to startups, growing businesses, and enterprises. Our goal is to deliver high-quality design solutions that offer real ROI.",
  },
];

export default function UiuxQa() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="qa-section">
      {/* ── Title ── */}
      <h2 className="qa-title">What You'll Get With Our UI/UX Services</h2>

      {/* ── Body ── */}
      <div className="qa-body">

        {/* Left: sticky image */}
        <div className="qa-image-wrap">
          <img src={qaImage} alt="UI/UX Services" className="qa-image" />
        </div>

        {/* Right: FAQ accordion */}
        <div className="qa-list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`qa-item${isOpen ? " qa-item--open" : ""}`}
              >
                <button
                  className="qa-question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="qa-question-text">
                    {faq.id}. {faq.question}
                  </span>
                  <span className="qa-icon">
                    {isOpen ? (
                      /* Red cross */
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <circle cx="11" cy="11" r="11" fill="#e53e3e" />
                        <line x1="7" y1="7" x2="15" y2="15" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        <line x1="15" y1="7" x2="7" y2="15" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      /* Blue plus */
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <circle cx="11" cy="11" r="11" fill="#1a4fa0" />
                        <line x1="11" y1="6" x2="11" y2="16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        <line x1="6" y1="11" x2="16" y2="11" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Smooth slide-down answer using grid-template-rows trick */}
                <div className={`qa-answer-wrap${isOpen ? " qa-answer-wrap--open" : ""}`}>
                  <div className="qa-answer-inner">
                    <p className="qa-answer">{faq.answer}</p>
                  </div>
                </div>

                <div className="qa-divider" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}