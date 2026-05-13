import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

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
import ScrollToTop from "./Pages/ScrollToTop";

import "./Style/transition.css";

// 🔥 Wrapper component (needed for useNavigate)
function AppContent() {
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  // 🔥 Navigation handler
  const handleNavigation = (path) => {
    setTransitioning(true);

    setTimeout(() => {
      navigate(path);
      setTransitioning(false);
    }, 700); // match animation duration
  };

  return (
    <>
      <ScrollToTop />

      {/* ✅ Pass navigation function to Navbar */}
      <Navbar onNavigate={handleNavigation} />

      {/* ✅ Transition Overlay */}
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