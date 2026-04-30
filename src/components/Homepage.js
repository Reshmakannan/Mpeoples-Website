import React, { useState, useCallback, useRef } from "react";
import "../Style/Homepage.css";

import astronaut from "../assets/astronaut.png";
import blueLogo from "../assets/blue-logo.png";

import planImg from "../assets/Plan.png";
import ideaImg from "../assets/Idea.png";
import strategyImg from "../assets/Strategy.png";
import processImg from "../assets/Process.png";

import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";
import thumb4 from "../assets/thumb4.png";

import ServicesSection from "./Servicessection";
import OurProducts from "./Ourproducts";
import ImpactStories from "./ImpactStories";
import TrustedClients from "./Trustedclients";
import WhyChoose from "./Whychoose";
import ClientFeedback from "./Clientfeedback";
import OurTeam from "./Ourteam";
import OurBlogs from "./Ourblogs";
import Forms from "./Forms";
import AddressSection from "./AddSection";
import Footer from "./Footer";

function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const [belowVisible, setBelowVisible] = useState(false);
  const whyRef = useRef(null);
  const savedScrollY = useRef(0);

  // Lock page, snap section exactly to viewport top
  const handleWhyEnter = useCallback(() => {
    const sectionTop = whyRef.current
      ? window.scrollY + whyRef.current.getBoundingClientRect().top
      : window.scrollY;

    window.scrollTo({ top: sectionTop, behavior: "instant" });
    savedScrollY.current = sectionTop;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${sectionTop}px`;
    document.body.style.width = "100%";
  }, []);

  // Unlock page, reveal sections below
  const handleWhyComplete = useCallback(() => {
    const scrollY = savedScrollY.current;

    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollY);

    setBelowVisible(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      });
    });
  }, []);

  const workCards = [
    {
      title: "Plan",
      step: "Step-1",
      quote: '"What are we really building - and why?"',
      image: planImg,
      backImage: thumb1,
    },
    {
      title: "Idea",
      step: "Step-2",
      quote: `"Let's solve the right problem..."`,
      image: ideaImg,
      backImage: thumb4,
    },
    {
      title: "Strategy",
      step: "Step-3",
      quote: '"Looks good is not enough. It must work."',
      image: strategyImg,
      backImage: thumb3,
    },
    {
      title: "Process",
      step: "Step-4",
      quote: '"We build, test, refine, and grow..."',
      image: processImg,
      backImage: thumb2,
    },
  ];

  return (
    <>
      

      {/* ================= WHO SECTION ================= */}
      <section className="who-section">
        <h2 className="who-title">Who We Are</h2>

        <div className="who-container">
          <div className="who-card left-card">
            <img src={astronaut} alt="astronaut" />
          </div>

          <div className="who-card right-card">
            <h3 className="right-title">
              Building Digital Solutions for Growing Businesses
            </h3>
            <div className="divider"></div>
            <p className="right-text">
              MPeoples helps startups and enterprises transform ideas into
              powerful digital products. From UX strategy to deployment, we
              focus on clarity, performance, and long-term growth.
            </p>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>

          <div className="timeline-item top-item">
            <span className="year">2023</span>
            <div className="dot"></div>
            <p className="label">Start</p>
          </div>

          <div className="timeline-item bottom-item">
            <span className="year">2024</span>
            <div className="dot"></div>
            <p className="label">Foundation & Vision</p>
          </div>

          <div className="timeline-item top-item">
            <span className="year">2025</span>
            <div className="dot"></div>
            <p className="label">Product Launch & Market Entry</p>
          </div>

          <div className="timeline-item bottom-item">
            <span className="year">2026</span>
            <div className="dot"></div>
            <p className="label">Growth & Innovation</p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="how-work-section">
        <h2 className="how-work-title">How We Work?</h2>

        <div className="how-work-intro">
          <div className="how-work-text">
            <h3>From Thought to Impact - Our Way</h3>
            <p>Every great product starts as a thought.</p>
            <p>
              We help that thought grow, evolve, and turn into something people
              actually love to use.
            </p>
          </div>

          <div className="how-work-logo-wrap">
            <img src={blueLogo} alt="logo" className="how-work-big-logo" />
          </div>
        </div>

        <div className="how-work-cards">
          {workCards.map((card, index) => (
            <div
              className="how-work-card"
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="how-work-image-box">
                <div
                  className={`how-work-front ${
                    activeCard === index ? "hide-front" : ""
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="how-work-image"
                  />
                  <div className="how-work-overlay"></div>
                  <p className="how-work-quote">{card.quote}</p>
                </div>

                <div
                  className={`how-work-back ${
                    activeCard === index ? "show-back" : ""
                  }`}
                >
                  <img src={card.backImage} alt="back" className="how-work-image" />
                </div>
              </div>

              <h4>{card.title}</h4>
              <span>{card.step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-header">
        <section className="services-body">
          <div className="services-container">
            <ServicesSection />
          </div>
        </section>
      </section>

      {/* OTHER SECTIONS */}
      <section>
        <OurProducts />
      </section>

      <section>
        <ImpactStories />
      </section>

      <section>
        <TrustedClients />
      </section>

      {/* WHY CHOOSE */}
      <div ref={whyRef}>
        <WhyChoose onEnter={handleWhyEnter} onComplete={handleWhyComplete} />
      </div>

      {/* BELOW SECTIONS */}
      <div className={`why-below ${belowVisible ? "why-below--visible" : ""}`}>
        <section>
          <ClientFeedback />
        </section>

        <section>
          <OurTeam />
        </section>

        <section>
          <OurBlogs />
        </section>

        <section>
          <Forms />
        </section>

        <section>
          <AddressSection />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;