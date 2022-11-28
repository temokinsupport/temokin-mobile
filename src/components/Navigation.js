import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Collapse } from "react-bootstrap";
import "../assets/styles/navigation.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  // ABOUT TEMOKIN DROPDOWN LINKS
  const aboutLinkdirects = [
    {
      id: 0,
      linkname: "About Us",
      linkpath: "/about-temokin",
    },
    {
      id: 1,
      linkname: "Team Leaders",
      linkpath: "/team-leaders",
    },
    {
      id: 2,
      linkname: "Awards & Achievements",
      linkpath: "/awards-and-achievements",
    },
    {
      id: 3,
      linkname: "Licenses & Registrations",
      linkpath: "/licenses-and-registrations",
    },
    {
      id: 4,
      linkname: "Other Business Ventures",
      linkpath: "/other-business-ventures",
    },
    {
      id: 5,
      linkname: "Land Acquisition",
      linkpath: "/land-acquisition",
    },
  ];
  const contructionLinkdirects = [
    {
      id: 0,
      linkname: "Building",
      linkpath: "/building",
    },
    {
      id: 1,
      linkname: "Civil & Infrastructure",
      linkpath: "/civil-infrastructure",
    },
  ];

  // DROPDOWN HOVER
  const [hovered, setHovered] = useState({
    about: false,
    construction: false,
  });
  const navDropdownRef = useRef();

  useEffect(() => {
    console.log(navDropdownRef.current);

    navDropdownRef.current.style.height = window
      .getComputedStyle(navDropdownRef.current)
      .getPropertyValue("height");
  }, []);

  // MOBILE VIEW 992 MIN WIDTH
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 992;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const [open, setOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openConstruction, setOpenConstruction] = useState(false);

  const setNavLinkHoverState = (link, isActive) => {
    setHovered((prevState) => ({
      ...prevState,
      [link]: isActive,
    }));

    const container = document.querySelector(`.--dropdown__${link}`);
    const dropdownList = document.querySelector(`.--dropdown__${link}`)
      .childNodes[0];

    container.style.height = isActive
      ? window.getComputedStyle(dropdownList).getPropertyValue("height")
      : 0;
  };

  return (
    <Navbar expand="lg" className="--navigation">
      <NavLink data-scroll exact to="/" className="--logo">
        <img
          className="web-logo"
          src={require("../assets/images/home/Group 833.png").default}
          alt="logo"
        />
        <img
          className="mobile-logo"
          src={require("../assets/images/mobile/home/Group 838@3x.png").default}
          alt="logo"
        />
      </NavLink>

      {/* MOBILE VIEW LINKS */}
      <Navbar
        onClick={() => setOpen(!open)}
        aria-controls="basic-navbar-nav"
        aria-expanded={open}
        className={` ${isMobile ? "" : "hide"}  ${
          open ? "navbar-toggler-close" : "navbar-toggler"
        } `}
        data-scroll
      />

      <Collapse
        in={open}
        data-scroll
        className={`navbar-nav navbar-collapse ${isMobile ? "" : "hide"}`}
      >
        <Nav data-scroll>
          <li>
            <NavLink
              exact
              className="--mobile-nav-text"
              to="/"
              onClick={() => setOpen(!open)}
              aria-controls="basic-navbar-nav"
              aria-expanded={open}
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => setOpenAbout(!openAbout)} className="w-100 ">
            <p
              onClick={() => setOpenAbout(!openAbout)}
              className="static_nav w-100 "
            >
              ABOUT TEMOKIN
            </p>
            <span
              onClick={() => setOpenAbout(!openAbout)}
              className={`${openAbout ? "openNav" : "closeNav"}`}
            ></span>
          </li>
          <Collapse
            in={openAbout}
            data-scroll
            className={`navbar-collapse w-100  ${isMobile ? "" : "hide"}`}
          >
            <div>
              <li>
                <NavLink
                  exact
                  to="/about-temokin"
                  onClick={() => setOpenAbout(!open)}
                  aria-controls="basic-navbar-nav"
                  aria-expanded={open}
                  className="dynamic_nav --mobile-nav-text"
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  to="/team-leaders"
                  onClick={() => setOpen(!open)}
                  aria-controls="basic-navbar-nav"
                  aria-expanded={open}
                  className="dynamic_nav --mobile-nav-text"
                >
                  Team Leaders
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/awards-and-achievements"
                  onClick={() => setOpen(!open)}
                  aria-controls="basic-navbar-nav"
                  aria-expanded={open}
                  className="dynamic_nav --mobile-nav-text"
                >
                  Awards & Achievements
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/licenses-and-registrations"
                  onClick={() => setOpen(!open)}
                  aria-controls="basic-navbar-nav"
                  aria-expanded={open}
                  className="dynamic_nav --mobile-nav-text"
                >
                  Licenses & Registrations
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/other-business-ventures"
                  onClick={() => setOpen(!open)}
                  aria-controls="basic-navbar-nav"
                  aria-expanded={open}
                  className="dynamic_nav --mobile-nav-text"
                >
                  Other Business Ventures
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/land-acquisition"
                  onClick={() => setOpen(!open)}
                  aria-controls="basic-navbar-nav"
                  aria-expanded={open}
                  className="dynamic_nav --mobile-nav-text"
                >
                  Land Acquisition
                </NavLink>
              </li>
            </div>
          </Collapse>
          <li onClick={() => setOpenConstruction(!openConstruction)}>
            <p
              onClick={() => setOpenConstruction(!openConstruction)}
              className="static_nav w-100 "
            >
              CONSTRUCTION
            </p>
            <span
              onClick={() => setOpenConstruction(!openConstruction)}
              className={`${openConstruction ? "openNav" : "closeNav"}`}
            ></span>
          </li>
          <Collapse
            in={openConstruction}
            data-scroll
            className={`navbar-collapse w-100  ${isMobile ? "" : "hide"}`}
          >
            <div>
              <li>
                <NavLink
                  exact
                  to="/building"
                  onClick={() => setOpen(!open)}
                  aria-controls="basic-navbar-nav"
                  aria-expanded={open}
                  className="dynamic_nav --mobile-nav-text"
                >
                  Building
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/civil-engineering"
                  onClick={() => setOpen(!open)}
                  aria-controls="basic-navbar-nav"
                  aria-expanded={open}
                  className="dynamic_nav --mobile-nav-text"
                >
                  Civil Engineering
                </NavLink>
              </li>
            </div>
          </Collapse>
          <li>
            <NavLink
              exact
              className="--mobile-nav-text"
              to="/property-development"
              onClick={() => setOpen(!open)}
              aria-controls="basic-navbar-nav"
              aria-expanded={open}
            >
              Property Development
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="--mobile-nav-text"
              to="/contact-us"
              onClick={() => setOpen(!open)}
              aria-controls="basic-navbar-nav"
              aria-expanded={open}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="--mobile-nav-text"
              to="/career"
              onClick={() => setOpen(!open)}
              aria-controls="basic-navbar-nav"
              aria-expanded={open}
            >
              Career
            </NavLink>
          </li>
        </Nav>
      </Collapse>

      {/* WEB VIEW LINKS */}
      <Nav className="ml-auto --web">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setNavLinkHoverState("about", true)}
          onMouseLeave={() => setNavLinkHoverState("about", false)}
        >
          <Button>About Temokin</Button>
          <div
            className={`--dropdown-container --dropdown__about ${
              hovered.about ? "--dropdown--active" : ""
            }`}
          >
            <ul ref={navDropdownRef} className="--dropdown">
              {aboutLinkdirects.map((linkdir) => (
                <li key={linkdir.id}>
                  <NavLink exact to={linkdir.linkpath}>
                    {linkdir.linkname}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li
          onMouseEnter={() => setNavLinkHoverState("construction", true)}
          onMouseLeave={() => setNavLinkHoverState("construction", false)}
        >
          <Button>Construction</Button>
          <div
            className={`--dropdown-container --dropdown__construction ${
              hovered.construction ? "--dropdown--active" : ""
            }`}
          >
            <ul className="--dropdown">
              {contructionLinkdirects.map((linkdir) => (
                <li key={linkdir.id}>
                  <NavLink exact to={linkdir.linkpath}>
                    {linkdir.linkname}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <NavLink exact to="/property-development">
            Property Development
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact-us">
            Contact Us
          </NavLink>
        </li>
        {/* TODO: create page */}
        <li>
          <NavLink exact to="/career">
            Career
          </NavLink>
        </li>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
