import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import ParallaxSection from "./components/ParallaxSection";

import "./App.css";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <ParallaxSection />

      <br />
      <br />
      <br />

      <Menu />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
