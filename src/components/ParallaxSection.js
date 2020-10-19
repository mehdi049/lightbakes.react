import React from "react";
import { Parallax } from "react-parallax";

function ParallaxSection() {
  const insideStyles = {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  return (
    <>
      <Parallax
        bgImage={require("../../src/images/img-bg1.jpg")}
        strength={-300}
      >
        <div style={{ height: 500 }} id="home">
          <div style={insideStyles}>
            <h1 className="border-orange text-center">Light bakes</h1>
            <span className="text-center text-thin">
              Stay healthy, stay fit!
            </span>
          </div>
        </div>
      </Parallax>
      <div id="menu"></div>
    </>
  );
}
export default ParallaxSection;
