import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

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
        {props.transparent ? (
          <Nav.Link href="#home" className="text-bold navbar-brand">
            <img
              src={require("../../src/images/logo/top-logo.png")}
              alt="horizontal logo"
            />
          </Nav.Link>
        ) : (
          <Link to="/" className="text-bold navbar-brand">
            <img
              src={require("../../src/images/logo/top-logo.png")}
              alt="horizontal logo"
            />
          </Link>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
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
                Gallerie
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Link className="nav-link" to="/basket">
            Mon panier &nbsp;
            <FontAwesomeIcon icon={faShoppingBasket} size="1x" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
