import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
// import { useMediaQuery } from 'react-responsive';
import { NavLink, useHistory } from "react-router-dom";
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
  const history = useHistory();

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
          <div className="--bg-1 position-relative" data-scroll-section>
            <Image
              className="svg svg--1"
              src={require("../assets/images/teamleaders/svg-1.svg").default}
            />
            <Image
              className="svg svg--2"
              src={require("../assets/images/teamleaders/svg-2.svg").default}
            />

            <Navigation />
            <Container className="header">
              <Row>
                <Col className="text-center">
                  <h1 className="--title">Meet Our Leaders</h1>
                  <p className="--desc">
                    With a combined 55 years of experience in the construction
                    <br />
                    and property industry, our Board of Directors bring to the{" "}
                    <br /> table a wide spectrum skill sets and visionary ideas
                    will keep <br /> the TEMOKIN ship steering in the right
                    direction. <br /> Here you'll meet a diverse group leaders,
                    from highly- <br />
                    acclaimed and respected veterans to a new generation of{" "}
                    <br /> young powerhouses.
                  </p>
                </Col>
              </Row>
            </Container>
            <Container className="--max" style={{ 'margin-top' : '15vw'}}>
              <Row>
                {teamLeaders.map((teamLeader) => (
                  <Col
                    className="team-leader__container"
                    sm="4"
                    sm="12"
                    key={teamLeader.id}
                  >
                    <NavLink
                      className="team-leader__link"
                      to={teamLeader.pathLeader}
                    >
                      <Card
                        className="text-white team-leader"
                        data-scroll
                        data-scroll-speed="2"
                      >
                        <div className="team-leader__name">
                          {teamLeader.name}
                        </div>
                        <hr />
                        <div className="team-leader__position">
                          {teamLeader.position}
                        </div>
                        <span className="team-leader__sub-position">
                          {teamLeader.secondPosition}
                        </span>
                      </Card>
                    </NavLink>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
          <div className="--bg-2" data-scroll-section>
            <div className="--shape-right"></div>
            <Join />
            <Footer />
          </div>
        </div>
      }
    </>
  );
};

export default TeamLeaders;
