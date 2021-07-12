import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import data from "./data/products.json";

function Menu() {
  const [filter, setFilter] = useState("all");
  const [filtredProduct, setFiltredProducts] = useState(data);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let _categories = [];
    data.map((x) => {
      if (_categories.indexOf(x.category) === -1) _categories.push(x.category);
    });
    setCategories(_categories);
  }, []);

  function validateImage(product) {
    try {
      return (
        <img
          src={require("../../src/images/" + product.images[0])}
          alt={product.title}
        />
      );
    } catch (err) {
      return (
        <img
          src={require("../../src/images/_not-available.jpg")}
          alt="not-found"
        />
      );
    }
  }

  function filterImg(type) {
    setFilter(type);
    if (type === "all") setFiltredProducts(data);
    else {
      const _filtredProduct = data.filter(
        (x) => x.category.toLowerCase() === type.toLowerCase()
      );
      setFiltredProducts(_filtredProduct);
    }
  }

  return (
    <>
      <Container>
        <Row id="menu-text" className="justify-content-md-center">
          <Col xs={4} md="auto">
            <span
              onClick={() => filterImg("all")}
              className={filter === "all" ? "menu-selected" : null}
            >
              All
            </span>
          </Col>
          {categories.map((category) => {
            return (
              <Col key={category} xs={4} md="auto">
                <span
                  onClick={() => filterImg(category)}
                  className={filter === category ? "menu-selected" : null}
                >
                  {category}
                </span>
              </Col>
            );
          })}
        </Row>
      </Container>
      <br />
      <br />
      <Container fluid={true}>
        <Row>
          {filtredProduct.map((x) => {
            const path = "/product/" + x.id;
            return (
              <Col lg={3} sm={6} md={4} key={x.id}>
                <Link to={path} className="menu-item-link">
                  <div className="menu-item">
                    <div className="img-area">{validateImage(x)}</div>
                    <div style={{ textAlign: "center" }}>
                      <br />
                      <span className="text-bold">{x.title}</span> <br />
                      <span className="text-thin text-small">
                        {x.tags}
                      </span>{" "}
                      <br />
                      <span className="text-bold text-italic">
                        {x.unityOptions[0].price} TND
                      </span>
                      <span className="text-small">
                        {" "}
                        ({x.unityOptions[0].unity})
                      </span>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
export default Menu;
