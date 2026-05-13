import React, { useEffect, useRef, useCallback } from "react";
import "../Style/Whychoose.css";

import craftedIcon from "../assets/crafted.png";
import structuredIcon from "../assets/structured.png";
import codingIcon from "../assets/coding.png";
import protectionIcon from "../assets/protection.png";
import teamIcon from "../assets/team.png";
import resultIcon from "../assets/result.png";
import supportIcon from "../assets/support.png";
import maintenanceIcon from "../assets/maintenance.png";
import deliveryIcon from "../assets/delivery.png";
import satisfactionIcon from "../assets/satisfaction.png";
import whyIllustration from "../assets/Why_03.png";
import commitmentIcon from "../assets/commitment.png";
import excellenceIcon from "../assets/excellence.png";
import passionIcon from "../assets/passion.png";
import teamworkIcon from "../assets/teamwork.png";
import priorityIcon from "../assets/priority.png";
import arrowIcon from "../assets/arrow.png";

const SLIDE_COUNT = 5;

const features = [
  { icon: craftedIcon,      title: "Crafted Design",           desc: "Visually engrossing designs that captivate audiences" },
  { icon: structuredIcon,   title: "Structured Web Framework", desc: "Scalable architecture for seamless growth" },
  { icon: codingIcon,       title: "Secure Coding Techniques", desc: "Robust defense against cyber threats" },
  { icon: protectionIcon,   title: "Advanced Web Protection",  desc: "Cutting-edge security measures for safety" },
  { icon: teamIcon,         title: "Dedicated Team",           desc: "Experts committed to client success" },
  { icon: resultIcon,       title: "Result-Oriented Approach", desc: "Strategies for achieving desired outcomes" },
  { icon: supportIcon,      title: "24/7 Email Support",       desc: "Round-the-clock assistance for client convenience" },
  { icon: maintenanceIcon,  title: "Maintenance Support",      desc: "Reliable upkeep for website performance" },
  { icon: deliveryIcon,     title: "On-time Delivery",         desc: "Timely completion of web projects" },
  { icon: satisfactionIcon, title: "100% Client Satisfaction", desc: "Client fulfillment by exceeding expectations" },
];

const stats = [
  { percent: "88%", desc: "Of consumers trust a business more after visiting a professional website" },
  { percent: "91%", desc: "Check a company's website before making a purchase decision" },
  { percent: "67%", desc: "Are more likely to buy from mobile-optimized websites" },
  { percent: "53%", desc: "Leave a site if it takes longer than 3 seconds to load" },
  { percent: "78%", desc: "Judge business credibility based on website design" },
  { percent: "84%", desc: "Expect businesses to have an online presence in 2025" },
];

const values = [
  { icon: commitmentIcon, title: "Commitment", desc: "We don't stop until we reach our goals." },
  { icon: excellenceIcon, title: "Excellence",  desc: "We don't settle for less, as we have set our standards high." },
  { icon: passionIcon,    title: "Passion",     desc: "We go beyond our comfort-zone to develop tools that promise enhanced customer empowerment." },
  { icon: teamworkIcon,   title: "Teamwork",    desc: "We operate in an inclusive work environment with a diverse pool of talent." },
  { icon: priorityIcon,   title: "Priority",    desc: "Customers are our top priority. Customer satisfaction is our goal." },
];

const WhyChoose = () => {
  const outerRef      = useRef(null);
  const trackRef      = useRef(null);
  const offsetRef     = useRef(0);
  const activeRef     = useRef(false);
  const completedRef  = useRef(false);
  const savedScrollY  = useRef(0);

  // ── Lock page scroll ────────────────────────────────────────────
  const lockPage = useCallback(() => {
    const sectionTop = outerRef.current
      ? window.scrollY + outerRef.current.getBoundingClientRect().top
      : window.scrollY;

    window.scrollTo({ top: sectionTop, behavior: "instant" });
    savedScrollY.current = sectionTop;

    document.body.style.overflow  = "hidden";
    document.body.style.position  = "fixed";
    document.body.style.top       = `-${sectionTop}px`;
    document.body.style.width     = "100%";
  }, []);

  // ── Unlock page scroll and continue downward ────────────────────
  const unlockPage = useCallback(() => {
    const scrollY = savedScrollY.current;

    document.body.style.overflow  = "";
    document.body.style.position  = "";
    document.body.style.top       = "";
    document.body.style.width     = "";

    window.scrollTo(0, scrollY);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      });
    });
  }, []);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const MAX            = (SLIDE_COUNT - 1) * 100;
    const SPEED          = 0.12;
    const SNAP_THRESHOLD = 4;

    const applyOffset = (delta) => {
      const next = Math.max(0, Math.min(MAX, offsetRef.current + delta));
      offsetRef.current = next;
      track.style.transform = `translateX(-${next}vw)`;
      return next;
    };

    // ── Page scroll listener ────────────────────────────────────────
    const onPageScroll = () => {
      const rect = outer.getBoundingClientRect();
      const fullyInView = rect.top <= SNAP_THRESHOLD && rect.top >= -SNAP_THRESHOLD;

      if (fullyInView && !activeRef.current) {
        activeRef.current    = true;
        completedRef.current = false;
        lockPage();
      }

      if (rect.top > SNAP_THRESHOLD && activeRef.current) {
        activeRef.current = false;
      }
    };

    window.addEventListener("scroll", onPageScroll, { passive: true });

    // ── Wheel ───────────────────────────────────────────────────────
    const onWheel = (e) => {
      // If not yet active, check on the fly (handles post-lock state)
      if (!activeRef.current) {
        const rect = outer.getBoundingClientRect();
        const fullyInView = rect.top <= SNAP_THRESHOLD && rect.top >= -SNAP_THRESHOLD;
        if (fullyInView) {
          activeRef.current    = true;
          completedRef.current = false;
          lockPage();
        } else {
          return;
        }
      }

      const atStart = offsetRef.current <= 0;
      const atEnd   = offsetRef.current >= MAX;

      if (e.deltaY > 0 && atEnd) {
        if (!completedRef.current) {
          completedRef.current = true;
          activeRef.current    = false;
          unlockPage();
        }
        return;
      }

      if (e.deltaY < 0 && atStart) {
        activeRef.current = false;
        document.body.style.overflow  = "";
        document.body.style.position  = "";
        document.body.style.top       = "";
        document.body.style.width     = "";
        window.scrollTo(0, savedScrollY.current);
        return;
      }

      e.preventDefault();
      applyOffset(e.deltaY * SPEED);
    };

    // ── Touch ───────────────────────────────────────────────────────
    let touchStartY = 0;

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (!activeRef.current) {
        const rect = outer.getBoundingClientRect();
        const fullyInView = rect.top <= SNAP_THRESHOLD && rect.top >= -SNAP_THRESHOLD;
        if (fullyInView) {
          activeRef.current    = true;
          completedRef.current = false;
          lockPage();
        } else {
          return;
        }
      }

      const dy    = touchStartY - e.touches[0].clientY;
      const atEnd = offsetRef.current >= MAX;

      if (dy > 0 && atEnd) {
        if (!completedRef.current) {
          completedRef.current = true;
          activeRef.current    = false;
          unlockPage();
        }
        return;
      }

      if (dy < 0 && offsetRef.current <= 0) {
        activeRef.current = false;
        document.body.style.overflow  = "";
        document.body.style.position  = "";
        document.body.style.top       = "";
        document.body.style.width     = "";
        window.scrollTo(0, savedScrollY.current);
        return;
      }

      e.preventDefault();
      touchStartY = e.touches[0].clientY;
      applyOffset(dy * SPEED * 10);
    };

    window.addEventListener("wheel",      onWheel,      { passive: false });
    outer.addEventListener("touchstart",  onTouchStart, { passive: true  });
    outer.addEventListener("touchmove",   onTouchMove,  { passive: false });

    return () => {
      window.removeEventListener("scroll", onPageScroll);
      window.removeEventListener("wheel",  onWheel);
      outer.removeEventListener("touchstart", onTouchStart);
      outer.removeEventListener("touchmove",  onTouchMove);

      // Safety: always clean up body lock on unmount
      document.body.style.overflow  = "";
      document.body.style.position  = "";
      document.body.style.top       = "";
      document.body.style.width     = "";
    };
  }, [lockPage, unlockPage]);

  return (
    <div className="why-outer" ref={outerRef}>
      <div className="why-sticky">
        <div className="why-track" ref={trackRef}>

          {/* Slide 1 */}
          <section className="why-slide why-section">
            <div className="why-content">
              <h1 className="why-small">Why</h1>
              <h1 className="why-big">choose MPeoples?</h1>
            </div>
          </section>

          {/* Slide 2 */}
          <section className="why-slide features-section">
            <div className="features-grid">
              {features.map((f, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-icon-box">
                    <img src={f.icon} alt={f.title} className="feature-icon" />
                  </div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Slide 3 */}
          <section className="why-slide stats-section">
            <div className="stats-inner">
              <h2 className="stats-heading">Why Does Your Business Need a Website in 2026?</h2>
              <div className="stats-body">
                <div className="stats-grid">
                  {stats.map((s, i) => (
                    <div className="stat-card" key={i}>
                      <span className="stat-percent">{s.percent}</span>
                      <p className="stat-desc">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="stats-illustration">
                  <img src={whyIllustration} alt="illustration" />
                </div>
              </div>
            </div>
          </section>

          {/* Slide 4 */}
          <section className="why-slide values-section">
            <div className="values-inner">
              <p className="values-label">WHAT WE BELIEVE IN?</p>
              <h2 className="values-heading">Our values that inspire us to push forward everyday.</h2>
              <div className="values-row-top">
                {values.slice(0, 3).map((v, i) => (
                  <div className="value-card" key={i}>
                    <img src={v.icon} alt={v.title} className="value-icon" />
                    <h3 className="value-title">{v.title}</h3>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                ))}
              </div>
              <div className="values-row-bottom">
                {values.slice(3).map((v, i) => (
                  <div className="value-card" key={i}>
                    <img src={v.icon} alt={v.title} className="value-icon" />
                    <h3 className="value-title">{v.title}</h3>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Slide 5 */}
          <section className="why-slide cta-section">
            <div className="cta-inner">
              <p className="cta-label">Have a project in mind?</p>
              <h2 className="cta-heading">Let's make something<br />great together!</h2>
              <button className="cta-btn">
                <img src={arrowIcon} alt="arrow" className="cta-arrow" />
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default WhyChoose;