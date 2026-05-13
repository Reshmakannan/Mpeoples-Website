import React from 'react';
import '../Style/apptrends.css';

import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png"; 

const industries = [
  {
    id: 1,
    // icon: ecom,
    title: 'Strategy & Planning',
    description: 'Enable secure transactions and monetization with platforms like PayPal, Stripe, Apple Pay, and Google Pay.',
  },
  {
    id: 2,
    // icon: healthcare,
    title: 'Push Notifications',
    description: 'Keep users engaged with real-time alerts, updates, and personalized notifications.',
  },
  {
    id: 3,
    // icon: realestate,
    title: 'Analytics Platforms',
    description: 'Track user behavior and improve marketing strategies with powerful analytics insights.',
  },
  {
    id: 4,
    // icon: education,
    title: 'APIs & Web Services',
    description: 'Enhance app functionality with scalable integrations and reusable APIs.',
  },
  {
    id: 5,
    // icon: hospitality,
    title: 'IoT Integration',
    description: "Connect apps with smart devices, wearables, and IoT systems for remote monitoring and control.",
  },
  {
    id: 6,
    // icon: technology,
    title: 'Single Sign-On (SSO)',
    description: 'Allow users to log in once and access multiple services securely without repeated authentication.',
  },
  {
    id: 7,
    // icon: corporate,
    title: 'Enterprise Integration',
    description: 'Enable mobile access to business data, customer information, and enterprise systems.',
  },
  {
    id: 8,
    // icon: textile,
    title: 'Mixed Reality Experiences',
    description: 'Create immersive experiences with AR and mixed reality technologies.',
  },
];

const GdIndustries = () => {
  return (
    <section className="gdi-section">

        <img src={trapLeft} alt="" className="trap-left" />
        <img src={trapRight} alt="" className="trap-right" />

      <div className="gdi-inner">
        <h2 className="gdi-heading">Mobile app development trends we can implement</h2>

        {/* Row 1 — 3 cards */}
        <div className="gdi-row gdi-row--3">
          {industries.slice(0, 3).map((item, i) => (
            <div className="gdi-card" key={item.id}>
              {i < 2 && <div className="gdi-vline" />}
              <div className="gdi-card__header">
                {/* <img src={item.icon} alt={item.title} className="gdi-card__icon" /> */}
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
                {/* <img src={item.icon} alt={item.title} className="gdi-card__icon" /> */}
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
                {/* <img src={item.icon} alt={item.title} className="gdi-card__icon" /> */}
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