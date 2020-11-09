import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Table,
  Button,
  Form,
  Alert,
  Modal,
} from "react-bootstrap";
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

  const [customerInfo, setCustomerInfo] = useState(
    localStorage.getItem("customerInfo") !== null
      ? JSON.parse(localStorage.getItem("customerInfo"))
      : {
          name: "",
          email: "",
          tel: "",
          address: "",
        }
  );

  /** modal hooks */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  function handleCustomerInfo(event) {
    const updatedCustomerInfo = {
      ...customerInfo,
      [event.target.name]: [event.target.value],
    };
    setCustomerInfo(updatedCustomerInfo);
  }

  function sendOrder() {
    localStorage.setItem("customerInfo", JSON.stringify(customerInfo));
    localStorage.removeItem("basket");
    setBasketItem([]);
    toastHandler("Commande envoyée avec succés.", "success");

    setCustomerInfo({
      name: "",
      email: "",
      tel: "",
      address: "",
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);

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
        {basketItem.length === 0 ? (
          <Row>
            <Col>
              <Alert variant="info">Le panier est vide.</Alert>
            </Col>
          </Row>
        ) : (
          <>
            <Row>
              <Col>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th className="text-bold">Produit</th>
                      <th className="text-bold">Quantité</th>
                      <th className="text-bold">Prix</th>
                      <th className="text-bold" style={{ width: "100px" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {basketItem.map((x, i) => {
                      const path = "/product/" + x.id;
                      return (
                        <tr key={i}>
                          <td>
                            <Link to={path}>
                              {x.product} {x.option} ({x.unity})
                            </Link>
                          </td>
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
                      <td colSpan={2} className="text-right text-bold">
                        Total
                      </td>
                      <td className="text-bold">{totalPrice} TND</td>
                    </tr>
                  </tbody>
                </Table>

                <p className="text-italic">
                  <b>Note:</b> Le panier sera réinitialisé aprés le passage de
                  la commande.
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="text-right">
                <Button
                  variant="outline-primary"
                  type="button"
                  onClick={handleShow}
                >
                  Passer la commande
                </Button>
              </Col>
            </Row>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Confirmer la commande</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Nom et prénom / nom de l'entreprise"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleCustomerInfo}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="adresse email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleCustomerInfo}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Num. Tel"
                    name="tel"
                    value={customerInfo.tel}
                    onChange={handleCustomerInfo}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    placeholder="Address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleCustomerInfo}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Annuler
                </Button>
                <Button variant="outline-primary" onClick={sendOrder}>
                  Confirmer
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
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
