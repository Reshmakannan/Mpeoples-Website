import "../Style/teamvalue.css";

import iconWorkLife from "../assets/worklife.png";
import iconLearning from "../assets/learning.png";
import iconCollaboration from "../assets/collaboration.png";
import iconCelebrating from "../assets/celebrating.png";

import logoGraphic from "../assets/blue-logo.png";

const values = [
  {
    id: 1,
    icon: iconWorkLife,
    title: "Work-Life Balance",
    description:
      "We believe great work comes from a balanced life. We support flexibility, well-being, and time to recharge.",
  },
  {
    id: 2,
    icon: iconLearning,
    title: "Continuous Learning",
    description:
      "Growth never stops here. We encourage learning, upskilling, and exploring new ideas every day.",
  },
  {
    id: 3,
    icon: iconCollaboration,
    title: "Team Collaboration",
    description:
      "Together, we achieve more. Open communication and teamwork drive everything we do.",
  },
  {
    id: 4,
    icon: iconCelebrating,
    title: "Celebrating Success",
    description:
      "Every win matters. We recognize achievements, big or small, and celebrate them as a team.",
  },
];

export default function TeamValue() {
  return (
    <section className="teamvalues-section">
      <div className="teamvalues-container">

        {/* TOP AREA */}
        <div className="teamvalues-top">

          <div className="teamvalues-left">
            <h2 className="teamvalues-heading">
              Our Culture Values
            </h2>

            <p className="teamvalues-subtext">
              Where bold ideas meet shared values and everyday magic.
            </p>
          </div>

          <div className="teamvalues-right">
            <img
              src={logoGraphic}
              alt="logo"
              className="teamvalues-logo"
            />
          </div>

        </div>

        {/* BOTTOM CARDS */}
        <div className="teamvalues-grid">
          {values.map((item, index) => (
            <div
              className={`teamvalues-card ${
                index !== values.length - 1
                  ? "teamvalues-card-border"
                  : ""
              }`}
              key={item.id}
            >
              <div className="teamvalues-icon-wrap">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="teamvalues-icon"
                />
              </div>

              <h3 className="teamvalues-title">
                {item.title}
              </h3>

              <p className="teamvalues-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}