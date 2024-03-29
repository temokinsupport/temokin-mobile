import React from "react"; 
import { Container, Row, Col, Image } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMediaQuery } from "react-responsive";

export default function OurValues() {
  const isTablet = useMediaQuery({ query: "(min-width: 760px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className="--container-7" data-scroll-section> 
      <div className="--bg-1" />
      <Container>
        <Row>
          <Col data-scroll className="p-0 position-relative">
            <Image
              src={
                require("../../../assets/images/aboutus/AboutUs_BG-02 2.png")
                  .default
              }
              style={{'width': isTablet ? '110vw' : '', 'margin-left': isTablet ? '-6vw' : ''}}
            />
            <h1 className="--title --mob  position-absolute top-50 start-50 translate-middle">
              Our Values
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
                    require("../../../assets/images/aboutus/About_IMG-Wisdom.png")
                      .default
                  }
                />
                <div className="--right-container">
                  <h5 className="--title">Wisdom</h5>
                  <hr />
                  <p className="--desc">
                    We are relentless in our {"\n"} pursuit for wisdom
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={
                    require("../../../assets/images/aboutus/About_IMG-Equality.png")
                      .default
                  }
                />
                <div className="--right-container">
                  <h5 className="--title">Equality</h5>
                  <hr />
                  <p className="--desc">
                    We embrace inclusivity and {"\n"} equality for all
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={
                    require("../../../assets/images/aboutus/About_IMG-Diligence.png")
                      .default
                  }
                />
                <div className="--right-container">
                  <h5 className="--title">Diligence</h5>
                  <hr />
                  <p className="--desc">
                    We achieve success without {"\n"} taking shortcuts
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={
                    require("../../../assets/images/aboutus/Mask Group 70.png")
                      .default
                  }
                />
                <div className="--right-container">
                  <h5 className="--title">Integrity</h5>
                  <hr />
                  <p className="--desc">
                    We endorse transparency {"\n"} and honesty {"\n"} in all
                    that we do
                  </p>
                </div>
              </SplideSlide>

              <SplideSlide>
                <Image
                  src={
                    require("../../../assets/images/aboutus/About_IMG-Guidance.png")
                      .default
                  }
                />
                <div className="--right-container">
                  <h5 className="--title">Guidance</h5>
                  <hr />
                  <p className="--desc">
                    We pave the way for others {"\n"} to shine and progress
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
