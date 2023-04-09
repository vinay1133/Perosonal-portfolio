import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Alumni.png";
import projImg2 from "../assets/img/Society.png";
import projImg3 from "../assets/img/Rubik.png";
import projImg4 from "../assets/img/ByteNBA.jpg";
import projImg5 from "../assets/img/UGCChecked.jpg";
import projImg6 from "../assets/img/RythmicChillz.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  //constant to hold info abt projects: title, description, image url
  const projects = [
    {
      title: "Alumni Network",
      description:
        "An app which helps the newly admitted students to get in touch with the pass-outs",
      imgUrl: projImg1,
    },
    {
      title: "My Society",
      description:
        "A user friendly interface for a society to organize various aspects of the data, accessible to both, the management and residents of the society",
      imgUrl: projImg2,
    },
    {
      title: "RubikCuber",
      description: "An app to solve a scrambled cube accepted from user",
      imgUrl: projImg3,
    },
    {
      title: "ByteNBA",
      description:
        "An application for faculty members to manage college's NBA records",
      imgUrl: projImg4,
    },
    {
      title: "UGC-Checked",
      description:
        "A web-app which maintains and reflects the list of genuine/fake universities across India for all stakeholders",
      imgUrl: projImg5,
    },
    {
      title: "RythmicChillz",
      description: "An app to solve a scrambled cube accepted from user",
      imgUrl: projImg6,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2 id="projects">Projects</h2>
                  <p>
                    Here are some of my projects created through various
                    tech-stacks either individually or in a team
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab3</Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-img-right" src={colorSharp2}></img> */}
    </section>
  );
};
