import React, { useEffect, useRef, useState } from "react";
import "../Style/blogfeature.css";
import featuredImg from "../assets/blog.png";

const BlogFeatures = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeroVisible(true); },
      { threshold: 0.12 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bf-hero-section" ref={heroRef}>
      <div className="bf-blob bf-blob-1" />
      <div className="bf-blob bf-blob-2" />

      <div className={`bf-hero-container ${heroVisible ? "bf-visible" : ""}`}>

        {/* LEFT — text only */}
        <div className="bf-hero-content">
          <div className="bf-eyebrow">
            <span className="bf-dot" />
            Featured Article
          </div>

          <h2 className="bf-hero-title">
            Building Success with <br />
            <span className="bf-title-accent">Intelligent Innovation</span>
          </h2>

          <p className="bf-hero-desc">
            At MPeoples, our approach is driven by innovation and precision —
            enabling us to design solutions that improve efficiency, elevate
            experiences, and deliver measurable results. From sleek interfaces
            to scalable systems, every decision we make is purposeful, every
            product we ship is built to last.
          </p>

          <div className="bf-author">
            <div className="bf-author-avatar">M</div>
            <div>
              <span className="bf-author-name">MPeoples Team</span>
              <span className="bf-author-date">June 12, 2025 · 5 min read</span>
            </div>
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="bf-hero-image-wrap">
          <div className="bf-image-card">
            <img src={featuredImg} alt="Featured Blog" className="bf-hero-img" />
            <div className="bf-image-badge">
              <span className="bf-badge-icon">✦</span> Editor's Pick
            </div>
          </div>
          <div className="bf-float-card">
            <div className="bf-float-icon">📈</div>
            <div>
              <div className="bf-float-label">Trending this week</div>
              <div className="bf-float-value">2.4k Reads</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogFeatures;