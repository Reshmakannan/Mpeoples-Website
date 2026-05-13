import React from "react";
import "../Style/Saasindustries.css";

import trapLeft from "../assets/left-corner.png";   
import trapRight from "../assets/right-corner.png";

import crm from "../assets/desing1 (1).png";
import erp from "../assets/desing1 (2).png";
import student from "../assets/desing1 (3).png";
import hr from "../assets/desing1 (4).png";
import data from "../assets/desing1 (5).png";
import institute from "../assets/desing1 (6).png";
import inventory from "../assets/desing1 (7).png";
import invoice from "../assets/desing1 (8).png";
import rental from "../assets/design1 10.png";
import cab from "../assets/design1 9.png";

const services = [
  { id: 1, title: "Custom CRM", image: crm },
  { id: 2, title: "ERP software", image: erp },
  { id: 3, title: "Student management", image: student },
  { id: 4, title: "HR management", image: hr },
  { id: 5, title: "Data management", image: data },
  { id: 6, title: "Institute management", image: institute },
  { id: 7, title: "Inventory management", image: inventory },
  { id: 8, title: "Invoice management", image: invoice },
  { id: 9, title: "Rental service management", image: rental },
  { id: 10, title: "Cab booking management", image: cab },
];

const SaasProvide = () => {

  const row1 = services.slice(0, 4);
  const row2 = services.slice(4, 8);
  const row3 = services.slice(8, 10);

  return (
    <section className="saasi-section">

        <img src={trapLeft} alt="" className="trap-left" />
        <img src={trapRight} alt="" className="trap-right" />

      <h2 className="saasi-title">
        Software we provide
      </h2>

      {/* Row 1 */}
      <div className="saasi-grid saasi-grid-4">
        {row1.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </div>

      <div className="saasi-divide" />

      {/* Row 2 */}
      <div className="saasi-grid saasi-grid-4">
        {row2.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </div>

      <div className="saasi-dividers" />

      {/* Row 3 */}
      <div className="saasi-grid saasi-grid-2-center">
        {row3.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </div>

      

    </section>
  );
};

const ServiceCard = ({ service }) => (
  <div className="saasi-card">

    <div className="saasi-icon">
      <img
        src={service.image}
        alt={service.title}
        className="saasi-img"
      />
    </div>

    <p className="saasi-card-title">
      {service.title}
    </p>

  </div>
);

export default SaasProvide;