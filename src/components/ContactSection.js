import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

function ContactSection() {
  return (
    <Parallax bgImage={require("../../src/images/img-bg2.jpg")} strength={500}>
      <Container id="contact">
        <Row>
          <Col lg={6} id="contact-form">
            <h1 className="text-center">Prenez contact</h1>
            <div className="text-center">
              <a
                href="https://www.instagram.com/light.bakes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />{" "}
              </a>
              &nbsp;&nbsp;
              <a
                href="https://www.facebook.com/Lightbakes-104528938093690"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="2x"
                  rel="noopener noreferrer"
                />
              </a>
            </div>
            <br />
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Nom et prénom" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control type="email" placeholder="address email" />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows="7"
                      placeholder="message..."
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Button
                    variant="outline-primary"
                    size="lg"
                    block
                    type="submit"
                  >
                    Envoyer
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Parallax>
  );
}
export default ContactSection;
