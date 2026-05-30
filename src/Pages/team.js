import React from "react";
import "../Style/team.css";

import mpeoplesLogo from "../assets/Vector.png";
import bgImage from "../assets/uiuxbg.png";

import leftCharacter from "../assets/left-character.png";
import rightCharacter from "../assets/right-character.png";

import TeamMem from "../components/teammem";
import TeamValue from "../components/teamvalue";
import Teampic from "../components/teampic.";
import Howwework from "../components/Howwework";
import TeamBuild from "../components/teambuild";
import Teammatter from "../components/teammatter";
import AddressSection from "../components/AddSection";
import FormsSection from "../components/Forms";
import OurBlogs from "../components/Ourblogs";
import FooterSection from "../components/Pagefooter";

function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="team-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* LEFT IMAGE */}
        <img src={leftCharacter} alt="" className="team-left-img" />

        {/* RIGHT IMAGE */}
        <img src={rightCharacter} alt="" className="team-right-img" />

        <div className="team-overlay">
          {/* ONLY LOGO */}
          <img src={mpeoplesLogo} alt="MPeoples Logo" className="team-logo" />

          <h1 className="team-title">Life at MPeoples</h1>

          <p className="team-description">
            A culture driven by creativity, teamwork, and innovation—where ideas
            grow and people succeed.
          </p>
        </div>
      </section>

      <TeamMem />
      <TeamValue />
      <Teampic />
      <Howwework />
      <TeamBuild />
      <Teammatter />
      <AddressSection />
      <FormsSection />
      <OurBlogs />
      <FooterSection />
    </>
  );
}

export default TeamPage;
