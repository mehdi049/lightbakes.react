import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MenuSection from "./MenuSection";
import Header from "./Header";
import ContactSection from "./ContactSection";

function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Container fluid className="center-content">
        <Row>
          <Col className="text-center">
            <h1 className="border-orange inline-block">Menu</h1>
            <br />
          </Col>
        </Row>
      </Container>
      <br />
      <MenuSection />

      <ContactSection />
    </>
  );
}
export default Menu;
