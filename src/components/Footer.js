import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isTablet = useMediaQuery({ query: "(min-width: 760px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <footer className="--footer">
      <Container fluid className="--max">
        <Row className="align-items-center">
          <Col>
            <div className="--left-container">
              <NavLink exact to="/" className="--logo">
                <img
                  data-scroll
                  src={require("../assets/images/home/Group 833.png").default}
                  alt="logo"
                />
              </NavLink>
            </div>
          </Col>
          <Col className="">
            <div className="--address container" style={{'margin-left': '4%'}}>
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
                      require("../assets/images/footer/Button-FB.svg").default
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
                      require("../assets/images/footer/Button-IG.svg").default
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
              <p>© Temokin 2023</p>
              <div className="links d-flex justify-content-between">
                <NavLink
                  exact
                  to="/land-acquisition"
                  className="text-decoration-none colorPrimary"
                >
                  Collaboration & Land Opportunity
                </NavLink>
                &nbsp; | &nbsp;
                <NavLink
                  exact
                  to="/terms-of-service"
                  className="text-decoration-none colorPrimary --ml-5"
                >
                  Terms of Service
                </NavLink>
                &nbsp; | &nbsp;
                <NavLink
                  exact
                  to="/privacy-policy"
                  className="text-decoration-none colorPrimary --ml-5"
                >
                  Privacy Policy
                </NavLink>
              </div>
              {/*               <sub>
              </sub> */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
