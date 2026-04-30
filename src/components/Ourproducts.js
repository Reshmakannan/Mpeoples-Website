import React from "react";
import "../Style/Ourproducts.css";

import lookit from "../assets/lookit.png";
import makkal from "../assets/makkal.png";
import hr from "../assets/lookit.png";

const cards = [
  {
    id: 1,
    title: "Lookit App",
    year: "2025-26",
    users: "10+",
    icon: lookit,
    infoTitle: "Lookit App",
    description:
      "A smart digital platform designed to connect users with content, updates, and insights in a simple and engaging way.",
  },
  {
    id: 2,
    title: "Makkal Nalkatti",
    year: "2025-26",
    users: "10+",
    icon: makkal,
    infoTitle: "Makkal Nalkatti",
    description:
      "A local news and information platform that delivers trusted updates, community stories, and regional insights in one place.",
  },
  {
    id: 3,
    title: "HR Management",
    year: "2025-26",
    users: "10+",
    icon: hr,
    infoTitle: "HR Management Software",
    description:
      "An all-in-one HR solution to manage employees, attendance, leave, payroll, and performance with ease.",
  },
];

const FolderSVG = () => (
  <svg
    viewBox="0 0 400 200"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,40 Q0,0 40,0 L155,0 Q175,0 185,20 Q195,40 215,40 L360,40 Q400,40 400,80 L400,170 Q400,200 370,200 L30,200 Q0,200 0,170 Z"
      fill="#181b26"
    />
  </svg>
);

const ProductCards = () => {
  return (
    <section className="products-section">
      <h2 className="products-title">OUR PRODUCTS</h2>
      <div className="cards-grid">
        {cards.map((card) => (
          <div className="card-wrapper" key={card.id}>

            {/* ── Dark Card ── */}
            <div className="dark-card">
              <div className="fan-area">
                <div className="mini-card fc-daily">
                  <div className="mini-card-label">Daily Contents</div>
                  <div className="mini-card-img"></div>
                </div>
                <div className="mini-card fc-updates">
                  <div className="mini-card-label">Updates</div>
                  <div className="mini-card-img"></div>
                </div>
                <div className="mini-card fc-astro">
                  <div className="mini-card-label">Astrology</div>
                  <div className="mini-card-img"></div>
                </div>
              </div>
              <div className="folder-overlay">
                <div className="folder-title">{card.title}</div>
                <div className="folder-year">{card.year}</div>
                <div className="folder-users">
                  <span className="folder-users-count">{card.users}</span>
                  <span className="folder-users-label"> Users</span>
                </div>
                <div className="folder-icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <FolderSVG />
              </div>
            </div>

            {/* ── Info Section Below Card ── */}
            <div className="card-info">
              <h3 className="card-info-title">{card.infoTitle}</h3>
              <p className="card-info-desc">{card.description}</p>
              <button className="card-info-more">
  More
  <span className="card-info-arrow">↗</span>
</button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;