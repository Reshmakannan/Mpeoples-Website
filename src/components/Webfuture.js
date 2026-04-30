
import React from 'react';
import '../Style/Webfuture.css';

import iconUser from '../assets/C.png';
import iconWireframe from '../assets/F.png';
import iconModernUI from '../assets/B.png';
import iconMobilee from '../assets/M.png';
import iconUsability from '../assets/P.png';

const services = [
  {
    id: 1,
    icon: iconUser,
    alt: 'Custom Website Development',
    title: 'Custom Website Development',
    text: 'We develop tailored websites that align with your business goals, ensuring scalability, security, and seamless functionality for long-term digital growth.',
    row: 'top',
  },
  {
    id: 2,
    icon: iconWireframe,
    alt: 'Frontend Development',
    title: 'Frontend Development',
    text: 'Our team creates responsive and visually engaging interfaces using modern frontend technologies to ensure smooth interactions and great user experiences.',
    row: 'top',
  },
  {
    id: 3,
    icon: iconModernUI,
    alt: 'Backend Development',
    title: 'Backend Development',
    text: 'We build strong backend systems that manage data, integrations, and performance, ensuring your website runs efficiently and securely.',
    row: 'top',
  },
  {
    id: 4,
    icon: iconMobilee,
    alt: 'Mobile-First & Responsive Design',
    title: 'Mobile-First & Responsive Design',
    text: 'Every website we build is optimized for all screen sizes, delivering a seamless experience across mobile, tablet, and desktop devices.',
    row: 'bottom-left',
  },
  {
    id: 5,
    icon: iconUsability,
    alt: 'Performance Optimization & Security',
    title: 'Performance Optimization & Security',
    text: 'We optimize websites for speed, reliability, and protection by implementing best practices in performance tuning, security standards, and scalable infrastructure.',
    row: 'bottom-right',
  },
];

const Webfuture = () => {
  return (
    <section className="uxfuture-main-section">
      <div className="uxfuture-main-container">

        {/* Heading */}
        <h1 className="uxfuture-main-title">The Future of Web Development</h1>

        {/* Delivered by */}
        <p className="uxfuture-subtitle-label">Delivered by MPeoples</p>

        {/* Description */}
        <p className="uxfuture-main-description">
          Great websites are more than just code — they are powerful digital platforms that drive performance, engagement, and business growth. At MPeoples, we combine modern technologies, scalable architecture, and performance-driven development to build secure and high-performing websites for growing businesses.
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
              <img src={iconMobilee} alt="Mobile-First & Responsive Design" className="uxfuture-card-icon" />
              <h3 className="uxfuture-card-title">Mobile-First &amp; Responsive Design</h3>
            </div>
            <p className="uxfuture-card-text">
              Every website we build is optimized for all screen sizes, delivering a seamless experience across mobile, tablet, and desktop devices.
            </p>
          </div>

          <div className="uxfuture-service-card uxfuture-card-bottom-right">
            <div className="uxfuture-card-header">
              <img src={iconUsability} alt="Usability Testing & Optimization" className="uxfuture-card-icon" />
              <h3 className="uxfuture-card-title">Usability Testing &amp; Optimization</h3>
            </div>
            <p className="uxfuture-card-text">
              We optimize websites for speed, reliability, and protection by implementing best practices in performance tuning, security standards, and scalable infrastructure.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Webfuture;