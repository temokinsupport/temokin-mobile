import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { useMediaQuery } from "react-responsive";
import "../assets/styles/aboutus.scss";

import Header from "../components/About/Header";
import Vision from "../components/About/Vision";
import Mission from "../components/About/Mission";
import Section4 from "../components/About/Section4";
import OperatingPrinciples from "../components/About/OperatingPrinciples";
import OurValues from "../components/About/OurValues";
import Section6 from "../components/About/Section6";
import WeDig from "../components/About/WeDig";
import FooterMenu from "../components/FooterMenu";

const AboutTemokin = () => {
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

  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });
  // const isMobile = useMediaQuery({ query: '(max-width: 992px)' });

  // // MOBILE CAROUSEL
  // const ref = useRef(null);
  // const onPrevClick = () => {
  //   ref.current.prev();
  //   setRightActive(!isRightActive);
  //   setLeftActive(!isLeftActive);
  // };
  // const onNextClick = () => {
  //   ref.current.next();
  //   setRightActive(!isRightActive);
  //   setLeftActive(!isLeftActive);
  // };

  // // TOGGLE CLASS
  // const [isRightActive, setRightActive] = useState(false);
  // const [isLeftActive, setLeftActive] = useState(false);

  return (
    <>
      {
        // preloader?
        //   <div className="loader-wrapper absolute">
        //       {/* <h1>Flirty Flowrs</h1> */}
        //   </div> :
        <div
          className="--about main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
          <Vision />
          <Mission />
          {isTablet && <Section4 />}
          <OperatingPrinciples />

          {isTablet && <Section6 />}
          {/* { isTablet && */}
          <OurValues />
          {/* } */}
          <WeDig />
          <FooterMenu />

          {/* 
      
      


      { isMobile &&
        <div className="--container-7">
          <Container>
            <Row>
              <Col>
                <h2 className="--title">Our Values</h2>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
              <Splide
                options={ {
                  type         : 'fade',
                  autoplay     : true,
                  pauseOnHover : false,
                  resetProgress: false,
                  height   : '80vh',
                } }
              >
                <SplideSlide >
                  <Image src={require('../assets/images/aboutus/About_IMG-People.png').default}/>
                  <div className="--right-container">
                    <h5 className="--title">Wisdom</h5>
                    <hr/>
                    <p className="--desc">We are relentless in our <br/>
                    pursuit for wisdom</p>
                  </div>
                </SplideSlide>
                <SplideSlide >
                  <Image src={require('../assets/images/aboutus/About_IMG-Equality.png').default}/>
                  <div className="--right-container">
                    <h5 className="--title">Equality</h5>
                    <hr/>
                    <p className="--desc">We ensure <br/>
                    peace of mind</p>
                  </div>
                </SplideSlide>
                <SplideSlide >
                  <Image src={require('../assets/images/aboutus/About_IMG-Integrity.png').default}/>
                  <div className="--right-container">
                    <h5 className="--title">Integrity</h5>
                    <hr/>
                    <p className="--desc">We deliver <br/>
                    on schedule</p>
                  </div>
                </SplideSlide>
                <SplideSlide >
                  <Image src={require('../assets/images/aboutus/About_IMG-Diligence.png').default}/>
                  <div className="--right-container">
                    <h5 className="--title">Diligence</h5>
                    <hr/>
                    <p className="--desc">We exceed <br/>
                    Expectations</p>
                  </div>
                </SplideSlide>
                <SplideSlide >
                  <Image src={require('../assets/images/aboutus/About_IMG-Guidance.png').default}/>
                  <div className="--right-container">
                    <h5 className="--title">Guidance</h5>
                    <hr/>
                    <p className="--desc">We exceed <br/>
                    Expectations</p>
                  </div>
                </SplideSlide>
              </Splide>
              </Col>
            </Row>
          </Container>
        </div>
      }
       */}
        </div>
      }
    </>
  );
};

export default AboutTemokin;
