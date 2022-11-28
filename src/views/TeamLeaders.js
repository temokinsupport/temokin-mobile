import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
// import { useMediaQuery } from 'react-responsive';
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../assets/styles/teamleaders.scss";
import Join from "../components/TeamLeaders/Join";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const TeamLeaders = () => {
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

  // DESKTOP, TABLET & MOBILE
  // const isTablet = useMediaQuery({ query: '(min-width: 992px)' });
  // const isMobile = useMediaQuery({ query: '(max-width: 992px)' });

  const teamLeaders = [
    {
      id: 0,
      name: "DATO' IR. TAN KIM KUAN \n(ROBERT)",
      position: "MANAGING \nDIRECTOR",
      secondPosition: "BOARD OF DIRECTORS",
      img: require("../assets/images/teamleaders/Leaders_IMG-Leader-01A.png")
        .default,
      img2: require("../assets/images/teamleaders/Leaders_IMG-Leader-01B.png")
        .default,
      alt: "team leader 1",
      pathLeader: "/team-leaders/y-bhg-dato-ir-robert-tan-kim-kuan",
      // pathLeader: "/team-leaders/ym-raja-dato-azwane-bin-raja-ariff",
    },
    {
      id: 1,
      name: "TAN \nCHIEN WEN",
      position: "EXECUTIVE \nDIRECTOR",
      secondPosition: "BOARD OF DIRECTORS",
      img: require("../assets/images/teamleaders/Leaders_IMG-Leader-02A.png")
        .default,
      img2: require("../assets/images/teamleaders/Leaders_IMG-Leader-02B.png")
        .default,
      alt: "team leader 2",
      pathLeader: "/team-leaders/tan-chien-wen",
      // pathLeader: "/team-leaders/y-bhg-dato-ir-robert-tan-kim-kuan",
    },
    {
      id: 2,
      name: "TAN \nCHIEN YIH (JEREMIAH)",
      position: "EXECUTIVE \nDIRECTOR",
      secondPosition: "BOARD OF DIRECTORS",
      img: require("../assets/images/teamleaders/Leaders_IMG-Leader-03A.png")
        .default,
      img2: require("../assets/images/teamleaders/Leaders_IMG-Leader-03B.png")
        .default,
      alt: "team leader 3",
      // pathLeader: "/team-leaders/y-m-raja-sulong-hizahar-b-raja-bazian",
      pathLeader: "/team-leaders/jeremiah-tan-chien-yih",
    },
    {
      id: 3,
      name: "TAN \nCHIEN CHYI",
      position: "EXECUTIVE \nDIRECTOR",
      secondPosition: "BOARD OF DIRECTORS",
      img: require("../assets/images/teamleaders/Leaders_IMG-Leader-04A.png")
        .default,
      img2: require("../assets/images/teamleaders/Leaders_IMG-Leader-04B.png")
        .default,
      alt: "team leader 4",
      pathLeader: "/team-leaders/tan-chien-chyi",
      // pathLeader: "/team-leaders/tan-chien-wen",
    },
    {
      id: 4,
      name: "CHAN \nYOON SANG",
      position: "PROJECT \nDIRECTOR",
      secondPosition: "NON-EXECUTIVE DIRECTOR",
      img: require("../assets/images/teamleaders/Leaders_IMG-Leader-05A.png")
        .default,
      img2: require("../assets/images/teamleaders/Leaders_IMG-Leader-05B.png")
        .default,
      alt: "team leader 5",
      pathLeader: "/team-leaders/chan-yoon-sang",
      // pathLeader: "/team-leaders/jeremiah-tan-chien-yih",
    },
    {
      id: 5,
      name: "LEE \nTEOK GUAH (EDWARD)",
      position: "GENERAL MANAGER \nOF THE DEVELOPMENT \nARM",
      secondPosition: "TEMOKIN DEVELOPMENT",
      img: require("../assets/images/teamleaders/Leaders_IMG-Leader-06A.png")
        .default,
      img2: require("../assets/images/teamleaders/Leaders_IMG-Leader-06B.png")
        .default,
      alt: "team leader 6",
      pathLeader: "/team-leaders/lee-teok-guah",
    },
    // {
    //   id: 6,
    //   img: require("../assets/images/teamleaders/Leaders_IMG-Leader-07A.png")
    //     .default,
    //   img2: require("../assets/images/teamleaders/Leaders_IMG-Leader-07B.png")
    //     .default,
    //   alt: "team leader 7",
    //   pathLeader: "/team-leaders/chan-yoon-sang",
    // },
    // {
    //     id:7,
    //     img:require('../assets/images/teamleaders/Leaders_IMG-Leader-08A.png').default,
    //     img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-08B.png').default,
    //     alt:"team leader 8",
    //     pathLeader: "/team-leaders/pathooraman-bin-abu",
    // },
    // {
    //     id:8,
    //     img:require('../assets/images/teamleaders/Leaders_IMG-Leader-09A.png').default,
    //     img2:require('../assets/images/teamleaders/Leaders_IMG-Leader-09B.png').default,
    //     alt:"team leader 9",
    //     pathLeader: "/team-leaders/crystal-wong-wai-ching",
    // }
  ];

  return (
    <>
      {" "}
      {
        <div
          className="--team-leaders
            main-container"
          id="main-container"
          data-scroll-container
        >
          <div className="--bg-1" data-scroll-section>
            <div className="--shape-left">
              <Image
                src={
                  require("../assets/images/teamleaders/Group 848.png").default
                }
              />
            </div>
            <div className="--shape-right-1">
              <Image
                src={
                  require("../assets/images/teamleaders/Group 849.png").default
                }
              />
            </div>
            <Navigation />
            <Container>
              <Row>
                <Col>
                  <h1 className="--title">Meet Our Leaders</h1>
                  <p className="--desc">
                    With a combined 55 years of experience in the construction
                    and property industry, <br />
                    our Board of Directors bring to the table a wide spectrum
                    skill sets and visionary <br />
                    ideas will keep the TEMOKIN ship steering in the right
                    direction. Here you'll meet a <br />
                    diverse group leaders, from highly-acclaimed and respected
                    veterans to a new <br />
                    generation of young powerhouses.
                  </p>
                </Col>
              </Row>
            </Container>
            <Container className="--max">
              <Row>
                {teamLeaders.map((teamLeader) => (
                  <Col md={4} key={teamLeader.id}>
                    <Card
                      className="bg-dark text-white teamLeaderBox"
                      data-scroll
                      data-scroll-speed="2"
                    >
                      <div className="teamLeaderBg">
                        <span className="secondPosition">
                          {teamLeader.secondPosition}
                        </span>
                        <div className="teamLeaderName">{teamLeader.name}</div>
                        <hr className="teamHr"></hr>
                        <div className="teamLeaderPosition">
                          {teamLeader.position}
                        </div>
                        <div className="full-bio">FULL BIOGRAPHY</div>
                        <div className="bottomAngle"></div>
                        <div className="bottomAngle2"></div>
                      </div>
                      {/* <Card.Img src={teamLeader.img} alt={teamLeader.alt} />
                      <Card.ImgOverlay>
                        <Card.Img src={teamLeader.img2} alt={teamLeader.alt} />
                      </Card.ImgOverlay> */}
                      <NavLink to={teamLeader.pathLeader} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
          <div className="--bg-2" data-scroll-section>
            <div className="--shape-right">
              <Image
                src={
                  require("../assets/images/teamleaders/Group 89.png").default
                }
              />
            </div>
            <Join />
            <Footer />
          </div>
        </div>
      }
    </>
  );
};

export default TeamLeaders;
