import React, { useState, useEffect, useRef, useCallback } from "react";
import "../Style/Webprocess.css";
import trapLeft from "../assets/left-corner.png";
import trapRight from "../assets/right-corner.png";

import icon1 from "../assets/projects-icon.png";
import icon2 from "../assets/clients-icon.png";
import icon3 from "../assets/experience-icon.png";
import icon4 from "../assets/team-icon.png";

const stats = [
  { icon: icon1, value: 250, suffix: "+", label: "Projects" },
  { icon: icon2, value: 50,  suffix: "+", label: "Satisfied Clients" },
  { icon: icon3, value: 6,   suffix: "+", label: "Industry Experience" },
  { icon: icon4, value: 20,  suffix: "+", label: "Development People's" },
];

const slides = [
  {
    slideClass: "wp-slide-1",
    step: "Step-1",
    heading: "Domain & Website Setup",
    desc: "We begin by registering your domain and setting up the foundation for your website to ensure a strong digital presence.",
    benefits: ["Professional domain registration", "Secure hosting setup", "Reliable website foundation"],
    approach: ["Brand-focused domain selection", "Proper DNS & server configuration", "Secure and scalable setup"],
  },
  {
    slideClass: "wp-slide-2",
    step: "Step-2",
    heading: "Strategy & Planning",
    desc: "We analyze your business goals and create a clear website strategy that aligns with your brand and target audience.",
    benefits: ["Clear website roadmap", "Target audience focused planning", "Strong brand positioning"],
    approach: ["Business and competitor analysis", "Goal-oriented website planning", "Scalable digital strategy"],
  },
  {
    slideClass: "wp-slide-3",
    step: "Step-3",
    heading: "UX & UI Design",
    desc: "Our team designs intuitive user experiences and visually engaging interfaces to ensure your website stands out.",
    benefits: ["Attractive website design", "Easy navigation for visitors", "Better user engagement"],
    approach: ["User-cantered design process", "Modern and responsive layouts", "Brand-consistent visuals"],
  },
  {
    slideClass: "wp-slide-4",
    step: "Step-4",
    heading: "Development & Testing",
    desc: "We convert designs into a fully functional website using modern technologies and conduct thorough testing for performance and reliability.",
    benefits: ["Fast and responsive website", "Secure and stable functionality", "Smooth user experience"],
    approach: ["Clean and scalable code", "Performance optimization", "Multi-device testing"],
  },
  {
    slideClass: "wp-slide-5",
    step: "Step-5",
    heading: "Launch & Hosting",
    desc: "Once approved, we deploy the website with secure hosting so it is accessible to users worldwide.",
    benefits: ["Reliable website launch", "Secure hosting environment", "Global accessibility"],
    approach: ["Safe deployment process", "Server optimization", "Performance monitoring"],
  },
  {
    slideClass: "wp-slide-6",
    step: "Step-6",
    heading: "Maintenance & Support",
    desc: "After launch, we provide continuous maintenance, updates, and technical support to keep your website running smoothly.",
    benefits: ["Regular updates and fixes", "Improved security", "Continuous website performance"],
    approach: ["Proactive maintenance", "Security monitoring", "Long-term technical support"],
  },
  {
    slideClass: "wp-slide-7",
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
  const [current, setCurrent]   = useState(0);
  const [animDir, setAnimDir]   = useState(null);
  const [exiting, setExiting]   = useState(false);

  const isAnimating             = useRef(false);
  const exitingIndex            = useRef(null);

  const goTo = useCallback((nextIndex, direction) => {
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
  }, [current]);

  const goNext = useCallback(() => {
    if (current < TOTAL - 1) goTo(current + 1, "next");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    if (current > 0) goTo(current - 1, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   goPrev();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const getSlideClass = (i) => {
    const classes = ["wp-section", slides[i].slideClass];

    if (i === current && !exiting) {
      classes.push(animDir ? `wp-enter-${animDir}` : "wp-visible");
    }

    if (exiting && i === exitingIndex.current) {
      classes.push(`wp-exit-${animDir}`);
    }

    return classes.join(" ");
  };

  return (
    <div className="wp-outer">

      {/* Slides */}
      <div className="wp-stage">
        {slides.map((slide, i) => {

          const isVisible = i === current;
          const isExit = exiting && i === exitingIndex.current;

          if (!isVisible && !isExit) return null;

          return slide.isStats ? (

            /* =========================
               LAST STATS SLIDE
            ========================= */
            <section key={i} className={getSlideClass(i)}>

              <img src={trapLeft} alt="" className="wp-corner-left" />
              <img src={trapRight} alt="" className="wp-corner-right" />

              <div className="wp-stats-container">

                <h2 className="wp-stats-heading">
                  Interesting Facts And Figures Of Our Success
                </h2>

                <div className="wp-stats-grid">
                  {stats.map((stat, j) => (
                    <div key={j} className="wp-stat-item">

                      <div className="wp-stat-circle">
                        <img
                          src={stat.icon}
                          alt={stat.label}
                          className="wp-stat-icon"
                        />
                      </div>

                      {/* 🔥 COUNTING NUMBER */}
                      <div className="wp-stat-value">
                        {current === TOTAL - 1 && (
                          <CountUp
                            end={stat.value}
                            suffix={stat.suffix}
                          />
                        )}
                      </div>

                      <div className="wp-stat-label">
                        {stat.label}
                      </div>

                    </div>
                  ))}
                </div>

                <div className="wp-stats-cta">
                  <p className="wp-cta-text">
                    Start Your Digital Transformation With Us
                  </p>

                  <button className="wp-cta-btn">
                    Connect With Us
                  </button>
                </div>

              </div>
            </section>

          ) : (

            /* =========================
               NORMAL SLIDES
            ========================= */
            <section key={i} className={getSlideClass(i)}>

              <img src={trapLeft} alt="" className="wp-corner-left" />
              <img src={trapRight} alt="" className="wp-corner-right" />

              <div className="wp-container">

                <div className="wp-header">

                  <div className="wp-title">
                    <h1>
                      Our Process from <br />
                      Design to Launch
                    </h1>
                  </div>

                  <div className="wp-subtext">
                    <p>
                      We infuse your essence into every pixel,
                      seamlessly integrating technology to elevate
                      your digital presence.
                    </p>
                  </div>

                </div>

                <div className="wp-divider"></div>

                <div className="wp-content">

                  <div className="wp-left">

                    <span className="wp-step-label">
                      {slide.step}
                    </span>

                    <h2 className="wp-step-heading">
                      {slide.heading}
                    </h2>

                    <p className="wp-step-desc">
                      {slide.desc}
                    </p>

                  </div>

                  <div className="wp-right">

                    <div className="wp-block">

                      <h3 className="wp-block-title">
                        Client Benefits
                      </h3>

                      <ul className="wp-block-list">
                        {slide.benefits.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>

                    </div>

                    <div className="wp-small-divider"></div>

                    <div className="wp-block">

                      <h3 className="wp-block-title">
                        Our Approach
                      </h3>

                      <ul className="wp-block-list">
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
        className="wp-nav-prev"
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
        className="wp-nav-next"
        onClick={goNext}
        disabled={current === TOTAL - 1}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* DOTS */}
      <div className="wp-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`wp-dot${i === current ? " wp-dot-active" : ""}`}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* COUNTER */}
      <div className="wp-slide-counter">
        {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
      </div>

    </div>
  );
};

export default Webprocess;