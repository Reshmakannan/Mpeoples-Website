import React from "react";
import { motion } from "framer-motion";
import "../Style/whyjoinus.css";
import bgImage from "../assets/join.png";

const data = [
  {
    num: "1",
    circleClass: "c1",
    title: "Growth & Career Development",
    desc: "We provide a structured environment that supports continuous learning, skill enhancement, and long-term career progression through real-world projects and mentorship.",
  },
  {
    num: "2",
    circleClass: "c2",
    title: "Innovation & Modern Technology",
    desc: "Work with cutting-edge technologies and contribute to innovative solutions that create meaningful impact in a fast-evolving digital landscape.",
  },
  {
    num: "3",
    circleClass: "c3",
    title: "Collaborative & Inclusive Culture",
    desc: "Be part of a supportive team that values collaboration, diverse perspectives, and a culture where every idea is respected and encouraged.",
  },
];

const WhyJoinUs = () => {
  return (
    <section className="wj-wrapper">

      {/* SECTION HEADING — above the card */}
      <div className="wj-section-header">
        <h1>Why Join Us?</h1>
        <p>Discover what makes us the right choice for your career growth and future.</p>
      </div>

      <div className="wj-card">

        {/* LEFT DARK PANEL */}
        <div
          className="wj-left"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="wj-left-overlay" />
          {/* <div className="wj-left-content">
            <h2>Why<br />Join<br />Us?</h2>
            <p>The numbers speak<br />for themselves.</p>
          </div> */}
        </div>

        {/* CIRCLES COLUMN */}
        <div className="wj-middle">
          {data.map((item, index) => (
            <div className="wj-node" key={index}>
              <motion.div
                className={`wj-circle ${item.circleClass}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {item.num}
              </motion.div>
              {index < data.length - 1 && <div className="wj-vline" />}
            </div>
          ))}
        </div>

        {/* RIGHT WHITE PANEL */}
        <div className="wj-right">
          {data.map((item, index) => (
            <motion.div
              className="wj-row"
              key={index}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyJoinUs;