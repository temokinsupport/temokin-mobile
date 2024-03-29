import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../../Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Launches() {
  return (
    <section className="--bg-4" data-scroll-section>
      <Container className="--container-4 --max">
        <Row>
          <Col>
            <h1 className="--title" data-scroll>
              LATEST LAUNCHES
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              data-scroll
              className="--img"
              src={require("../../../assets/images/home/Group 49.jpg").default}
            />
          </Col>
          <Col>
            <div data-scroll className="--launches-details">
              <Image
                className="--img-logo"
                src={
                  require("../../../assets/images/home/Home_Logo-Mahligai.svg")
                    .default
                }
              />
              <p className="--txt">2 & 2.5 Storey Terrace Homes</p>
              <p className="--txt">| 20' x 70' | FREEHOLD</p>
              <p className="--desc">
                Mahligai offers spacious terrace homes <br />
                located in the growing township of Nusa Damai, <br />
                making it an ideal place to call home.
              </p>
              <p className="--desc-mobile">
                Mahligai offers spacious terrace homes <br />
                located in the growing township of Nusa Damai, <br />
                making it an ideal place to call home.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              data-scroll
              href="https://www.mahligai.my/"
              target="_blank"
              rel="noreferrer"
              className="--btn-im-interested"
            >
              I'M INTERESTED
            </a>
          </Col>
        </Row>
      </Container>
      {/* <div className="launches-bg"/> */}
      <div className="hero-container">
        <LazyLoadImage
          src={require("../../../assets/images/home/Home_BG-04.png").default}
          className="launches-bg"
        />
      </div>
      <Footer />
    </section>
  );
}
