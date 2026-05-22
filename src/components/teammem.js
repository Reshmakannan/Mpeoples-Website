import { useState } from "react";
import "../Style/teammem.css";

import photoPoovarasan from "../assets/poovarsan.png";
// import photoHarish     from "../assets/poovarsan.png";
// import photoVignesh    from "../assets/poovarsan.png";
// import photoRam        from "../assets/poovarsan.png";
// import photoDinesh     from "../assets/team/photos/poovarasan.png";
// import photoTejas      from "../assets/team/photos/poovarasan.png";
// import photoMadhan     from "../assets/team/photos/poovarasan.png";
// import photoAnandh     from "../assets/team/photos/poovarasan.png";
// import photoKaviya     from "../assets/team/photos/poovarasan.png";
// import photoSurya      from "../assets/team/photos/poovarasan.png";
// import photoPriya      from "../assets/team/photos/poovarasan.png";
// import photoArun       from "../assets/team/photos/poovarasan.png";
// import photoMeena      from "../assets/team/photos/poovarasan.png";
// import photoKarthik    from "../assets/team/photos/poovarasan.png";
// import photoLakshmi    from "../assets/team/photos/poovarasan.png";
// import photoVijay      from "../assets/team/photos/poovarasan.png";

import gifPoovarasan from "../assets/poo.mp4";
// import gifHarish     from "./assets/team/gifs/harish.gif";
// import gifVignesh    from "./assets/team/gifs/vignesh.gif";
// import gifRam        from "./assets/team/gifs/ram.gif";
// import gifDinesh     from "./assets/team/gifs/dinesh.gif";
// import gifTejas      from "./assets/team/gifs/tejas.gif";
// import gifMadhan     from "./assets/team/gifs/madhan.gif";
// import gifAnandh     from "./assets/team/gifs/anandh.gif";
// import gifKaviya     from "./assets/team/gifs/kaviya.gif";
// import gifSurya      from "./assets/team/gifs/surya.gif";
// import gifPriya      from "./assets/team/gifs/priya.gif";
// import gifArun       from "./assets/team/gifs/arun.gif";
// import gifMeena      from "./assets/team/gifs/meena.gif";
// import gifKarthik    from "./assets/team/gifs/karthik.gif";
// import gifLakshmi    from "./assets/team/gifs/lakshmi.gif";
// import gifVijay      from "./assets/team/gifs/vijay.gif";

// ─── Team data ───────────────────────────────────────────────────────────────
const teamMembers = [
  // ── Row 1 ──
  {
    id: 1,
    name: "Poovarasan R",
    role: "Sr. UI / UX Designer",
    linkedin: "https://linkedin.com/in/poovarasan",
    bgColor: "#a8d8ea",
    accentColor: "#FFD93D",
    photo: photoPoovarasan,
    gif: gifPoovarasan,
  },
//   {
//     id: 2,
//     name: "Harish S",
//     role: "Sr. Video Editor",
//     linkedin: "https://linkedin.com/in/harish",
//     bgColor: "#a8d8ea",
//     accentColor: "#FF6B6B",
//     photo: photoHarish,
//     gif: gifHarish,
//   },
//   {
//     id: 3,
//     name: "Vignesh S",
//     role: "Sr. Digital Marketing",
//     linkedin: "https://linkedin.com/in/vignesh",
//     bgColor: "#a8d8ea",
//     accentColor: "#6BCB77",
//     photo: photoVignesh,
//     gif: gifVignesh,
//   },
//   {
//     id: 4,
//     name: "Ram G",
//     role: "Sr. APP Developer",
//     linkedin: "https://linkedin.com/in/ram",
//     bgColor: "#a8d8ea",
//     accentColor: "#4D96FF",
//     photo: photoRam,
//     gif: gifRam,
//   },

//   // ── Row 2 ──
//   {
//     id: 5,
//     name: "Dinesh S",
//     role: "Sr. Graphic Designer",
//     linkedin: "https://linkedin.com/in/dinesh",
//     bgColor: "#FFD93D",
//     accentColor: "#FF6B6B",
//     photo: photoDinesh,
//     gif: gifDinesh,
//   },
//   {
//     id: 6,
//     name: "Tejas",
//     role: "Sr. Web Developer",
//     linkedin: "https://linkedin.com/in/tejas",
//     bgColor: "#a8d8ea",
//     accentColor: "#FFD93D",
//     photo: photoTejas,
//     gif: gifTejas,
//   },
//   {
//     id: 7,
//     name: "Madhan Prasath P",
//     role: "Sr. Content Writer",
//     linkedin: "https://linkedin.com/in/madhan",
//     bgColor: "#a8d8ea",
//     accentColor: "#6BCB77",
//     photo: photoMadhan,
//     gif: gifMadhan,
//   },
//   {
//     id: 8,
//     name: "Anandh R",
//     role: "Sr. SEO Specialist",
//     linkedin: "https://linkedin.com/in/anandh",
//     bgColor: "#a8d8ea",
//     accentColor: "#4D96FF",
//     photo: photoAnandh,
//     gif: gifAnandh,
//   },

//   // ── Row 3 ──
//   {
//     id: 9,
//     name: "Kaviya M",
//     role: "Sr. Social Media Manager",
//     linkedin: "https://linkedin.com/in/kaviya",
//     bgColor: "#a8d8ea",
//     accentColor: "#FF6B6B",
//     photo: photoKaviya,
//     gif: gifKaviya,
//   },
//   {
//     id: 10,
//     name: "Surya K",
//     role: "Sr. Motion Designer",
//     linkedin: "https://linkedin.com/in/surya",
//     bgColor: "#FFD93D",
//     accentColor: "#4D96FF",
//     photo: photoSurya,
//     gif: gifSurya,
//   },
//   {
//     id: 11,
//     name: "Priya N",
//     role: "Sr. Brand Strategist",
//     linkedin: "https://linkedin.com/in/priya",
//     bgColor: "#a8d8ea",
//     accentColor: "#FFD93D",
//     photo: photoPriya,
//     gif: gifPriya,
//   },
//   {
//     id: 12,
//     name: "Arun P",
//     role: "Sr. React Developer",
//     linkedin: "https://linkedin.com/in/arun",
//     bgColor: "#a8d8ea",
//     accentColor: "#6BCB77",
//     photo: photoArun,
//     gif: gifArun,
//   },

//   // ── Row 4 ──
//   {
//     id: 13,
//     name: "Meena R",
//     role: "Sr. Data Analyst",
//     linkedin: "https://linkedin.com/in/meena",
//     bgColor: "#a8d8ea",
//     accentColor: "#FF6B6B",
//     photo: photoMeena,
//     gif: gifMeena,
//   },
//   {
//     id: 14,
//     name: "Karthik S",
//     role: "Sr. Backend Developer",
//     linkedin: "https://linkedin.com/in/karthik",
//     bgColor: "#a8d8ea",
//     accentColor: "#FFD93D",
//     photo: photoKarthik,
//     gif: gifKarthik,
//   },
//   {
//     id: 15,
//     name: "Lakshmi V",
//     role: "Sr. Product Manager",
//     linkedin: "https://linkedin.com/in/lakshmi",
//     bgColor: "#FFD93D",
//     accentColor: "#4D96FF",
//     photo: photoLakshmi,
//     gif: gifLakshmi,
//   },
//   {
//     id: 16,
//     name: "Vijay T",
//     role: "Sr. DevOps Engineer",
//     linkedin: "https://linkedin.com/in/vijay",
//     bgColor: "#a8d8ea",
//     accentColor: "#6BCB77",
//     photo: photoVijay,
//     gif: gifVijay,
//   },
];

// ─── Icons ───────────────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
      0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
      1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
      7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063
      2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0
      0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24
      23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FlipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 4v6h6" />
    <path d="M23 20v-6h-6" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10" />
    <path d="M3.51 15a9 9 0 0 0 14.85 3.36L23 14" />
  </svg>
);

const FlipBackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9A9 9 0 0 1 18.36 5.64L23 10" />
    <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
  </svg>
);

// ─── Single card ─────────────────────────────────────────────────────────────
function TeamCard({ member }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="team-card">
      <div className={`card-inner${flipped ? " flipped" : ""}`}>

        {/* FRONT */}
        <div className="card-front" style={{ backgroundColor: member.bgColor }}>
          <button
            className="flip-btn"
            onClick={() => setFlipped(true)}
            aria-label="Flip card"
            title="See more"
          >
            <FlipIcon />
          </button>
          <div className="photo-area">
            <img src={member.photo} alt={member.name} className="member-photo" />
          </div>
        </div>

        {/* BACK */}
        <div className="card-back" style={{ backgroundColor: member.accentColor }}>
          <button
            className="flip-btn flip-btn-back"
            onClick={() => setFlipped(false)}
            aria-label="Flip back"
            title="Flip back"
          >
            <FlipBackIcon />
          </button>
          <div className="gif-area">
            <img src={member.gif} alt={`${member.name} gif`} className="member-gif" />
          </div>
          <div className="back-tagline">✨ That's me!</div>
        </div>
      </div>

      {/* INFO BELOW CARD */}
      <div className="member-info">
        <div className="member-name-row">
          <span className="member-name">{member.name}</span>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
        <span className="member-role">{member.role}</span>
      </div>
    </div>
  );
}

// ─── Section export ───────────────────────────────────────────────────────────
export default function TeamMem() {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet our Team of creative experts</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}