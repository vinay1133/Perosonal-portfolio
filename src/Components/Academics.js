import { ProjectCard } from "./ProjectCard";
import acadImg1 from "../assets/img/GATE.jpg";
import acadImg2 from "../assets/img/TE.png";
import acadImg3 from "../assets/img/SE.png";
import acadImg4 from "../assets/img/FE.png";
import acadImg5 from "../assets/img/JEE.png";
import acadImg6 from "../assets/img/CET.jpg";
import acadImg7 from "../assets/img/HSC.jpg";
import acadImg8 from "../assets/img/SSC.jpg";
import "animate.css";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const Academics = () => {
  const projects = [
    {
      title: "Gate CSE 2023",
      description: "Marks: 34.33 & AIR: 8936",
      imgUrl: acadImg1,
    },
    {
      title: "3rd Year CGPA",
      description: "Aggregate CGPA: 9.75",
      imgUrl: acadImg2,
    },
    {
      title: "2nd Year CGPA",
      description: "Aggregate CGPA: 9.81",
      imgUrl: acadImg3,
    },
    {
      title: "1st Year CGPA",
      description: "Aggregate CGPA: 9.80",
      imgUrl: acadImg4,
    },
    {
      title: "JEE Mains",
      description: "Percentile: 81.5",
      imgUrl: acadImg5,
    },
    {
      title: "MHT-CET",
      description: "Percentile: 98.45",
      imgUrl: acadImg6,
    },
    {
      title: "Higher Secondary",
      description: "Percentage: 85.23",
      imgUrl: acadImg7,
    },
    {
      title: "Secondary",
      description: "Percentage: 89.40",
      imgUrl: acadImg8,
    },
  ];
  return (
    <section className="project" id="academics">
      <Container id="academics">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__slideInUp" : ""
              }
            >
              <h2>Academics</h2>
              <p>
                Here are some of my academics records which I have achieved so
                far in my career
              </p>
            </div>
          )}
        </TrackVisibility>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Tab.Content>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Tab.Content>
        </Tab.Container>
        {/* <Table
          responsive
          striped
          hover
          size="sm"
          variant="dark"
          style={{ width: "100%", margin: "auto" }}
        >
          <thead className="table-head">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Qualification</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            <tr className="table-row">
              <td className="table-data">Gate CSE 2023</td>
              <td className="table-data">February 2023</td>
              <td className="table-data">
                Marks: 34.33 <br /> AIR: 8936
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-data">3rd Year CGPA</td>
              <td className="table-data">July'22 - May'23</td>
              <td className="table-data">9.75</td>
            </tr>
            <tr className="table-row">
              <td className="table-data">2nd Year CGPA</td>
              <td className="table-data">Aug'21 - May'22</td>
              <td className="table-data">9.81</td>
            </tr>
            <tr className="table-row">
              <td className="table-data">1st Year CGPA</td>
              <td className="table-data">Aug'20 - May'21</td>
              <td className="table-data">9.80</td>
            </tr>
            <tr className="table-row">
              <td className="table-data">JEE Mains</td>
              <td className="table-data">January 2020</td>
              <td className="table-data">81.5%ile</td>
            </tr>
            <tr className="table-row">
              <td className="table-data">MHT-CET</td>
              <td className="table-data">October 2020</td>
              <td className="table-data">98.45%ile</td>
            </tr>
            <tr className="table-row">
              <td className="table-data">Higher Secondary</td>
              <td className="table-data">March 2020</td>
              <td className="table-data">85.23%</td>
            </tr>
            <tr className="table-row">
              <td className="table-data">Secondary</td>
              <td className="table-data">March 2018</td>
              <td className="table-data">89.40%</td>
            </tr>
          </tbody>
        </Table> */}
      </Container>
    </section>
  );
};
