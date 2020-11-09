import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import ToastMessage from "./_sharedComponents/ToastMessage";

function ContactSection() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  /** toast hooks */
  const [displayToast, setDisplayToast] = useState(false);
  const [toastType, setToastType] = useState();
  const [toastMessage, setToastMessage] = useState();

  /** toast function */
  function toastHandler(message, type) {
    if (type === undefined) {
      setDisplayToast(false);
    } else {
      setDisplayToast(true);
      setToastMessage(message);
      setToastType(type);
    }
  }

  function handleContactInfo(event) {
    const _contactInfo = {
      ...contactInfo,
      [event.target.name]: event.target.value,
    };
    setContactInfo(_contactInfo);
  }

  function sendEmail() {
    if (contactInfo.name === "")
      return toastHandler("Le champ 'nom et prénom' est requis", "error");
    if (contactInfo.email === "")
      return toastHandler("Le champ 'email' est requis", "error");
    if (contactInfo.tel === "")
      return toastHandler("Le champ 'Num. Tél' est requis", "error");

    setContactInfo({
      name: "",
      email: "",
      tel: "",
      message: "",
    });
    toastHandler("Email envoyé avec succés.", "success");
  }

  return (
    <div id="contact-section">
      <Parallax
        bgImage={require("../../src/images/img-bg2.jpg")}
        strength={500}
      >
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
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Nom et prénom *"
                        onChange={handleContactInfo}
                        value={contactInfo.name}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="email"
                        placeholder="address email *"
                        onChange={handleContactInfo}
                        value={contactInfo.email}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="tel"
                        placeholder="Num. Tél *"
                        onChange={handleContactInfo}
                        value={contactInfo.tel}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        rows="4"
                        placeholder="message..."
                        name="message"
                        onChange={handleContactInfo}
                        value={contactInfo.message}
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
                      type="button"
                      onClick={sendEmail}
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

      <ToastMessage
        show={displayToast}
        toastHandler={toastHandler}
        message={toastMessage}
        type={toastType}
      />
    </div>
  );
}
export default ContactSection;
