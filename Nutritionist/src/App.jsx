import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Process from "./Pages/Process";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import Contactus from "./Pages/Contactus";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Process" element={<Process />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
