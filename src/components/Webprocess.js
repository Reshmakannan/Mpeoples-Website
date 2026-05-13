import React, { useState, useEffect, useRef } from "react";
import "../Style/Webprocess.css";
import trapLeft from "../assets/left-corner.png";
import trapRight from "../assets/right-corner.png";

import icon1 from "../assets/projects-icon.png";
import icon2 from "../assets/clients-icon.png";
import icon3 from "../assets/experience-icon.png";
import icon4 from "../assets/team-icon.png";

const stats = [
  { icon: icon1, value: "250+", label: "Projects" },
  { icon: icon2, value: "50+",  label: "Satisfied Clients" },
  { icon: icon3, value: "6+",   label: "Industry Experience" },
  { icon: icon4, value: "20+",  label: "Development People's" },
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

const Webprocess = () => {
  const [current, setCurrent] = useState(0);
  const currentRef    = useRef(0);
  const isAnimating   = useRef(false);
  const outerRef      = useRef(null);
  const lockedRef     = useRef(false);
  const savedScrollY  = useRef(0);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    const section = outerRef.current;
    if (!section) return;

    const isSectionFullyVisible = () => {
      const rect = section.getBoundingClientRect();
      return (
        rect.top    >= -2 && rect.top    <= 2 &&
        rect.bottom >= window.innerHeight - 2 &&
        rect.bottom <= window.innerHeight + 2
      );
    };

    const lockPage = () => {
      if (lockedRef.current) return;
      lockedRef.current    = true;
      savedScrollY.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top      = `-${savedScrollY.current}px`;
      document.body.style.left     = "0";
      document.body.style.width    = "100%";
    };

    const unlockAndScrollTo = (targetY) => {
      if (!lockedRef.current) return;
      lockedRef.current = false;
      document.body.style.position = "";
      document.body.style.top      = "";
      document.body.style.left     = "";
      document.body.style.width    = "";
      window.scrollTo({ top: savedScrollY.current, behavior: "instant" });
      requestAnimationFrame(() => {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      });
    };

    const handleWheel = (e) => {
      // ── NOT locked yet ──────────────────────────────────────────
      if (!lockedRef.current) {
        // Only care if THIS section is fully visible
        if (!isSectionFullyVisible()) return;
        // First wheel on fully-visible section → lock, don't slide yet
        e.preventDefault();
        e.stopPropagation();
        lockPage();
        return;
      }

      // ── Locked: this section owns the scroll ────────────────────
      e.preventDefault();
      e.stopPropagation();

      if (isAnimating.current) return;

      const cur       = currentRef.current;
      const goingDown = e.deltaY > 0;
      const goingUp   = e.deltaY < 0;

      // Exit up from slide 0
      if (goingUp && cur === 0) {
        isAnimating.current = true;
        unlockAndScrollTo(savedScrollY.current - window.innerHeight);
        setTimeout(() => { isAnimating.current = false; }, 1000);
        return;
      }

      // Exit down from last slide
      if (goingDown && cur === TOTAL - 1) {
        isAnimating.current = true;
        unlockAndScrollTo(savedScrollY.current + window.innerHeight);
        setTimeout(() => { isAnimating.current = false; }, 1000);
        return;
      }

      // Slide horizontally
      isAnimating.current = true;
      setCurrent((prev) => {
        const next = goingDown
          ? Math.min(prev + 1, TOTAL - 1)
          : Math.max(prev - 1, 0);
        currentRef.current = next;
        return next;
      });
      setTimeout(() => { isAnimating.current = false; }, 950);
    };

    // ── Touch ───────────────────────────────────────────────────────
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!lockedRef.current) return;
      e.preventDefault();

      const deltaY    = touchStartY - e.touches[0].clientY;
      if (Math.abs(deltaY) < 30) return;

      if (isAnimating.current) return;

      const cur       = currentRef.current;
      const goingDown = deltaY > 0;
      const goingUp   = deltaY < 0;

      if (goingUp && cur === 0) {
        unlockAndScrollTo(savedScrollY.current - window.innerHeight);
        return;
      }
      if (goingDown && cur === TOTAL - 1) {
        unlockAndScrollTo(savedScrollY.current + window.innerHeight);
        return;
      }

      isAnimating.current = true;
      setCurrent((prev) => {
        const next = goingDown
          ? Math.min(prev + 1, TOTAL - 1)
          : Math.max(prev - 1, 0);
        currentRef.current = next;
        return next;
      });
      touchStartY = e.touches[0].clientY;
      setTimeout(() => { isAnimating.current = false; }, 950);
    };

    // Use capture phase so this fires before other listeners
    window.addEventListener("wheel",      handleWheel,      { passive: false, capture: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove",  handleTouchMove,  { passive: false });

    return () => {
      window.removeEventListener("wheel",      handleWheel,      { capture: true });
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove",  handleTouchMove);
      document.body.style.position = "";
      document.body.style.top      = "";
      document.body.style.left     = "";
      document.body.style.width    = "";
    };
  }, []);

  return (
    <div className="wp-outer" ref={outerRef}>
      <div
        className="wp-track"
        style={{ transform: `translateX(-${current * (100 / TOTAL)}%)` }}
      >
        {slides.map((slide, i) =>
          slide.isStats ? (

            <section key={i} className="wp-section wp-slide-7">
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
                        <img src={stat.icon} alt={stat.label} className="wp-stat-icon" />
                      </div>
                      <div className="wp-stat-value">{stat.value}</div>
                      <div className="wp-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="wp-stats-cta">
                  <p className="wp-cta-text">Start Your Digital Transformation With Us</p>
                  <button className="wp-cta-btn">Connect With Us</button>
                </div>
              </div>
            </section>

          ) : (

            <section key={i} className={`wp-section ${slide.slideClass}`}>
              <img src={trapLeft} alt="" className="wp-corner-left" />
              <img src={trapRight} alt="" className="wp-corner-right" />

              <div className="wp-container">
                <div className="wp-header">
                  <div className="wp-title">
                    <h1>Our Process from <br /> Design to Launch</h1>
                  </div>
                  <div className="wp-subtext">
                    <p>
                      We infuse your essence into every pixel, seamlessly
                      integrating technology to elevate your digital presence.
                    </p>
                  </div>
                </div>

                <div className="wp-divider"></div>

                <div className="wp-content">
                  <div className="wp-left">
                    <span className="wp-step-label">{slide.step}</span>
                    <h2 className="wp-step-heading">{slide.heading}</h2>
                    <p className="wp-step-desc">{slide.desc}</p>
                  </div>

                  <div className="wp-right">
                    <div className="wp-block">
                      <h3 className="wp-block-title">Client Benefits</h3>
                      <ul className="wp-block-list">
                        {slide.benefits.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="wp-small-divider"></div>

                    <div className="wp-block">
                      <h3 className="wp-block-title">Our Approach</h3>
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
          )
        )}
      </div>
    </div>
  );
};

export default Webprocess;