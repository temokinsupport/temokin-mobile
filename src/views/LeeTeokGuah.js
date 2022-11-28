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
          <div className="--bg-1" data-scroll-section>
            <Navigation />
            <Container className="--max">
              <Row>
                <Col>
                  <div className="--leader-details">
                    <h1 className="text-center">MEET OUR LEADERS</h1>
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
                            Edward possess more than 28 years of experience in
                            property development and project management. He has
                            extensive experience in township master planning and
                            condominium projects as well as strata property
                            management.
                            <br />
                            <br />
                            He was the Project General Manager of Scientex Bhd
                            leading the Central Project Team, in charge of their
                            Ipoh, Rawang, Kundang and Cheras project.
                            <br />
                            <br />
                            Prior to that, he was the General Manager of TAHPS
                            Group Bhd (now known as Ayer Holdings Bhd),
                            developer of a I, 200 acre of Integrated Township
                            called Bandar Bukit Puchong, responsible for Project
                            Management, Sales & Marketing, Sales Admin, Township
                            Maintenance & Customer Care and also overseeing the
                            Finance & HR Department.
                            <br />
                            <br />
                            Edward started his career in 1992 with MBf Property
                            Services Sdn Bhd, thereafter he joined YTL Land &
                            Development Bhd for 13 years, starting as Project
                            Manager until he reached the position of General
                            Manager. His projects include the urban renewal
                            project of Sentul East & West, Lake Edge, Pantai
                            Hillpark, Lake Fields and Housing project at Ipoh
                            and Pasir Gudang.
                          </Description>
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
            <div className="bottom-bg"></div>
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
  line-height: 1.6em;
  font-size: 1.5vw;
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

export default LeeTeokGuah;
