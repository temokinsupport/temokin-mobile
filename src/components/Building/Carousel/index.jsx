import React, { useCallback, useRef, useState } from "react";
import { Image, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CarouselIndex() {
  const splideRef = useRef();

  const [slide, setSlide] = useState(0);

  const onMove = useCallback((e) => {
    // handler()
    console.log(e);
    setSlide(e.index);
  }, []);

  const [isRightActive, setRightActive] = useState(false);
  const [isLeftActive, setLeftActive] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const controlCarousel = (index) => {
    setCarouselIndex(index);
  };

  const carousel = [
    {
      name: "TROPICANA CENANG",
      background: "Image 97.png",
      client: "Tropicana Corporation Berhad",
      value: "",
      period: "Ongoing",
      links: {
        project: "/tropicana-cenang",
      },
    },
    {
      name: "NATIONAL CAMP AND SERVICES (NORTHERN REGIONS)",
      background: "Group 878.jpg",
      client: "Ministry of Defense, Malaysia",
      value: "RM30 million",
      period: "September 2004 to December 2004",
      links: {
        project: "/natl-camp",
      },
    },
    {
      name: "MAHLIGAI AT NUSA DAMAI, \n 2 & 2.5 STOREY HOUSING, JOHOR",
      background: "Group 879.jpg",
      client: "TEMOKIN Development Sdn. Bhd.",
      value: "RM100 million",
      period: "Feb 2017 to Ongoing",
      links: {
        project: "/mahligai",
      },
    },
  ];

  return (
    <section className="--container-2" data-scroll-section>
      <Image
        className="--right"
        src={require("../../../assets/images/building/svg-9.svg").default}
      />
      <Carousel
        interval={7000}
        className="overlay-carousel overlay-carousel--building"
        activeIndex={carouselIndex}
        onSelect={controlCarousel}
        onSlide={controlCarousel}
        fade
      >
        {carousel.map((item, index) => {
          return (
            <Carousel.Item
              className={`carousel-item--${index} ${index === carouselIndex}`}
            >
              <img
                className="d-block w-100"
                src={
                  require(`../../../assets/images/building/${item.background}`)
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">{item.name}</h3>
                <p className="--desc">{item.description}</p>
                <div className="--details">
                  {item.client  && item.name == 'TROPICANA CENANG' ? (
                    <p className="--bottom-detail client">
                      <span className="--title">Client</span>
                      <span>Tropicana Corporation <br /> Berhad</span>
                    </p>
                  ) : null}

                  {item.client  && item.name != 'TROPICANA CENANG' ? (
                    <p className="--bottom-detail client">
                      <span className="--title">Client</span>
                      <span>{item.client}</span>
                    </p>
                  ) : null}
                  {item.value ? (
                    <p className="--bottom-detail value">
                      <span className="--title">Value</span>
                      <span>{item.value}</span>
                    </p>
                  ) : null}
                  {item.period && item.name == 'NATIONAL CAMP AND SERVICES (NORTHERN REGIONS)' ? (
                    <p className="--bottom-detail period">
                      <span className="--title">Period</span>
                      <span>
                        September 2004 to <br />
                        December 2004
                      </span>
                    </p>
                  ) : null}

                  {item.period && item.name != 'NATIONAL CAMP AND SERVICES (NORTHERN REGIONS)' ? (
                    <p className="--bottom-detail period">
                      <span className="--title">Period</span>
                      <span>{item.period}</span>
                    </p>
                  ) : null}
                </div>
                <div className="carousel-indicators custom">
                  {carousel.map((item, index) => {
                    return (
                      <li
                        className={`${index === carouselIndex ? "active" : ""}`}
                        onClick={() => controlCarousel(index)}
                      ></li>
                    );
                  })}
                </div>
                <div className="--buttons">
                  {item.links.project ? (
                    <NavLink
                      className="--btn-view-project"
                      to={`/building${item.links.project}`}
                    >
                      View Project
                    </NavLink>
                  ) : null}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Image
        className="svg svg--1"
        src={require("../../../assets/images/building/svg-10.svg").default}
      />
      {/* <Image className="--right" src={require('../../../assets/images/building/shape-right.png').default} /> */}
      {/* <Splide
        className={`splide--${slide}`}
        options={{
          type: "fade",
          easeing: "cubic-bezier(0.25, 1, 0.5, 1)",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          height: "80vh",
        }}
        onMove={onMove}
        ref={splideRef}
      >
        <SplideSlide>
          <Image
            src={
              require("../../../assets/images/building/Image 97.png").default
            }
          />
          <div className="--right-container">
            <h5 className="--title">Tropicana CENANG</h5>
            <br />
            <p>
              Client
              <br />
              <span className="thin">Tropicana Corporation Berhad</span>
            </p>
            <hr />
            <p>
              Period
              <br />
              <span className="thin">Ongoing</span>
            </p>
            <NavLink
              className="--btn-view-project1"
              to="/civil-engineering/seremban-middle-ring-road"
            >
              View Project
            </NavLink>
          </div>
        </SplideSlide>
        <SplideSlide>
          <Image
            src={
              require("../../../assets/images/building/Group 878.jpg").default
            }
          />
          <div className="--right-container ">
            <h5 className="--title">
              NATIONAL CAMP AND SERVICES (NORTHERN REGIONS)
            </h5>
            <br />
            <p>
              Client
              <br />
              <span className="thin">Ministry of Defense, Malaysia</span>
            </p>
            <hr />
            <p>
              Value
              <br />
              <span className="thin">RM30 million</span>
            </p>
            <hr />
            <p>
              Period
              <br />
              <span className="thin">September 2004 to Decemeber 2004</span>
            </p>
            <NavLink
              className="--btn-view-project"
              to="/civil-engineering/seremban-middle-ring-road"
            >
              View Project
            </NavLink>
          </div>
        </SplideSlide>
        <SplideSlide>
          <Image
            src={
              require("../../../assets/images/building/Group 879.jpg").default
            }
          />
          <div className="--right-container">
            <h5 className="--title">
              MAHLIGAI AT NUSA DAMAI, 2 & 2.5 STOREY HOUSING, JOHOR
            </h5>
            <br />
            <p>
              Client
              <br />
              <span className="thin">TEMOKIN Development Sdn. Bhd.</span>
            </p>
            <hr />
            <p>
              Value
              <br />
              <span className="thin">RM100 million</span>
            </p>
            <hr />
            <p>
              Period
              <br />
              <span className="thin">Feb 2017 to ongoing</span>
            </p>
            <NavLink
              className="--btn-view-project"
              to="/civil-engineering/seremban-middle-ring-road"
            >
              View Project
            </NavLink>
          </div>
        </SplideSlide>
      </Splide> */}
      {/* <Row className='justify-content-center'>
                    <Col  md={12} className="mt-5 mb-5">
                        <div className="text-center mt-5 pt-5">
                            <Image className="--centerimg" src={require('../../../assets/images/civilinfrastructure/Rectangle 151.png').default} />
                        </div>
                    </Col>
                   
                </Row> */}
    </section>
  );
}
