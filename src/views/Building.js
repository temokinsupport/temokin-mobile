import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import { useMediaQuery } from "react-responsive";
import "../assets/styles/buildingcss.scss";
import { Image } from "react-bootstrap";

import Header from "../components/Building/Header";
import FooterMenu from "../components/FooterMenu";
import Footer from "../components/Footer";
import Carousel from "../components/Building/Carousel";

const Building = () => {
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
          className="--building main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
          <Carousel />
          <FooterMenu />
        </div>
      }
    </>
  );
};

export default Building;
