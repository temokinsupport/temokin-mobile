import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

export default function Licenses() {
  const licenses = [
    {
      image: "bpkud.png",
      descriptions: [
        {
          content: "BAHAGIAN PEMBANGUNAN KONTRAKTOR DAN USAHAWAN",
          type: "name",
        },
        {
          content: "(DAHULU DIKENALI SEBAGAI PUSAT KHIDMAT KONTRAKTOR)",
          type: "alt",
        },
        {
          content: "BAHAGIAN PEMBANGUNAN KONTRAKTOR DAN USAHAWAN",
          type: "name",
        },
      ],
    },
    {
      image: "bpkud.png",
      descriptions: [
        {
          content: "KEMENTERIAN KEWANGAN MALAYSIA",
          type: "name",
        },
        {
          content: "SIJIL AKUAN PENDAFTARAN SYARIKAT",
          type: "alt",
        },
      ],
    },
    {
      image: "bakti-suci.png",
      descriptions: [
        {
          content: "PERAKUAN PENDAFTARAN",
          type: "name",
        },
      ],
    },
    {
      image: "bpkud.png",
      descriptions: [
        {
          content: "SIJIL PEROLEHAN KERJA KERAJAAN",
          type: "name",
        },
        {
          content: "SIJIL AKUAN PENDAFTARAN SYARIKAT",
          type: "name",
        },
      ],
    },
    {
      image: "cidb.png",
      descriptions: [
        {
          content: "PERAKUAN PENDAFTARAN",
          type: "name",
        },
      ],
    },
    {
      image: "cidb.png",
      descriptions: [
        {
          content: "SIJIL PEROLEHAN KERJA KERAJAAN",
          type: "name",
        },
      ],
    },
  ];

  return (
    <div className="--bg-2" data-scroll-section>
      <Container>
        <Row className="licenses ">
          {licenses.map((license) => {
            return (
              <Row className="license justify-content-center align-items-center">
                <Col xs={2}>
                  <Image
                    className="license__image me-2"
                    fluid
                    src={
                      require(`../../../assets/images/licensesandregistrations/${license.image}`)
                        .default
                    }
                  />
                </Col>
                <Col xs={{span: 6, offset: 1}}>
                  <div className="license__content">
                    {license.descriptions.map((description) => {
                      if (description.type === "name") {
                        return (
                          <h4 className={`license__content--name`}>
                            {description.content}
                          </h4>
                        );
                      } else {
                        return (
                          <h5 className={`license__content--alt`}>
                            {description.content}
                          </h5>
                        );
                      }
                    })}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
      <div className="licenses-vector licenses-vector__bottom">
        <Image
          className=""
          fluid
          src={
            require("../../../assets/images/licensesandregistrations/license-bottom-vector.png")
              .default
          }
        />
      </div>
    </div>
  );
}
