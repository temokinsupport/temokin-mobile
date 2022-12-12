import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer";
import "../../../assets/styles/carousel.scss";

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

  return (
    <div className="--bg-2" data-scroll-section>
      {isTablet && (
        <Carousel interval={3000} fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                require("../../../assets/images/propertydevelopment/PropertyDev_IMG-Istana.png")
                  .default
              }
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="--title">Istana Negara</h3>
              <p className="--desc">
                The new Istana Negara or National Palace <br />
                was built to replace the old palace which <br />
                has been used since 1957. Upon its <br />
                completion, then-Works Minister Shaziman <br />
                Abu Mansor remarked that the new Istana <br />
                Negara was "Kuala Lumpur's most amazing <br />
                architectural achievement, surpassing even <br />
                the Twin Towers"
              </p>
              <div className="--hr" />
              <p className="--bottom-detail">
                <span className="--title">Client</span>
                <span>Public Works Department, Malaysia (JKR)</span>
              </p>
              <p className="--bottom-detail">
                <span className="--title">Value</span>
                <span>RM997 million</span>
              </p>
              <p className="--bottom-detail">
                <span className="--title">Period</span>
                <span>Nov 2007 to Jun 2011</span>
              </p>
              <NavLink
                className="--btn-view-project"
                to="/property-development/istana-negara"
              >
                View Project
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                require("../../../assets/images/propertydevelopment/PropertyDev_IMG-Mahligai.png")
                  .default
              }
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="--title">
                Mahligai At Nusa Damai, Two Storey <br />
                And Three Storey Housing, Johor
              </h3>
              <p className="--desc">
                Mahligai at Nusa Damai consists of 163 <br />
                landed houses in the already-mature <br />
                neighborhood of Masai in Johor.
              </p>
              <div className="--hr" />
              <p className="--bottom-detail">
                <span className="--title">Client</span>
                <span>Temokin Development Sdn. Bhd.</span>
              </p>
              <p className="--bottom-detail">
                <span className="--title">Value</span>
                <span>RM100 million</span>
              </p>
              <p className="--bottom-detail">
                <span className="--title">Period</span>
                <span>Feb 2018 to ongoing</span>
              </p>
              <NavLink
                className="--btn-view-project"
                to="/property-development/mahligai-at-nusa-damai-two-storey-and-three-storey-housing-johor"
              >
                View Project
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                require("../../../assets/images/propertydevelopment/PropertyDev_IMG-Tropicana.png")
                  .default
              }
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="--title">Tropicana Miyu, Petaling Jaya</h3>
              <p className="--desc">
                Envisioning itself as being a perfect home <br />
                for individuals and their loved one, <br />
                Tropicana Miyu which means A Place For <br />
                Me and You, clearly blends modern <br />
                conveniences with traditionalism so that <br />
                the older and younger generation can <br />
                pursue their lifestyle choices at the very <br />
                best.
              </p>
              <div className="--hr" />
              <p className="--bottom-detail">
                <span className="--title">Client</span>
                <span>Tropicana Temokin Sdn Bhd</span>
              </p>
              <p className="--bottom-detail">
                <span className="--title">Value</span>
                <span>RM261 million</span>
              </p>
              <p className="--bottom-detail">
                <span className="--title">Period</span>
                <span>Sept 2020 to on going</span>
              </p>
              <NavLink
                className="--btn-view-project"
                to="/property-development/tropicana-miyu-petaling-jaya"
              >
                View Project
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                require("../../../assets/images/propertydevelopment/PropertyDev_IMG-NationalCamp.png")
                  .default
              }
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="--title">
                National Camp And Services <br />
                (Northern Regions)
              </h3>
              <p className="--desc">
                The National Service (NS) Camp <br />
                (Northern Region) was constructed <br />
                successfully on a very tight schedule and <br />
                incorporated homely design elements for <br />
                new trainees to feel comfortable in a lush <br />
                forest environment.
              </p>
              <div className="--hr" />
              <p className="--bottom-detail">
                <span className="--title">Client</span>
                <span>Ministry of Defence, Malaysia</span>
              </p>
              <p className="--bottom-detail">
                <span className="--title">Value</span>
                <span>RM30 million</span>
              </p>
              <p className="--bottom-detail">
                <span className="--title">Period</span>
                <span>Sept 2004 to Dec 2004</span>
              </p>
              <NavLink
                className="--btn-view-project"
                to="/property-development/national-camp-and-services-northern-regions"
              >
                View Project
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
      {isMobile && (
        <div className="--carousel-container">
          <div className="--btn-carousel-container">
            <Button
              variant="light"
              onClick={onPrevClick}
              className={
                isRightActive
                  ? "carousel-control-prev"
                  : "carousel-control-prev"
              }
            />
            <Button
              variant="light"
              onClick={onNextClick}
              className={
                isLeftActive ? "carousel-control-next" : "carousel-control-next"
              }
            />
          </div>

          <Carousel fade className="--carousel-mb" ref={ref} loop={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  require("../../../assets/images/propertydevelopment/PropertyDev_IMG-Istana.png")
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">Istana Negara</h3>
                <p className="--desc">
                  The new Istana Negara or National Palace <br />
                  was built to replace the old palace which <br />
                  has been used since 1957. Upon its <br />
                  completion, then-Works Minister Shaziman <br />
                  Abu Mansor remarked that the new Istana <br />
                  Negara was "Kuala Lumpur's most amazing <br />
                  architectural achievement, surpassing even <br />
                  the Twin Towers"
                </p>
                <div className="--hr" />
                <p className="--bottom-detail">
                  <span className="--title">Client</span>
                  <span>Public Works Department, Malaysia (JKR)</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Value</span>
                  <span>RM997 million</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Period</span>
                  <span>Nov 2007 to Jun 2011</span>
                </p>
                <NavLink
                  className="--btn-view-project"
                  to="/property-development/istana-negara"
                >
                  View Project
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  require("../../../assets/images/propertydevelopment/PropertyDev_IMG-Mahligai.png")
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">
                  Mahligai At Nusa Damai, Two Storey <br />
                  And Three Storey Housing, Johor
                </h3>
                <p className="--desc">
                  Mahligai at Nusa Damai consists of 163 <br />
                  landed houses in the already-mature <br />
                  neighborhood of Masai in Johor.
                </p>
                <div className="--hr" />
                <p className="--bottom-detail">
                  <span className="--title">Client</span>
                  <span>Temokin Development Sdn. Bhd.</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Value</span>
                  <span>RM100 million</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Period</span>
                  <span>Feb 2018 to ongoing</span>
                </p>
                <NavLink
                  className="--btn-view-project"
                  to="/property-development/mahligai-at-nusa-damai-two-storey-and-three-storey-housing-johor"
                >
                  View Project
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  require("../../../assets/images/propertydevelopment/PropertyDev_IMG-Tropicana.png")
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">Tropicana Miyu, Petaling Jaya</h3>
                <p className="--desc">
                  Envisioning itself as being a perfect home <br />
                  for individuals and their loved one, <br />
                  Tropicana Miyu which means A Place For <br />
                  Me and You, clearly blends modern <br />
                  conveniences with traditionalism so that <br />
                  the older and younger generation can <br />
                  pursue their lifestyle choices at the very <br />
                  best.
                </p>
                <div className="--hr" />
                <p className="--bottom-detail">
                  <span className="--title">Client</span>
                  <span>Tropicana Temokin Sdn Bhd</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Value</span>
                  <span>RM261 million</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Period</span>
                  <span>Sept 2020 to on going</span>
                </p>
                <NavLink
                  className="--btn-view-project"
                  to="/property-development/tropicana-miyu-petaling-jaya"
                >
                  View Project
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  require("../../../assets/images/propertydevelopment/PropertyDev_IMG-NationalCamp.png")
                    .default
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="--title">
                  National Camp And Services <br />
                  (Northern Regions)
                </h3>
                <p className="--desc">
                  The National Service (NS) Camp <br />
                  (Northern Region) was constructed <br />
                  successfully on a very tight schedule and <br />
                  incorporated homely design elements for <br />
                  new trainees to feel comfortable in a lush <br />
                  forest environment.
                </p>
                <div className="--hr" />
                <p className="--bottom-detail">
                  <span className="--title">Client</span>
                  <span>Ministry of Defence, Malaysia</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Value</span>
                  <span>RM30 million</span>
                </p>
                <p className="--bottom-detail">
                  <span className="--title">Period</span>
                  <span>Sept 2004 to Dec 2004</span>
                </p>
                <NavLink
                  className="--btn-view-project"
                  to="/property-development/national-camp-and-services-northern-regions"
                >
                  View Project
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      )}

      {/* <div className="header-shape" />
      <div className="header-shape1" /> */}
      <Footer />
    </div>
  );
}
