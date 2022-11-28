import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import "../assets/styles/awardsandachievements.scss";
import Header from "../components/AwardsAndAchievements/Header";
import Winner from "../components/AwardsAndAchievements/Winner";
import Testimonials from "../components/AwardsAndAchievements/Testimonials";
import FooterMenu from "../components/FooterMenu";
// import Footer from "../components/Footer";

const AwardsAndAchievements = () => {
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
      {
        <div
          className="--awards-and-achievements
            main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
          <Winner />
          <Testimonials />
          <FooterMenu />
        </div>
      }
    </>
  );
};

export default AwardsAndAchievements;
