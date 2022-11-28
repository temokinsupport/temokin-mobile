import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

export default function QualityAssurance() {
  const qas = [
    {
      name: "iso",
      image: "iso.png",
      descriptions: [
        {
          sub: "PROVISION OF BUILDING AND CONSTRUCTION SERVICES",
          name: "ISO 9001 : 2015",
        },
      ],
    },
    {
      name: "cidb",
      image: "cidb-blue.png",
      descriptions: [
        {
          sub: "PERAKUAN PENDAFTARAN",
          name: "DAERAH: KLANG | TARIKH MULA BERDAFTAR: 26/06/2018",
        },
      ],
    },
    {
      name: "span",
      image: "span.png",
      descriptions: [
        {
          sub: "JENIS PERMIT",
          name: "PERMIT IPA JENIS C1 (PEMBETUNGAN) - SEMENANJUNG MALAYSIA, WILAYAH-WILAYAH PERSEKUTUAN PUTRAJAYA DAN LABUAN",
        },
        {
          sub: "TEMPOH PERMIT",
          name: "21 APR 2022 - 20 APR 2023",
        },
      ],
    },
    {
      name: "jccd",
      image: "jccd.png",
      descriptions: [
        {
          sub: "SIJIL KONTRAKTOR JOHOR",
          name: "TARIKH MULA BERKUATKUASA: 01 JULAI 2021 TARIKH TAMAT TEMPOH PERAKUAN: 31 DISEMBER 2023",
        },
      ],
    },
  ];

  return (
    <div className="qa --bg-3" data-scroll-section>
      <Container className="--max">
        <Row className="--header">
          <Col>
            <h1 className="--title" data-scroll data-scroll-speed="1">
              {" "}
              Quality Assurance
            </h1>
            <p className="--desc">
              WE MAINTAIN A QUALITY MANAGEMENT SYSTEM WHICH FULFILS THE REQUIREMENTS OF ISO <br />
              9001:2008, SPECIFICALLY FOR ROADWORKS AND INFRASTRUCTURE CONSTRUCTION, CERTIFIED BY SIRIM <br />
              QAS INTERNATIONAL SDN BHD AND THE INTERNATIONAL CERTIFICATION NETWORK, IQNET.
            </p>
          </Col>
        </Row>
        <Row className="qas">
          {qas.map((qa) => {
            return (
              <Row className="qa justify-content-center gx-5">
                <Col xs={3} className="d-flex justify-content-end">
                  <div className="qa__image-container">
                    <Image
                      className={`qa__image qa__image--${qa.name}`}
                      // fluid
                      src={
                        require(`../../../assets/images/licensesandregistrations/${qa.image}`)
                          .default
                      }
                    />
                  </div>
                </Col>
                <Col xs={6} className="qa__descriptions ">
                  {qa.descriptions.map((description) => {
                    return (
                      <div className="qa__description">
                        <h5 className="qa__sub">{description.sub}</h5>
                        <h4 className="qa__name">{description.name}</h4>
                      </div>
                    );
                  })}
                </Col>
              </Row>
            );
          })}
        </Row>
        {/* <Row>
          <Col md={7} data-scroll data-scroll-speed="1">
            <Carousel fade>
              <Carousel.Item>
                <Image
                  src={
                    require("../../../assets/images/licensesandregistrations/Licenses_IMG-QA-01.png")
                      .default
                  }
                />
                <Carousel.Caption>
                  <h3 className="--caption">
                    {" "}
                    ISO 9001 : 2008
                    <br />
                    Sirim Qas{" "}
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={
                    require("../../../assets/images/licensesandregistrations/Licenses_IMG-QA-02.png")
                      .default
                  }
                />
                <Carousel.Caption>
                  <h3 className="--caption">
                    {" "}
                    ISO 9001 : 2008
                    <br />
                    Sirim Qas{" "}
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={
                    require("../../../assets/images/licensesandregistrations/Licenses_IMG-QA-03.png")
                      .default
                  }
                />
                <Carousel.Caption>
                  <h3 className="--caption">
                    {" "}
                    ISO 9001 : 2008
                    <br />
                    Sirim Qas{" "}
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={
                    require("../../../assets/images/licensesandregistrations/Licenses_IMG-QA-04.png")
                      .default
                  }
                />
                <Carousel.Caption>
                  <h3 className="--caption">
                    {" "}
                    WATER SUPPLY PERMIT <br />
                    NATIONAL WATER SERVICES COMMISION
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={
                    require("../../../assets/images/licensesandregistrations/Licenses_IMG-QA-05.png")
                      .default
                  }
                />
                <Carousel.Caption>
                  <h3 className="--caption">
                    {" "}
                    SEWERAGE PERMIT <br />
                    NATIONAL WATER SEVICES COMMISION
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={
                    require("../../../assets/images/licensesandregistrations/Licenses_IMG-QA-06.png")
                      .default
                  }
                />
                <Carousel.Caption>
                  <h3 className="--caption">
                    {" "}
                    SUPPLIER AND SERVICE CONTRACTOR <br />
                    TENAGA NASIONAL BERHAD
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={
                    require("../../../assets/images/licensesandregistrations/Licenses_IMG-QA-07.png")
                      .default
                  }
                />
                <Carousel.Caption>
                  <h3 className="--caption">
                    {" "}
                    EQUIPMENT AND SERVICES SUPPLIER <br />
                    PETRONAS
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <div className="--text-container" data-scroll data-scroll-speed="2">
              <hr />
              <p className="--desc">
                {" "}
                We maintain a quality management <br />
                system which fulfills the <br />
                requirements of iso <br />
                9001 : 2008, specifically for <br />
                construction services of <br />
                roadworks and infrastructures. <br />
                It is certified by sirim <br />
                qas International Sdn Bhd and also the International
                Certification Network, iqnet.{" "}
              </p>
            </div>
          </Col>
        </Row> */}
      </Container>
      {/* <div className="qualityassurance-bg"/> */}
    </div>
  );
}
