import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Header from "./Header";
import ContactSection from "./ContactSection";

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const photos = [
    {
      src: require("../../src/images/img1.jpg"),
      width: 2,
      height: 1,
    },
    {
      src: require("../../src/images/img2.jpg"),
      width: 2,
      height: 1,
    },
    {
      src: require("../../src/images/img3.jpg"),
      width: 2,
      height: 1,
    },
    {
      src: require("../../src/images/img4.jpg"),
      width: 4,
      height: 3,
    },
    {
      src: require("../../src/images/img5.jpg"),
      width: 3,
      height: 2,
    },
    {
      src: require("../../src/images/img6.jpg"),
      width: 3,
      height: 2,
    },
    {
      src: require("../../src/images/img7.jpg"),
      width: 3,
      height: 2,
    },
    {
      src: require("../../src/images/img8.jpg"),
      width: 4,
      height: 2,
    },
    {
      src: require("../../src/images/img9.jpg"),
      width: 4,
      height: 2,
    },
    {
      src: require("../../src/images/img10.jpg"),
      width: 3,
      height: 2,
    },
    {
      src: require("../../src/images/img11.jpg"),
      width: 3,
      height: 2,
    },
    {
      src: require("../../src/images/img12.jpg"),
      width: 2,
      height: 1,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Header />
      <Container fluid className="center-content">
        <Row>
          <Col className="text-center">
            <h1 className="border-orange inline-block">Gallerie</h1>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </Col>
        </Row>
      </Container>
      <ContactSection />
    </>
  );
}
export default GalleryPage;
