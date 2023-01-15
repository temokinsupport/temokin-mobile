import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "../../Navigation";

export default function HeaderCivilInfrastructure() {
  return (
    <section className="--header-container" data-scroll-section> 
      <Navigation />

      <div className="slideshow"> 
        <Image
          className="svg svg--2"
          src={
            require("../../../assets/images/civilinfrastructure/svg-2.svg")
              .default
          }
        />

        {/* <label for="button-1" className="arrow a1"></label>
                    <label for="button-2" className="arrow a2"></label> */}

        <div className="content">
          <div className="parallax-bg"></div>  
          <div className="--header-civil"> 
            <Container className="--max">
              <Row>
                <Col md={12}>
                  <h1 className="--titles">Our Showcase</h1> 
                </Col>
                <Col md={12}>
                  <p className="--desc">
                    As a builder, we are only as successful as the {"\n"}
                    milestones that we’ve built.
                  </p>

                  <p className="--desc m-0">
                    Here, we would like to share with you some {"\n"}
                    of the work that proudly carry the {"\n"}
                    TEMOKIN badge.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
