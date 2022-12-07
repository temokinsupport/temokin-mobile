import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselIndex() {
  return (
    <section className="--container-3" data-scroll-section>
      <Image
        className="--bg-mid"
        src={
          require("../../../assets/images/civilinfrastructure/bg-mid-mobile.svg")
            .default
        }
      />
      <Container>
        <Carousel interval={7000} className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                require("../../../assets/images/civilinfrastructure/Rectangle 151.png")
                  .default
              }
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h5>SEREMBAN MIDDLE RING ROAD (MRRS)</h5>
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Client
                </Col>
                <Col xs={12} className="content">
                  Public Works Department, Malaysia
                </Col>
              </Row>
              <hr className="hr-carousel" />
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Value
                </Col>
                <Col xs={12} className="content">
                  RM2.5 million
                </Col>
              </Row>
              <hr className="hr-carousel" />
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Period
                </Col>
                <Col xs={12} className="content">
                  May 2004 to Nov 2017
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                require("../../../assets/images/civilinfrastructure/Mask Group 4.png")
                  .default
              }
              alt="Second slide"
            />

            <Carousel.Caption className="carousel-caption">
              <h5>SUNGAI GOMBAK BRIDGE</h5>
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Client
                </Col>
                <Col xs={12} className="content">
                  Dewan Bandaraya, Kuala Lumpur (DBKL)
                </Col>
              </Row>
              <hr className="hr-carousel" />
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Value
                </Col>
                <Col xs={12} className="content">
                  RM10 million
                </Col>
              </Row>
              <hr className="hr-carousel" />
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Period
                </Col>
                <Col xs={12} className="content">
                  Mar 2002 to Mar 2004
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                require("../../../assets/images/civilinfrastructure/Mask Group 5.png")
                  .default
              }
              alt="Third slide"
            />

            <Carousel.Caption className="carousel-caption">
              <h5>EARTHWORK CONSTRUCTION, POWER STATION BANDAR BARU ARANG</h5>
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Client
                </Col>
                <Col xs={12} className="content">
                  Perbadanan Kemajuan Negeri, Selangor (PKNS)
                </Col>
              </Row>
              <hr className="hr-carousel" />
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Value
                </Col>
                <Col xs={12} className="content">
                  RM10 million
                </Col>
              </Row>
              <hr className="hr-carousel" />
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Period
                </Col>
                <Col xs={12} className="content">
                  Jun 1993 to jun 1994
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                require("../../../assets/images/civilinfrastructure/Mask Group 6.png")
                  .default
              }
              alt="Fourth slide"
            />

            <Carousel.Caption className="carousel-caption">
              <h5>TNB SUBSTATION 33/11kV</h5>
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Client
                </Col>
                <Col xs={12} className="content">
                  Tenaga Nasional Berhad, Shah Alam(TNB)
                </Col>
              </Row>
              <hr className="hr-carousel" />
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Value
                </Col>
                <Col xs={12} className="content">
                  RM4.1 million
                </Col>
              </Row>
              <hr className="hr-carousel" />
              <Row className="carousel-row">
                <Col xs={12} className="header">
                  Period
                </Col>
                <Col xs={12} className="content">
                  Jul 1992 to Feb 1992
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* <Row className='justify-content-center'>
                    <Col  md={12} className="mt-5 mb-5">
                        <div className="text-center mt-5 pt-5">
                            <Image className="--centerimg" src={require('../../../assets/images/civilinfrastructure/Rectangle 151.png').default} />
                        </div>
                    </Col>
                   
                </Row> */}
    </section>
  );
}
