import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/styles/leader.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const YmRajaDatoAzwaneBinRajaAriff = () => {
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
        <div
          className="--leader
                main-container"
          id="main-container"
          data-scroll-container
        >
          <div className="--bg-1" data-scroll-section>
            <Navigation />
            <Container className="--max">
              <Row>
                <Col>
                  <div className="--leader-details">
                    <ul>
                      <li>
                        <NavLink
                          className="control-prev"
                          to="/team-leaders/chan-yoon-sang"
                        />
                      </li>
                      <li>
                        <NavLink
                          className="control-next"
                          to="/team-leaders/y-bhg-dato-ir-robert-tan-kim-kuan"
                        />
                      </li>
                    </ul>
                    <Image
                      className="d-block"
                      src={
                        require("../assets/images/leaders/Leaders_IMG-YMRaja.png")
                          .default
                      }
                      alt="First slide"
                    />
                    <div className="--about-content">
                      <Row>
                        <Col md={5}>
                          <Name>
                            Y.M. RAJA DATO’ <br />
                            AZWANE BIN <br />
                            RAJA ARIFF
                          </Name>
                          <Line />
                          <Position>
                            EXECUTIVE <br />
                            DIRECTOR
                          </Position>
                        </Col>
                        <Col md={7}>
                          <Description>
                            Raja Dato’ Azwane is responsible for the
                            implementation of key growth strategies to increase
                            the capacity of the company while maintaining a
                            prudent cost structure. He also leads our investor
                            relations efforts. <br /> <br />
                            After obtaining his Bachelor of Science in
                            Accounting & Finance (Hons.) degree from the
                            University of Hull, England, he worked for more than
                            10 years in audit supervisory & business management
                            positions before starting his own businesses in
                            construction, farm management, food & beverage and
                            property development. With his deep experience and
                            entrepreneurial skill, he strengthens our portfolio
                            of businesses. <br /> <br />
                            He was also the treasurer of the Dewan Perniagaan
                            Melayu Muda.
                          </Description>
                          <Line />
                          <Qoute>
                            “Great things usually cannot be done by one person,
                            so we work in teams. Working well in a team is a
                            skill— it can be learned, and it can be taught.”
                          </Qoute>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <NavLink
                            to="/team-leaders"
                            className="--btn-get-to-know"
                          >
                            GET TO KNOW THE TEAM
                          </NavLink>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="leader-bg" />
            <Footer />
          </div>
        </div>
      }{" "}
    </>
  );
};

const Name = styled.h3`
  letter-spacing: 0.4vw;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 2.8vw;
  font-size: 2vw;
  font-family: "gill sans", sans-serif !important;
  color: #283a97;
  margin: 0;
  text-align: left;
`;

const Line = styled.hr`
  background-color: #676ab1;
  height: 2px !important;
  width: 6vw;
  opacity: 1;
  margin: 3vw 0 2.5vw 0;
`;

const Position = styled.h6`
  letter-spacing: 0.25vw;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 2vw;
  font-size: 1.6vw;
  font-family: "gill sans", sans-serif !important;
  color: #676ab1;
  text-align: left;
`;

const Description = styled.p`
  font-weight: 600 !important;
  line-height: 1.8;
  font-size: 0.94vw;
  font-family: "gill sans light", sans-serif !important;
  color: #283a97;
  margin: 0;
  text-align: left;
  letter-spacing: 1px;
`;

const Qoute = styled.p`
  font-weight: 600 !important;
  line-height: 2.8vw;
  font-size: 1.6vw;
  font-family: "gill sans", sans-serif !important;
  color: #283a97;
  margin: 0;
  text-align: left;
  letter-spacing: 0.27vw;
`;

export default YmRajaDatoAzwaneBinRajaAriff;
