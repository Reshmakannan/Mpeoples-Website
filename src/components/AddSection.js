import React from "react";
import "../Style/Addresssection.css";
import headOfficeImg from "../assets/Idea.png";
import branchOfficeImg from "../assets/logo.png";
import office3Img from "../assets/lookit.png";
import office4Img from "../assets/lookit.png";

const offices = [
  {
    id: 1,
    image: headOfficeImg,
    title: "Head Office",
    address: `MPeoples Business Solutions Pvt Ltd,\n41-A1, 1st floor, Ramaniyagam Complex,\nSeva Street, Jayamkondacholapuram,\nUdayarpalayam, Ariyalur- 621802.`,
  },
  {
    id: 2,
    image: branchOfficeImg,
    title: "Branch Office",
    address: `MPeoples Business Solutions Pvt Ltd,\nNo 56/3-1 Ranga Nagar, 3rd Cross Street,\nSuramangalam, Salem-636005.`,
  },
  {
    id: 3,
    image: office3Img,
    title: "Branch Office",
    address: `MPeoples Business Solutions Pvt Ltd,\nNo 56/3-1 Ranga Nagar, 3rd Cross Street,\nSuramangalam, Salem-636005.`,
  },
  {
    id: 4,
    image: office4Img,
    title: "Branch Office",
    address: `MPeoples Business Solutions Pvt Ltd,\nNo 56/3-1 Ranga Nagar, 3rd Cross Street,\nSuramangalam, Salem-636005.`,
  },
];

function AddressSection() {
  return (
    <section className="address-section">
      <div className="address-grid">
        {offices.map((office) => (
          <div className="address-card" key={office.id}>
            <div className="card-img-wrap">
              <img src={office.image} alt={office.title} className="card-img" />
            </div>
            <h3 className="card-title">{office.title}</h3>
            <p className="card-address">
              {office.address.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AddressSection;