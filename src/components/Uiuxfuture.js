// Uiuxfuture.js
import React from 'react';
import '../Style/Uiuxfuture.css';

import iconUser from '../assets/U.png';
import iconWireframe from '../assets/W.png';
import iconModernUI from '../assets/M.png';
import iconMobile from '../assets/R.png';
import iconUsability from '../assets/T.png';

const services = [
  {
    id: 1,
    icon: iconUser,
    alt: 'User-Centered Design',
    title: 'User-Centered Design',
    text: 'We design with users at the core, ensuring every interface is intuitive, accessible, and easy to navigate for a seamless experience.',
    row: 'top',
  },
  {
    id: 2,
    icon: iconWireframe,
    alt: 'Wireframing & Prototyping',
    title: 'Wireframing & Prototyping',
    text: 'Our team creates structured wireframes and interactive prototypes to visualize product flows and validate ideas before development begins.',
    row: 'top',
  },
  {
    id: 3,
    icon: iconModernUI,
    alt: 'Modern UI Design',
    title: 'Modern UI Design',
    text: 'We craft visually engaging interfaces with clean layouts, strong typography, and consistent design systems to enhance usability and brand identity.',
    row: 'top',
  },
  {
    id: 4,
    icon: iconMobile,
    alt: 'Mobile-First & Responsive Design',
    title: 'Mobile-First & Responsive Design',
    text: 'Our designs are optimized for all devices, ensuring a seamless experience across smartphones, tablets, and desktops.',
    row: 'bottom-left',
  },
  {
    id: 5,
    icon: iconUsability,
    alt: 'Usability Testing & Optimization',
    title: 'Usability Testing & Optimization',
    text: 'Through user testing and feedback analysis, we continuously refine the design to improve usability, engagement, and performance.',
    row: 'bottom-right',
  },
];

const Uiuxfuture = () => {
  return (
    <section className="uxfuture-main-section">
      <div className="uxfuture-main-container">

        {/* Heading */}
        <h1 className="uxfuture-main-title">The Future of UI/UX Design</h1>

        {/* Delivered by */}
        <p className="uxfuture-subtitle-label">Delivered by MPeoples</p>

        {/* Description */}
        <p className="uxfuture-main-description">
          Great design is more than visuals — it's about creating meaningful user experiences that drive engagement and
          business growth. At MPeoples, we combine user research, modern design tools, and strategic thinking to build
          intuitive digital products that users love.
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
              <img src={iconMobile} alt="Mobile-First & Responsive Design" className="uxfuture-card-icon" />
              <h3 className="uxfuture-card-title">Mobile-First &amp; Responsive Design</h3>
            </div>
            <p className="uxfuture-card-text">
              Our designs are optimized for all devices, ensuring a seamless experience across smartphones, tablets, and desktops.
            </p>
          </div>

          <div className="uxfuture-service-card uxfuture-card-bottom-right">
            <div className="uxfuture-card-header">
              <img src={iconUsability} alt="Usability Testing & Optimization" className="uxfuture-card-icon" />
              <h3 className="uxfuture-card-title">Usability Testing &amp; Optimization</h3>
            </div>
            <p className="uxfuture-card-text">
              Through user testing and feedback analysis, we continuously refine the design to improve usability, engagement, and performance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Uiuxfuture;