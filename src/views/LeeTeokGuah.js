import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/styles/leader.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const LeeTeokGuah = () => {
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
                        <Col md={5}>
                          <Name>
                            LEE <br />
                            TEOK GUAH (EDWARD)
                          </Name>
                          <Line />
                          <Position>
                            <div className="leader-position">
                              GENERAL MANAGER <br />
                              OF THE DEVELOPMENT ARM, <br />
                              TEMOKIN DEVELOPMENT
                            </div>
                          </Position>
                        </Col>
                        <Col md={7}>
                          <Description>
                            Edward possess more than 28 years of experience in{" "}
                            {"\n"}
                            property development and project management. He has{" "}
                            {"\n"}
                            extensive experience in township master planning and{" "}
                            {"\n"}
                            condominium projects as well as strata property{" "}
                            {"\n"}
                            management.
                            <br />
                            <br />
                            He was the Project General Manager of Scientex Bhd
                            leading {"\n"} the Central Project Team, in charge
                            of their Ipoh, Rawang, {"\n"} Kundang and Cheras
                            project.
                            <br />
                            <br />
                            Prior to that, he was the General Manager of TAHPS
                            Group {"\n"} Bhd (now known as Ayer Holdings Bhd),
                            developer of a {"\n"} I, 200 acre of Integrated
                            Township called Bandar Bukit {"\n"} Puchong,
                            responsible for Project Management, Sales & {"\n"}{" "}
                            Marketing, Sales Admin, Township Maintenance &
                            Customer {"\n"}Care and also overseeing the Finance
                            & HR Department.
                            <br />
                            <br />
                            Edward started his career in 1992 with MBf Property{" "}
                            {"\n"}
                            Services Sdn Bhd, thereafter he joined YTL Land &{" "}
                            {"\n"}
                            Development Bhd for 13 years, starting as Project
                            Manager {"\n"} until he reached the position of
                            General Manager. His {"\n"} projects include the
                            urban renewal project of Sentul East & {"\n"}West,
                            Lake Edge, Pantai Hillpark, Lake Fields and Housing{" "}
                            {"\n"}project at Ipoh and Pasir Gudang.
                          </Description>
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
  font-size: 2.7vw;
  font-family: "gill sans light", sans-serif !important;
  color: #676ab1;
  margin: 10vw auto 0;
  width: 80vw;
  text-align: center;
  letter-spacing: 0.1em;
  white-space: pre-line;
`;

const Qoute = styled.p`
  font-weight: 600 !important;
  line-height: 1.8;
  font-size: 4vw;
  font-family: "gill sans", sans-serif !important;
  color: #283a97;
  margin: 10vw auto 0;
  text-align: center;
  letter-spacing: 0.27vw;
  width: 60%;
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

export default LeeTeokGuah;
