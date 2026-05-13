
import React from 'react';
import '../Style/Gdfuture.css';

import limage from '../assets/L.png';
import vimage from '../assets/V.png';
import pimage from '../assets/P.png';
import cimage from '../assets/C.png';
import uimage from '../assets/U.png';

const services = [
  {
    id: 1,
    icon: limage,
    alt: 'Logo & Brand Identity',
    title: 'Logo & Brand Identity',
    text: 'A professional logo and consistent brand identity help businesses create a memorable impression and build trust with their audience.',
    row: 'top',
  },
  {
    id: 2,
    icon: vimage,
    alt: 'Visual Marketing Designs',
    title: 'Visual Marketing Designs',
    text: 'Creative marketing graphics such as banners, social media posts, and promotional creatives help businesses communicate their message effectively.',
    row: 'top',
  },
  {
    id: 3,
    icon: pimage,
    alt: 'Print & Promotional Materialst',
    title: 'Print & Promotional Materialst',
    text: 'Brochures, pamphlets, posters, and other print materials present your products and services clearly while strengthening brand recognition.',
    row: 'top',
  },
  {
    id: 4,
    icon: cimage,
    alt: 'Creative Advertising Graphics',
    title: 'Creative Advertising Graphics',
    text: 'High-quality advertising visuals help capture attention, increase engagement, and support successful marketing campaigns.',
    row: 'bottom-left',
  },
  {
    id: 5,
    icon: uimage,
    alt: 'Modern Design Solutions',
    title: 'Modern Design Solutions',
    text: 'Using modern design trends and tools, we create clean, professional, and visually appealing graphics that enhance your brand presence.',
    row: 'bottom-right',
  },
];

const Webfuture = () => {
  return (
    <section className="uxfuture-main-section">
      <div className="uxfuture-main-container">

        {/* Heading */}
        <h1 className="uxfuture-main-title">The Power of Creative Graphic Design</h1>

        {/* Delivered by */}
        <p className="uxfuture-subtitle-label">Delivered by MPeoples</p>

        {/* Description */}
        <p className="uxfuture-main-description">
          Graphic design is more than just visuals — it is the creative language that communicates your brand’s story. At MPeoples, we combine creativity, strategy, and modern design tools to create impactful visuals that help businesses attract customers, build strong brand identity, and stand out in a competitive market.
        </p>

        {/* Cards Grid */}
        <div className="uxfuture-card-grid">
          {/* Top row — 3 cards */}
          {services.filter(s => s.row === 'top').map(service => (
            <div key={service.id} className="uxfuture-service-card">
              <div className="uxfuture-card-header">
                <img src={service.icon} alt={service.alt} className="uxfuture-card-icon" />
                <h3 className="uxfuture-card-title">{service.title}</h3>
              </div>
              <p className="uxfuture-card-text">{service.text}</p>
            </div>
          ))}

          {/* Bottom row — 2 cards */}
          <div className="uxfuture-service-card uxfuture-card-bottom-left">
            <div className="uxfuture-card-header">
              <img src={cimage} alt="Mobile-First & Responsive Design" className="uxfuture-card-icon" />
              <h3 className="uxfuture-card-title">Creative Advertising  Graphics</h3>
            </div>
            <p className="uxfuture-card-text">
              High-quality advertising visuals help capture attention, increase engagement, and support successful marketing campaigns.
            </p>
          </div>

          <div className="uxfuture-service-card uxfuture-card-bottom-right">
            <div className="uxfuture-card-header">
              <img src={uimage} alt="Usability Testing & Optimization" className="uxfuture-card-icon" />
              <h3 className="uxfuture-card-title">Modern Design Solutions</h3>
            </div>
            <p className="uxfuture-card-text">
              Using modern design trends and tools, we create clean, professional, and visually appealing graphics that enhance your brand presence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Webfuture;