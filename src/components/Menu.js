import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Menu() {
  const [filter, setFilter] = useState("all");
  const images = [
    {
      img: "img1.jpg",
      type: "granola",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img2.jpg",
      type: "brownies",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img3.jpg",
      type: "fondant",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img4.jpg",
      type: "beurre",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img5.jpg",
      type: "granola",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img6.jpg",
      type: "beurre",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img7.jpg",
      type: "brownies",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img8.jpg",
      type: "granola",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img9.jpg",
      type: "granola",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img10.jpg",
      type: "fondant",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img11.jpg",
      type: "granola",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
    {
      img: "img12.jpg",
      type: "brownies",
      title: "Healthy chicken Caesar salad",
      tag: "BIO - HEALTHY - SWEET",
      price: "7.0",
    },
  ];

  const [filtredImages, setFiltredImages] = useState([...images]);

  function filterImg(type) {
    setFilter(type);
    if (type === "all") setFiltredImages(images);
    else {
      let filtredImages = images.filter(
        (x) => x.type.toLowerCase() === type.toLowerCase()
      );
      setFiltredImages(filtredImages);
    }
  }

  return (
    <>
      <Container className="container-small">
        <Row id="menu-text">
          <Col lg={2} xs={4}>
            <span
              onClick={() => filterImg("all")}
              className={filter === "all" ? "menu-selected" : null}
            >
              Tout
            </span>
          </Col>
          <Col lg={2} xs={4}>
            <span
              onClick={() => filterImg("granola")}
              className={filter === "granola" ? "menu-selected" : null}
            >
              Granola
            </span>
          </Col>
          <Col lg={2} xs={4}>
            <span
              onClick={() => filterImg("brownies")}
              className={filter === "brownies" ? "menu-selected" : null}
            >
              Brownies
            </span>
          </Col>
          <Col lg={2} xs={4}>
            <span
              onClick={() => filterImg("fondant")}
              className={filter === "fondant" ? "menu-selected" : null}
            >
              Fondant
            </span>
          </Col>
          <Col lg={3} xs={8}>
            <span
              onClick={() => filterImg("beurre")}
              className={filter === "beurre" ? "menu-selected" : null}
            >
              Beurre de cacahuète
            </span>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container fluid={true}>
        <Row>
          {filtredImages.map((x, i) => (
            <Col lg={3} sm={6} md={4} key={i}>
              <Link to="/article" className="menu-item-link">
                <div className="menu-item">
                  <div className="img-area">
                    <img src={require("../../src/images/" + x.img)} alt="" />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <br />
                    LIGHT BAKES <br />
                    <span className="text-thin text-small">{x.tag}</span> <br />
                    <span className="text-bold">{x.title}</span> <br />
                    <span className="text-bold text-italic">{x.price} dt</span>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Menu;
