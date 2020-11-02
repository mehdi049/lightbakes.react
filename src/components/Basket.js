import React, { useEffect, useState } from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import Header from "./Header";
import ContactSection from "./ContactSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import ToastMessage from "./_sharedComponents/ToastMessage";
import { Link } from "react-router-dom";

function Basket() {
  const [basketItem, setBasketItem] = useState(
    localStorage.getItem("basket") !== null
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  const [totalPrice, setTotalPrice] = useState();

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

  function removeBasketItem(id) {
    const itemsAfterRemove = basketItem.filter((x) => x.id !== id);
    setBasketItem(itemsAfterRemove);
    localStorage.setItem("basket", JSON.stringify(itemsAfterRemove));

    let _totalPrice = 0;
    itemsAfterRemove.map((x) => {
      return (_totalPrice += x.totalPrice);
    });
    setTotalPrice(_totalPrice);
    toastHandler("Produit retiré avec succés.", "success");
  }

  useEffect(() => {
    let _totalPrice = 0;
    basketItem.map((x) => {
      _totalPrice += x.totalPrice;
    });
    setTotalPrice(_totalPrice);
  }, []);

  return (
    <>
      <Header />
      <Container fluid className="center-content">
        <Row>
          <Col className="text-center">
            <h1 className="border-orange inline-block">Mon panier</h1>
            <br />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Table responsive bordered>
              <thead>
                <tr>
                  <th className="text-bold">#</th>
                  <th className="text-bold">Produit</th>
                  <th className="text-bold">Unité</th>
                  <th className="text-bold">Quantité</th>
                  <th className="text-bold">Prix</th>
                  <th className="text-bold" style={{ width: "100px" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {basketItem.map((x, i) => {
                  const path = "/product/" + x.id;
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <Link to={path}>{x.product}</Link>
                      </td>
                      <td>{x.unity}</td>
                      <td>{x.quantity}</td>
                      <td>{x.totalPrice} TND</td>
                      <td>
                        <FontAwesomeIcon
                          className="pointer"
                          icon={faTrashAlt}
                          size="1x"
                          onClick={() => removeBasketItem(x.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={4} className="text-right text-bold">
                    Total
                  </td>
                  <td className="text-bold">{totalPrice} TND</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <Button variant="outline-primary" type="button">
              Passer une commande
            </Button>
          </Col>
        </Row>
        <br />
      </Container>

      <ContactSection />

      <ToastMessage
        show={displayToast}
        toastHandler={toastHandler}
        message={toastMessage}
        type={toastType}
      />
    </>
  );
}
export default Basket;
