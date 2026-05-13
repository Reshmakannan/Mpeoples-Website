import React from 'react';
import '../Style/videobenefits.css';

import brand from '../assets/brand.png';
import scalability from '../assets/scalability.png';
import deployment from '../assets/deployment.png';
import business from '../assets/business.png';
import blue from '../assets/blue.png';

const benefits = [
  {
    id: 1,
    image: brand,
    title: 'Strong Brand Storytelling',
    description: 'Professional videos help communicate your brand message clearly and emotionally, creating a strong and memorable brand identity.',
  },
  {
    id: 2,
    image: scalability,
    title: 'Better Audience Reach',
    description: 'Video content performs across platforms like YouTube, Instagram, and websites, helping you reach a wider audience.',
  },
  {
    id: 3,
    image: deployment,
    title: 'Higher Customer Engagement',
    description: 'Engaging visuals and storytelling capture attention quickly, encouraging viewers to interact, share, and connect with your brand.',
  },
  {
    id: 4,
    image: business,
    title: 'Increased Conversions & Sales',
    description: 'Well-crafted videos influence buying decisions by showcasing your products or services effectively, leading to higher conversions.',
  },
  {
    id: 5,
    image: blue,
    title: 'Competitive Business Growth',
    description: 'High-quality video content helps your brand stand out in a crowded market, boosting visibility and supporting long-term business growth.',
  },
];

const VideoBenefits = () => {
  return (
    <section className="videobenefits-section">
      <div className="videobenefits-inner">
        <h2 className="videobenefits-heading">How can your business get benefit from graphic designing?</h2>

        {/* Row 1 — 3 cards */}
        <div className="videobenefits-row">
          {benefits.slice(0, 3).map((item) => (
            <div className="videobenefits-card" key={item.id}>
              <div className="videobenefits-card__img-wrap">
                <img src={item.image} alt={item.title} className="videobenefits-card__img" />
              </div>
              <h3 className="videobenefits-card__title">{item.title}</h3>
              <p className="videobenefits-card__desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 cards */}
        <div className="videobenefits-row videobenefits-row--2">
          {benefits.slice(3, 5).map((item) => (
            <div className="videobenefits-card" key={item.id}>
              <div className="videobenefits-card__img-wrap">
                <img src={item.image} alt={item.title} className="videobenefits-card__img" />
              </div>
              {item.title && <h3 className="videobenefits-card__title">{item.title}</h3>}
              {item.description && <p className="videobenefits-card__desc">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoBenefits;