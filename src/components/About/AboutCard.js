import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Alejandro Mandala </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />I am a junior programmer who recently graduated from <span className="purple">Seneca College</span> with a Diploma in <span className="purple">Computer Programming.</span>
            <br />
            <br />
            Apart from coding, here are some of the other activities that I love!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Cooking
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Gaming
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Traveling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "The only true wisdom is in knowing you know nothing"{" "}
          </p>
          <footer className="blockquote-footer">Socrates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
