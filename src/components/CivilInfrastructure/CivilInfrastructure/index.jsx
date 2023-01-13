import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function CivilInfrastructure() {
  return (
    <section className="--container-2 civilinfra" data-scroll-section>
      <Image
        className="--right-3" 
        src={
          require("../../../assets/images/civilinfrastructure/right-3.svg")
            .default
        }
      />
      <Image
        className="--right-4"
        src={
          require("../../../assets/images/civilinfrastructure/right-6.png")
            .default
        }
      />
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h2 className="--title" data-scroll data-scroll-speed="2">
              CIVIL &
            </h2>
            <br />
            <h2 className="--title" data-scroll data-scroll-speed="2">
              INFRASTRUCTURE
            </h2>
            <br /> <br /> 
            <hr />
            <p className="--sub-title" data-scroll data-scroll-speed="2" style={{'line-height' : '3', 'text-transform': 'uppercase'}}>
              Our expertise in engineering has seen <br />
              us build many of the nation’s  <br /> 
              electricity substations, major <br /> 
              underground sewage lines, <br />
              complex bridges and major highways.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
