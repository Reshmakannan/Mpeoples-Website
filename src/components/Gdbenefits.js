import React from 'react';
import '../Style/Gdbenefits.css';

import brand from '../assets/brand.png';
import scalability from '../assets/scalability.png';
import deployment from '../assets/deployment.png';
import business from '../assets/business.png';
import blue from '../assets/blue.png';

const benefits = [
  {
    id: 1,
    image: brand,
    title: 'Strong Brand Identity',
    description: 'Professional graphic design builds a unique brand identity and creates memorable visuals that earn customer trust.',
  },
  {
    id: 2,
    image: scalability,
    title: 'Scalability & Flexibility',
    description: 'Custom web applications easily adapt to business growth by allowing new features, integrations, and scalable cloud resources.',
  },
  {
    id: 3,
    image: deployment,
    title: 'Easy Deployment & Updates',
    description: 'Web applications can be accessed through a URL and updated centrally, ensuring all users always use the latest version.',
  },
  {
    id: 4,
    image: business,
    title: 'Enhanced Business Operations',
    description: 'Web-based systems improve collaboration, automate workflows, and increase productivity while reducing operational costs.',
  },
  {
    id: 5,
    image: blue,
    title: '',
    description: '',
  },
];

const GdBenefits = () => {
  return (
    <section className="gdb-section">
      <div className="gdb-inner">
        <h2 className="gdb-heading">How can your business get benefit from graphic designing?</h2>

        {/* Row 1 — 3 cards */}
        <div className="gdb-row">
          {benefits.slice(0, 3).map((item) => (
            <div className="gdb-card" key={item.id}>
              <div className="gdb-card__img-wrap">
                <img src={item.image} alt={item.title} className="gdb-card__img" />
              </div>
              <h3 className="gdb-card__title">{item.title}</h3>
              <p className="gdb-card__desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 cards */}
        <div className="gdb-row gdb-row--2">
          {benefits.slice(3, 5).map((item) => (
            <div className="gdb-card" key={item.id}>
              <div className="gdb-card__img-wrap">
                <img src={item.image} alt={item.title} className="gdb-card__img" />
              </div>
              {item.title && <h3 className="gdb-card__title">{item.title}</h3>}
              {item.description && <p className="gdb-card__desc">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GdBenefits;