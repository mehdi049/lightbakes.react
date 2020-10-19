import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Header from "./Header";

function Article() {
  const images = [
    {
      original: require("../../src/images/img1.jpg"),
      thumbnail: require("../../src/images/img1.jpg"),
    },
    {
      original: require("../../src/images/img2.jpg"),
      thumbnail: require("../../src/images/img2.jpg"),
    },
    {
      original: require("../../src/images/img3.jpg"),
      thumbnail: require("../../src/images/img3.jpg"),
    },
  ];
  return (
    <>
      <Header />
      <Container className="center-content">
        <Row>
          <Col>
            <h1 className="text-bold text-center">
              Healthy chicken Caesar salad
            </h1>
            <br />
            <hr />
            <br />
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </Col>
          <Col md={6} sm={12}>
            <br />
            <p className="text-bold orange">7.0 dt</p>
            <p>
              Blueberries are cooked with pomegranate juice for a tart-sweet
              mixture that's perfect spooned over creamy vanilla-scented millet
              pudding. This guilt-free but luscious dessert comes in under 150
              calories, boasts 3 grams of fiber, and is rich in magnesium,
              thanks to the millet.
            </p>
            <hr />
            <p>
              <span className="text-bold">Categorie:</span> Granola
            </p>
            <p>
              <span className="text-bold">Tags:</span>{" "}
              <span> Health - Recipe - Sweet</span>
            </p>

            <Row>
              <Col lg={2} sm={3} xs={2}>
                <Form.Group>
                  <Form.Control type="text" placeholder="1" />
                </Form.Group>
              </Col>
              <Col lg={6} sm={9} xs={10}>
                <Form.Group>
                  <Button variant="outline-primary" block type="submit">
                    Ajouter au panier
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Article;
