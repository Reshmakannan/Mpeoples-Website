import React, { useState, useEffect, useRef } from "react";
import "../Style/Servicessection.css";

import uiuxLogo    from "../assets/uiux logo.png";
import webLogo     from "../assets/web logo.png";
import appLogo     from "../assets/app logo.png";
import saasLogo    from "../assets/saas logo.png";
import mktLogo     from "../assets/digital logo.png";
import graphicLogo from "../assets/graphic logo.png";
import videoLogo   from "../assets/video logo.png";

import uiuxImg    from "../assets/uiux (2).png";
import webImg     from "../assets/web.png";
import appImg     from "../assets/app.png";
import saasImg    from "../assets/app.png";
import mktImg     from "../assets/web.png";
import graphicImg from "../assets/app.png";
import videoImg   from "../assets/web.png";

import arrowIcon from "../assets/arrow.png";

const services = [
  {
    label: "UI/UX Design",
    logo: uiuxLogo,
    image: uiuxImg,
    desc1: "We design experiences that feel simple, intuitive, and human — while solving real business problems.",
    desc2: "From research to refined interfaces, we turn complex ideas into seamless digital journeys.",
    desc3: "Every interaction is crafted with purpose, clarity, and measurable impact.",
    tags: [
      { label: "User Research",     cls: "rs-tag1" },
      { label: "Wireframes",        cls: "rs-tag2" },
      { label: "UI Design",         cls: "rs-tag3" },
      { label: "Prototyping",       cls: "rs-tag4" },
      { label: "Usability Testing", cls: "rs-tag5" },
    ],
  },
  {
    label: "Web Development",
    logo: webLogo,
    image: webImg,
    desc1: "Fast, responsive websites built for performance, security, and scalability.",
    desc2: "From pixel-perfect design to rock solid code, our websites are optimized for speed, security, and long-term scalability.",
    desc3: "",
    tags: [
      { label: "Responsive Design", cls: "rs-tag1" },
      { label: "Clean Code",        cls: "rs-tag2" },
      { label: "SEO-Friendly",      cls: "rs-tag3" },
      { label: "High Performance",  cls: "rs-tag4" },
    ],
  },
  {
    label: "App Development",
    logo: appLogo,
    image: appImg,
    desc1: "Mobile apps designed for smooth experiences and long-term growth.",
    desc2: "We build reliable mobile solutions that adapt seamlessly across devices while supporting your business as it grows.",
    desc3: "",
    tags: [
      { label: "Android",         cls: "rs-tag1" },
      { label: "iOS",             cls: "rs-tag2" },
      { label: "Cross Platform",  cls: "rs-tag3" },
      { label: "API Integration", cls: "rs-tag4" },
    ],
  },
  {
    label: "SaaS Development",
    logo: saasLogo,
    image: saasImg,
    desc1: "End-to-end SaaS products built for scale — from architecture to launch and beyond.",
    desc2: "We craft multi-tenant platforms, subscription systems, and dashboards your users will love.",
    desc3: "Reliable, secure, and designed to grow with your customer base.",
    tags: [
      { label: "Multi-Tenant",   cls: "rs-tag1" },
      { label: "Subscriptions",  cls: "rs-tag2" },
      { label: "Dashboards",     cls: "rs-tag3" },
      { label: "Auth & Billing", cls: "rs-tag4" },
    ],
  },
  {
    label: "Digital Marketing",
    logo: mktLogo,
    image: mktImg,
    desc1: "Data-driven digital marketing strategies that grow your brand and bring qualified leads.",
    desc2: "From SEO to paid ads, we manage your full funnel with precision targeting and analytics.",
    desc3: "Every campaign is optimised for ROI — not just clicks.",
    tags: [
      { label: "SEO",        cls: "rs-tag1" },
      { label: "Google Ads", cls: "rs-tag2" },
      { label: "Social Ads", cls: "rs-tag3" },
      { label: "Analytics",  cls: "rs-tag4" },
    ],
  },
  {
    label: "Graphic Design",
    logo: graphicLogo,
    image: graphicImg,
    desc1: "Visual designs that communicate clearly and strengthen brand identity across every touchpoint.",
    desc2: "Logos, branding kits, social assets, print — crafted with purpose and creative direction.",
    desc3: "We make brands look as good as they perform.",
    tags: [
      { label: "Branding",      cls: "rs-tag1" },
      { label: "Logo Design",   cls: "rs-tag2" },
      { label: "Social Media",  cls: "rs-tag3" },
      { label: "Illustrations", cls: "rs-tag4" },
    ],
  },
  {
    label: "Video Editing & Production",
    logo: videoLogo,
    image: videoImg,
    desc1: "Professional video editing and production that tells your brand story with impact and clarity.",
    desc2: "From short-form reels to full brand films — editing, motion, colour, and sound.",
    desc3: "Content that stops the scroll and keeps people watching.",
    tags: [
      { label: "Reels / Shorts",  cls: "rs-tag1" },
      { label: "Brand Films",     cls: "rs-tag2" },
      { label: "Motion Graphics", cls: "rs-tag3" },
      { label: "Color Grading",   cls: "rs-tag4" },
    ],
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set([0]));
  const rightRef = useRef(null);
  const cardRefs = useRef([]);

  // Track which card is in view → highlight left label
  useEffect(() => {
    const container = rightRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      let closest = 0;
      let minDist = Infinity;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardTop = card.offsetTop - container.offsetTop;
        const dist = Math.abs(scrollTop - cardTop + containerHeight * 0.1);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      setActiveIndex(closest);

      // Mark next card as visible so its animation triggers
      setVisibleCards((prev) => {
        const next = new Set(prev);
        next.add(closest);
        if (closest + 1 < services.length) next.add(closest + 1);
        return next;
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Click left label → smooth scroll to that card
  const scrollToCard = (i) => {
    const container = rightRef.current;
    const card = cardRefs.current[i];
    if (!container || !card) return;
    container.scrollTo({
      top: card.offsetTop - container.offsetTop,
      behavior: "smooth",
    });
    setActiveIndex(i);
  };

  return (
    <section className="rs-container">
      <h2 className="rs-title">Our Services</h2>

      <div className="rs-row">

        {/* ── LEFT sticky list ── */}
        <div className="rs-left">
          <div className="rs-list">
            {services.map((svc, index) => (
              <div
                className={`rs-item ${activeIndex === index ? "rs-item--active" : ""}`}
                key={index}
                onClick={() => scrollToCard(index)}
              >
                <div className="rs-indicator">
                  <div className="rs-dot" />
                  {index < services.length - 1 && <div className="rs-line" />}
                </div>
                <span className="rs-label">{svc.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT scrollable card stack ── */}
        <div className="rs-right" ref={rightRef}>
          {services.map((svc, index) => (
            <div
              className={`rs-card ${visibleCards.has(index) ? "rs-card--visible" : ""}`}
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              {/* Header */}
              <div className="rs-header">
                <img src={svc.logo} alt={svc.label} className="rs-logo" />
                <span className="rs-heading">{svc.label}</span>
              </div>

              {/* Image */}
              <div className="rs-image-wrap">
                <img src={svc.image} alt={svc.label} className="rs-image" />
              </div>

              {/* Description */}
              <div className="rs-desc">
                <p>{svc.desc1}</p>
                {svc.desc2 && <p>{svc.desc2}</p>}
                {svc.desc3 && <p>{svc.desc3}</p>}
              </div>

              {/* Tags + Arrow */}
              <div className="rs-bottom-row">
                <div className="rs-tags">
                  {svc.tags.map((tag, ti) => (
                    <div className={`rs-tag ${tag.cls}`} key={ti}>
                      <span className="rs-dot-sm" />
                      {tag.label}
                    </div>
                  ))}
                </div>
                <div className="rs-arrow">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;