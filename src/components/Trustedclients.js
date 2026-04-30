import React from "react";
import "../Style/Trustedclients.css";

import logo1 from "../assets/seoways.png";
import logo2 from "../assets/thariga.png";
import logo3 from "../assets/kr.png";
import logo4 from "../assets/book.png";
import logo5 from "../assets/fly.png";

const TrustedClients = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="trusted-section">
     <h1 className="bg-text">Our Clients</h1>
      <h2>Trusted Clients</h2>
      <p>
        Every great product starts as a thought. <br />
        We help that thought grow, evolve, and turn into something people
        actually love to use.
      </p>

      <div className="logo-slider">
        <div className="logo-track">
          {/* duplicate logos for infinite scroll */}
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