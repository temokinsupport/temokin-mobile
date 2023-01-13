import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function OperatingPrinciples() {
  return (
    <div className="--container-5" data-scroll-section>
      <div className="--bg-1" />
      <div className="--bg-2" />
      <Container className="--mob">
        <Row>
          <Col data-scroll className="p-0 position-relative">
            <Image
              src={
                require("../../../assets/images/aboutus/our-operating-principles-bg.png")
                  .default
              }
            />
            <h1 className="--title position-absolute top-50 start-50 translate-middle">
              {" "}
              Our Operating <br />
              Principles
            </h1>
          </Col>
        </Row>
      </Container>
      <Container className="--max">
        <Row>
          <Col data-scroll>
            <Splide
              options={{
                type: "fade",
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
              }}
            >
              <SplideSlide>
                <Image
                  src={
                    require("../../../assets/images/aboutus/Mask Group 67.png")
                      .default
                  }
                />
                <div className="--right-container">
                  <h5 className="--title">People</h5>
                  <hr />
                  <p className="--desc">
                    We are {"\n"}
                    client-oriented
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={
                    require("../../../assets/images/aboutus/About_IMG-Accoutability.png")
                      .default
                  }
                />
                <div className="--right-container">
                  <h5 className="--title">Accountability</h5>
                  <hr />
                  <p className="--desc">
                    We ensure {"\n"}
                    peace of mind
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={
                    require("../../../assets/images/aboutus/Mask Group 69.jpg")
                      .default
                  }
                />
                <div className="--right-container">
                  <h5 className="--title">Timing</h5>
                  <hr />
                  <p className="--desc">
                    We deliver {"\n"}
                    on schedule
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={
                    require("../../../assets/images/aboutus/About_IMG-Quality.png")
                      .default
                  }
                />
                <div className="--right-container">
                  <h5 className="--title">Quality</h5>
                  <hr />
                  <p className="--desc">
                    We exceed {"\n"}
                    Expectations
                  </p>
                </div>
              </SplideSlide>
            </Splide>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
