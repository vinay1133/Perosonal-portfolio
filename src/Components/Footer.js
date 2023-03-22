import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="logo-footer">
              <img src={logo} alt="Logo" />
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            {/* <p>Copyright 2022. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
