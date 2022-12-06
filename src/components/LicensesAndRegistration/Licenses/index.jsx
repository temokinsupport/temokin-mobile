import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

export default function Licenses() {
  const licenses = [
    {
      image: "bpkud.png",
      descriptions: [
        {
          content: "BAHAGIAN PEMBANGUNAN \n KONTRAKTOR DAN USAHAWAN",
          type: "name",
        },
        {
          content: "(DAHULU DIKENALI SEBAGAI PUSAT \n KHIDMAT KONTRAKTOR)",
          type: "alt",
        },
        {
          content: "KEMENTERIAN KERJA \n RAYA MALAYSIA",
          type: "name",
        },
      ],
    },
    {
      image: "bpkud.png",
      descriptions: [
        {
          content: "KEMENTERIAN KEWANGAN \n MALAYSIA",
          type: "name",
        },
        {
          content: "SIJIL AKUAN PENDAFTARAN \n SYARIKAT",
          type: "alt",
        },
      ],
    },
    {
      image: "bakti-suci.png",
      descriptions: [
        {
          content: "PERAKUAN \n PENDAFTARAN",
          type: "name",
        },
      ],
    },
    {
      image: "bpkud.png",
      descriptions: [
        {
          content: "KEMENTERIAN KEWANGAN \n MALAYSIA",
          type: "name",
        },
        {
          content: "AKUAN PENDAFTARAN \n KONTRAKTOR",
          type: "alt",
        },
      ],
    },
    {
      image: "cidb.png",
      descriptions: [
        {
          content: "PERAKUAN \n PENDAFTARAN",
          type: "name",
        },
      ],
    },
    {
      image: "cidb.png",
      descriptions: [
        {
          content: "SIJIL PEROLEHAN \n KERJA KERAJAAN",
          type: "name",
        },
      ],
    },
  ];

  return (
    <div className="--bg-2">
      <Container>
        <Row className="licenses ">
          {licenses.map((license) => {
            return (
              <Row className="license justify-content-center align-items-center">
                <Col xs={12}>
                  <Image
                    className="license__image"
                    fluid
                    src={
                      require(`../../../assets/images/licensesandregistrations/${license.image}`)
                        .default
                    }
                  />
                </Col>
                <Col xs={12}>
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
