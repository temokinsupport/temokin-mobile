import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import "../assets/styles/privacypolicy.scss";
import Header from "../components/PrivacyPolicy/Header/index";
import Body from "../components/PrivacyPolicy/Body/index";

const PrivacyPolicy = () => {
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
      {" "}
      {
        <div
          className="--privacy-policy main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
          <Body />
        </div>
      }{" "}
    </>
  );
};

export default PrivacyPolicy;
