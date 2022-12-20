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
      name: "MAHLIGAI AT NUSA DAMAI \n 2 & 2.5 STOREY HOUSING, JOHOR",
      background: "carousel/mahligai.png",
      description:
        "Mahligai at Nusa Damai consists \n of 163 landed houses in the \n already-mature neighborhood of \n Masai in Johor",
      value: "RM100 million ",
      period: "Feb 2017 to ongoing",
      awards: [
        {
          image: "apa.png",
          description:
            "Highly Commended \n for Best High-End \n Landed \n Development \n (Southern)",
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
        "The classic interplays with the modern in \n the verdant hills of Taman Melati. \n Overlooking the grand expanses of Bukit \n Tabur and the Kemensah Reserve, Diami 4 \n and 5 storey superlink terrace homes is an \n opportunity to indulge beyond the basics \n and an expression of your passion for \n tasteful living.",
      value: "RM48 million",
      period: "September 2021 to ongoing",
      links: {
        project: "/diami",
        website: "",
      },
    },
    {
      name: "TROPICANA MIYU, \n PETALING JAYA",
      background: "carousel/tropicana.png",
      description:
        "Envisioning itself as being a perfect home for \n individuals and their loved one, Tropicana Miyu \n which means A Place For Me and You, \n clearly blends modern conveniences with \n traditionalism so that the older and younger \n generation can pursue their lifestyle choices at \n the very best.",
      value: "RM261 million",
      period: "September 2020 to ongoing",
      awards: [
        {
          image: "tdba.png",
          description:
            "Honours The \n Distinctive Build \n Award in StarProperty \n Awards 2021: Real \n Estate Developer",
        },
        {
          image: "appa.png",
          description: "Winner 2021-2022 \n in Asia Pacific \n Property Awards",
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
      <Carousel
        interval={7000}
        className="overlay-carousel overlay-carousel--property-development"
        activeIndex={carouselIndex}
        onSelect={controlCarousel}
        onSlide={controlCarousel}
        fade
      >
        {carousel.map((item, index) => {
          return (
            <Carousel.Item
              className={`${index} ${carouselIndex} ${index === carouselIndex}`}
              style={{'margin-top': '10vw'}}
            >
              <img
                className="d-block w-100"
                style={{
                  height:
                    item.name == "TROPICANA MIYU, PETALING JAYA"
                      ? "100%"
                      : "120%",
                }}
                src={
                  require(`../../../assets/images/propertydevelopment/${item.background}`)
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption
                style={{
                  "margin-top":
                    item.name == "TROPICANA MIYU, PETALING JAYA" ? "5rem" : "",
                  "margin-bottom":
                    item.name == "TROPICANA MIYU, PETALING JAYA" ? "5rem" : "",
                }}
              >
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
                        className={`${index === carouselIndex ? "active" : ""}`}
                        onClick={() => controlCarousel(index)}
                      ></li>
                    );
                  })}
                </div>
                <div className="--buttons" style={{ 'margin-bottom': '20vw'}}>
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
                      to={{ pathname: "https://www.mahligai.my/" }}
                      target="_blank"
                    >
                      Visit Website
                    </NavLink>
                  ) : null}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

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
