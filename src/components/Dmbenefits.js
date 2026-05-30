import React from "react";
import "../Style/Dmbenefits.css";

import brand from "../assets/brand.png";
import scalability from "../assets/scalability.png";
import deployment from "../assets/deployment.png";
import business from "../assets/business.png";
import blue from "../assets/blue.png";

const benefits = [
  {
    id: 1,
    image: brand,
    title: "Strong Online Brand Presence",
    description:
      "Effective digital marketing builds a strong brand presence across search engines and platforms like Instagram and Facebook, increasing visibility and customer trust.",
  },
  {
    id: 2,
    image: scalability,
    title: "Better Customer Reach",
    description:
      "Digital marketing helps businesses reach the right audience through SEO, social media campaigns, and targeted ads on Google Ads.",
  },
  {
    id: 3,
    image: deployment,
    title: "Increased Customer Engagement",
    description:
      "Engaging content and targeted campaigns help businesses connect with customers and build strong, long-term relationships with their audience. ",
  },
  {
    id: 4,
    image: business,
    title: "Competitive Business Growth",
    description:
      "A strong digital marketing strategy increases brand visibility, generates leads, and drives sustainable business growth.",
  },
  {
    id: 5,
    image: blue,
    title: "",
    description: "",
  },
];

const Dmbenefits = () => {
  return (
    <section className="dmbenefits-section">
      <div className="dmbenefits-inner">
        <h2 className="dmbenefits-heading">
          How Can Your Business Benefit from Digital Marketing?
        </h2>

        {/* Row 1 — 3 cards */}
        <div className="dmbenefits-row">
          {benefits.slice(0, 3).map((item) => (
            <div className="dmbenefits-card" key={item.id}>
              <div className="dmbenefits-card__img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="dmbenefits-card__img"
                />
              </div>
              <h3 className="dmbenefits-card__title">{item.title}</h3>
              <p className="dmbenefits-card__desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 cards */}
        <div className="dmbenefits-row dmbenefits-row--2">
          {benefits.slice(3, 5).map((item) => (
            <div className="dmbenefits-card" key={item.id}>
              <div className="dmbenefits-card__img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="dmbenefits-card__img"
                />
              </div>
              {item.title && (
                <h3 className="dmbenefits-card__title">{item.title}</h3>
              )}
              {item.description && (
                <p className="dmbenefits-card__desc">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dmbenefits;
