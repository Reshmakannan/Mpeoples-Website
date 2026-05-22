import React from "react";
import "../Style/aboutusleader.css";

// import your images
import leader1 from "../assets/ceo.png";
import leader2 from "../assets/ceo.png";
import leader3 from "../assets/ceo.png";
import leader4 from "../assets/ceo.png";
import leader5 from "../assets/ceo.png";
import leader6 from "../assets/ceo.png";

const leaders = [
  {
    img: leader1,
    name: "Narasimman T",
    role: "Founder & CEO",
  },
  {
    img: leader2,
    name: "Manikandan T",
    role: "MD",
  },
  {
    img: leader3,
    name: "Name",
    role: "Management",
  },
  {
    img: leader4,
    name: "Name",
    role: "Management",
  },
  {
    img: leader5,
    name: "",
    role: "",
  },
  {
    img: leader6,
    name: "",
    role: "",
  },
];

const AboutUsLeader = () => {
  return (
    <section className="leader-section">
      {/* TOP BLUE SECTION */}
      <div className="leader-header">
        <h2 className="leader-title">Leadership</h2>
        <p className="leader-subtitle">
          Our leaders go beyond guidance — they partner with clients to deliver
          the right solutions at the right time, combining expertise with real
          value and impact.
        </p>
      </div>

      {/* LEADER GRID */}
      <div className="leader-grid">
        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>
            <div className="leader-img-wrapper">
              <img src={leader.img} alt="leader" />
            </div>

            {leader.name && (
              <>
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsLeader;