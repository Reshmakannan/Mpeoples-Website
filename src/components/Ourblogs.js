import React, { useState } from "react";
import "../Style/Ourblogs.css";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
// import blog4 from "../assets/blog4.png";
// import blog5 from "../assets/blog5.png";

const blogs = [
  {
    category: "COMPANY",
    title: "Introducing MPeoples",
    date: "February 20, 2026",
    image: blog1,
  },
  {
    category: "COMPANY",
    title: "Introducing MPeoples",
    date: "February 20, 2026",
    image: blog2,
  },
  {
    category: "COMPANY",
    title: "Introducing MPeoples",
    date: "February 20, 2026",
    image: blog3,
  },
//   {
//     category: "COMPANY",
//     title: "Introducing MPeoples",
//     date: "February 20, 2026",
//     image: blog4,
//   },
//   {
//     category: "COMPANY",
//     title: "Introducing MPeoples",
//     date: "February 20, 2026",
//     image: blog5,
//   },
];

const VISIBLE = 3;

const OurBlogs = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => Math.max(p - 1, 0));
  const next = () => setCurrent((p) => Math.min(p + 1, blogs.length - VISIBLE));

  const visible = blogs.slice(current, current + VISIBLE);

  return (
    <section className="ob-section">

      <div className="ob-heading-wrap">
        <h2 className="ob-heading">
          <span className="ob-heading-icon">☀</span>Our Blogs
        </h2>
      </div>

      <div className="ob-nav">
        <button className="ob-btn" onClick={prev} disabled={current === 0}>
          &#8249;
        </button>
        <button
          className="ob-btn ob-btn-active"
          onClick={next}
          disabled={current >= blogs.length - VISIBLE}
        >
          &#8250;
        </button>
      </div>

      <div className="ob-cards">
        {visible.map((b, i) => (
          <div className="ob-card" key={i}>
            <div className="ob-card-info">
              <span className="ob-category">{b.category}</span>
              <h3 className="ob-title">{b.title}</h3>
              <p className="ob-date">{b.date}</p>
            </div>
            <div className="ob-card-image">
              <img src={b.image} alt={b.title} className="ob-image" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default OurBlogs;