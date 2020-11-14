import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import data from "./data/product.json";

function Menu() {
  const [filter, setFilter] = useState("all");
  const [filtredProduct, setFiltredProducts] = useState(data);

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
              Tout
            </span>
          </Col>
          <Col xs={4} md="auto">
            <span
              onClick={() => filterImg("granola")}
              className={filter === "granola" ? "menu-selected" : null}
            >
              Granola
            </span>
          </Col>
          <Col xs={4} md="auto">
            <span
              onClick={() => filterImg("muffin")}
              className={filter === "muffin" ? "menu-selected" : null}
            >
              Muffins
            </span>
          </Col>
          <Col xs={4} md="auto">
            <span
              onClick={() => filterImg("energy")}
              className={filter === "energy" ? "menu-selected" : null}
            >
              Energie
            </span>
          </Col>
          <Col xs={4} md="auto">
            <span
              onClick={() => filterImg("cream")}
              className={filter === "cream" ? "menu-selected" : null}
            >
              Beurre
            </span>
          </Col>
          <Col xs={4} md="auto">
            <span
              onClick={() => filterImg("nutella")}
              className={filter === "nutella" ? "menu-selected" : null}
            >
              Nutella
            </span>
          </Col>
          <Col xs={4} md="auto">
            <span
              onClick={() => filterImg("sauce")}
              className={filter === "sauce" ? "menu-selected" : null}
            >
              Sauce
            </span>
          </Col>
          <Col xs={4} md="auto">
            <span
              onClick={() => filterImg("tarte")}
              className={filter === "tarte" ? "menu-selected" : null}
            >
              Tarte
            </span>
          </Col>
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
                    <div className="img-area">
                      <img
                        src={require("../../src/images/" + x.images[0])}
                        alt=""
                      />
                    </div>
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
