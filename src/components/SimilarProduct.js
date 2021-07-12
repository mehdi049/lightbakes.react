import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "./data/products.json";

function SimilarProduct(props) {
  const [filtredProduct, setFiltredProducts] = useState(data);

  useEffect(() => {
    let _filtredProduct = data.filter(
      (x) => x.category.toLowerCase() === props.category.toLowerCase()
    );
    _filtredProduct = _filtredProduct.filter((x) => x.id !== props.id);
    setFiltredProducts(_filtredProduct);
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

  if (filtredProduct.length < 1) return null;

  return (
    <Container fluid={true}>
      <Row>
        <Col className="text-center">
          <h1 className="border-orange inline-block">Similar products</h1>
          <br />
        </Col>
      </Row>
      <Row>
        {filtredProduct.map((x, i) => {
          if (i < 4)
            return (
              <Col lg={3} sm={6} md={4} key={x.id}>
                <div
                  className="menu-item"
                  onClick={() => props.changeProduct(x.id)}
                >
                  <div className="img-area">{validateImage(x)}</div>
                  <div style={{ textAlign: "center" }}>
                    <br />
                    <span className="text-bold">{x.title}</span> <br />
                    <span className="text-thin text-small">{x.tags}</span>{" "}
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
              </Col>
            );
        })}
      </Row>
    </Container>
  );
}
export default SimilarProduct;
