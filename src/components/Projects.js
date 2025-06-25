import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/E-Commerce.png";
import projImg2 from "../assets/img/shape-edit.png";
import projImg3 from "../assets/img/Quiz-app.png";
import projImg4 from "../assets/img/Todo-list.png";
import projImg5 from "../assets/img/travel.png";
import projImg6 from "../assets/img/Lm-system.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce website",
      description: "features : signup,login,add,buynow",
      imgUrl: projImg1,
    },
    {
      title: "Library Management System ",
      description: "Features : register,login add,delete,return",
      imgUrl: projImg6,
    },
    {
      title: "TO-DO List",
      description: "Features: add daily tasks , delete if completed",
      imgUrl: projImg4,
    },
    {
      title: "Quiz app",
      description: "Features: front-end design of quiz app ",
      imgUrl: projImg3,
    },
    {
      title: "Shape detection",
      description: "takes input image , draw image on canvas, edit and download the image",
      imgUrl: projImg2,
    },
    {
      title: "Travel web",
      description: "front-end website for travelling and booking",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Worked on multiple real-time projects involving web development, image processing, and database integration.

Gained hands-on experience with .NET, C#, JavaScript, SQL Server, HTML, CSS, and Fabric.js.

Developed both frontend and backend modules, focusing on clean UI design and robust functionality.

Implemented features like shape detection, form handling, authentication, and CRUD operations.

Strong understanding of software development lifecycle and building scalable solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
