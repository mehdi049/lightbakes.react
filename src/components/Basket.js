import React, { useEffect, useState } from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import Header from "./Header";
import ContactSection from "./ContactSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Basket() {
  const [basketItem, setBasketItem] = useState(
    localStorage.getItem("basket") !== null
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  const [totalPrice, setTotalPrice] = useState();

  function removeBasketItem(id) {
    const itemsAfterRemove = basketItem.filter((x) => x.id !== id);
    setBasketItem(itemsAfterRemove);
    localStorage.setItem("basket", JSON.stringify(itemsAfterRemove));

    let _totalPrice = 0;
    itemsAfterRemove.map((x) => {
      _totalPrice += x.totalPrice;
    });
    setTotalPrice(_totalPrice);
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
            <Table bordered>
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
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{x.product}</td>
                      <td>{x.unity}</td>
                      <td>{x.quantity}</td>
                      <td>{x.totalPrice} dt</td>
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
                  <td className="text-bold">{totalPrice} dt</td>
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
    </>
  );
}
export default Basket;
