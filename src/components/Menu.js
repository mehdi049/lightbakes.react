import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Menu() {
  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
  ];
  return (
    <>
      <Container className="container-small">
        <Row id="menu-text">
          <Col lg={2} xs={3}>
            <span>All</span>
          </Col>
          <Col lg={2} xs={3}>
            <span>Salads</span>
          </Col>
          <Col lg={2} xs={3}>
            <span>Soups</span>
          </Col>
          <Col lg={2} xs={3}>
            <span>Main</span>
          </Col>
          <Col lg={2} xs={3}>
            <span>Desserts</span>
          </Col>
          <Col lg={2} xs={3}>
            <span>Breakfast</span>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container fluid={true}>
        <Row>
          {images.map((x, i) => (
            <Col lg={3} sm={6} md={4} key={i}>
              <div className="menu-item">
                <div className="img-area">
                  <img src={require("../../src/images/" + x)} alt="" />
                </div>
                <div style={{ textAlign: "center" }}>
                  <br />
                  HOME CHEF <br />
                  <span className="text-thin text-small">
                    BIO - HEALTHY - SWEET
                  </span>{" "}
                  <br />
                  <span className="text-bold">
                    {" "}
                    Healthy chicken Caesar salad
                  </span>{" "}
                  <br />
                  <span className="text-bold text-italic">7.0d</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Menu;
