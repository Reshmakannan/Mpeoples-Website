import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Style/careeroppurtunity.css";

const jobs = [
  { role: "UI / UX Design", type: "Full-Time", location: "Salem, India", tag: "Designer" },
  { role: "Web Development", type: "Full-Time", location: "Salem, India", tag: "Developer" },
  { role: "App Development", type: "Full-Time", location: "Salem, India", tag: "Developer" },
  { role: "SaaS Development", type: "Full-Time", location: "Salem, India", tag: "Developer" },
  { role: "Digital Marketing", type: "Full-Time", location: "Salem, India", tag: "Marketing" },
  { role: "Graphic Design", type: "Full-Time", location: "Salem, India", tag: "Designer" },
  { role: "Video Editing", type: "Full-Time", location: "Salem, India", tag: "Editor" },
];

// ✅ FIXED slugify (handles "/" and special chars)
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove symbols like "/"
    .replace(/\s+/g, "-");

const CareerOpportunity = () => {
  const navigate = useNavigate();

  return (
    <section className="co-wrapper">
      <h1 className="co-title">Career Opportunity</h1>

      <div className="co-list">
        {jobs.map((job, index) => (
          <motion.div
            className="co-item"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            viewport={{ once: true }}
          >
            {/* LEFT */}
            <div className="co-item-left">
              <h2 className="co-item-role">{job.role}</h2>

              <div className="co-item-meta">
                <span className="co-meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {job.type}
                </span>

                <span className="co-meta-divider">|</span>

                <span className="co-meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {job.location}
                </span>

                <span className="co-tag">{job.tag}</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="co-item-right">
              <button
                className="co-apply-btn"
                onClick={() =>
                  navigate(`/job-details/${slugify(job.role)}`)
                }
              >
                Apply
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareerOpportunity;