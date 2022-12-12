import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/styles/propertyprojects.scss";
import overlayImage from "../assets/images/propertyprojects/PropertyDev_Shapes-02.png";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Mahligai = () => {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(1);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {" "}
      {
        <Projects
          className="--projects
            main-container"
          id="main-container"
          data-scroll-container
        >
          <div className="--bg-1">
            <Navigation />
            <Container className="--max">
              <Row>
                <Col>
                  <div className="--project-details">
                    <Image
                      className="d-block"
                      src={
                        require("../assets/images/propertyprojects/PropertyDev_IMG-Mahligai.png")
                          .default
                      }
                      alt="First slide"
                    />
                    <div className="--about-content">
                      <Row>
                        <Col md={6}>
                          <Name>
                            MAHLIGAI AT NUSA DAMAI, TWO <br />
                            STOREY AND THREE STOREY HOUSING, <br />
                            JOHOR
                          </Name>
                          <Line />
                          <Description>
                            Mahligai at Nusa Damai consists of 163 <br />
                            landed houses in the already-mature <br />
                            neighborhood of Masai in Johor.
                          </Description>
                        </Col>
                        <Col md={6}>
                          <TextContainer>
                            <Label>Client</Label>
                            <Text>Temokin Development Sdn. Bhd.</Text>
                            <Label>Value</Label>
                            <Text>RM100 million</Text>
                            <Label>Period</Label>
                            <Text>Feb 2018 to ongoing</Text>
                          </TextContainer>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <NavLink
                            to="/team-leaders"
                            className="--btn-get-to-know"
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        </Projects>
      }{" "}
    </>
  );
};

const Projects = styled.div`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: url(${overlayImage}) top 8vw left;
    transition: background 0.3s;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: 100vw 100vw;
    height: 100vw;
    width: 100%;
  }
`;

const Name = styled.h3`
  letter-spacing: 0.15vw;
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

export default Mahligai;
