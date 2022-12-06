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
              Quality {"\n"} Assurance
            </h1>
            <p className="--desc">
              WE MAINTAIN A QUALITY MANAGEMENT <br /> SYSTEM WHICH FULFILS THE
              REQUIREMENTS OF <br /> ISO 9001:2008, SPECIFICALLY FOR ROADWORKS{" "}
              <br /> AND INFRASTRUCTURE CONSTRUCTION, <br /> CERTIFIED BY SIRIM
              QAS INTERNATIONAL SDN <br /> BHD AND THE INTERNATIONAL
              CERTIFICATION <br />
              NETWORK, IQNET.
            </p>
          </Col>
        </Row>
        <Row className="qas">
          {qas.map((qa) => {
            return (
              <Row className="qa justify-content-center">
                <Col xs={12} className="d-flex justify-content-end">
                  <div
                    className={`qa__image-container qa__image-container--${qa.name}`}
                  >
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
                <Col xs={12} className="qa__descriptions ">
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
      </Container>
      {/* <div className="qualityassurance-bg"/> */}
    </div>
  );
}
