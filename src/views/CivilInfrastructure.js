import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { useMediaQuery } from "react-responsive";
import "../assets/styles/civilinfrastructure.scss";
import { Image } from "react-bootstrap";

import Header from "../components/CivilInfrastructure/Header";
import Footer from "../components/FooterMenu";
import CivilInfrastructureData from "../components/CivilInfrastructure/CivilInfrastructure";
import List from "../components/CivilInfrastructure/List";
import Carousel from "../components/CivilInfrastructure/Carousel";

const CivilInfrastructure = () => {
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

  return (
    <>
      {
        <div
          className="--civil-infrastructure main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
          <CivilInfrastructureData />
          <Carousel />
          <List />
          <Footer />
        </div>
      }
    </>
  );
};

export default CivilInfrastructure;
