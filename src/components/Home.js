import React from "react";
import MenuSection from "./MenuSection";
import ParallaxSection from "./ParallaxSection";
import ContactSection from "./ContactSection";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header transparent />
      <ParallaxSection />
      <br />
      <br />
      <br />
      <MenuSection />
      <ContactSection />
    </>
  );
}
export default Home;
