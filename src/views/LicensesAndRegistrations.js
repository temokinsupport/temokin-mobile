import React, { useRef, useState, useEffect } from "react";
import useLocoScroll from "../components/hooks/useLocoScroll";
import "../assets/styles/licensesandregistrations.scss";
import Header from "../components/LicensesAndRegistration/Header";
import Licenses from "../components/LicensesAndRegistration/Licenses";
import QualityAssurance from "../components/LicensesAndRegistration/QualityAssurance";
import FooterMenu from "../components/FooterMenu";
// import Footer from "../components/Footer";

const LicensesAndRegistrations = () => {
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
          className="--licenses-and-registrations 
                    main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
          <Licenses />
          <QualityAssurance />
          <FooterMenu />
        </div>
      }
    </>
  );
};

export default LicensesAndRegistrations;
