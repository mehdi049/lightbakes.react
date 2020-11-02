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
                      LIGHT BAKES <br />
                      <span className="text-thin text-small">
                        {x.tags}
                      </span>{" "}
                      <br />
                      <span className="text-bold">{x.title}</span> <br />
                      <span className="text-bold text-italic">
                        {x.sellingOptions[0].price} dt
                      </span>
                      <span className="text-small">
                        {" "}
                        ({x.sellingOptions[0].unity})
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
