import React from 'react';
import '../Style/appdevbenefits.css';

import brand from '../assets/brand.png';
import scalability from '../assets/scalability.png';
import deployment from '../assets/deployment.png';
import business from '../assets/business.png';
import blue from '../assets/blue.png';

const Appdevbenefits = [
  {
    id: 1,
    image: brand,
    title: 'Hybrid App Development',
    description: 'Hybrid apps enable faster development and reach multiple platforms with a single solution, delivering smooth performance and a great user experience.',
  },
  {
    id: 2,
    image: scalability,
    title: 'Native App Development',
    description: 'Native apps are built for each platform to deliver high performance and a smooth user experience while fully utilizing device features.',
  },
  {
    id: 3,
    image: deployment,
    title: 'Cross-Platform App Development',
    description: 'We build cross-platform apps that run smoothly on both Android and iOS, reducing development time and cost.',
  },
  {
    id: 4,
    image: business,
    title: 'Android App Development',
    description: 'Our team develops robust Android applications tailored to your business requirements. We ensure optimized performance, compatibility across devices, and seamless functionality.',
  },
  {
    id: 5,
    image: blue,
    title: 'iOS App Development',
    description: 'We design and develop high-quality iOS applications for Apple devices, focusing on smooth performance, intuitive design, and seamless integration with the Apple ecosystem.',
  },
  {
    id: 6,
    image: blue,
    title: 'Windows App Development',
    description: 'We also develop Windows-based applications tailored to enterprise environments.We also develop Windows-based applications tailored to enterprise and business environments, ensuring stable performance and seamless functionality.',
  },
];

const AppBenefits = () => {
  return (
    <section className="appdevbenefits-section">
      <div className="appdevbenefits-inner">
        <h2 className="appdevbenefits-heading">
          Mobile App Development Service
        </h2>

        {/* FIRST ROW */}
        <div className="appdevbenefits-row">
          {Appdevbenefits.slice(0, 3).map((item) => (
            <div className="appdevbenefits-card" key={item.id}>
              <div className="appdevbenefits-card__img-wrap">
                <img src={item.image} alt={item.title} className="appdevbenefits-card__img" />
              </div>
              <h3 className="appdevbenefits-card__title">{item.title}</h3>
              <p className="appdevbenefits-card__desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="appdevbenefits-row">
          {Appdevbenefits.slice(3, 6).map((item) => (
            <div className="appdevbenefits-card" key={item.id}>
              <div className="appdevbenefits-card__img-wrap">
                <img src={item.image} alt={item.title} className="appdevbenefits-card__img" />
              </div>
              <h3 className="appdevbenefits-card__title">{item.title}</h3>
              <p className="appdevbenefits-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppBenefits;