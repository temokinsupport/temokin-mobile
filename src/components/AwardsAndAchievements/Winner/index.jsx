import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

export default function Winner() {
  const rewards = [
    {
      name: "Jabatan kerja \n raya malaysia",
      place: "winner",
      description:
        "Excellent contractor award 2015 \n for infrastructure project costing \n more than rm10 million and less \n than rm50 million ",
      address: "Middle ring road seremban, negeri \n sembilan phase 3a",
    },
    {
      name: "Jabatan kerja \n raya malaysia",
      place: "first runner up",
      description:
        "Excellent contractor award 2015 \n for infrastructure project costing \n more than rm50 million",
      address: "Middle ring road seremban, negeri \n sembilan phase 2b",
    },
  ];

  return (
    <div className="--bg-2" data-scroll-section>
      <Image
        className="tips tips--top"
        src={
          require("../../../assets/images/awards/awards-bg-tips.svg").default
        }
      />
      <Image
        className="svg svg--2"
        src={
          require("../../../assets/images/awardsandachievements/svg-2.svg")
            .default
        }
      />
      <Image
        className="svg svg--3"
        fluid
        src={
          require("../../../assets/images/awardsandachievements/svg-3.svg")
            .default
        }
      />
      <Image
        className="svg svg--5"
        fluid
        src={
          require("../../../assets/images/awardsandachievements/svg-5.svg")
            .default
        }
      />
      <Container className="--max awards">
        {rewards.map((reward, index) => {
          return (
            <Row key={index} className="award">
              <Col xs={12} className="award__left">
                <Image
                  className="award__image"
                  fluid
                  src={require("../../../assets/images/awards/jkr.png").default}
                />
                <p className="award__name">{reward.name}</p>
              </Col>
              <Col
                xs={12}
                className="award__right d-flex flex-column gap justify-content-center"
              >
                <p className="award__place">{reward.place}</p>
                <p className="award__description">{reward.description}</p>
                <hr />
                <p className="award__address">{reward.address}</p>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Image
        className="tips tips--bottom"
        src={
          require("../../../assets/images/awards/awards-bg-tips.svg").default
        }
      />
      {/* <div className="winner-bg " /> */}
    </div>
  );
}
