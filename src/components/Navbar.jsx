import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import { Navbar, Container, Nav } from "react-bootstrap";
import { repos, about, skills } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  const logoMendel = require("../assets/img/mendel3.png");
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          className="brand"
          href={process.env.PUBLIC_URL + "/#home"}
        >
          <img src={logoMendel} alt="logo-mendel" style={{ width: "8rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* {
            <Nav.Link className="nav-link lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
              </Nav.Link>
            } */}
            {about.show && (
              <Nav.Link
                className="nav-link lead mx-2"
                href={process.env.PUBLIC_URL + "/#aboutme"}
                style={!isTop ? { color: "black" } : { color: "white" }}
              >
                About
              </Nav.Link>
            )}
            <Nav.Link
              className="nav-link lead mx-2"
              href={process.env.PUBLIC_URL + "/#experience"}
              style={!isTop ? { color: "black" } : { color: "white" }}
            >
              Experience
            </Nav.Link>
            {repos.show && (
              <Nav.Link
                className="nav-link lead mx-2"
                href={process.env.PUBLIC_URL + "/#projects"}
                style={!isTop ? { color: "black" } : { color: "white" }}
              >
                Projects
              </Nav.Link>
            )}
            {skills.show && (
              <Nav.Link
                className="nav-link lead mx-2"
                href={process.env.PUBLIC_URL + "/#skills"}
                style={!isTop ? { color: "black" } : { color: "white" }}
              >
                Skills
              </Nav.Link>
            )}
            <Nav.Link
                className="nav-link lead mx-2"
                href={process.env.PUBLIC_URL + "/#contactme"}
                style={!isTop ? { color: "black" } : { color: "white" }}
              >
                Contact
              </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/drive/folders/10-NTkx0Pvp41J7QVZ3KJwm43JawEEYLQ?usp=sharing"
              className="nav-link lead mx-2"
              target="_blank"
              rel="noreferrer noopener"
              style={!isTop ? { color: "black" } : { color: "white" }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default Navigation;
