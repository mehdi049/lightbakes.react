import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ToastMessage from "./_sharedComponents/ToastMessage";
import * as api from "./_api/Api";

function ContactSection() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [isDisabled, setIsDisabled] = useState(false);

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
      return toastHandler(
        "'First name / last name' field is required",
        "error"
      );
    if (contactInfo.email === "")
      return toastHandler("'Email' field is required", "error");
    if (contactInfo.tel === "")
      return toastHandler("'Phone number' field is required", "error");

    setIsDisabled(true);
    api
      .sendContact(contactInfo)
      .then(() => {
        toastHandler("Email sent successfully.", "success");
        setContactInfo({
          name: "",
          email: "",
          tel: "",
          message: "",
        });

        setIsDisabled(false);
      })
      .catch((error) => {
        toastHandler("Error occurred, please try again.", "error");
        setIsDisabled(false);
      });
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
              <h1 className="text-center">Contact us</h1>
              <br />
              <Form>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="First name / last name"
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
                        placeholder="Email"
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
                        placeholder="Phone number"
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
                        placeholder="Message..."
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
                      disabled={isDisabled}
                    >
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
              <br />
              <Row>
                <Col xs={7}>
                  <p className="text-bold">
                    Follow us on &nbsp;
                    <a
                      href="https://www.instagram.com/light.bakes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagramSquare} />{" "}
                    </a>
                    &nbsp;
                    <a
                      href="https://www.facebook.com/Lightbakes-104528938093690"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        rel="noopener noreferrer"
                      />
                    </a>
                  </p>
                </Col>
                <Col xs={5} className="text-right text-bold">
                  <FontAwesomeIcon icon={faPhone} />
                  &nbsp; 53 755 754
                </Col>
              </Row>
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
