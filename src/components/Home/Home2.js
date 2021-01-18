import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started programming in <span className="purple">2015</span> with <span className="purple">C++</span> and since 
              then I have grown a healthy addiction to learning new skills.
              <br />
              <br />I am most experienced in Object-oriented programming principles in languages such as
              <i>
                <b className="purple"> C++, Python and Javascript,</b> to name a few. In addition I have proficiency in <b className="purple">MySQL</b> and <b className="purple">database administration.</b>
              </i>
              
              <br />
              <br />
              I have also studied web development with knowledge of modern 
              front-end frameworks and libraries such as
              <i>
                <b className="purple"> Bootstrap</b> and <b className="purple">React.js, </b>
              </i>
              and back-end technologies like
              <i>
                <b className="purple"> Node.js</b> and <b className="purple">Express.</b>
              </i>
              <br />
              <br />
              My current interests include&nbsp;
              <i>
                <b className="purple">
                  Data Science, Automation, and Machine Learning.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME!</h1>
            <p>
              You can find me <span className="purple">here </span>
            </p>
            <ul className="home-about-social-links">            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/AlejandroMandala/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Sandro927"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
