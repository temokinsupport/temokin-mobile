import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/styles/footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FooterMenu() {
  return (
    <footer className="--footer" data-scroll-section>
      {/* <Container fluid className="--max">
        <Row>
          <Col md={8}>
            <div className="--left-container">
              <NavLink exact to="/" className="--logo">
                <img
                  src={require("../../assets/Logo.png").default}
                  alt="logo"
                />
              </NavLink>
              <div className="--address">
                <div className="w-100 text-end">
                  <img
                    alt=""
                    src="/fb-icon.png"
                    width="30"
                    height="30"
                    className="me-3 d-inline-block align-top"
                  />{" "}
                  <img
                    alt=""
                    src="/insta-icon.png"
                    width="30"
                    height="30"
                    className="me-md-5 me-sm-0 d-inline-block align-top"
                  />{" "}
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="--right-container">
              <p>© Temokin 2018</p>
              <sub>
                <a
                  href="/land-acquisition"
                  class="text-decoration-none colorPrimary"
                >
                  Land Acquisition
                </a>
                &nbsp; | &nbsp;
                <a
                  href="/terms-of-service"
                  class="text-decoration-none colorPrimary"
                >
                  Terms of Service
                </a>
                &nbsp; | &nbsp; Privacy Policy{" "}
              </sub>
            </div>
          </Col>
        </Row>
      </Container> */}
      <Container fluid className="--max">
        <Row className="align-items-center">
          <Col>
            <div className="--left-container">
              <NavLink exact to="/" className="--logo">
                <img
                  data-scroll
                  src={
                    require("../../assets/images/home/Group 833.png").default
                  }
                  alt="logo"
                />
              </NavLink>
            </div>
          </Col>
          <Col className="">
            <div className="--address container">
              <div class="w-100 text-end d-flex justify-content-center">
                <a
                  href="https://www.facebook.com/TemokinDev/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-med"
                >
                  <img
                    alt=""
                    src={
                      require("../../assets/images/footer/Button-FB.svg")
                        .default
                    }
                    width="30"
                    height="30"
                    className="me-3 d-inline-block align-top"
                  />
                </a>
                <a
                  href="https://www.instagram.com/temokindevelopment/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-med"
                >
                  <img
                    alt=""
                    src={
                      require("../../assets/images/footer/Button-IG.svg")
                        .default
                    }
                    width="30"
                    height="30"
                    className="me-md-5 md-sm-0 d-inline-block align-top"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="--right-container">
              <p>© Temokin 2018</p>
              <sub>
                <NavLink
                  exact
                  to="/land-acquisition"
                  className="text-decoration-none colorPrimary"
                >
                  Land Acquisition
                </NavLink>
                &nbsp; | &nbsp;
                <NavLink
                  exact
                  to="/terms-of-service"
                  className="text-decoration-none colorPrimary"
                >
                  Terms of Service
                </NavLink>
                &nbsp; | &nbsp;
                <NavLink
                  exact
                  to="/privacy-policy"
                  className="text-decoration-none colorPrimary"
                >
                  Privacy Policy
                </NavLink>
              </sub>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
