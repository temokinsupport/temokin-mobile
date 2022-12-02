import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../Navigation";

export default function Header() {
  return (
    <div className="--bg-1" data-scroll-section>
      <Navigation />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h1 className="--title">Property <br /> Development</h1>
            
            {/* <p className="--desc">
              As a people developer, we are only as successful as the
              developments we weave in with trust, passion and love.{" "}
            </p>
            <p className="--desc">
              Here are some of the projects that people can call home. We never
              stand still and continue to pursue excellence with the Temokin
              Badge.{" "}
            </p> */}
            <p className="--content">
              As a people developer, we are only as successful <br />
              as the developments we weave in with trust,<br />
              passion and love.
            </p>

            <p className="--content">
              Here are some of the projects that people can <br />
              call home. We never stand still and continue<br />
              to pursue excellence with the Temokin Badge.
            </p>

          </Col>
        </Row>
      </Container>
      {/* <div className="header-bg" /> */}
    </div>
  );
}
