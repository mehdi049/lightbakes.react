import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  const [cls, setCls] = useState("");

  function scrollHandler() {
    if (window.scrollY >= window.innerHeight - 40) setCls("header-black-bg");
    else setCls("");
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className={cls}>
      <Container>
        <Navbar.Brand href="#" className="text-bold">
          Light bakes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">A propos</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#">Gallerie</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
