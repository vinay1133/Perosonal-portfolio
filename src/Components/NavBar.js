import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/VHB.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#academics"
              className={
                activeLink === "academics"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("academics")}
            >
              Academics
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/vinay-bhojwani-97a169216"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <i
                  className="fab fa-linkedin-in"
                  style={{ color: "white" }}
                ></i>
              </a>
              <a
                href="https://www.twitter.com/_VinayBhojwani_"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <i className="fab fa-twitter" style={{ color: "white" }}></i>
              </a>
              <a
                href="https://github.com/vinay1133"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <i className="fab fa-github" style={{ color: "white" }}></i>
              </a>
              <a
                href="https://instagram.com/_vinaybhojwani_?igshid=YmMyMTA2M2Y="
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <i className="fab fa-instagram" style={{ color: "white" }}></i>
              </a>
            </div>
            <Nav.Link
              href="#connect"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("connect")}
            >
              <button className="vvd">Let's Connect</button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
