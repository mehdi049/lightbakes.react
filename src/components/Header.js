import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  const [cls, setCls] = useState(props.transparent ? "" : "header-black-bg");

  function scrollHandler() {
    if (window.scrollY >= window.innerHeight - 40) setCls("header-black-bg");
    else setCls(props.transparent ? "" : "header-black-bg");
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className={cls}>
      <Container>
        <Link to="/">
          <Navbar.Brand href="#" className="text-bold">
            Light bakes
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {props.transparent ? (
              <Nav.Link href="#home">A propos</Nav.Link>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  A propos
                </Link>
              </li>
            )}
            {props.transparent ? (
              <Nav.Link href="#menu">Menu</Nav.Link>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
            )}
            <Nav.Link href="#contact">Contact</Nav.Link>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
