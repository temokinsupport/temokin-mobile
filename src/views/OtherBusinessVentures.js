import "../assets/styles/otherbusinessventures.scss";
import useLocoScroll from "../components/hooks/useLocoScroll";
import Navigation from "../components/Navigation";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import FooterMenu from "../components/FooterMenu";
import Footer from "../components/Footer";

const OtherBusinessVentures = () => {
  return (
    <>
      {
        <div
          className="ventures
            main-container"
          id="main-container"
          data-scroll-container
        >
          <Navigation />
          <section className=" hero">
            <Image
              className="svg svg--1"
              fluid
              src={
                require("../assets/images/otherbusinessventures/svg-1.svg")
                  .default
              }
            />
            <Image
              className="svg svg--2"
              fluid
              src={
                require("../assets/images/otherbusinessventures/svg-2.svg")
                  .default
              }
            />
            <div className="hero__content">
              <h1 className="hero__title">Other Business</h1>
              <h1 className="hero__title">Affiliates</h1>

              <p className="hero__desc">coming soon</p>
              {/* <Image
                className="--image"
                src={
                  require("../assets/images/otherbusinessventures/Group_1091.svg")
                    .default
                }
              /> */}
            </div>
          </section>

          <Footer />
        </div>
      }
    </>
  );
};

export default OtherBusinessVentures;
