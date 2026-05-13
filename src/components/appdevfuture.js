
import React from 'react';
import '../Style/appdevfuture.css';

import cimage from '../assets/C.png';
import fimage from '../assets/F.png';
import bimage from '../assets/B.png';
import mimage from '../assets/M.png';
import pimage from '../assets/P.png';

const services = [
  {
    id: 1,
    icon: cimage,
    alt: 'AI-Powered Applications',
    title: 'AI-Powered Applications',
    text: 'Future apps will leverage AI and machine learning to deliver smarter features, automation, and personalized user experiences.',
    row: 'top',
  },
  {
    id: 2,
    icon: fimage,
    alt: 'Cross-Platform Development',
    title: 'Cross-Platform Development',
    text: 'Modern frameworks enable apps to run smoothly across Android and iOS, reducing development time while maintaining performance.',
    row: 'top',
  },
  {
    id: 3,
    icon: bimage,
    alt: 'Cloud-Driven Architecture',
    title: 'Cloud-Driven Architecture',
    text: 'Cloud technologies allow apps to scale easily, manage large data volumes, and ensure faster performance worldwide.',
    row: 'top',
  },
  {
    id: 4,
    icon: mimage,
    alt: 'Enhanced App Security',
    title: 'Enhanced App Security',
    text: 'With growing digital usage, future apps will focus more on data protection, secure authentication, and privacy-first development.',
    row: 'bottom-left',
  },
  {
    id: 5,
    icon: pimage,
    alt: 'Seamless User Experiences',
    title: 'Seamless User Experiences',
    text: 'The future of mobile apps will prioritize intuitive UI/UX design, faster interactions, and smoother digital experiences across devices.',
    row: 'bottom-right',
  },
];

const Appdevfuture = () => {
  return (
    <section className="appdevfuture-main-section">
      <div className="appdevfuture-main-container">

        {/* Heading */}
        <h1 className="appdevfuture-main-title">The Future of App Development</h1>

        {/* Delivered by */}
        <p className="appdevfuture-subtitle-label">Delivered by MPeoples</p>

        {/* Description */}
        <p className="appdevfuture-main-description">
          Great mobile apps are more than just features — they are powerful digital solutions that drive engagement, efficiency, and business growth. At MPeoples, we combine modern technologies, scalable architecture, and performance-focused development to build secure, high-performing mobile applications for growing businesses.
        </p>

        {/* Cards Grid */}
        <div className="appdevfuture-card-grid">
          {/* Top row — 3 cards */}
          {services.filter(s => s.row === 'top').map(service => (
            <div key={service.id} className="appdevfuture-service-card">
              <div className="appdevfuture-card-header">
                <img src={service.icon} alt={service.alt} className="appdevfuture-card-icon" />
                <h3 className="appdevfuture-card-title">{service.title}</h3>
              </div>
              <p className="appdevfuture-card-text">{service.text}</p>
            </div>
          ))}

          {/* Bottom row — 2 cards */}
          <div className="appdevfuture-service-card appdevfuture-card-bottom-left">
            <div className="appdevfuture-card-header">
              <img src={mimage} alt="Mobile-First & Responsive Design" className="appdevfuture-card-icon" />
              <h3 className="appdevfuture-card-title">Enhanced App Security</h3>
            </div>
            <p className="appdevfuture-card-text">
             With growing digital usage, future apps will focus more on data protection, secure authentication, and privacy-first development.
            </p>
          </div>

          <div className="appdevfuture-service-card appdevfuture-card-bottom-right">
            <div className="appdevfuture-card-header">
              <img src={pimage} alt="Usability Testing & Optimization" className="appdevfuture-card-icon" />
              <h3 className="appdevfuture-card-title">Seamless User Experiences</h3>
            </div>
            <p className="appdevfuture-card-text">
              The future of mobile apps will prioritize intuitive UI/UX design, faster interactions, and smoother digital experiences across devices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Appdevfuture;