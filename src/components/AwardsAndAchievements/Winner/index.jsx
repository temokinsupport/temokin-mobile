import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

export default function Winner() {
  const rewards = [
    {
      name: "Jabatan kerja raya malaysia",
      place: "winner",
      description:
        "Excellent contractor award 2015 for infrastructure project costing more than rm10 million and less than rm50 million ",
      address: "Middle ring road seremban, negeri sembilan phase 3a",
    },
    {
      name: "Jabatan kerja raya malaysia",
      place: "first-runner-up",
      description:
        "Excellent contractor award 2015 for infrastructure project costing more than rm50 million",
      address: "Middle ring road seremban, negeri sembilan phase 2b",
    },
  ];

  return (
    <div className="--bg-2" data-scroll-section>
      <Container className="--max">
        <Row className="awards">
          {rewards.map((reward, index) => {
            return (
              <Row key={index} className="award">
                <Col sm={3} className="award__left">
                  <Image
                    className="award__image"
                    fluid
                    src={
                      require("../../../assets/images/awards/jkr.png").default
                    }
                  />
                  <p className="award__name">{reward.name}</p>
                </Col>
                <Col className="award__right d-flex flex-column gap justify-content-center">
                  <p className="award__place">{reward.place}</p>
                  <p className="award__description">{reward.description}</p>
                  <p className="award__address">{reward.address}</p>
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
      <div className="winner-bg " />
    </div>
  );
}
