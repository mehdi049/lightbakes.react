import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Header from "./Header";
import data from "./data/product.json";

function Product(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState();
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();

  const [quantity, setQuantity] = useState(1);
  const [productOptions, setProductOptions] = useState();
  const [selectedProductOption, setSelectedProductOption] = useState();

  const [addedToBasket, setAddedToBasket] = useState(
    localStorage.getItem("basket") !== null
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );

  useEffect(() => {
    let _product = data.filter((x) => x.id === props.match.params.id);
    if (_product.length === 0) return props.history.push("/");
    else {
      _product = _product[0];
      setProduct(_product);
      const _images = [];
      _product.images.map((x) => {
        _images.push({
          original: require("../../src/images/" + x),
          thumbnail: require("../../src/images/" + x),
        });
      });
      setProductOptions(_product.sellingOptions);
      setSelectedProductOption(_product.sellingOptions[0].price);
      setPrice(_product.sellingOptions[0].price);
      setImages(_images);
      setIsLoading(false);
    }
  }, []);

  function handleAddToBasket() {
    let productsToAdd =
      localStorage.getItem("basket") != null
        ? JSON.parse(localStorage.getItem("basket"))
        : [];
    if (productsToAdd.length > 0)
      productsToAdd = productsToAdd.filter((x) => x.id !== product.id);
    productsToAdd.push({
      id: product.id,
      product: product.title,
      unity: product.sellingOptions.filter(
        (x) => x.price === parseInt(selectedProductOption)
      )[0].unity,
      quantity: parseInt(quantity),
      totalPrice: price,
    });
    setAddedToBasket(productsToAdd);
    localStorage.setItem("basket", JSON.stringify(productsToAdd));
  }

  function handlePrice(event) {
    if (event.target.name === "quantity") {
      setQuantity(event.target.value);
      setPrice(selectedProductOption * event.target.value);
    }
    if (event.target.name === "price-option") {
      setSelectedProductOption(event.target.value);
      setPrice(quantity * event.target.value);
    }
  }

  if (isLoading) return null;

  return (
    <>
      <Header />
      <Container className="center-content">
        <Row>
          <Col>
            <h1 className="text-bold text-center">{product.title}</h1>
            <br />
            <hr />
            <br />
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </Col>
          <Col md={6} sm={12}>
            <p>{product.description}</p>
            <hr />
            <p>
              <span className="text-bold">Categorie:</span> {product.category}
            </p>
            <p>
              <span className="text-bold">Tags:</span>{" "}
              <span> {product.tags}</span>
            </p>
            <Row>
              <Col lg={4} md={6} sm={4} xs={5}>
                <Form.Group>
                  <Form.Control
                    as="select"
                    name="price-option"
                    onChange={handlePrice}
                    value={selectedProductOption}
                  >
                    {productOptions.map((x) => {
                      return (
                        <option key={x.price} value={x.price}>
                          {x.unity} ({x.price} dt)
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg={2} md={3} sm={2} xs={2}>
                <Form.Group>
                  <Form.Control
                    onChange={handlePrice}
                    type="text"
                    value={quantity}
                    name="quantity"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={9} sm={6} xs={5}>
                <Form.Group>
                  <Button
                    variant="outline-primary"
                    block
                    onClick={handleAddToBasket}
                  >
                    Ajouter au panier
                  </Button>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <p className="text-large text-bold orange">{price} dt</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Product;
