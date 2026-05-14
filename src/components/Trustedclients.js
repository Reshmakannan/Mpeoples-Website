import React, { useEffect, useRef } from "react";
import "../Style/Trustedclients.css";

import logo1 from "../assets/seoways.png";
import logo2 from "../assets/thariga.png";
import logo3 from "../assets/kr.png";
import logo4 from "../assets/book.png";
import logo5 from "../assets/fly.png";

const TrustedClients = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        } else {
          sectionRef.current.classList.remove("show"); // ✅ FIX: re-trigger animation
        }
      },
      { threshold: 0.4 } // smoother trigger
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="trusted-section" ref={sectionRef}>
      <h1 className="bg-text">Our Clients</h1>

      <h2 className="fade-item">Trusted Clients</h2>

      <p className="fade-item">
        Every great product starts as a thought. <br />
        We help that thought grow, evolve, and turn into something people
        actually love to use.
      </p>

      <div className="logo-slider fade-item">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt="client logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;