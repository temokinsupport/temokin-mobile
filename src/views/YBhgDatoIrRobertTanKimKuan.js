import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/styles/leader.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const YBhgDatoIrRobertTanKimKuan = () => {
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
          <Image
            className="svg svg--1"
            src={require("../assets/images/leaders/svg-1.svg").default}
            alt="First slide"
          />
          <Image
            className="svg svg--2"
            src={require("../assets/images/leaders/svg-2.svg").default}
            alt="First slide"
          />
          <div className="--bg-1" data-scroll-section>
            <Navigation />
            <Container className="--max">
              <Row>
                <Col>
                  <div className="--leader-details">
                    <PageTitle className="page-title">
                      MEET OUR LEADERS
                    </PageTitle>
                    <div className="--about-content">
                      <Row>
                        <Col sm="5" md="12">
                          <Name>
                            DATO' IR. TAN KIM KUAN <br />
                            (ROBERT)
                          </Name>
                          <Line />
                          <Position>
                            <div className="leader-position">
                              MANAGING DIRECTOR
                            </div>
                          </Position>
                        </Col>
                        <Col sm="7" md ="12">
                          <Description>
                            Dato’ Robert is responsible for the overall
                            strategic {"\n"} direction of TEMOKIN and leads our
                            business development, {"\n"} technical and
                            investment arms. A chartered Engineer (UK) {"\n"}{" "}
                            and a Professional Engineer (PE), bachelor in Civil{" "}
                            {"\n"} Engineering (Hons.) degree from University
                            Malaya, Malaysia, {"\n"} and has worked 47 years in
                            the construction industry. He is {"\n"}
                            well respected in the construction of key
                            infrastructural and {"\n"} development projects in
                            Malaysia. {"\n"} He previously holds position in the
                            Klang Chinese Chamber {"\n"} of Commerce, Master
                            Builders Association Malaysia, SIRIM {"\n"} Standard
                            Committee, Council Member Of Institute Of {"\n"}{" "}
                            Engineer, Malaysia (IEM). He is also passionately
                            involved in {"\n"} charities and NGOs, including
                            Dignity for Children and the {"\n"}
                            Little Sisters of the Poor Home for the Aged.
                          </Description>
                          <Line />
                          <Qoute>
                            “We want to be {"\n"} remembered not just {"\n"}for
                            great work, {"\n"}
                            but as good people who{"\n"} did great work. {"\n"}
                            Integrity, fairness and {"\n"}compassion must be the{" "}
                            {"\n"} key in all we do.”
                          </Qoute>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <NavLink
                            to="/team-leaders"
                            className="--btn-get-to-know"
                          >
                            <GetToKnow>GET TO KNOW THE TEAM</GetToKnow>
                          </NavLink>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="bottom-bg"></div>
            <div className="leader-bg" />
            <Footer />
          </div>
        </div>
      }{" "}
    </>
  );
};

const PageTitle = styled.h1`
  letter-spacing: 0.2em;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 1.5em;
  font-size: 4.3vw;
  font-family: "gill sans", sans-serif !important;
  color: #283a97;
  margin: 25vw 0;
  text-align: center;
`;

const Name = styled.h3`
  letter-spacing: 0.2em;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 1.5em;
  font-size: 4.2vw;
  font-family: "gill sans", sans-serif !important;
  color: #676ab1;
  margin: 0;
  text-align: center;
`;

const Line = styled.hr`
  background-color: #676ab1;
  height: 1px !important;
  width: 10vw;
  opacity: 1;
  margin: 5vw auto;
`;

const Position = styled.h6`
  letter-spacing: 0.2em;
  font-weight: 600 !important;
  text-transform: uppercase;
  line-height: 2em;
  font-size: 3.3vw;
  font-family: "gill sans light", sans-serif !important;
  color: #676ab1;
  text-align: center;
`;

const Description = styled.p`
  font-weight: 600 !important;
  line-height: 2em;
  font-size: 2.6vw;
  font-family: "gill sans light", sans-serif !important;
  color: #676ab1;
  margin: 10vw auto 0;
  width: 80vw;
  text-align: center;
  letter-spacing: 0.1em;
  white-space: pre-line;

  @supports (-webkit-touch-callout: none) {
    font-size: 2.6vw;
    letter-spacing: 0em;
  }

  @-moz-document url-prefix() {
    letter-spacing: 0.05em;
  }
`;

const Qoute = styled.p`
  line-height: 2em;
  font-size: 4vw;
  font-family: "gill sans", sans-serif !important;
  color: #283a97;
  margin: 10vw auto 0;
  text-align: center;
  letter-spacing: 0.2em;
  white-space: pre-line;
`;

const GetToKnow = styled.button`
  font-size: 2.5vw;
  letter-spacing: 0.2em;
  padding: 1.8em 4em;
  border: 1px solid white;
  color: white;
  background: #283a97;
  text-transform: none;
  font-family: "gill sans", sans-serif !important;
  border: none;
  margin: 20vw 0;
`;

export default YBhgDatoIrRobertTanKimKuan;
