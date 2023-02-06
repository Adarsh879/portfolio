import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="orange">Adarsh A S </span>
            from <span className="orange"> Mangalore, India.</span>
            <br />I am a currently pursuing B.E in Computer Science in NMAMIT,
            Nitte.
            <br />
            <br />I have Experience Woking with{" "}
            <span className="orange">Flutter</span>,{" "}
            <span className="orange">React</span>,{" "}
            <span className="orange">Node.js</span>,{" "}
            <span className="orange">Next.js</span>, <br />I have hands-on
            experience with <span className="orange">MongoDB</span> and hold a
            MongoDB Developer certification
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
