import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Style/jobdetails.css";

const JobDetails = () => {
  const { role } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfError, setPdfError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    qualification: "",
    experience_level: "Fresher",
    current_org: "",
    experience_years: "",
    notice_period: "",
    current_lpa: "",
    expected_lpa: "",
  });

  const jobs = {
    "ui-ux-design": {
      title: "UI / UX Design",
      type: "Full-Time",
      location: "Salem, India",
      tag: "Designer",
      about: [
        "We are looking for a creative UI/UX Designer to craft engaging user experiences.",
        "You will work closely with developers and stakeholders to design intuitive interfaces.",
        "Your designs will directly impact user satisfaction and product success.",
      ],
      responsibilities: [
        "Design user-friendly UI layouts",
        "Create wireframes and prototypes",
        "Conduct user research and analysis",
        "Collaborate with developers",
        "Improve usability and accessibility",
        "Maintain design consistency",
        "Work with Figma or Adobe XD",
        "Test and iterate designs",
      ],
      qualifications: [
        "Figma / Adobe XD knowledge",
        "Strong UI/UX fundamentals",
        "Creative thinking ability",
        "Basic HTML/CSS understanding",
        "Good communication skills",
      ],
    },
    "web-development": {
      title: "Web Development",
      type: "Full-Time",
      location: "Salem, India",
      tag: "Developer",
      about: [
        "We are seeking a skilled Web Developer to build modern websites.",
        "You will develop responsive and high-performance web applications.",
        "You will collaborate with teams to deliver scalable solutions.",
      ],
      responsibilities: [
        "Develop responsive websites",
        "Write clean and efficient code",
        "Integrate APIs",
        "Fix bugs and issues",
        "Optimize performance",
        "Collaborate with designers",
        "Maintain code quality",
        "Deploy web applications",
      ],
      qualifications: [
        "HTML, CSS, JavaScript",
        "React or similar framework",
        "Problem-solving skills",
        "Basic backend knowledge",
        "Version control (Git)",
      ],
    },
    "app-development": {
      title: "App Development",
      type: "Full-Time",
      location: "Salem, India",
      tag: "Developer",
      about: [
        "We are hiring App Developers to build mobile applications.",
        "You will create smooth and efficient mobile experiences.",
        "You will work on performance and usability improvements.",
      ],
      responsibilities: [
        "Develop mobile apps",
        "Fix bugs and crashes",
        "Optimize app performance",
        "Integrate APIs",
        "Test applications",
        "Collaborate with teams",
        "Maintain app updates",
        "Ensure UI consistency",
      ],
      qualifications: [
        "React Native / Flutter",
        "Mobile app basics",
        "Problem-solving skills",
        "API integration knowledge",
        "Debugging skills",
      ],
    },
    "saas-development": {
      title: "SaaS Development",
      type: "Full-Time",
      location: "Salem, India",
      tag: "Developer",
      about: [
        "We are looking for developers to build SaaS products.",
        "You will work on scalable cloud-based systems.",
        "You will contribute to full-stack development.",
      ],
      responsibilities: [
        "Build SaaS platforms",
        "Develop backend services",
        "Manage cloud systems",
        "Optimize performance",
        "Handle databases",
        "Ensure security",
        "Collaborate with teams",
        "Maintain deployments",
      ],
      qualifications: [
        "Full-stack knowledge",
        "Cloud basics",
        "Database understanding",
        "Problem-solving skills",
        "API development",
      ],
    },
    "digital-marketing": {
      title: "Digital Marketing",
      type: "Full-Time",
      location: "Salem, India",
      tag: "Marketing",
      about: [
        "We are hiring Digital Marketers to grow online presence.",
        "You will manage campaigns and drive traffic.",
        "You will analyze performance and improve strategies.",
      ],
      responsibilities: [
        "Run marketing campaigns",
        "Handle social media",
        "SEO optimization",
        "Content planning",
        "Analyze performance",
        "Email marketing",
        "Brand promotion",
        "Generate leads",
      ],
      qualifications: [
        "Marketing knowledge",
        "SEO basics",
        "Content skills",
        "Analytics understanding",
        "Communication skills",
      ],
    },
    "graphic-design": {
      title: "Graphic Design",
      type: "Full-Time",
      location: "Salem, India",
      tag: "Designer",
      about: [
        "We are looking for Graphic Designers to create visual content.",
        "You will design branding and marketing materials.",
        "You will work closely with marketing teams.",
      ],
      responsibilities: [
        "Design posters and banners",
        "Create brand visuals",
        "Edit images",
        "Work with design tools",
        "Maintain brand identity",
        "Collaborate with teams",
        "Prepare assets",
        "Handle revisions",
      ],
      qualifications: [
        "Photoshop / Illustrator",
        "Creative thinking",
        "Design fundamentals",
        "Attention to detail",
        "Communication skills",
      ],
    },
    "video-editing": {
      title: "Video Editing",
      type: "Full-Time",
      location: "Salem, India",
      tag: "Editor",
      about: [
        "We are hiring Video Editors to create engaging content.",
        "You will edit and enhance videos for multiple platforms.",
        "You will work with creative teams to deliver quality output.",
      ],
      responsibilities: [
        "Edit video content",
        "Add effects and transitions",
        "Sync audio",
        "Optimize video quality",
        "Create reels and ads",
        "Collaborate with teams",
        "Manage timelines",
        "Export final videos",
      ],
      qualifications: [
        "Premiere Pro / After Effects",
        "Editing skills",
        "Creativity",
        "Time management",
        "Attention to detail",
      ],
    },
  };

  const job = jobs[role];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      setPdfError("Only PDF files are accepted. Please upload a valid PDF.");
      setPdfFile(null);
      e.target.value = "";
      return;
    }
    setPdfError("");
    setPdfFile(file);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // clear error on change
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: "" });
    }
  };

  // mandatory fields: personal + experience details
  const mandatoryFields = {
    name: "Full Name",
    email: "Email",
    phone: "Phone Number",
    location: "Current Location",
    qualification: "Qualification",
    current_org: "Current Organisation",
    experience_years: "Experience",
    notice_period: "Notice Period",
  };

  const validateForm = () => {
    const errors = {};
    Object.entries(mandatoryFields).forEach(([key, label]) => {
      if (!form[key].trim()) {
        errors[key] = `${label} is required`;
      }
    });
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const phone = "919487812715";
    const message =
      `*New Job Application — ${job.title}*\n\n` +
      `*Personal Details*\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Location: ${form.location}\n` +
      `Qualification: ${form.qualification}\n` +
      `Experience Level: ${form.experience_level}\n\n` +
      `*Experience Details*\n` +
      `Current Organisation: ${form.current_org}\n` +
      `Experience: ${form.experience_years}\n` +
      `Notice Period: ${form.notice_period} days\n\n` +
      `*Others*\n` +
      `Current LPA: ₹${form.current_lpa}\n` +
      `Expected LPA: ₹${form.expected_lpa}\n\n` +
      `*(CV/Resume: ${pdfFile.name} — please send separately)*`;

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setShowModal(false);
  };

  if (!job) {
    return (
      <div className="jd-wrapper jd-notfound">
        <h2>Job Not Found</h2>
        <button className="jd-back-btn" onClick={() => navigate("/career-page")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="jd-wrapper">
      <div className="jd-header">
        <h1 className="jd-title">{job.title}</h1>
        <p className="jd-sub">
          {job.type} • {job.location} • {job.tag}
        </p>
      </div>

      <div className="jd-card">

        {/* ABOUT */}
        <div className="jd-block">
          <h2>About this Role</h2>
          <ul>
            {job.about.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* RESPONSIBILITIES */}
        <div className="jd-block">
          <h2>Roles & Responsibilities</h2>
          <ul>
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* QUALIFICATIONS */}
        <div className="jd-block">
          <h2>Qualifications & Requirements</h2>
          <ul>
            {job.qualifications.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* APPLY SECTION */}
        <div className="jd-apply">
          <h3>Submit Your CV / Resume</h3>
          <p className="jd-upload-note">
            Please upload your CV / Resume in PDF format.
          </p>

          {/* FILE UPLOAD BOX */}
          <label className="jd-file-label">
            <input
              type="file"
              accept="application/pdf"
              className="jd-file-hidden"
              onChange={handleFileChange}
            />
            <div className={`jd-file-box ${pdfFile ? "jd-file-box--done" : ""}`}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={pdfFile ? "#16a34a" : "#082f6e"} strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span className="jd-file-text">
                {pdfFile ? pdfFile.name : "Click to upload your CV / Resume"}
              </span>
              <span className="jd-file-hint">PDF files only — required before applying</span>
            </div>
          </label>

          {pdfError && <p className="jd-pdf-error">{pdfError}</p>}
          {pdfFile && !pdfError && (
            <p className="jd-pdf-success">✓ {pdfFile.name} ready to submit</p>
          )}

          {/* APPLY BUTTON — disabled until PDF is uploaded */}
          {!pdfFile ? (
            <div className="jd-btn-disabled-wrap">
              <button className="jd-btn jd-btn--disabled" disabled>
                Apply for this Position
              </button>
              <span className="jd-btn-hint">⬆ Upload your CV / Resume first to proceed</span>
            </div>
          ) : (
            <button className="jd-btn" onClick={() => setShowModal(true)}>
              Apply for this Position
            </button>
          )}
        </div>

      </div>

      {/* ===================== MODAL ===================== */}
      {showModal && (
        <div className="jd-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="jd-modal" onClick={(e) => e.stopPropagation()}>

            <div className="jd-modal-header">
              <h2>Application Form</h2>
              <p>Applying for: <strong>{job.title}</strong></p>
              <button className="jd-modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>

            <div className="jd-modal-body">

              {/* PERSONAL DETAILS */}
              <div className="jd-form-section">
                <h3>Personal Details <span className="jd-required-note">* Required</span></h3>
                <div className="jd-form-grid">

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </span>
                      <input name="name" placeholder="Enter your name *" value={form.name} onChange={handleFormChange} className={`jd-input ${formErrors.name ? "jd-input--error" : ""}`} />
                    </div>
                    {formErrors.name && <span className="jd-field-error">{formErrors.name}</span>}
                  </div>

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </span>
                      <input name="email" placeholder="Enter your email *" value={form.email} onChange={handleFormChange} className={`jd-input ${formErrors.email ? "jd-input--error" : ""}`} />
                    </div>
                    {formErrors.email && <span className="jd-field-error">{formErrors.email}</span>}
                  </div>

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>
                      </span>
                      <input name="phone" placeholder="Phone number *" value={form.phone} onChange={handleFormChange} className={`jd-input ${formErrors.phone ? "jd-input--error" : ""}`} />
                    </div>
                    {formErrors.phone && <span className="jd-field-error">{formErrors.phone}</span>}
                  </div>

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      </span>
                      <input name="location" placeholder="Current location *" value={form.location} onChange={handleFormChange} className={`jd-input ${formErrors.location ? "jd-input--error" : ""}`} />
                    </div>
                    {formErrors.location && <span className="jd-field-error">{formErrors.location}</span>}
                  </div>

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      </span>
                      <input name="qualification" placeholder="Qualification *" value={form.qualification} onChange={handleFormChange} className={`jd-input ${formErrors.qualification ? "jd-input--error" : ""}`} />
                    </div>
                    {formErrors.qualification && <span className="jd-field-error">{formErrors.qualification}</span>}
                  </div>

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </span>
                      <select name="experience_level" value={form.experience_level} onChange={handleFormChange} className="jd-input jd-select">
                        <option>Fresher</option>
                        <option>0-1 Year</option>
                        <option>1-3 Years</option>
                        <option>3-5 Years</option>
                        <option>5+ Years</option>
                      </select>
                    </div>
                  </div>

                </div>
              </div>

              {/* EXPERIENCE DETAILS */}
              <div className="jd-form-section">
                <h3>Experience Details <span className="jd-required-note">* Required</span></h3>
                <div className="jd-form-grid">

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      </span>
                      <input name="current_org" placeholder="Current Organisation *" value={form.current_org} onChange={handleFormChange} className={`jd-input ${formErrors.current_org ? "jd-input--error" : ""}`} />
                    </div>
                    {formErrors.current_org && <span className="jd-field-error">{formErrors.current_org}</span>}
                  </div>

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </span>
                      <input name="experience_years" placeholder="Experience (Years and Months) *" value={form.experience_years} onChange={handleFormChange} className={`jd-input ${formErrors.experience_years ? "jd-input--error" : ""}`} />
                    </div>
                    {formErrors.experience_years && <span className="jd-field-error">{formErrors.experience_years}</span>}
                  </div>

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      </span>
                      <input name="notice_period" placeholder="Notice Period (Days) *" value={form.notice_period} onChange={handleFormChange} className={`jd-input ${formErrors.notice_period ? "jd-input--error" : ""}`} />
                    </div>
                    {formErrors.notice_period && <span className="jd-field-error">{formErrors.notice_period}</span>}
                  </div>

                </div>
              </div>

              {/* OTHERS */}
              <div className="jd-form-section">
                <h3>Others Details</h3>
                <div className="jd-form-grid">

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon jd-rupee-icon">₹</span>
                      <input name="current_lpa" placeholder="Current LPA" value={form.current_lpa} onChange={handleFormChange} className="jd-input" />
                    </div>
                  </div>

                  <div className="jd-field">
                    <div className="jd-input-wrap">
                      <span className="jd-input-icon jd-rupee-icon">₹</span>
                      <input name="expected_lpa" placeholder="Expected LPA" value={form.expected_lpa} onChange={handleFormChange} className="jd-input" />
                    </div>
                  </div>

                </div>
              </div>

              {/* CV ATTACHED */}
              {pdfFile && (
                <div className="jd-cv-attached">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  CV Attached: <strong>{pdfFile.name}</strong>
                </div>
              )}

            </div>

            <div className="jd-modal-footer">
              <button className="jd-cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="jd-submit-btn" onClick={handleSubmit}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M13.01 0C6.32 0 .668 5.652.668 12.34c0 2.176.57 4.312 1.653 6.196L.054 23.999l5.65-1.483a12.332 12.332 0 0 0 7.306 2.34C19.698 24.856 25.35 19.203 25.35 12.515 25.35 5.828 19.698.176 13.01.176V0zm.003 21.999a10.256 10.256 0 0 1-5.23-1.434l-.374-.223-3.352.88.897-3.264-.243-.382a10.239 10.239 0 0 1-1.571-5.478C3.14 6.841 7.705 2.277 13.01 2.277c2.573 0 4.99 1.003 6.81 2.824a9.582 9.582 0 0 1 2.824 6.81c.003 5.308-4.562 9.088-9.631 9.088z"/></svg>
                Submit via WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default JobDetails;