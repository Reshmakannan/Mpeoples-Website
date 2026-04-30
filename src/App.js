import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homepage from "./components/Homepage";
import UIUXPage from "./Pages/uiux";
import WebPage from "./Pages/web";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Homepage />
            </>
          }
        />

        {/* UI/UX page */}
        <Route path="/uiux-design" element={<UIUXPage />} />
        <Route path="/web-development" element={<WebPage />} />
      </Routes>
    </Router>
  );
}

export default App;