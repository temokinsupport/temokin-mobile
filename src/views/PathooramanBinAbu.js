import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/styles/leader.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PathooramanBinAbu = () => {
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
                          to="/team-leaders/crystal-wong-wai-ching"
                        />
                      </li>
                    </ul>
                    <Image
                      className="d-block"
                      src={
                        require("../assets/images/leaders/Leaders_IMG-Pathooraman.png")
                          .default
                      }
                      alt="First slide"
                    />
                    <div className="--about-content">
                      <Row>
                        <Col md={5}>
                          <Name>
                            Pathooraman <br />
                            Bin Abu
                          </Name>
                          <Line />
                          <Position>
                            GENERAL <br />
                            MANAGER
                          </Position>
                        </Col>
                        <Col md={7}>
                          <Description>
                            Pathooraman bin Abu is overall-in-charge of
                            operations. He has been integral in the formation of
                            our property development arm and facilitated the
                            smooth transition of the business into our
                            international operations. With more than 20 years of
                            experience, he specialises in project management,
                            construction, investment, market research,
                            feasibility study, mergers and acquisitions. <br />
                            <br />
                            He graduated with a Bachelor of Science in Building
                            Science degree from the University of East Carolina,
                            USA, and a Master in City & Regional Planning degree
                            from Clemson University, USA. Upon graduation, he
                            worked as a lecturer at University Technology MARA
                            and then held managerial positions in the Lion
                            Group, DTZ Nawawi Tie Leung, Bolton Bhd (now
                            Symphony Life), DRB-Hicom and Perbadanan Kemajuan
                            Negeri Selangor (PKNS).
                          </Description>
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

export default PathooramanBinAbu;
