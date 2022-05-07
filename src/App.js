import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import HeroImage from "./components/HeroImage";
import FooterInfo from "./components/FooterInfo";
import HeaderInfo from "./components/HeaderInfo"

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div>
        <HeroImage/>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <HeaderInfo/>
        <FooterInfo/>
      </div>
    </Router>
  );
}

export default App;
