import React from "react";
import "../Style/aboutusway.css";

// PNG icons (your files)
import teamworkIcon from "../assets/icon1.png";
import curiosityIcon from "../assets/icon1.png";
import empathyIcon from "../assets/icon1.png";
import integrityIcon from "../assets/icon1.png";
import transparencyIcon from "../assets/icon1.png";
import ubuntuIcon from "../assets/icon1.png";

// Top right blue image
import blueShape from "../assets/blue-logo.png";

const data = [
  {
    icon: teamworkIcon,
    title: "Teamwork",
    desc: "Collaboration drives our success. Together, we create extraordinary results.",
  },
  {
    icon: curiosityIcon,
    title: "Curiosity",
    desc: "In a world that never stands still, we thrive on curiosity and continuous growth.",
  },
  {
    icon: empathyIcon,
    title: "Empathy",
    desc: "We connect on a deeper level with your audience, ensuring every story strikes a chord.",
  },
  {
    icon: integrityIcon,
    title: "Integrity",
    desc: "Honesty and accountability form the foundation of every relationship we build.",
  },
  {
    icon: transparencyIcon,
    title: "Transparency",
    desc: "Openness fosters trust, and trust is the cornerstone of lasting partnerships.",
  },
  {
    icon: ubuntuIcon,
    title: "Ubuntu",
    desc: "I am because you are because we are.",
  },
];

export default function AboutUsWay() {
  return (
    <section className="aboutway-section">
      <div className="aboutway-container">

        {/* LEFT CONTENT */}
        <div className="aboutway-left">
          <h2 className="aboutway-title">The MPeoples Way</h2>
          <p className="aboutway-subtitle">
            Where bold ideas meet shared values and everyday magic.
          </p>

          <div className="aboutway-grid">
            {data.map((item, index) => (
              <div className="aboutway-card" key={index}>
                <img src={item.icon} alt={item.title} className="aboutway-icon" />
                <h4 className="aboutway-card-title">{item.title}</h4>
                <p className="aboutway-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="aboutway-right">
          <img src={blueShape} alt="shape" />
        </div>

      </div>
    </section>
  );
}