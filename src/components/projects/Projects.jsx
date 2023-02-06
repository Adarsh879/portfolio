import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import NammaTulunadu from "../../assets/projects/nammaTulunadu.png";
import PucInfo from "../../assets/projects/pucInfo.png";
import InfoHub from "../../assets/projects/infoHub.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PucInfo}
              isPlaystoreApp={true}
              title="Puc Info"
              description="Pollution Certificate Management App that provides pollution certificate information for vehicles. The app is built using Flutter, Node.js, MongoDB, and Firebase and has the ability to display certificate details offline. It has been published on the Google Play Store."
              link="https://play.google.com/store/apps/details?id=com.aitan.puc_status"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NammaTulunadu}
              isPlaystoreApp={true}
              title="Namma TuluNadu"
              description="A Local News App for area around Mangalore. The app collects data from multiple news websites on a regular basis using the Python Scrapy framework and stores the information in MongoDB. The backend is built using Node.js, and the frontend is built using Flutter. The data collection process is automated and hosted on a scheduling platform, Zyte, to ensure the most up-to-date news is displayed."
              link="https://play.google.com/store/apps/details?id=com.aitan.namma_tulunadu."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InfoHub}
              isPlaystoreApp={false}
              title="Info Hub"
              description="Q&A website that uses React.js for the frontend and Node.js for the backend. The website allows users to ask and answer questions, and it utilizes MongoDB as the database. The project provides a platform for users to find answers to their questions in a user-friendly interface."
              link="https://github.com/Adarsh879/info-hub"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
