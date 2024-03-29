import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import styled from "styled-components";
import { Container, Image, Row } from "react-bootstrap";
import { NavLink, useLocation, useParams } from "react-router-dom";

import "../assets/styles/project.scss";
import overlayImage from "../assets/images/propertyprojects/PropertyDev_Shapes-01.png";

import Hero from "../components/PropertyDevelopmentProject/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PreviewCard from "../components/PreviewCard";
import PreviewCarousel from "../components/PreviewCarousel";

import projects from "../data/property-development.json"; 

const PropertyDevelopmentProject = () => {
  const location = useLocation();
  const { name } = useParams();

  const [projectData, setProjectData] = useState({});
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(1);

  useLocoScroll(!preloader);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    // setProject(project[0]);

    setProjectData(
      projects.find((project) => {
        return project.name === name;
      })
    );
  }, []);

  useEffect(() => {
    setProjectData(
      projects.find((project) => {
        return project.name === name;
      })
    );
  }, [location]);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {" "}
      {
        <Projects
          className="--projects --projects--property-development
            main-container"
          id="main-container"
          data-scroll-container
        >
          <svg class="svg">
            <clipPath
              id="previewCarouselClipPath"
              clipPathUnits="objectBoundingBox"
            >
              <path d="M0.621,0 H1 V0.691 L0.379,1 H0 V0.309 L0.621,0"></path>
            </clipPath>
          </svg>
          <div className="--bg-1">
            <Navigation />

            <section className="hero">
              <Image
                className="svg svg--100"
                src={
                  require("../assets/images/propertydevelopment/991.svg")
                    .default
                }
                style={{ "z-index": "999" }}
              />
              <Image
                className="svg"
                style={{
                  width: "55vw",
                  height: "55vw",
                  right: "-24%",
                  "z-index": "999",
                  top: "-11.8%",
                }}
                src={
                  require("../assets/images/propertydevelopment/993.svg")
                    .default
                }
              />
              <Hero projectData={projectData} />
            </section>
            {projectData.middle ? (
              <section className="middle">
                <Image
                  className="svg svg--3"
                  src={
                    require("../assets/images/propertydevelopment/svg-3.svg")
                      .default
                  }
                />
                {/* <Image
                  className="svg svg--4"
                  src={
                    require("../assets/images/propertydevelopment/svg-4.svg")
                      .default
                  }
                /> */}
                <div className="middle__polygon-image">
                  <Image
                    src={
                      require(`../assets/images${projectData.middle}`).default
                    }
                  />
                </div>
                <div className="middle__caption">
                  <p className="--caption">{projectData.caption}</p>
                </div>
              </section>
            ) : null}

            {projectData.carousel ? (
              <section className="preview">
                <Image
                  className="svg svg--5"
                  src={
                    require("../assets/images/propertydevelopment/svg-5.svg")
                      .default
                  }
                />
                <Image
                  className="svg svg--6"
                  src={
                    require("../assets/images/propertydevelopment/svg-7.svg")
                      .default
                  }
                />
                <div className="preview-carousel__container">
                  <PreviewCarousel slides={projectData.carousel} />
                </div>
              </section>
            ) : null}

            <section className="related">
              <Image
                className="svg svg--7"
                src={
                  require("../assets/images/propertydevelopment/Shapes-03.svg")
                    .default
                }
              />
              <Image
                className="svg svg--8"
                src={
                  require("../assets/images/propertydevelopment/svg-8.svg")
                    .default
                }
              />
              <Container>
                <h2 className="section-label">Related Projects</h2>
                <Row className="related__cards">
                  {projectData.related
                    ? projectData.related.map((related) => {
                        return (
                          <NavLink to={related.path}>
                            <PreviewCard
                              propertyDevelopment
                              image={related.image}
                              name={related.name}
                            />
                          </NavLink>
                        );
                      })
                    : null}
                </Row>
              </Container>
            </section>
            <Footer />
          </div>
        </Projects>
      }{" "}
    </>
  );
};

const Projects = styled.div`
  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: background 0.3s;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: 100vw 100vw;
    height: 100vw;
    width: 100%;
    background: url(${overlayImage}) top 8vw left;
  } */
`;

export default PropertyDevelopmentProject;
