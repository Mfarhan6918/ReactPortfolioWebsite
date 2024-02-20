import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/containers/home/index";
import About from "./components/containers/about/index";
import Resume from "./components/containers/resumes/index";
import Skills from "./components/containers/skills/index";
import Portfolio from "./components/containers/portfolio/index";
import Contact from "./components/containers/contact/index";
import Navbar from "./components/navBar/index";

function App() {
  return (
    <div className="App">
      {/* Particles js */}

      {/* navBar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
