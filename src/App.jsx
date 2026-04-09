import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import AIBusinessOS from "./pages/AIBusinessOS";
import AIMarketing from "./pages/AIMarketing";
import SunsineClinicCaseStudy from "./pages/SunsineClinicCaseStudy";
import FitnessPowerGymCaseStudy from "./pages/FitnessPowerGymCaseStudy";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai-business-os" element={<AIBusinessOS />} />
        <Route path="/ai-marketing" element={<AIMarketing />} />
        <Route path="/case-studies/sunsine-clinic" element={<SunsineClinicCaseStudy />} />
        <Route path="/case-studies/fitness-power-gym" element={<FitnessPowerGymCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
