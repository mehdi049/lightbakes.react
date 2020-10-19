import React from "react";
import Menu from "./Menu";
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
      <Menu />
      <ContactSection />
    </>
  );
}
export default Home;
