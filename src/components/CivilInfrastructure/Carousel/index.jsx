import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselIndex() {
  return (
    <section className="--container-3" data-scroll-section>
      <Image
        className="--bg-mid"
        src={
          require("../../../assets/images/civilinfrastructure/bg-mid.svg")
            .default
        }
      />
      <Container>
        <Carousel className="carousel">
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
              <br />

              <h5>SEREMBAN MIDDLE RING ROAD (MRRS)</h5>
              <hr className="hr-carousel" />
              <Row className="header">
                <Col md={6}>Client</Col>
                <Col md={3}>Value</Col>
                <Col md={3}>Period</Col>
              </Row>
              <Row className="content">
                <Col md={6}>
                  Public Works Department, <br /> Malaysia
                </Col>
                <Col md={3}>RM2.5 million</Col>
                <Col md={3}>May 2004 to Nov 2017</Col>
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
              <br />
              <br />
              <h5>SUNGAI GOMBAK BRIDGE</h5>
              <hr className="hr-carousel" />
              <Row className="header">
                <Col md={6}>Client</Col>
                <Col md={3}>Value</Col>
                <Col md={3}>Period</Col>
              </Row>
              <Row className="content">
                <Col md={6}>
                  Dewan Bandaraya, <br /> Kuala Lumpur (DBKL)
                </Col>
                <Col md={3}>RM10 million</Col>
                <Col md={3}>Mar 2002 to Mar 2004</Col>
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
              <br />
              <br />
              <h5>EARTHWORK CONSTRUCTION, POWER STATION BANDAR BARU ARANG</h5>
              <hr className="hr-carousel" />
              <Row className="header">
                <Col md={6}>Client</Col>
                <Col md={3}>Value</Col>
                <Col md={3}>Period</Col>
              </Row>
              <Row className="content">
                <Col md={6}>
                  Perbadanan Kemajuan Negeri, <br /> Selangor (PKNS)
                </Col>
                <Col md={3}>RM10 million</Col>
                <Col md={3}>Jun 1993 to jun 1994</Col>
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
              <br />
              <br />
              <h5>TNB SUBSTATION 33/11kV</h5>
              <hr className="hr-carousel" />
              <Row className="header">
                <Col md={6}>Client</Col>
                <Col md={3}>Value</Col>
                <Col md={3}>Period</Col>
              </Row>
              <Row className="content">
                <Col md={6}>
                  Tenaga Nasional Berhad, <br /> Shah Alam(TNB)
                </Col>
                <Col md={3}>RM4.1 million</Col>
                <Col md={3}>Jul 1992 to Feb 1992</Col>
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
