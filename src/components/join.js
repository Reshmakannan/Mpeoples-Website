import React, { useEffect, useRef, useState } from "react";
import "../Style/join.css";
import networkImg from "../assets/blog.png";

export default function JoinNetwork() {
  const sectionRef = useRef(null);
  const cardRef    = useRef(null);

  const [visible,   setVisible]   = useState(false);
  const [tilt,      setTilt]      = useState({ x: 0, y: 0 });
  const [glare,     setGlare]     = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const [showModal,  setShowModal]  = useState(false);
  const [pdfFile,    setPdfFile]    = useState(null);
  const [pdfError,   setPdfError]   = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [form, setForm] = useState({
    name: "", email: "", phone: "", location: "",
    qualification: "", experience_level: "Fresher",
    current_org: "", experience_years: "", notice_period: "",
    current_lpa: "", expected_lpa: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    setTilt({
      x: -((e.clientY - cy) / (rect.height / 2)) * 18,
      y:  ((e.clientX - cx) / (rect.width  / 2)) * 18,
    });
    setGlare({
      x: ((e.clientX - rect.left) / rect.width)  * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50 });
    setIsHovered(false);
  };

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
    if (formErrors[e.target.name])
      setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const mandatoryFields = {
    name: "Full Name", email: "Email", phone: "Phone Number",
    location: "Current Location", qualification: "Qualification",
    current_org: "Current Organisation",
    experience_years: "Experience", notice_period: "Notice Period",
  };

  const validateForm = () => {
    const errors = {};
    Object.entries(mandatoryFields).forEach(([key, label]) => {
      if (!form[key].trim()) errors[key] = `${label} is required`;
    });
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }

    const phone = "919487812715";
    const message =
      `*Resume Submission — Talent Network*\n\n` +
      `*Personal Details*\n` +
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `Location: ${form.location}\nQualification: ${form.qualification}\n` +
      `Experience Level: ${form.experience_level}\n\n` +
      `*Experience Details*\n` +
      `Current Organisation: ${form.current_org}\n` +
      `Experience: ${form.experience_years}\n` +
      `Notice Period: ${form.notice_period} days\n\n` +
      `*Others*\n` +
      `Current LPA: ₹${form.current_lpa}\nExpected LPA: ₹${form.expected_lpa}\n\n` +
      `*(CV/Resume: ${pdfFile ? pdfFile.name : "N/A"} — please send separately)*`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    setShowModal(false);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <section className={`jn-section ${visible ? "jn-visible" : ""}`} ref={sectionRef}>

      <div className="jn-blob jn-blob-1" />
      <div className="jn-blob jn-blob-2" />
      <div className="jn-grain" />

      <div className="jn-container">

        {/* ── LEFT ── */}
        <div className="jn-left">
          <p className="jn-eyebrow">
            <span className="jn-dot" />
            Talent Network · Always Open
          </p>

          <h2 className="jn-title">
            <span className="jn-line">Join Our</span>
            <span className="jn-line">Talent <em>Network</em></span>
          </h2>

          <p className="jn-desc">
            We're always looking for passionate individuals to be part of our
            journey. Share your profile and we'll connect when the perfect
            opportunity aligns — no waiting rooms, just real careers.
          </p>

          <button className="jn-btn" type="button" onClick={() => setShowModal(true)}>
            <span className="jn-btn-fill" />
            <span className="jn-btn-label">Submit Your Resume</span>
            <span className="jn-btn-arrow">→</span>
          </button>
        </div>

        {/* ── RIGHT — 3D CARD ── */}
        <div className="jn-right">
          <div className="jn-orbit jn-orbit-1" />
          <div className="jn-orbit jn-orbit-2" />
          <div className="jn-orbit-dot jn-orbit-dot-1" />
          <div className="jn-orbit-dot jn-orbit-dot-2" />

          <div
            className={`jn-card-wrap ${isHovered ? "hovered" : ""}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.04 : 1})`,
            }}
          >
            <div
              className="jn-glare"
              style={{
                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.18) 0%, transparent 65%)`,
              }}
            />
            <img src={networkImg} alt="Join Network" className="jn-img" />
            <div className="jn-overlay" />
            <div className="jn-live-badge">
              <span className="jn-live-pulse" />
              Hiring Now
            </div>
            <div className="jn-glass-bar">
              <p className="jn-glass-title">Your next chapter starts here</p>
              <p className="jn-glass-sub">Opportunities · Growth · Impact</p>
            </div>
            <div className="jn-edge-glow" />
          </div>

          <div className="jn-shadow-card" />
        </div>

      </div>

      {/* ══════════ MODAL ══════════ */}
      {showModal && (
        <div className="jn-modal-overlay" onClick={closeModal}>
          <div className="jn-modal" onClick={(e) => e.stopPropagation()}>

            <div className="jn-modal-header">
              <h2>Submit Your Resume</h2>
              <p>Fill in your details and we'll reach out when the right role opens up.</p>
              <button
                className="jn-modal-close"
                type="button"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            <div className="jn-modal-body">

              {/* PERSONAL DETAILS */}
              <div className="jn-form-section">
                <h3>Personal Details <span className="jn-required-note">* Required</span></h3>
                <div className="jn-form-grid">

                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </span>
                      <input name="name" placeholder="Enter your name *" value={form.name} onChange={handleFormChange} className={`jn-input ${formErrors.name ? "jn-input--error" : ""}`} />
                    </div>
                    {formErrors.name && <span className="jn-field-error">{formErrors.name}</span>}
                  </div>

                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </span>
                      <input name="email" placeholder="Enter your email *" value={form.email} onChange={handleFormChange} className={`jn-input ${formErrors.email ? "jn-input--error" : ""}`} />
                    </div>
                    {formErrors.email && <span className="jn-field-error">{formErrors.email}</span>}
                  </div>

                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>
                      </span>
                      <input name="phone" placeholder="Phone number *" value={form.phone} onChange={handleFormChange} className={`jn-input ${formErrors.phone ? "jn-input--error" : ""}`} />
                    </div>
                    {formErrors.phone && <span className="jn-field-error">{formErrors.phone}</span>}
                  </div>

                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      </span>
                      <input name="location" placeholder="Current location *" value={form.location} onChange={handleFormChange} className={`jn-input ${formErrors.location ? "jn-input--error" : ""}`} />
                    </div>
                    {formErrors.location && <span className="jn-field-error">{formErrors.location}</span>}
                  </div>

                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      </span>
                      <input name="qualification" placeholder="Qualification *" value={form.qualification} onChange={handleFormChange} className={`jn-input ${formErrors.qualification ? "jn-input--error" : ""}`} />
                    </div>
                    {formErrors.qualification && <span className="jn-field-error">{formErrors.qualification}</span>}
                  </div>

                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </span>
                      <select name="experience_level" value={form.experience_level} onChange={handleFormChange} className="jn-input jn-select">
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
              <div className="jn-form-section">
                <h3>Experience Details <span className="jn-required-note">* Required</span></h3>
                <div className="jn-form-grid">

                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      </span>
                      <input name="current_org" placeholder="Current Organisation *" value={form.current_org} onChange={handleFormChange} className={`jn-input ${formErrors.current_org ? "jn-input--error" : ""}`} />
                    </div>
                    {formErrors.current_org && <span className="jn-field-error">{formErrors.current_org}</span>}
                  </div>

                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      </span>
                      <input name="experience_years" placeholder="Experience (Years and Months) *" value={form.experience_years} onChange={handleFormChange} className={`jn-input ${formErrors.experience_years ? "jn-input--error" : ""}`} />
                    </div>
                    {formErrors.experience_years && <span className="jn-field-error">{formErrors.experience_years}</span>}
                  </div>

                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      </span>
                      <input name="notice_period" placeholder="Notice Period (Days) *" value={form.notice_period} onChange={handleFormChange} className={`jn-input ${formErrors.notice_period ? "jn-input--error" : ""}`} />
                    </div>
                    {formErrors.notice_period && <span className="jn-field-error">{formErrors.notice_period}</span>}
                  </div>

                </div>
              </div>

              {/* OTHERS */}
              <div className="jn-form-section">
                <h3>Others Details</h3>
                <div className="jn-form-grid">
                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon jn-rupee-icon">₹</span>
                      <input name="current_lpa" placeholder="Current LPA" value={form.current_lpa} onChange={handleFormChange} className="jn-input" />
                    </div>
                  </div>
                  <div className="jn-field">
                    <div className="jn-input-wrap">
                      <span className="jn-input-icon jn-rupee-icon">₹</span>
                      <input name="expected_lpa" placeholder="Expected LPA" value={form.expected_lpa} onChange={handleFormChange} className="jn-input" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CV UPLOAD */}
              <div className="jn-form-section">
                <h3>Upload CV / Resume</h3>
                <label className="jn-file-label">
                  <input type="file" accept="application/pdf" className="jn-file-hidden" onChange={handleFileChange} />
                  <div className={`jn-file-box ${pdfFile ? "jn-file-box--done" : ""}`}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={pdfFile ? "#16a34a" : "#082f6e"} strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className="jn-file-text">{pdfFile ? pdfFile.name : "Click to upload PDF"}</span>
                    <span className="jn-file-hint">PDF files only</span>
                  </div>
                </label>
                {pdfError && <p className="jn-pdf-error">{pdfError}</p>}
                {pdfFile && !pdfError && <p className="jn-pdf-success">✓ {pdfFile.name} ready to submit</p>}
              </div>

            </div>

            <div className="jn-modal-footer">
              <button className="jn-cancel-btn" type="button" onClick={closeModal}>Cancel</button>
              <button className="jn-submit-btn" type="button" onClick={handleSubmit}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M13.01 0C6.32 0 .668 5.652.668 12.34c0 2.176.57 4.312 1.653 6.196L.054 23.999l5.65-1.483a12.332 12.332 0 0 0 7.306 2.34C19.698 24.856 25.35 19.203 25.35 12.515 25.35 5.828 19.698.176 13.01.176V0zm.003 21.999a10.256 10.256 0 0 1-5.23-1.434l-.374-.223-3.352.88.897-3.264-.243-.382a10.239 10.239 0 0 1-1.571-5.478C3.14 6.841 7.705 2.277 13.01 2.277c2.573 0 4.99 1.003 6.81 2.824a9.582 9.582 0 0 1 2.824 6.81c.003 5.308-4.562 9.088-9.631 9.088z"/></svg>
                Submit via WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}