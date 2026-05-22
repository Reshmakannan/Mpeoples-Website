import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import '@tabler/icons-webfont/dist/tabler-icons.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homepage from "./components/Homepage";

import UIUXPage from "./Pages/uiux";
import WebPage from "./Pages/web";
import AppdevPage from "./Pages/appdev";
import SaasPage from "./Pages/saas";
import Dmpage from "./Pages/dm";
import GdPage from "./Pages/gd";
import VideoPage from "./Pages/video";

import AboutusPage from "./Pages/aboutus";
import TeamPage from "./Pages/team";
import BlogsPage from "./Pages/blogs";
import CareerPage from "./Pages/career";

// ✅ ADD THIS (NEW PAGE)
import JobDetails from "./components/jobdetails";

import ScrollToTop from "./Pages/ScrollToTop";

import "./Style/transition.css";

// 🔥 Wrapper component
function AppContent() {
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ ADDED

  // ✅ ADDED — resets overlay on every route change
  useEffect(() => {
    setTransitioning(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setTransitioning(true);

    setTimeout(() => {
      navigate(path);
      setTransitioning(false);
    }, 700);
  };

  return (
    <>
      <ScrollToTop />

      <Navbar onNavigate={handleNavigation} />

      <div className={`transition-wrapper ${transitioning ? "active" : ""}`}>
        <div className="layer layer-black"></div>
        <div className="layer layer-gold"></div>
        <div className="layer layer-white"></div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Homepage />
            </>
          }
        />

        <Route path="/uiux-design" element={<UIUXPage />} />
        <Route path="/web-development" element={<WebPage />} />
        <Route path="/app-development" element={<AppdevPage />} />
        <Route path="/saas-development" element={<SaasPage />} />
        <Route path="/digital-marketing" element={<Dmpage />} />
        <Route path="/graphic-design" element={<GdPage />} />
        <Route path="/video-editing" element={<VideoPage />} />

        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/team-page" element={<TeamPage />} />
        <Route path="/blogs-page" element={<BlogsPage />} />
        <Route path="/career-page" element={<CareerPage />} />

        {/* ✅ NEW ROUTE FOR APPLY BUTTON */}
        <Route path="/job-details/:role" element={<JobDetails />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;