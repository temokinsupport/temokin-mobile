import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import "../assets/styles/home.scss";
import Header from "../components/Home/Header";
import Featured from "../components/Home/Featured";
import Projects from "../components/Home/Projects";
import Launches from "../components/Home/Launches";

const Home = () => {
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

  return (
    <>
      {preloader ? (
        <div
          className="--home main-container blurr"
          id="main-container"
          data-scroll-container
        >
          <Header />
        </div>
      ) : (
        <div
          className="--home main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
          <Featured />
          <Projects />
          <Launches />
        </div>
      )}
    </>
  );
};

export default Home;
