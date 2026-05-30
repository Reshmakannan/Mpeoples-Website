import React, { useState, useEffect, useRef, useCallback } from "react";
import "../Style/Dmprocess.css";
import trapLeft from "../assets/left-corner.png";
import trapRight from "../assets/right-corner.png";

import icon1 from "../assets/projects-icon.png";
import icon2 from "../assets/clients-icon.png";
import icon3 from "../assets/experience-icon.png";
import icon4 from "../assets/team-icon.png";

const stats = [
  { icon: icon1, value: 250, suffix: "+", label: "Projects" },
  { icon: icon2, value: 50, suffix: "+", label: "Satisfied Clients" },
  { icon: icon3, value: 6, suffix: "+", label: "Industry Experience" },
  { icon: icon4, value: 20, suffix: "+", label: "Development People's" },
];

const slides = [
  {
    slideClass: "Dm-slide-1",
    step: "Step-1",
    heading: "Understanding Your Business Needs",
    desc: "We analyze your business goals, audience, and competitors to identify the best opportunities for online growth.",
    benefits: [
      "Clear understanding of business goals",
      "Better targeting of the right audience",
      "Strategic planning for long-term growth",
    ],
    approach: [
      "Business & market research",
      "Competitor analysis",
      "Audience behavior study",
    ],
  },
  {
    slideClass: "Dm-slide-2",
    step: "Step-2",
    heading: "Customized Strategy Development",
    desc: "Based on insights, we create a tailored digital marketing strategy that aligns with your business objectives and maximizes return on investment.",
    benefits: [
      "Personalized marketing strategy",
      "Higher ROI from campaigns",
      "Better brand positioning",
    ],
    approach: [
      "Digital marketing roadmap",
      "Channel selection (SEO, PPC, Social Media)",
      "Campaign planning and goal setting",
    ],
  },
  {
    slideClass: "Dm-slide-3",
    step: "Step-3",
    heading: "Website and SEO Optimization",
    desc: "We optimize your website to improve performance, user experience, and search engine rankings on platforms like Google.",
    benefits: [
      "Higher search rankings",
      "Increased website traffic",
      "Better user experience",
    ],
    approach: [
      "Website performance optimization",
      "On-page and technical SEO",
      "Landing page improvements",
    ],
  },
  {
    slideClass: "Dm-slide-4",
    step: "Step-4",
    heading: "Development & TestingContent and Social Media Marketing",
    desc: "We create engaging content and social media campaigns on Instagram and Facebook to boost brand awareness and audience engagement.",
    benefits: [
      "Strong brand visibility",
      "Increased audience engagement",
      "More potential leads",
    ],
    approach: [
      "Content creation strategy",
      "Social media campaign management",
      "Audience interaction and growth",
    ],
  },
  {
    slideClass: "Dm-slide-5",
    step: "Step-5",
    heading: "Data-Driven Refinement",
    desc: "We continuously monitor and optimize marketing campaigns using analytics tools like Google Analytics to improve performance and ROI.",
    benefits: [
      "Continuous campaign improvement",
      "Better marketing performance",
      "Measurable business growth",
    ],
    approach: [
      "Campaign performance tracking",
      "Data analysis and reporting",
      "Strategy optimization",
    ],
  },
  //   {
  //     slideClass: "Dm-slide-6",
  //     step: "Step-6",
  //     heading: "Maintenance & Support",
  //     desc: "After launch, we provide continuous maintenance, updates, and technical support to keep your website running smoothly.",
  //     benefits: ["Regular updates and fixes", "Improved security", "Continuous website performance"],
  //     approach: ["Proactive maintenance", "Security monitoring", "Long-term technical support"],
  //   },
  {
    slideClass: "Dm-slide-7",
    isStats: true,
  },
];

const TOTAL = slides.length;

/* =========================
   COUNT UP COMPONENT
========================= */
const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Webprocess = () => {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState(null);
  const [exiting, setExiting] = useState(false);

  const isAnimating = useRef(false);
  const exitingIndex = useRef(null);

  const goTo = useCallback(
    (nextIndex, direction) => {
      if (isAnimating.current) return;
      if (nextIndex === current) return;

      isAnimating.current = true;
      exitingIndex.current = current;
      setAnimDir(direction);
      setExiting(true);

      setTimeout(() => {
        setExiting(false);
        setCurrent(nextIndex);
        exitingIndex.current = null;

        setTimeout(() => {
          isAnimating.current = false;
          setAnimDir(null);
        }, 700);
      }, 420);
    },
    [current],
  );

  const goNext = useCallback(() => {
    if (current < TOTAL - 1) goTo(current + 1, "next");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    if (current > 0) goTo(current - 1, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const getSlideClass = (i) => {
    const classes = ["Dm-section", slides[i].slideClass];

    if (i === current && !exiting) {
      classes.push(animDir ? `Dm-enter-${animDir}` : "Dm-visible");
    }

    if (exiting && i === exitingIndex.current) {
      classes.push(`Dm-exit-${animDir}`);
    }

    return classes.join(" ");
  };

  return (
    <div className="Dm-outer">
      {/* Slides */}
      <div className="Dm-stage">
        {slides.map((slide, i) => {
          const isVisible = i === current;
          const isExit = exiting && i === exitingIndex.current;

          if (!isVisible && !isExit) return null;

          return slide.isStats ? (
            /* =========================
               LAST STATS SLIDE
            ========================= */
            <section key={i} className={getSlideClass(i)}>
              <img src={trapLeft} alt="" className="Dm-corner-left" />
              <img src={trapRight} alt="" className="Dm-corner-right" />

              <div className="Dm-stats-container">
                <h2 className="Dm-stats-heading">
                  Interesting Facts And Figures Of Our Success
                </h2>

                <div className="Dm-stats-grid">
                  {stats.map((stat, j) => (
                    <div key={j} className="Dm-stat-item">
                      <div className="Dm-stat-circle">
                        <img
                          src={stat.icon}
                          alt={stat.label}
                          className="Dm-stat-icon"
                        />
                      </div>

                      {/* 🔥 COUNTING NUMBER */}
                      <div className="Dm-stat-value">
                        {current === TOTAL - 1 && (
                          <CountUp end={stat.value} suffix={stat.suffix} />
                        )}
                      </div>

                      <div className="Dm-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="Dm-stats-cta">
                  <p className="Dm-cta-text">
                    Start Your Digital Transformation With Us
                  </p>

                  <button className="Dm-cta-btn">Connect With Us</button>
                </div>
              </div>
            </section>
          ) : (
            /* =========================
               NORMAL SLIDES
            ========================= */
            <section key={i} className={getSlideClass(i)}>
              <img src={trapLeft} alt="" className="Dm-corner-left" />
              <img src={trapRight} alt="" className="Dm-corner-right" />

              <div className="Dm-container">
                <div className="Dm-header">
                  <div className="Dm-title">
                    <h1>
                      Digital <br />
                      Marketing Process
                    </h1>
                  </div>

                  <div className="Dm-subtext">
                    <p>
                      We use smart digital marketing strategies to reach the
                      right audience and grow your brand online.
                    </p>
                  </div>
                </div>

                <div className="Dm-divider"></div>

                <div className="Dm-content">
                  <div className="Dm-left">
                    <span className="Dm-step-label">{slide.step}</span>

                    <h2 className="Dm-step-heading">{slide.heading}</h2>

                    <p className="Dm-step-desc">{slide.desc}</p>
                  </div>

                  <div className="Dm-right">
                    <div className="Dm-block">
                      <h3 className="Dm-block-title">Client Benefits</h3>

                      <ul className="Dm-block-list">
                        {slide.benefits.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="Dm-small-divider"></div>

                    <div className="Dm-block">
                      <h3 className="Dm-block-title">Our Approach</h3>

                      <ul className="Dm-block-list">
                        {slide.approach.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* PREV BUTTON */}
      <button
        className="Dm-nav-prev"
        onClick={goPrev}
        disabled={current === 0}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* NEXT BUTTON */}
      <button
        className="Dm-nav-next"
        onClick={goNext}
        disabled={current === TOTAL - 1}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* DOTS */}
      <div className="Dm-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`Dm-dot${i === current ? " Dm-dot-active" : ""}`}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* COUNTER */}
      <div className="Dm-slide-counter">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(TOTAL).padStart(2, "0")}
      </div>
    </div>
  );
};

export default Webprocess;
