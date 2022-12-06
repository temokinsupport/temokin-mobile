import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Hero = ({ projectData }) => {
  return (
    <Container className="--max">
      <Row>
        <Col>
          <div className="--project-details">
            <Row className="justify-content-center">
              <Col xs={12}>
                {projectData.hero ? (
                  <Image
                    className="d-block"
                    src={
                      require(`../../../assets/images${projectData.hero}`)
                        .default
                    }
                    alt="First slide"
                  />
                ) : null}
              </Col>
            </Row>
            <div className="--about-content">
              <Row className="justify-content-between"> 
                <Col md={12}>
                  <Name>{projectData.title}</Name>
                  <Line />
                  <Description>{projectData.description}</Description>
                </Col>
                <Col md={12}>
                  <TextContainer style={{ 'margin-top': '10vw', 'margin-bottom': '20vw'}}>
                    {projectData.client ? (
                      <>
                        <Label>Client</Label>
                        <Text>{projectData.client}</Text>
                      </>
                    ) : null}
                    {projectData.value ? (
                      <>
                        <Label>Value</Label>
                        <Text>{projectData.value}</Text>
                      </>
                    ) : null}
                    {projectData.period ? (
                      <>
                        <Label>Period</Label>
                        <Text>{projectData.period}</Text>
                      </>
                    ) : null}
                    {projectData.website ? (
                      <>
                        <Label>Website</Label>
                        <Text>{projectData.website}</Text>
                      </>
                    ) : null}
                  </TextContainer>
                </Col>
              </Row>
              <Row>
                <Col>
                  <NavLink to="/team-leaders" className="--btn-get-to-know" />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const Name = styled.h3`
  letter-spacing: 0.19vw;
  text-transform: uppercase;
  line-height: 1.4;
  font-size: 1.1vw;
  font-family: "gill sans medium", sans-serif !important;
  color: #283a97;
  margin: 0;
  text-align: left;
  font-weight: 800 !important;
`;

const Line = styled.hr`
  background-color: #676ab1;
  height: 2px !important;
  width: 18vw;
  opacity: 1;
  margin: 3vw 0 2.5vw 0;
`;

const Description = styled.p`
  font-weight: 600 !important;
  line-height: 1.3;
  font-size: 1.12vw;
  font-family: "gill sans light", sans-serif !important;
  color: #283a97;
  margin: 0;
  text-align: left;
  letter-spacing: 0.15vw;
`;
const TextContainer = styled.div``;

const Label = styled.h3`
  letter-spacing: 0.19vw;
  line-height: 1.4;
  font-size: 1.1vw;
  font-family: "gill sans medium", sans-serif !important;
  color: #283a97;
  margin: 0;
  text-align: left;
  font-weight: 800 !important;
`;

const Text = styled.p`
  font-weight: 600 !important;
  line-height: 1.8;
  font-size: 1.15vw;
  font-family: "gill sans light", sans-serif !important;
  color: #283a97;
  margin: 0 0 1.5vw 0;
  text-align: left;
  letter-spacing: 0.18vw;
`;

export default Hero;
