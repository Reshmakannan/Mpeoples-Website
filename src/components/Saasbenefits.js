import React from 'react';
import '../Style/Saasbenefits.css';

import brand from '../assets/brand.png';
import scalability from '../assets/scalability.png';
import deployment from '../assets/deployment.png';
import business from '../assets/business.png';
import blue from '../assets/blue.png';

const benefits = [
  {
    id: 1,
    image: brand,
    title: 'Improved User Experience',
    description: 'Well-designed web applications provide a simple and user-friendly interface, allowing users to access services anytime through the internet.',
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

const SaasBenefits = () => {
  return (
    <section className="saasbenefits-section">
      <div className="saasbenefits-inner">
        <h2 className="saasbenefits-heading">
          How Bespoke & High-performance Web Apps Can Help Your Businesses Soar?
        </h2>

        {/* Row 1 — 3 cards */}
        <div className="saasbenefits-row">
          {benefits.slice(0, 3).map((item) => (
            <div className="saasbenefits-card" key={item.id}>
              <div className="saasbenefits-card__img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="saasbenefits-card__img"
                />
              </div>

              <h3 className="saasbenefits-card__title">
                {item.title}
              </h3>

              <p className="saasbenefits-card__desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 cards */}
        <div className="saasbenefits-row saasbenefits-row--2">
          {benefits.slice(3, 5).map((item) => (
            <div className="saasbenefits-card" key={item.id}>
              <div className="saasbenefits-card__img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="saasbenefits-card__img"
                />
              </div>

              {item.title && (
                <h3 className="saasbenefits-card__title">
                  {item.title}
                </h3>
              )}

              {item.description && (
                <p className="saasbenefits-card__desc">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasBenefits;