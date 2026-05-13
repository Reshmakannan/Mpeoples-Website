import React from 'react';
import '../Style/Gdindustries.css';

import ecom from "../assets/ecommercee.png";
import healthcare from "../assets/healthcare.png";
import realestate from "../assets/realestate.png";
import education from "../assets/education.png";
import hospitality from "../assets/hospitality.png";
import technology from "../assets/technology.png";
import corporate from "../assets/corporate.png";
import textile from "../assets/textile.png";
import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

const industries = [
  {
    id: 1,
    icon: ecom,
    title: 'eCommerce',
    description: 'We create eye-catching product creatives, banners, and promotional graphics that increase engagement and convert viewers into customers.',
  },
  {
    id: 2,
    icon: healthcare,
    title: 'Healthcare',
    description: 'Our design team creates clear and engaging healthcare brochures, infographics, and digital assets that simplify medical information and build trust.',
  },
  {
    id: 3,
    icon: realestate,
    title: 'Real Estate',
    description: 'We bring property listings to life with elegant brochures, branding kits, and walkthrough visuals that help agents and developers stand out.',
  },
  {
    id: 4,
    icon: education,
    title: 'Education',
    description: 'From catalogues to academic infographics and social creatives, we design content that connects institutions with students and communicates value clearly.',
  },
  {
    id: 5,
    icon: hospitality,
    title: 'Hospitality',
    description: "Menus, packaging, digital banners, and marketing creatives, we craft visuals that capture your brand's ambiance and make a lasting impression on guests.",
  },
  {
    id: 6,
    icon: technology,
    title: 'Technology & SaaS',
    description: 'Our expert designers develop modern visuals, icons, illustrations, product decks, and branding that help tech brands simplify complexity and communicate innovation.',
  },
  {
    id: 7,
    icon: corporate,
    title: 'Corporate & Consulting',
    description: 'We create clear, professional designs like pitch decks, reports, infographics, and branding materials that build trust and keep your message consistent everywhere.',
  },
  {
    id: 8,
    icon: textile,
    title: 'Textile Industries',
    description: 'Our design team creates attractive textile graphics, product banners, and promotional materials that highlight fabric quality and showcase collections effectively.',
  },
];

const GdIndustries = () => {
  return (
    <section className="gdi-section">

        <img src={trapLeft} alt="" className="trap-left" />
        <img src={trapRight} alt="" className="trap-right" />

      <div className="gdi-inner">
        <h2 className="gdi-heading">Industries We Serve</h2>

        {/* Row 1 — 3 cards */}
        <div className="gdi-row gdi-row--3">
          {industries.slice(0, 3).map((item, i) => (
            <div className="gdi-card" key={item.id}>
              {i < 2 && <div className="gdi-vline" />}
              <div className="gdi-card__header">
                <img src={item.icon} alt={item.title} className="gdi-card__icon" />
                <h3 className="gdi-card__title">{item.title}</h3>
              </div>
              <p className="gdi-card__desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="gdi-hline" />

        {/* Row 2 — 3 cards */}
        <div className="gdi-row gdi-row--3">
          {industries.slice(3, 6).map((item, i) => (
            <div className="gdi-card" key={item.id}>
              {i < 2 && <div className="gdi-vline" />}
              <div className="gdi-card__header">
                <img src={item.icon} alt={item.title} className="gdi-card__icon" />
                <h3 className="gdi-card__title">{item.title}</h3>
              </div>
              <p className="gdi-card__desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="gdi-hline" />

        {/* Row 3 — 2 cards centered */}
        <div className="gdi-row gdi-row--2">
          {industries.slice(6, 8).map((item, i) => (
            <div className="gdi-card" key={item.id}>
              {i < 1 && <div className="gdi-vline" />}
              <div className="gdi-card__header">
                <img src={item.icon} alt={item.title} className="gdi-card__icon" />
                <h3 className="gdi-card__title">{item.title}</h3>
              </div>
              <p className="gdi-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GdIndustries;