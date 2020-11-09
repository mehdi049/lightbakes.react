import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Header from "./Header";
import data from "./data/product.json";
import ToastMessage from "./_sharedComponents/ToastMessage";
import SimilarProduct from "./SimilarProduct";

function Product(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState();
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();

  const [quantity, setQuantity] = useState(1);
  const [productOptions, setProductOptions] = useState();
  const [unityOptions, setUnityOptions] = useState();
  const [selectedUnityOption, setSelectedUnityOption] = useState();
  const [selectedProductOption, setSelectedProductOption] = useState();

  /** toast hooks */
  const [displayToast, setDisplayToast] = useState(false);
  const [toastType, setToastType] = useState();
  const [toastMessage, setToastMessage] = useState();

  const [addedToBasket, setAddedToBasket] = useState(
    localStorage.getItem("basket") !== null
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );

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

  function filterProduct(id) {
    window.scrollTo(0, 0);

    let _product = data.filter((x) => x.id === id);
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

      setUnityOptions(_product.unityOptions);
      setSelectedUnityOption(_product.unityOptions[0].price);

      setProductOptions(_product.productOptions);
      setSelectedProductOption(_product.productOptions[0].option);

      setPrice(_product.unityOptions[0].price);
      setImages(_images);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    filterProduct(props.match.params.id);
  }, []);

  function changeProduct(id) {
    filterProduct(id);
  }

  function handleAddToBasket() {
    let productsToAdd =
      localStorage.getItem("basket") != null
        ? JSON.parse(localStorage.getItem("basket"))
        : [];

    const productUnity = product.unityOptions.filter(
      (x) => parseFloat(x.price) === parseFloat(selectedUnityOption)
    )[0].unity;

    const productsToAddCheck = productsToAdd.filter(
      (x) =>
        x.id === product.id &&
        x.option.toLowerCase() === selectedProductOption.toLowerCase() &&
        x.unity.toLowerCase() === productUnity.toLowerCase()
    );

    if (productsToAddCheck.length === 0)
      productsToAdd.push({
        id: product.id,
        product: product.title,
        unity: productUnity,
        option: selectedProductOption,
        quantity: parseFloat(quantity),
        totalPrice: price,
      });
    else {
      var foundIndex = productsToAdd.findIndex(
        (x) =>
          x.id === product.id &&
          x.option.toLowerCase() === selectedProductOption.toLowerCase() &&
          x.unity.toLowerCase() === productUnity.toLowerCase()
      );
      productsToAdd[foundIndex] = {
        id: product.id,
        product: product.title,
        unity: productUnity,
        option: selectedProductOption,
        quantity: parseFloat(quantity),
        totalPrice: price,
      };
    }

    setAddedToBasket(productsToAdd);
    localStorage.setItem("basket", JSON.stringify(productsToAdd));
    toastHandler("Produit ajouté au panier avec succés.", "success");
  }

  function handlePrice(event) {
    if (event.target.name === "quantity") {
      if (
        isNaN(event.target.value) ||
        parseInt(event.target.value) === 0 ||
        event.target.value === ""
      )
        return toastHandler("Quantité incorrecte", "error");
      const productOptionPrice = product.productOptions.filter(
        (x) => x.option.toLowerCase() === selectedProductOption.toLowerCase()
      )[0].price;
      setQuantity(event.target.value);
      setPrice(
        selectedUnityOption * event.target.value +
          productOptionPrice * event.target.value
      );
    }
    if (event.target.name === "price-option") {
      const productOptionPrice = product.productOptions.filter(
        (x) => x.option.toLowerCase() === selectedProductOption.toLowerCase()
      )[0].price;
      setSelectedUnityOption(event.target.value);
      setPrice(quantity * event.target.value + productOptionPrice * quantity);
    }
    if (event.target.name === "product-option") {
      setSelectedProductOption(event.target.value);
      const productOptionPrice = product.productOptions.filter(
        (x) => x.option.toLowerCase() === event.target.value.toLowerCase()
      )[0].price;
      setPrice(quantity * selectedUnityOption + quantity * productOptionPrice);
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
          <Col lg={6} md={5} sm={12}>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </Col>
          <Col lg={6} md={7} sm={12}>
            <br className="d-block d-md-none" />
            <p dangerouslySetInnerHTML={{ __html: product.description }} />
            <p>
              <span className="text-bold">Ingédients</span>
            </p>
            <p>{product.ingredient}</p>
            {product.nutritionalValue && (
              <>
                <p>
                  <span className="text-bold">Valeur nutritionnelle</span>
                </p>
                <p>{product.nutritionalValue}</p>
              </>
            )}
            <Row>
              <Col lg={5} md={6} sm={4} xs={6}>
                <Form.Group>
                  <Form.Control
                    as="select"
                    name="price-option"
                    onChange={handlePrice}
                    value={selectedUnityOption}
                  >
                    {unityOptions.map((x) => {
                      return (
                        <option key={x.price} value={x.price}>
                          {x.unity} ({x.price} TND)
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg={5} md={6} sm={4} xs={6}>
                <Form.Group>
                  <Form.Control
                    as="select"
                    name="product-option"
                    onChange={handlePrice}
                    value={selectedProductOption}
                  >
                    {productOptions.map((x) => {
                      return (
                        <option key={x.option} value={x.option}>
                          {x.option}{" "}
                          {x.price !== 0
                            ? "(+" + x.price + " TND)"
                            : "(Gratuit)"}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg={2} md={3} sm={2} xs={3}>
                <Form.Group>
                  <Form.Control
                    onChange={handlePrice}
                    type="text"
                    value={quantity}
                    name="quantity"
                  />
                </Form.Group>
              </Col>
              <Col lg={5} md={9} sm={6} xs={9}>
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
                <p className="text-large text-bold orange">{price} TND</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <br />
      <SimilarProduct
        category={product.category}
        changeProduct={changeProduct}
        id={product.id}
      />

      <ToastMessage
        show={displayToast}
        toastHandler={toastHandler}
        message={toastMessage}
        type={toastType}
      />
    </>
  );
}
export default Product;
