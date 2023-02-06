import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <span className="orange">{props.title}</span>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          {props.isPlaystoreApp ? <FaGooglePlay /> : <BsGithub />} &nbsp;
          {props.isPlaystoreApp ? "PlayStore" : "GitHub"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
