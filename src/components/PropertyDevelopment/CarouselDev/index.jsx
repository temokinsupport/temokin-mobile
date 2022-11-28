import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer";
import "../../../assets/styles/overlaycarousel.scss";

export default function CarouselDev() {
  // DESKTOP, TABLET & MOBILE
  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });

  // MOBILE CAROUSEL
  const ref = useRef(null);
  const onPrevClick = () => {
    ref.current.prev();
    setRightActive(!isRightActive);
    setLeftActive(!isLeftActive);
  };
  const onNextClick = () => {
    ref.current.next();
    setRightActive(!isRightActive);
    setLeftActive(!isLeftActive);
  };

  // TOGGLE CLASS
  const [isRightActive, setRightActive] = useState(false);
  const [isLeftActive, setLeftActive] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carousel = [
    {
      name: "MAHILGAI AT NUSA DAMAI \n 2 & 2.5 STOREY HOUSING, JOHOR",
      background: "carousel/mahligai.png",
      description:
        "Mahilgai at Nusa Damai consists of 163 landed houses in the already-mature neighborhood of Masai in Johor",
      value: "RM100 million ",
      period: "Feb 2017 to ongoing",
      awards: [
        {
          image: "apa.png",
          description:
            "Highly Commended for Best High End Landed Development (Southern)",
        },
      ],
      links: {
        project: "/mahligai",
        website: "/mahligai",
      },
    },
    {
      name: "DIAMI",
      background: "carousel/diami.png",
      description:
        "The classic interplays with the modern in the verdant hills of Taman Melati. Overlooking the grand expanses of Bukit Tabur and the Kemensah Reserve, Diami 4 and 5 storey superlink terrace homes is an opportunity to indulge beyond the basics and an expression of your passion for tasteful living.",
      value: "RM48 million",
      period: "September 2021 to ongoing",
      links: {
        project: "/diami",
        website: "",
      },
    },
    {
      name: "TROPICANA MIYU, PETALING JAYA",
      background: "carousel/tropicana.png",
      description:
        "Envisioning itself as being a perfect home for individuals and their loved one, Tropicana Miyu which means A Place For Me and You, clearly blends modern conveniences with traditionalism so that the older and younger generation can pursue their lifestyle choices at the very best.",
      value: "RM261 million",
      period: "September 2020 to ongoing",
      awards: [
        {
          image: "tdba.png",
          description:
            "Honours The Distinctive Build Award in StarProperty Awards 2021: Real Estate Developer",
        },
        {
          image: "tdba.png",
          description: "Winner 2021-2022 in Asia Pacific Property Awards",
        },
      ],
      links: {
        project: "/tropicana-miyu",
        website: "",
      },
    },
  ];

  const controlCarousel = (index) => {
    setCarouselIndex(index);
  };

  useEffect(() => {
    console.log(carouselIndex);
  }, [carouselIndex]);

  return (
    <div className="--bg-2" data-scroll-section>
      <Image
        className="svg svg--1"
        src={
          require("../../../assets/images/propertydevelopment/PropertyDev_Shapes-01-4.svg")
            .default
        }
      />
      <Image
        className="svg svg--2"
        src={
          require("../../../assets/images/propertydevelopment/PropertyDev_Shapes-01-5.svg")
            .default
        }
      />
      {isTablet && (
        <Carousel
          interval={3000}
          className="overlay-carousel"
          activeIndex={carouselIndex}
          onSelect={controlCarousel}
          onSlide={controlCarousel}
          fade
        >
          {carousel.map((item, index) => {
            return (
              <Carousel.Item
                className={`${index} ${carouselIndex} ${
                  index === carouselIndex
                }`}
              >
                <img
                  className="d-block w-100"
                  src={
                    require(`../../../assets/images/propertydevelopment/${item.background}`)
                      .default
                  }
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="--title">{item.name}</h3>
                  <p className="--desc">{item.description}</p>
                  <div className="--hr" />
                  <div className="--details">
                    {item.client ? (
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
                    {item.period ? (
                      <p className="--bottom-detail period">
                        <span className="--title">Period</span>
                        <span>{item.period}</span>
                      </p>
                    ) : null}
                    {item.awards ? (
                      <p className="--bottom-detail awards">
                        <span className="--title">Awards</span>
                        {item.awards.map((award) => {
                          return (
                            <div className="award">
                              <span className="award__name">
                                {award.description}
                              </span>
                              <img
                                className="award__image"
                                src={
                                  require(`../../../assets/images/propertydevelopment/awards/${award.image}`)
                                    .default
                                }
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </p>
                    ) : null}
                  </div>
                  <div className="carousel-indicators custom">
                    {carousel.map((item, index) => {
                      return (
                        <li
                          className={`${
                            index === carouselIndex ? "active" : ""
                          }`}
                          onClick={() => controlCarousel(index)}
                        ></li>
                      );
                    })}
                  </div>
                  <div className="--buttons">
                    {item.links.project ? (
                      <NavLink
                        className="--btn-view-project"
                        to={`/property-development${item.links.project}`}
                      >
                        View Project
                      </NavLink>
                    ) : null}
                    {item.links.website ? (
                      <NavLink
                        className="--btn-view-project"
                        to={item.links.website}
                      >
                        View Website
                      </NavLink>
                    ) : null}
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
      {isMobile && (
        <div className="--carousel-container">
          <div className="--btn-carousel-container">
            <Button
              variant="light"
              onClick={onPrevClick}
              className={
                isRightActive
                  ? "carousel-control-prev"
                  : "carousel-control-prev"
              }
            />
            <Button
              variant="light"
              onClick={onNextClick}
              className={
                isLeftActive ? "carousel-control-next" : "carousel-control-next"
              }
            />
          </div>

          <Carousel fade className="--carousel-mb" ref={ref} loop={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  require("../../../assets/images/propertydevelopment/PropertyDev_IMG-Istana.png")
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">Istana Negara</h3>
                <p className="--desc">
                  The new Istana Negara or National Palace <br />
                  was built to replace the old palace which <br />
                  has been used since 1957. Upon its <br />
                  completion, then-Works Minister Shaziman <br />
                  Abu Mansor remarked that the new Istana <br />
                  Negara was "Kuala Lumpur's most amazing <br />
                  architectural achievement, surpassing even <br />
                  the Twin Towers"
                </p>
                <div className="--hr" />
                <p className="--bottom-detail">
                  <span className="--title">Client</span>
                  <span>Public Works Department, Malaysia (JKR)</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Value</span>
                  <span>RM997 million</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Period</span>
                  <span>Nov 2007 to Jun 2011</span>
                </p>
                <NavLink
                  className="--btn-view-project"
                  to="/property-development/istana-negara"
                >
                  View Project
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  require("../../../assets/images/propertydevelopment/PropertyDev_IMG-Mahligai.png")
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">
                  Mahligai At Nusa Damai, Two Storey <br />
                  And Three Storey Housing, Johor
                </h3>
                <p className="--desc">
                  Mahligai at Nusa Damai consists of 163 <br />
                  landed houses in the already-mature <br />
                  neighbourhood of Masai in Johor.
                </p>
                <div className="--hr" />
                <p className="--bottom-detail">
                  <span className="--title">Client</span>
                  <span>Temokin Development Sdn. Bhd.</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Value</span>
                  <span>RM100 million</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Period</span>
                  <span>Feb 2018 to ongoing</span>
                </p>
                <NavLink
                  className="--btn-view-project"
                  to="/property-development/mahligai-at-nusa-damai-two-storey-and-three-storey-housing-johor"
                >
                  View Project
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  require("../../../assets/images/propertydevelopment/PropertyDev_IMG-Tropicana.png")
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">Tropicana Miyu, Petaling Jaya</h3>
                <p className="--desc">
                  Envisioning itself as being a perfect home <br />
                  for individuals and their loved one, <br />
                  Tropicana Miyu which means A Place For <br />
                  Me and You, clearly blends modern <br />
                  conveniences with traditionalism so that <br />
                  the older and younger generation can <br />
                  pursue their lifestyle choices at the very <br />
                  best.
                </p>
                <div className="--hr" />
                <p className="--bottom-detail">
                  <span className="--title">Client</span>
                  <span>Tropicana Temokin Sdn Bhd</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Value</span>
                  <span>RM261 million</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Period</span>
                  <span>Sept 2020 to on going</span>
                </p>
                <NavLink
                  className="--btn-view-project"
                  to="/property-development/tropicana-miyu-petaling-jaya"
                >
                  View Project
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  require("../../../assets/images/propertydevelopment/PropertyDev_IMG-NationalCamp.png")
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">
                  National Camp And Services <br />
                  (Northern Regions)
                </h3>
                <p className="--desc">
                  The National Service (NS) Camp <br />
                  (Northern Region) was constructed <br />
                  successfully on a very tight schedule and <br />
                  incorporated homely design elements for <br />
                  new trainees to feel comfortable in a lush <br />
                  forest environment.
                </p>
                <div className="--hr" />
                <p className="--bottom-detail">
                  <span className="--title">Client</span>
                  <span>Ministry of Defence, Malaysia</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Value</span>
                  <span>RM30 million</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Period</span>
                  <span>Sept 2004 to Dec 2004</span>
                </p>
                <NavLink
                  className="--btn-view-project"
                  to="/property-development/national-camp-and-services-northern-regions"
                >
                  View Project
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      )}

      {/* <div className="header-shape" />
      <div className="header-shape1" /> */}
      {/* <Image
        className="svg svg--3"
        src={
          require("../../../assets/images/propertydevelopment/PropertyDev_Shapes-01-6.svg")
            .default
        }
      />
       */}
      <Footer />
    </div>
  );
}
