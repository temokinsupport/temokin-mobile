import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import styled from "styled-components";
import { Container, Image, Row } from "react-bootstrap";
import { NavLink, useHistory, useLocation, useParams } from "react-router-dom";

import "../assets/styles/project.scss";
import overlayImage from "../assets/images/propertyprojects/PropertyDev_Shapes-01.png";
import polygonImage from "../assets/images/propertyprojects/showcase-mahligai.png";

import Hero from "../components/PropertyDevelopmentProject/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PreviewCard from "../components/PreviewCard";
import PreviewCarousel from "../components/PreviewCarousel";

import projects from "../data/construction.json";

const BuildingProject = () => {
  const { name } = useParams();
  const location = useLocation();

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
        console.log(project.name, name);
        return project.name === name;
      })
    );
  }, [location]);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const buildingProjectMiddle = () => {
    const middle = projectData.middle ? (
      <section className="middle">
        <Image
          className="svg svg--3"
          src={require("../assets/images/building/svg-3.svg").default}
        />
        <Image
          className="svg svg--4"
          src={require("../assets/images/building/svg-4.svg").default}
        />
        <div className="middle__polygon-image">
          <Image
            src={require(`../assets/images${projectData.middle}`).default}
          />
        </div>
        <div className="middle__caption">
          <p className="--caption">{projectData.caption}</p>
        </div>
      </section>
    ) : null;

    return middle;
  };

  const buildingProjectCarousel = () => {
    const carousel = projectData.carousel ? (
      <section className="preview">
        <Image
          className="svg svg--5"
          src={require("../assets/images/building/svg-5.svg").default}
        />
        <Image
          className="svg svg--6"
          src={require("../assets/images/building/svg-7.svg").default}
        />
        <div className="preview-carousel__container">
          <PreviewCarousel slides={projectData.carousel} />
        </div>
      </section>
    ) : null;

    return carousel;
  };

  return (
    <>
      {
        <Projects
          className="--projects --projects--building
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
          </svg>{" "}
          <div className="--bg-1">
            <Navigation />

            <section className="hero">
              <Image
                className="svg svg--1"
                src={require("../assets/images/building/svg-1.svg").default}
              />
              <Image
                className="svg svg--2"
                src={require("../assets/images/building/svg-2.svg").default}
                style={{ "z-index": "999" }}
              />
              {projectData.name === "natl-camp" ? (
                <>
                  <Image
                    className="svg svg--10"
                    src={
                      require("../assets/images/building/svg-16.svg").default
                    }
                  />
                  <Image
                    className="svg svg--11"
                    src={
                      require("../assets/images/building/svg-17.svg").default
                    }
                  />
                </>
              ) : null}
              <Hero projectData={projectData} />
            </section>
            {projectData.name === "tropicana-cenang" ? (
              <section className="middle middle--tropicana-senang middle--tropicana-cenang--1">
                <Image
                  className="svg svg--3"
                  src={require("../assets/images/building/svg-3.svg").default}
                />
                <Image
                  className="svg svg--4"
                  src={require("../assets/images/building/svg-4.svg").default}
                />
                <div className="middle__polygon-image">
                  <Image
                    src={
                      require(`../assets/images/building/tropicana-middle-1.png`)
                        .default
                    }
                  />
                </div>
              </section>
            ) : (
              buildingProjectMiddle()
            )}
            {projectData.name === "tropicana-cenang" ? (
              <section className="middle middle--tropicana-cenang middle--tropicana-cenang--2">
                <Image
                  className="svg svg--5"
                  src={require("../assets/images/building/svg-12.svg").default}
                />
                <Image
                  className="svg svg--6"
                  src={require("../assets/images/building/svg-14.svg").default}
                />
                <Image
                  className="svg svg--9"
                  src={require("../assets/images/building/svg-15.svg").default}
                />
                <div className="middle__polygon-image">
                  <Image
                    src={
                      require(`../assets/images/building/tropicana-middle-2.png`)
                        .default
                    }
                  />
                </div>
                <div className="middle__caption">
                  <p style={{ transform: "translateY(20%)" }}>
                    {projectData.caption}
                  </p>
                </div>
              </section>
            ) : (
              buildingProjectCarousel()
            )}

            <section className="related">
              {projectData.name === "tropicana-cenang" ||
              projectData.name === "natl-camp" ? null : (
                <Image
                  className="svg svg--7"
                  src={require("../assets/images/building/svg-6.svg").default}
                />
              )}
              <Image
                className="svg svg--8"
                src={require("../assets/images/building/svg-8.svg").default}
              />
              <Container>
                <h2 className="section-label">Related Projects</h2>
                <Row className="related__cards">
                  {projectData.related
                    ? projectData.related.map((related) => {
                        return (
                          <NavLink to={related.path}>
                            <PreviewCard
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

export default BuildingProject;
